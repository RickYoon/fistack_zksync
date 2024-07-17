"use client";

import { useState } from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address, AddressInput, Balance } from "~~/components/scaffold-eth";
import {
  useDeployedContractInfo,
  useScaffoldReadContract,
  useScaffoldWriteContract,
} from "~~/hooks/scaffold-eth";
import { Interface, ethers } from 'ethers';
import {erc20Abi} from "viem";
import styled, { keyframes } from 'styled-components';

let iconUrl = {
  "TON" : "https://miro.medium.com/v2/resize:fill:96:96/1*SteCcfsAPR_ZjO-M_tKhJg.png",
  "USDT" : "https://docs.syncswap.xyz/~gitbook/image?url=https%3A%2F%2F2866248431-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252Fa1srPi3SG0RLa68aU4tX%252Ficon%252Fr9gnUAaUG96bxSLZ02SC%252Flogo-192.png%3Falt%3Dmedia%26token%3Db68cb07a-5d86-40c7-88e0-1a9fcc52ede6&width=32&dpr=1&quality=100&sign=4d7339c&sv=1",
  "ZEROLEND": "https://app.zerolend.xyz/icons/tokens/zero.svg",
  "ROOP": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgxXfMsSKoQIrj603b9CIzyi-5Xxn4KjqQQ&s"
}

