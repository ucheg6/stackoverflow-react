import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postQuestion } from '../actions/postQuestionAction';
import { ToastContainer } from 'react-toastify';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      topic: '',
  }
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePostQuestion = this.handlePostQuestion.bind(this)
  }

  closeModal() {
    this.props.close();
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handlePostQuestion(event) {
    event.preventDefault();
    this.props.postQuestion(this.state);
  }

  render() {
    return (
      <div> 
         <ToastContainer />
          <div className="m-modal-content">
            <div className="m-modal-header">
              <span className="m-close" data-testid="close" onClick={this.closeModal}>&times;</span>
              <h3>Ask your Question</h3>
            </div>
            <div className="m-modal-body">
              <div className="m-edit_form">
                <div className="m-form_group">
                  <label className="label">Question Title</label>
                  <input id="m-questionTopic" data-testid="change" type="text" placeholder="Question Title"
                   value={this.state.topic} name="topic" onChange={this.handleChange}  />
                </div>
                <div className="m-form_group">
                  <label className="label">Question Body</label>
                  <textarea id="m-questionBody" data-testid="change" rows="10" cols="100" className="form-control"
                  value={this.state.question} name="question" onChange={this.handleChange}></textarea>
                </div>
                <button id="m-submitQuestion" className="m-btn m-btn-blue fa fa-share-square"
                onClick={this.handlePostQuestion} data-testid="post"> Post Question</button>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    postQuestion: state.postQuestion.question,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ postQuestion }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
