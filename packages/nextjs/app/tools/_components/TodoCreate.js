import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  background-color:white;
  /* position: absolute; */
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  background-color:white;
  /* padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px; */

  /* border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef; */
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState('0xA73397cE0cCFdE92e7B23F3d0C462eF099E9E978');
  const [amount, setAmount] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChangeAddress = e => setAddress(e.target.value);
  const onChangeAmount = e => setAmount(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    const address = "0x1e572678738674481dE656233E8456BBc4b3b0aB"
    const amount = 1000

    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        address: address,
        amount: amount,
        done: false
      }
    });
    setAddress('');
    setAmount('');
    setOpen(false);
    nextId.current += 1;
  };

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <>
    <InsertFormPositioner>
          <InsertForm onSubmit={handleSubmit}>
              <div>transfer Token</div>
              <div style={{marginTop:"15px"}}></div>
              <div>token contract address</div>

              <input value="0xEE15464bBc574f6f64E84d26b7C8D42b1C8cC8e8" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
              <div style={{marginTop:"15px", backgroundColor:"white"}}></div>
              <div>transfer Destionation</div>
            <input value="0x1e572678738674481dE656233E8456BBc4b3b0aB" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
            <div style={{marginTop:"15px", backgroundColor:"white"}}></div>

            <div>transfer Amount</div>
            <input value={1000} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>


          </InsertForm>
          <div style={{marginTop:"15px"}}></div>
          <button onClick={onSubmit} style={{width:"100%", height:"50px"}} type="submit" class="py-2.5 px-3 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <span style={{width:"30px", fontWeight:"700", fontSize:"15px"}}>
                    Add Transaction
                </span>
            </button>

          {/* <button onClick={onSubmit}>abc</button> */}
          {/* <input type="submit" value="Submit" /> */}
        </InsertFormPositioner>

    </>
  );
}

export default React.memo(TodoCreate);
