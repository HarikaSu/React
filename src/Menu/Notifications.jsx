import React, { Component } from "react";
class Notification extends Component {
  render() {
    return (
      <>
        <h2>Notifications card</h2>
        <p>
          {this.props.name} has {this.props.type} yor post
        </p>
      </>
    );
  }
}
export default Notification;
