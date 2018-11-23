import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class navbar extends Component {
  render() {
    return (
      <Router>
      <div className="topnav" id="myTopnav">
        <div className=" Navbar_Link-brand ">
          <Link to="index.html">StackOverflow-lite®</Link>
        </div>
        <div className="nav" className="topnav" id="myTopnav">
          <a href="dashboard.html">PROFILE</a>
          <a href="login.html">LOGIN</a>
          <a href="signup.html">SIGNUP</a>
          <a href="#" className="icon">
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
      </Router>
    )
  }
}

export default navbar;