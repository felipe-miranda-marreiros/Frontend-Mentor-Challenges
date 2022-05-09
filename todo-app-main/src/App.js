import { useEffect, useState } from "react";
import "./css/App.style.css";
import data from "./data";

import moonIcon from "../src/images/icon-moon.svg";
import sunIcon from "../src/images/icon-sun.svg";
import crossIcon from "../src/images/icon-cross.svg";
import checkIcon from "../src/images/icon-check.svg";

const App = () => {
  const [mode, setMode] = useState(false);
  const [todos, setTodos] = useState(data);
  const [newTodo, setNewTodo] = useState({
    id: "",
    content: "",
    isComplete: false,
  });

  const toogleModes = () => {
    setMode((prevState) => !prevState);
  };

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;

    setNewTodo((prevState) => {
      return {
        ...prevState,
        id: new Date().getTime(),
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(newTodo).every((prop) => prop === false)) {
      return;
    } else {
      setTodos((prevState) => {
        return [...prevState, newTodo];
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
            onClick={toogleModes}
            title={mode ? "Set dark mode" : "Set light mode"}
          >
            <img src={mode ? moonIcon : sunIcon} alt="icon" />
          </button>
        </div>
      </header>
      <main className="container">
        <form className="todo-input" onSubmit={handleSubmit}>
          <div className="round">
            <label htmlFor="checkbox"></label>
            <input
              id="checkbox"
              type="checkbox"
              value={newTodo.isComplete}
              name="isComplete"
              checked={newTodo.isComplete}
              onChange={handleOnChange}
            />
          </div>
          <input
            type="text"
            name="content"
            className="todo-input--el"
            placeholder="Create a new todo..."
            value={newTodo.content}
            onChange={handleOnChange}
          />
        </form>
        <ul className="todo">
          {todos.map((todo) => {
            return (
              <>
                <div className="round" key={todo.id}>
                  <label htmlFor="checkbox"></label>
                  <input
                    id="checkbox"
                    type="checkbox"
                    value={newTodo.isComplete}
                    name="isComplete"
                    checked={newTodo.isComplete}
                    onChange={handleOnChange}
                  />
                </div>
                <li className="todo-item" key={todo.id}>
                  {todo.content}
                </li>
              </>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default App;
