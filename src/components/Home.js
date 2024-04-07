/*==================================================
src/components/Home.js

The Home component is used to demonstrate the use of Link.
==================================================*/
import React, { Component } from "react";
import AccountBalance from "./AccountBalance";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <img src="https://picsum.photos/200/200" alt="bank" />

          <h1>Bank of React</h1>

          <br />
          <AccountBalance accountBalance={this.props.accountBalance} />
        </div>
      </div>
    );
  }
}

export default Home;
