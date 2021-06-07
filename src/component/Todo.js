import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { addTodoAction } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../style/todo.css";
import { callAsync } from "../actions/async";

function Todo(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    props.callAsync();
  }, []);
  const addTodo = (text) => {
    props.addTodoAction({
      id: parseInt(Math.random() * 1000),
      title: text,
      isCompleted: false,
    });
    setTodos([
      ...todos,
      { id: parseInt(Math.random() * 1000), title: text, isCompleted: false },
    ]);
  };

  const handleToggle = (todo) => {
    let todoArray = todos;
    let updatedArr = todoArray.map((item) => {
      if (todo.id === item.id) {
        item.isCompleted = !item.isCompleted;
        return item;
      } else {
        return item;
      }
    });
    setTodos(updatedArr);
  };

  const removeTodo = (todo) => {
    let todoArray = todos;
    let updatedArr = todoArray.filter((item) => item.id !== todo.id);
    setTodos(updatedArr);
  };

  return (
    <div className="todo__container">
      <div className="page__title">
        <h1>Task List</h1>
      </div>
      <TodoInput addTodo={addTodo} />
      <div className="block__saperator"></div>
      <TodoList
        todoItems={todos}
        handleToggle={handleToggle}
        removeTodo={removeTodo}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { items: state.TodoReducer.items };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addTodoAction,
      callAsync,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
