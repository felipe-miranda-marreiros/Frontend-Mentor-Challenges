import { useEffect, useState } from "react";

import TodoStatus from "./todoStatus";
import "./css/App.style.css";
import data from "./data";

import moonIcon from "../src/images/icon-moon.svg";
import sunIcon from "../src/images/icon-sun.svg";
import crossIcon from "../src/images/icon-cross.svg";

const App = () => {
  const [mode, setMode] = useState(false);
  const [todos, setTodos] = useState(data);
  const [newTodo, setNewTodo] = useState({
    id: new Date().getSeconds(),
    content: "",
    isComplete: false,
  });

  const toogleScreenMode = () => {
    setMode((prevState) => !prevState);
  };

  const createNewTodo = () => {
    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
  };

  const changeStatus = () => {
    setNewTodo((prevState) => {
      return newTodo.isComplete
        ? { ...prevState, isComplete: false }
        : { ...prevState, isComplete: true };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.content) {
      return;
    } else {
      createNewTodo();
      setNewTodo((prevState) => {
        return { ...prevState, id: "", content: "", isComplete: false };
      });
    }
  };

  return (
    <>
      <header className="todo-header">
        <div className="todo-content container">
          <h1 className="todo__title">TODO</h1>
          <button
            className="mode-icons"
            onClick={toogleScreenMode}
            title={mode ? "Set dark mode" : "Set light mode"}
          >
            <img src={mode ? moonIcon : sunIcon} alt="icon" />
          </button>
        </div>
      </header>
      <main className="container">
        <form className="todo-form" onSubmit={handleSubmit}>
          <TodoStatus status={newTodo.isComplete} changeStatus={changeStatus} />
          <input
            type="text"
            className="todo-input--el"
            placeholder="Create a new todo..."
            name="content"
            value={newTodo.content}
            onChange={(e) =>
              setNewTodo((prevState) => ({
                ...prevState,
                content: e.target.value,
              }))
            }
          />
        </form>
        <ul className="todo">
          {todos.map((todo) => {
            return (
              <li className="todo-item" key={todo.id}>
                <TodoStatus status={todo.isComplete} />
                {todo.content}
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default App;
