import React from 'react';
import { connect } from "react-redux";
import { toggleTodo } from "../actions/index";
import VisibilityFilters from "./visibility";

const mapStateToProps = state => {
  return { todos: state.todos, visibilityFilter: state.visibilityFilter };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id))
  };
};

class Todos extends React.Component {
  constructor(props) {
    super(props);
  
    this.getVisibleTodos = this.getVisibleTodos.bind(this);
  }

  getVisibleTodos(todos,filter) {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(
          t => t.isCompleted
        );
      case 'SHOW_ACTIVE':
        return todos.filter(
          t => !t.isCompleted
        );
      default:
        return todos;
    }
  }

  render() {
    let {todos} = this.props.todos;
    let {visibilityFilter} = this.props;
    const visibleTodos = this.getVisibleTodos(todos, visibilityFilter);
    return (
      <div className="todo-items">
        <VisibilityFilters />
        <ul>
          {visibleTodos.map(el => (
            <li
              className="todo-title"
              style={{
                textDecoration: el.isCompleted ? "line-through" : "none"
              }}
              id={el.id}
              key={el.id}
              onClick={e => this.props.toggleTodo(e.target.id)}
            >
              {el.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);