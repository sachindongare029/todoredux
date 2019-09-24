import React from 'react';
import './App.scss';
import Todos from './components/todos';
import {connect} from 'react-redux';
import uuidv1 from 'uuid';
import { addTodo } from './actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      title: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    if(!title.trim()) {
      return;
    }
    const id = uuidv1();
    this.props.addTodo({ title, id });
    this.setState({ title: "" });
  }
  render() {
    let {title} = this.state;
    return (
      <div className="App">
        <div className="form-container">
          <h3>TODO APP</h3>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              type="text"
              placeholder="What do you want to do ?"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
            <button type="submit">Add </button>
          </form>
          <Todos />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
