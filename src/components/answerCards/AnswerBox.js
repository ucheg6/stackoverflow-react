import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postAnswer } from '../../actions/answerAction';
import { ToastContainer } from 'react-toastify';

class Answer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: '',
    }
    this.handlePostAnswer = this.handlePostAnswer.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handlePostAnswer(event) {
   const { questionid } = this.props
    event.preventDefault();
    this.props.postAnswer(this.state, questionid);
  }
  render() {
    return (
      <div>
        <ToastContainer />
        <div>
          <textarea  value={this.state.answer}  id="answerBody" data-testid="changeAnswer" name="answer" onChange={this.handleChange}
           cols="20" className="form-input" rows="7" placeholder="Enter your answer here"></textarea>
          <button className="search-btn fa fa-share-square " data-testid="postAnswer" onClick={this.handlePostAnswer} id="submitAnswer" > Submit Answer</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    postAnswer: state.postAnswer.answer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ postAnswer }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);