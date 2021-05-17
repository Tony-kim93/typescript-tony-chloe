import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { TonyTask } from "./interface";
import Todo from "./Todo";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<TonyTask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "todo") {
      setTodo(e.target.value);
    }
    if (e.target.name === "deadline" && deadline >= 0) {
      setDeadline(Number(e.target.value));
    }
  };

  const handleSubmit = (): void => {
    const newTodo = { todoName: todo, deadline: deadline };
    setTodoList([...todoList, newTodo]);
    setTodo("");
    setDeadline(0);
  };

  const handleDelete = (delTodo: string): void => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.todoName !== delTodo;
      })
    );
  };

  return (
    <div className="App">
      <h1>해야만 한다</h1>
      <div>
        <input
          type="text"
          placeholder="뭐할래?"
          name="todo"
          value={todo}
          onChange={handleChange}
        />
        <input
          type="number"
          name="deadline"
          value={deadline}
          onChange={handleChange}
        />
        <button className="addButton" onClick={handleSubmit}>
          추가
        </button>
      </div>
      <div className="todoList">
        {todoList.map((todo: TonyTask, key: number) => {
          return <Todo key={key} todo={todo} handleDelete={handleDelete} />;
        })}
      </div>
    </div>
  );
}

export default App;
