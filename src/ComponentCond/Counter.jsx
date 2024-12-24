import React, { Component } from "react";
import "./Counter.css"; 

class Counter extends Component {
  constructor() {
    super();
    this.state = { Counter: 2 };
  }
  handleEvent = () => {
    this.setState({ Counter: this.state.Counter + 1 });
  };
  handleEvent1 = () => {
    this.setState({ Counter: this.state.Counter - 1 });
  };
  handleEvent2 = () => {
    this.setState({ Counter: this.state.Counter + 2 });
  };
  handleEvent3 = () => {
    this.setState({ Counter: this.state.Counter - 2 });
  };
  handleEvent4 = () => {
    this.setState({ Counter: this.state.Counter + 3 });
  };
  handleEvent5 = () => {
    this.setState({ Counter: this.state.Counter - 3 });
  };
  handleEvent6 = () => {
    this.setState({ Counter: this.state.Counter + 4 });
  };
  handleEvent7 = () => {
    this.setState({ Counter: this.state.Counter - 4 });
  };
  handleEvent8 = () => {
    this.setState({ Counter: this.state.Counter + 5 });
  };
  handleEvent9 = () => {
    this.setState({ Counter: this.state.Counter - 5 });
  };

  render() {
    return (
      <div className="counter-container">
        <h1 className="counter-title">Interactive Counter</h1>
        <div className="button-group">
          <button className="counter-button" onClick={this.handleEvent}>+1</button>+
          <button className="counter-button" onClick={this.handleEvent1}>-1</button>
          <button className="counter-button" onClick={this.handleEvent2}>+2</button>
          <button className="counter-button" onClick={this.handleEvent3}>-2</button>
          <button className="counter-button" onClick={this.handleEvent4}>+3</button>
          <button className="counter-button" onClick={this.handleEvent5}>-3</button>
          <button className="counter-button" onClick={this.handleEvent6}>+4</button>
          <button className="counter-button" onClick={this.handleEvent7}>-4</button>
          <button className="counter-button" onClick={this.handleEvent8}>+5</button>
          <button className="counter-button" onClick={this.handleEvent9}>-5</button>
        </div>
        <div className="counter-display">{this.state.Counter}</div>
      </div>
    );
  }
}

export default Counter;
