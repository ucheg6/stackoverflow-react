import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { signup } from '../../actions/signupAction';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../signin/signin.css';


class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this)
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }


    handleSignup(event) {
        event.preventDefault();
        this.props.signup(this.state, this.props.history);
    }
    render() {
        return (
            <div className="form-container imgBanner">

                <form id="signupForm">
                    <ToastContainer />

                    <h1>Sign Up </h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label>
                        <b>Full Name</b>

                        <input id="fullname" type="text" value={this.state.fullName}
                            onChange={this.handleChange} placeholder="Enter Full Name" name="fullName" required />
                    </label>


                    <label >
                        <b>Email</b>

                        <input id="email" type="text" value={this.state.email}
                            onChange={this.handleChange} placeholder="Enter Email" name="email" required />
                    </label>

                    <label>
                        <b>Password</b>

                        <input id="password" type="password" value={this.state.password}
                            onChange={this.handleChange} placeholder="Enter Password" name="password" required />
                    </label>

                    <Link to='/signup'>Already have an account? LOGIN</Link>

                    <div className="clearfix">

                        <button type="submit" id="register" onClick={this.handleSignup} className="signupbtn">Sign Up</button>
                    </div>

                </form>



            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        error: state.auth.error,

    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ signup }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
