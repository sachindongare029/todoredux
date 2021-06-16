import React from "react";
import withSampleProps from "../HOC/withSampleProps";

function TodoList(props) {
  console.log("props in list ", props.data);
  const handleToggle = (item) => {
    props.handleToggle(item);
  };
  const handleRemove = (item) => {
    props.removeTodo(item);
  };

  return (
    <div className="todo__list__container">
      <ul>
        {props.todoItems.map((item) => {
          return (
            <li
              className={
                item.isCompleted ? "todo__item completed" : "todo__item"
              }
              key={item.id}
            >
              <div className="todo__toggle__grouped">
                <input
                  type="checkbox"
                  className="toggle__todo--chkbox"
                  onChange={() => handleToggle(item)}
                  checked={item.isCompleted}
                />
                <span className="todo__title">{item.title}</span>
              </div>
              <button
                className="remove__todo--btn"
                onClick={() => handleRemove(item)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default withSampleProps(TodoList);