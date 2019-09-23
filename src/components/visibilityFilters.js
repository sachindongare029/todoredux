import React, { Component } from 'react'

class visibilityFilters extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var node = document.querySelector(".active");
    if(node) {
      node.classList.remove("active");
    }
    e.target.classList.add("active");
  }

  render() {
    return (
      <div className="visibility-container">
        <button className="visibility-btns active" value="show-all" onClick={e => this.handleClick(e)}>Show All</button>
        <button className="visibility-btns" value="show-active" onClick={e => this.handleClick(e)}>Show Active</button>
        <button className="visibility-btns" value="show-completed" onClick={e => this.handleClick(e)}>Show Completed</button>
      </div>
    );
  }
}

export default visibilityFilters;