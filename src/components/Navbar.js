import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navBar">
          <h1 className="navHeader">Bank of React</h1>
          <br />
          <Link to="/">Home</Link>
          <Link to="/userProfile">User Profile</Link>
          <Link to="/debits">Debits</Link>
          <Link to="/credits">Credits</Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
