import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { todos: state.todos };
};

const TodoList = ({ todos }) => (
  <ol className="todo-items">
    {todos.map(el => (
      <li className="todo" key={el.id}>
        {el.title}
      </li>
    ))}
  </ol>
);

const Todos = connect(mapStateToProps)(TodoList);

export default Todos;