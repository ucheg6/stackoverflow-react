import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/loginAction';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signin.css';
class Signin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSignin = this.handleSignin.bind(this)
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  handleSignin(event) {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
  }
  render() {
    return (
      <div className="form-container ">
        <ToastContainer />
        <form>
          <h1> Log In</h1>
          <hr />
          <label><b>Email:</b></label>
          <input id="email" onChange={this.handleChange} data-testid="changelogin" type="text" name="email" placeholder=" Email" />
          <label><b>Password:</b></label>
          <input id="password" onChange={this.handleChange} data-testid="changelogin" type="password" name="password" placeholder="Password" />

          <div>
          <Link to='/signup'>Don't have an account? Create One</Link>
            <button id="loginUser" onClick={this.handleSignin} data-testid="login" type="submit" className="signupbtn">LOG IN</button>
          </div>



        </form>

      </div>
      

    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth.userReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ login }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);