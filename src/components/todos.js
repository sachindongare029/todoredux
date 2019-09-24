import React from 'react';
import { connect } from "react-redux";
import { toggleTodo } from "../actions/index";
import VisibilityFilters from "./visibility";

const mapStateToProps = state => {
  return { todos: getVisibleTodos(state.todos.todos, state.visibilityFilter)};
};
const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id))
  };
};

const getVisibleTodos = (todos,filter) => {
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

class Todos extends React.Component {
  constructor(props) {
    super(props);
  
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    this.props.toggleTodo(e.target.id);
  }

  render() {
    let { todos } = this.props;
    return (
      <div className="todo-items">
        <VisibilityFilters />
        <ul>
          {todos.map(el => (
            <li
              className="todo-title"
              style={{
                textDecoration: el.isCompleted ? "line-through" : "none"
              }}
              id={el.id}
              key={el.id}
              onClick={e => this.handleToggle(e)}
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