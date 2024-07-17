import React from 'react';
import styled, { css } from 'styled-components';
import { useTodoDispatch } from '../TodoContext';

import { TrashIcon} from "@heroicons/react/24/outline";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  margin-top: 12px;
  /* padding-bottom: 12px; */
  background-color: white;
  border: solid;
  border-color: gray;
  border-radius: 5px;

  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 13px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text, amount }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  return (
    <TodoItemBlock>
      <div style={{display:"flex", flexDirection:"column"}}>
        <Text done={done}>transaction {id}</Text>
        <Text done={done}>{text}</Text>
        <Text done={done}>{amount}</Text>
      </div>
      <Remove onClick={onRemove}>
        <TrashIcon />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
