import { useState } from "react";
import checkIcon from "../src/images/icon-check.svg";

const TodoStatus = ({ status, changeStatus }) => {
  return (
    <div
      className={`todo-status ${status && "todo-completed"}`}
      onClick={changeStatus}
    >
      <div className="todo-status--label ">
        {status && (
          <img src={checkIcon} alt="check icon" className="check-icon" />
        )}
      </div>
    </div>
  );
};

export default TodoStatus;