const Home: NextPage = () => {

  const [depositmodal, setDepositmodal]= useState(false)
  const [LeverageModal, setLeverageModal]= useState(false)
  
  const { address } = useAccount();

  const { data: name } = useScaffoldReadContract({
    contractName: "L2BaseToken",
    functionName: "name",
  });

  console.log("name",name)

  const { data: multicallChainId } = useScaffoldReadContract({
    contractName: "Multicall",
    functionName: "getChainId"
  });

  console.log("multicallChainId",multicallChainId?.toString())

  const { data: connectedAddressCounter, isLoading: isConnectedAddressCounterLoading } = useScaffoldReadContract({
    contractName: "L2BaseToken",
    functionName: "balanceOf",
    args: ["0x358De5535f6B85F18afc2908aEB4f7EEf6376aE0"],
  });

  const { data: allowanceMulticall, isLoading: isAllowanceMulticall } = useScaffoldReadContract({
    contractName: "L2BaseToken",
    functionName: "allowance",
    args: ["0x358De5535f6B85F18afc2908aEB4f7EEf6376aE0", "0xF9cda624FBC7e059355ce98a31693d299FACd963"],
  });


  console.log("allowanceMulticall",allowanceMulticall?.toString())


  // 함수에 hooks 가 들어가면 안된다!!
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("L2BaseToken");

  async function sendToken(){
    writeYourContractAsync({
      functionName: "transfer",
      args: ["0x1e572678738674481dE656233E8456BBc4b3b0aB",BigInt(1e+18)]
    });  
  }

  // multicall 구현 - 여러곳에 보내기
  const { writeContractAsync: writeMultiContractAsync } = useScaffoldWriteContract("Multicall");

  async function multicallButton(){

      writeMultiContractAsync({
        functionName: "aggregate3",
        args: [
          [
            {"target":"0xEE15464bBc574f6f64E84d26b7C8D42b1C8cC8e8",
            "callData":"0x23b872dd000000000000000000000000358de5535f6b85f18afc2908aeb4f7eef6376ae00000000000000000000000001e572678738674481de656233e8456bbc4b3b0ab00000000000000000000000000000000000000000000003635c9adc5dea00000",
            "allowFailure":false},
            {"target":"0xEE15464bBc574f6f64E84d26b7C8D42b1C8cC8e8",
            "callData":"0xa9059cbb0000000000000000000000001e572678738674481de656233e8456bbc4b3b0ab0000000000000000000000000000000000000000000000000000000000000000",
            "allowFailure":true},
            {"target":"0xEE15464bBc574f6f64E84d26b7C8D42b1C8cC8e8","callData":"0xa9059cbb0000000000000000000000001e572678738674481de656233e8456bbc4b3b0ab0000000000000000000000000000000000000000000000000000000000000000","allowFailure":true}]]
      });
  }

  async function approveAndSend(){
    
    const erc20Interface = new Interface(erc20Abi);
    const callData1 = erc20Interface.encodeFunctionData('transferFrom', [address, "0xF9cda624FBC7e059355ce98a31693d299FACd963", ethers.parseUnits("10", 18)]);
    console.log("callData1",callData1)

    writeMultiContractAsync({
      functionName: "aggregate3",
      args: [
        [
          {"target":"0xEE15464bBc574f6f64E84d26b7C8D42b1C8cC8e8",
          "callData":"0x095ea7b3000000000000000000000000f9cda624fbc7e059355ce98a31693d299facd96300000000000000000000000000000000000000000000003635c9adc5dea00000",
          "allowFailure":false},
          {"target":"0xEE15464bBc574f6f64E84d26b7C8D42b1C8cC8e8",
           "callData": callData1,
           "allowFailure":false
          }
        ]
      ]
    });
}



  return <>
  
  <>
      <div>
        <div className="mt-20">   
          <OverBox>
              {/* <div style={{paddingTop:"30px"}}/> */}
              <SubTemplateBlockVertical>                

                <Wrappertitle>
                    <Title>Invest</Title>                
                    <div>Execute the DeFi strategies with one-click</div>                
                </Wrappertitle>

                <div className="border border-gray-100 rounded-lg pb-4 bg-white mt-10 cursor-pointer hover:border-blue-300">
                <div className="flex justify-evenly" onClick={() => setDepositmodal(true)}>
                  <div className="flex pt-5">
                    <div className="relative">
                      <div className="relative mr-1.5 rounded-full bg-white">
                        <div className="w-10 h-10 rounded-full" style={{ borderColor: 'rgb(204, 204, 204)' }}>
                        <img src={iconUrl.USDT} alt="-" style={{width:"60px", borderRadius:"50%"}}/>
                        </div>
                      </div>
                    </div>
                    <div className="relative mr-1.5 rounded-full bg-white">
                      <div className="w-10 h-10 rounded-full" style={{ borderColor: 'rgb(204, 204, 204)' }}>
                      <img src={iconUrl.TON} alt="-" style={{width:"60px", borderRadius:"50%"}}/>
                      </div>
                    </div>
                  </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <p className="text-base font-bold text-neutral-800">
                    Delta-Neutral
                    </p>
                  </div>
                  <div className="flex text-sm text-black">
                    SyncSwap + HoldStation
                  </div>
                </div>  
              <div className="text-base text-neutral-800  pt-5">
                22%
              </div>

            </div>                  

        </div>

              <div className="border border-gray-100 rounded-lg pb-4 bg-white mt-10 cursor-pointer hover:border-blue-300">
                <div className="flex justify-evenly" onClick={() => setLeverageModal(true)}>
                  <div className="flex pt-5">
                    <div className="relative">
                      <div className="relative mr-1.5 rounded-full bg-white">
                        <div className="w-10 h-10 rounded-full" style={{ borderColor: 'rgb(204, 204, 204)' }}>
                        <img src={iconUrl.ZEROLEND} alt="-" style={{width:"60px", borderRadius:"50%"}}/>
                        </div>
                      </div>
                    </div>
                    <div className="relative mr-1.5 rounded-full bg-white">
                      <div className="w-10 h-10 rounded-full" style={{ borderColor: 'rgb(204, 204, 204)' }}>
                      <img src={iconUrl.USDT} alt="-" style={{width:"60px", borderRadius:"50%"}}/>
                      </div>
                    </div>
                  </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <p className="text-base font-bold text-neutral-800">
                    Leverage-Farming
                    </p>
                  </div>
                  <div className="flex text-sm text-black">
                    ZeroLend + SyncSwap
                  </div>
                </div>  
              <div className="text-base text-neutral-800  pt-5">
                35%
              </div>

            </div>                  

        </div>

                  <div style={{marginTop:"30px"}}></div>




            </SubTemplateBlockVertical>
          </OverBox>
        </div>
      </div>

      {depositmodal ? (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full max-w-md max-h-full">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-2xl font-semibold text-black">
                       Delta Neutral
                    </h3>
                    <button onClick={() => setDepositmodal(false)}>
                        <span className="bg-transparent text-black opacity-1 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                        </span>
                    </button>
                    </div>

                <div className="pt-5 flex justify-evenly" onClick={() => setDepositmodal(true)}>
                  <div className="flex pt-5">
                    <div className="relative">
                      <div className="relative mr-1.5 rounded-full bg-white">
                        <div className="w-10 h-10 rounded-full" style={{ borderColor: 'rgb(204, 204, 204)' }}>
                        <img src={iconUrl.USDT} alt="-" style={{width:"60px", borderRadius:"50%"}}/>
                        </div>
                      </div>
                    </div>
                    <div className="relative mr-1.5 rounded-full bg-white">
                      <div className="w-10 h-10 rounded-full" style={{ borderColor: 'rgb(204, 204, 204)' }}>
                      <img src={iconUrl.TON} alt="-" style={{width:"60px", borderRadius:"50%"}}/>
                      </div>
                    </div>
                  </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <p className="text-base font-bold text-neutral-800">
                    Delta-Neutral
                    </p>
                  </div>
                  <div className="flex text-sm text-black">
                    SyncSwap + HoldStation
                  </div>
                </div>  
              <div className="text-base text-neutral-800  pt-5">
                22%
              </div>
              
              

            </div>

            <div class="pt-5 pl-5 pr-5">
              <input placeholder="USDT" type="number" class="block p-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-100 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required  />
                    <button class="w-full items-center p-3 mt-5 text-white font-bold text-gray-900 rounded-lg bg-primary-500 hover:bg-primary-700 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <div style={{textAlign:"center"}}>Execution</div>
                    </button>     
                    </div>
                    
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    </div>

                    
                    
                    </div>


          <div className="bg-gray-200 p-6 border border-gray-100 rounded-lg mx-auto text-gray-800">
            <h2 className="text-xl font-bold text-center mb-4">How Does it Work?</h2>
              <p className="text-base mb-2">
               - 50% Long : Staking APR ~5% (SyncSwap)
              </p>
              <p className="text-base mb-2">
               - 50% Short : Funding Fee APR ~40% (HoldStation)
              </p>
          </div>
                    



                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}

      {LeverageModal ? (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full max-w-md max-h-full">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-2xl font-semibold text-black">
                       Leverage Lending
                    </h3>
                    <button onClick={() => setLeverageModal(false)}>
                        <span className="bg-transparent text-black opacity-1 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                        </span>
                    </button>
                    </div>

                <div className="pt-5 flex justify-evenly" onClick={() => setLeverageModal(true)}>
                  <div className="flex pt-5">
                    <div className="relative">
                      <div className="relative mr-1.5 rounded-full bg-white">
                        <div className="w-10 h-10 rounded-full" style={{ borderColor: 'rgb(204, 204, 204)' }}>
                        <img src={iconUrl.ZEROLEND} alt="-" style={{width:"60px", borderRadius:"50%"}}/>
                        </div>
                      </div>
                    </div>
                    <div className="relative mr-1.5 rounded-full bg-white">
                      <div className="w-10 h-10 rounded-full" style={{ borderColor: 'rgb(204, 204, 204)' }}>
                      <img src={iconUrl.USDT} alt="-" style={{width:"60px", borderRadius:"50%"}}/>
                      </div>
                    </div>
                  </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <p className="text-base font-bold text-neutral-800">
                    Leverage Lending
                    </p>
                  </div>
                  <div className="flex text-sm text-black">
                    Zerolend + SyncSwap
                  </div>
                </div>  
              <div className="text-base text-neutral-800  pt-5">
                35%
              </div>
              
              

            </div>

            <div class="pt-5 pl-5 pr-5">
              <input placeholder="USDT" type="number" class="block p-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-100 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required  />
                    <button class="w-full items-center p-3 mt-5 text-white font-bold text-gray-900 rounded-lg bg-primary-500 hover:bg-primary-700 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <div style={{textAlign:"center"}}>Execution</div>
                    </button>     
                    </div>
                    
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    </div>

                    
                    
                    </div>


          <div className="bg-gray-200 p-6 border border-gray-100 rounded-lg mx-auto text-gray-800">
            <h2 className="text-xl font-bold text-center mb-4">How Does it Work?</h2>
              <p className="text-base mb-2">
               - Supply USDT and Borrow USDT Loop For 3x position
              </p>
          </div>
                    



                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}



  
    </>

  <div className="flex items-center flex-col flex-grow pt-10">

    {/* <div className="p-5 font-black text-xl">Invest DeFi like a pro</div>
      
      <div className="p-5 font-black text-xl">{name}</div>
      <div className="p-5 font-black text-xl">{allowanceMulticall}</div>

        {isConnectedAddressCounterLoading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <p className="m-0">{connectedAddressCounter ? connectedAddressCounter.toString() : 0}</p>
        )}

        <br />

        <div className="p-5">
          <button className="btn btn-primary" onClick={sendToken}>
            sendToken
          </button>
        </div>
    
        <div className="p-5">
          <button className="btn btn-primary" onClick={multicallButton}>
            multicall          
          </button>
        </div>

        <div className="p-5">
          <button className="btn btn-primary" onClick={approveAndSend}>
          approveAndSend          
          </button>
        </div> */}


        
        
        {/* <div className="border border-gray-100 rounded-lg p-7 bg-white hover:border-blue-400">
          <button className="flex flex-col">
            <div className="flex items-center">

              <p className="mx-4 text-xl font-bold text-neutral-800">Leverage Farming</p>
            </div>
              <div className="flex flex-col w-full">
              <div className="flex justify-left py-2">
              <p className="mx-4 text-xl font-bold text-neutral-800">USDT (2x Leverage)</p>
              <p className="mx-4 text-xl font-bold text-neutral-800">Zerolend</p>
              </div>
              
            </div>
          </button>
        </div> */}

    {/* <div>
      <Address address={address} />
      <Balance address={address} />
    </div>
    <div className="p-5 font-black text-xl">{greeting}</div>
  <div>
    <Address address={yourContract?.address} />
    <Balance address={yourContract?.address} />
  </div>
  <div className="p-5">
    <input
        value={newGreeting}
        placeholder="Type here"
        className="input"
        onChange={(e) => setNewGreeting(e.target.value)}
    />
    </div>
    <div className="p-5">
        <button className="btn btn-primary" onClick={setGreeting}>
            Set Greeting
        </button>
    </div>
    <div className="p-5">
    <AddressInput
        value={newMinter}
        placeholder="Minter?"
        name={address}
        onChange={setNewMinter}
    />
    </div>
    <div className="p-5">
        <input
            value={newAmount}
            placeholder="Amount"
            className="input"
            onChange={(e) => setNewAmount(e.target.value)}
    />
    </div>
    <div className="p-5">
        <button className="btn btn-primary" onClick={mint}>
            Mint TKN Tokens
        </button>
    </div> */}
  </div>
  </>;
};


const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;


export const ProductSkeleton = styled.div`
  display: inline-block;
  height: ${props => props.height || "20px"};
  width: ${props => props.width || "50%"};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #eee;
  background-image: linear-gradient( 100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80% );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-top: ${props => props.marginTop || "0"}
`;


const Dot = styled.div`
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`

const ChartCover = styled.div`
  height: 40px;
  border: 2px solid white;
  border-radius: 10px;
  overflow: hidden;
  /* New code below: */
  display: grid;
  grid-template-columns: ${props=> props.a}fr ${props=> props.b}fr ${props=> props.c}fr;
  /* grid-template-columns: ${props=> props.a}fr ${props=> props.b}fr ${props=> props.c}fr; */
`

const AppleChart = styled.div`
  background: #111539;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 25px;
`

const Wrappertitle = styled.div`
color: black;
  margin: 0px auto 10px auto;
  /* text-align: center; */
  
  /* width: 1136px; */
  @media screen and (max-width: 950px){
    width: 100%;
    padding-top: 20px;
    color: black;
  }
  @media screen and (max-width: 500px){
    width: 100%;
    padding-top: 20px;
    /* color: gray; */
  }
`

const OverBox = styled.div`

  position: relative;
  margin: 10px auto; 
  width: calc(100% - (230px));
  width: -moz-calc(100% - (230px));
  width: -webkit-calc(100% - (230px));
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  /* height: 100vh; */
  overflow: auto;
  /* padding: 30px; */

  @media screen and (max-width: 950px){
    width: calc(100%);
    width: -moz-calc(100%);
    width: -webkit-calc(100%);
    padding: 10px;
  }
`



const SubTemplateBlockVertical = styled.div`
     /* width: 900px; */
     /* max-width: 500px; */
    margin: 10px auto;
    width: 460px;
    /* padding-bottom: 10px; */
    position: relative; 
    /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    /* padding:15px; */
    /* display:flex; */
    /* flex-direction:column; */

    /* padding: 20px 25px !important;
    background: #fff;

    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    min-width: 0px;
    overflow-wrap: break-word;
    /* background-color: rgb(255, 255, 255); */
    background-clip: border-box;
    /* border: 1px solid rgba(0, 0, 0, 0.125); */
    /* border-radius: 0.75rem; */
    /* box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem; */
    /* overflow: visible; */
    
  @media screen and (max-width: 500px){
      width: 100%;
      /* margin: 10px 10px; */
      font-size: 12px;
    }
`;

const SubTemplateBlockSub = styled.div`
     /* width: 900px; */
     /* max-width: 500px; */
    margin: 10px auto;
    width: 1136px;
    padding-bottom: 10px;
    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    padding:15px;
    display:flex;
    flex-direction:column;

    padding: 20px 25px !important;

    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    min-width: 0px;
    overflow-wrap: break-word;
    background-color: rgb(255, 255, 255);
    background-clip: border-box;
    border: 0.1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.75rem;
    box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;
    overflow: visible;
    
  @media screen and (max-width: 500px){
      width: 100%;
      /* margin: 10px 10px; */
      font-size: 12px;
    }
`;



export default Home;