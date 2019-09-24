import React, { Component } from 'react'
import { connect } from "react-redux";
import { setVisibilityFilter } from '../actions/index';

const mapDispatchToProps = dispatch => {
  return {
    setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
  };
};

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
    this.props.setVisibilityFilter(e.target.value);
  }

  render() {
    return (
      <div className="visibility-container">
        <button className="visibility-btns active" value="SHOW_ALL" onClick={e => this.handleClick(e)}>Show All</button>
        <button className="visibility-btns" value="SHOW_ACTIVE" onClick={e => this.handleClick(e)}>Show Active</button>
        <button className="visibility-btns" value="SHOW_COMPLETED" onClick={e => this.handleClick(e)}>Show Completed</button>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(visibilityFilters);
