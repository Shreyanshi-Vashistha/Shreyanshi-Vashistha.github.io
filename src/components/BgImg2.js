import "../styles/BgImg2.css";

import React, { Component } from "react";

class BgImg2 extends Component {
  render() {
    return (
      <div className="bg-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default BgImg2;
