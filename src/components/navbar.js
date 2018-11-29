import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

class navbar extends Component {
  render() {
    return (
        <div className="topnav" id="myTopnav">
          <div className=" Navbar_Link-brand ">
            <Link to={'/'}>StackOverflow-lite®</Link>
          </div>
          <div className="nav" className="topnav" id="myTopnav">
            <a href="dashboard.html">PROFILE</a>
            <a href="login.html">LOGIN</a>
            <Link to='/signup'>SIGNUP</Link>
            <a href="#" className="icon">
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </div>
    )
  }
}

export default navbar;