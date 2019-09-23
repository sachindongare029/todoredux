import React from 'react';
import { connect } from "react-redux";
import { toggleTodo } from "../actions/index";

const mapStateToProps = state => {
  return { todos: state.todos };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id))
  };
};

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if(e.target.checked) {
      e.target.nextSibling.style.textDecoration = "line-through";
    } else {
      e.target.nextSibling.style.textDecoration = "none";
    }
    this.props.toggleTodo(e.target.id);
  }
  render() {
    // console.log(this.props);
    return (
      <div className="todo-items">
        {this.props.todos.map(el => (
          <div className="todo" key={el.id}>
            <input
              type="checkbox"
              id={el.id}
              onChange={e => this.handleChange(e)}
            />
            <span className="todo-title">{el.title}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);