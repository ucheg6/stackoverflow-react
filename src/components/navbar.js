import React, { Component } from 'react'

class navbar extends Component {
  render() {
    return (
      <div className="topnav" id="myTopnav">
        <div className=" Navbar_Link-brand ">
          <a href="index.html" id="logoo">StackOverflow-lite®</a>
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
    )
  }
}

export default navbar;