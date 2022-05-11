import { useState } from "react";
import checkIcon from "../src/images/icon-check.svg";

const TodoStatus = ({ status }) => {
  const [todoStatus, setTodoStatus] = useState(status);
  console.log("todoStatus");

  return (
    <div className={`todo-status ${todoStatus && "todo-completed"}`}>
      <div className="todo-status--label ">
        {todoStatus && (
          <img src={checkIcon} alt="check icon" className="check-icon" />
        )}
      </div>
      <input
        type="checkbox"
        id="new-todo"
        onClick={() => setTodoStatus((prevState) => !prevState)}
      />
    </div>
  );
};

export default TodoStatus;
