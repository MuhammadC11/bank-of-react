/*==================================================
src/components/Home.js

The Home component is used to demonstrate the use of Link.
==================================================*/
import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import "../styles/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div>
          <h1 className="header">Bank of React</h1>

          <br />

          <h4>Your Balance is:</h4>
          <AccountBalance accountBalance={this.props.accountBalance} />
        </div>
      </div>
    );
  }
}

export default Home;
