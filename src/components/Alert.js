import React, { Component } from "react";

export class Alert extends Component {
  render() {
    return (
      <>
        <div
          className="alert alert-success d-flex justify-content-center align-items-center"
          role="alert"
          style={{ margin: "0", height: "30px",fontSize: "12px"}}
        >
          <strong>Welcome to {this.props.title} mode of website!</strong>
        </div>
      </>
    );
  }
}

export default Alert;
