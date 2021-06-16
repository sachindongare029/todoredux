import React, { useState } from "react";
import withSampleProps from "../HOC/withSampleProps";

function TodoInput(props) {
  console.log("props in input", props.data);
  const [todoText, setTodoText] = useState("");
  const handleChange = (e) => {
    setTodoText(e.target.value);
  };
  const addTodo = () => {
    if (todoText === "") {
      return;
    } else {
      setTodoText("");
      props.addTodo(todoText);
    }
  };
  return (
    <div className="todo__input__container">
      <input type="text" value={todoText} onChange={handleChange} />
      <button className="add__todo--btn" onClick={addTodo}>
        Add New Task
      </button>
    </div>
  );
}

export default withSampleProps(TodoInput);