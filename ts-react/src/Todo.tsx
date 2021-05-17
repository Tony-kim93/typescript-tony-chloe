import React from "react";
import { TonyTask } from "./interface";
import "./Todo.css";

interface Props {
  todo: TonyTask;
  handleDelete(delTodo: string): void;
}

const Todo = ({ todo, handleDelete }: Props) => {
  return (
    <div className="fullCon">
      <div>
        <span className="mustDo">할일 : {todo.todoName}</span>
        <span className="dead">마감 : {todo.deadline} 일</span>
      </div>
      <button
        onClick={() => {
          handleDelete(todo.todoName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Todo;
