"use client";

import styled, { keyframes } from 'styled-components';
import type { NextPage } from "next";
import TodoList from './_components/TodoList';
import TodoCreate from './_components/TodoCreate';
import { TodoProvider } from './TodoContext';

const Debug: NextPage = () => {
  return (
    <>
        <div class="p-4">
          <OverBox>
            <SubTemplateBlockVertical>

              <ManageTitle>
                <Title> Batch Transaction</Title>
              </ManageTitle> 

              <div style={{marginTop:"20px"}}></div>

              <TodoProvider>
              <div className="border border-gray-100 rounded-lg p-5" style={{"backgroundColor":"white"}}>
              <TodoCreate />
              </div>

              <div className="border border-gray-100 rounded-lg p-5" style={{"backgroundColor":"white"}}>
                <div>transaction list</div>
                <TodoList/>
                </div>


              </TodoProvider>

                          
              <div className="border border-gray-100 rounded-lg p-5" style={{"backgroundColor":"white"}}>
                <div class="items-center">                                   
                  <div class="relative w-full">

                    {/* <div class="relative">
                        <div style={{height:"10px"}}></div>
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>                        
                        <input type="number" placeholder="Insert deposit amount" value={DepositAmount} onChange={e => setDepositAmount(e.target.value)} class="block p-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-100 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required  />
                    </div> */}

                    {/* <div style={{marginTop:"20px"}}></div> */}

                    <button onClick={console.log("aa")} style={{width:"100%", height:"50px"}} type="submit" class="py-2.5 px-3 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <span style={{width:"30px", fontWeight:"700", fontSize:"15px"}}>
                          Submit
                        </span>
                    </button>

                  </div> 
                </div>
              </div>

            </SubTemplateBlockVertical>
            </OverBox>
            </div>
    </>
  );
};

const ManageTitle = styled.div`
  width: 460px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 500px){
      width: 100%;
      /* margin: 10px 10px; */
      font-size: 12px;
    }
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 25px;
`

const OverBox = styled.div`

  position: relative;
  margin: 0px auto; 
  width: calc(100% - (230px));
  width: -moz-calc(100% - (230px));
  width: -webkit-calc(100% - (230px));
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  overflow: auto;
  padding: 30px;

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
    margin: 0px auto;
    width: 460px;
    /* padding-bottom: 10px; */
    position: relative; 
    /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    /* padding:15px; */
    /* display:flex; */
    /* flex-direction:column; */

    /* padding: 20px 25px !important;
    background: #fff; */

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



export default Debug;
