import React from 'react';
import './App.scss';
import Todos from './components/todos';

let input;
class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("submitted", input.value);
    e.target.reset();
  }
  render() {
    return (
      <div className="App">
        <div className="form-container">
          <h3>TODO APP</h3>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              type="text"
              placeholder="What do you want to do ?"
              ref={node => (input = node)}
            />
            <button type="submit">Add </button>
          </form>
          <Todos />
        </div>
      </div>
    );
  }
}

export default App;
