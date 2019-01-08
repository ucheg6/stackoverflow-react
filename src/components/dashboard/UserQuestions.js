import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import { fetchUserQuestions, deleteUserQuestions } from '../../actions/userQuestionsAction';
import formatTime from '../../helpers/timeFormater';

class UserQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserQuestions();
  }
  
  deleteQuestion(event, id) {
    event.preventDefault();
    console.log(event, id)
    this.props.deleteUserQuestions(id);
  }

  render() {
    return (
      <div id="p-result" className="p-main-col">
        <div className="p-feed-switcher">
          <ul className="p-list-contents">

            <li className="p-feed-tab" id="p-feed-tab-2">
              Your Questions
          </li>
          </ul>
        </div>

        <div className="p-feed" >
          {
            this.props.userQuestions && this.props.userQuestions.slice(0,6).reverse().map((questions) => {

              const { fullname, questionid, questionbody, created_at } = questions
              return (
                <div className="p-feed" key={questionid}>
                  <div className="p-feed-item">
                    <div className="p-post-title">
                      <span className="p-user-name">
                        {fullname}
                      </span>
                      <span className="light-grey">
                        asked a question.
                     </span>
                      <span className="post-time">
                        {formatTime(created_at)}
                      </span>

                    </div>

                    <div className="p-feed-user-pic">
                      <img className="pic" src="src/images/1.jpg" />
                    </div>

                    <div className="p-post-body">
                      <div className="article-title">
                        {questionbody}
                      </div>

                    </div>
                    <div className="p-feed-item-actions">
                      <ul className="action-buttons">

                        <li className="button" id="button-up">
                          <a href=""  onClick={() => this.deleteQuestion(event, questionid)} data-testid="del">
                            <i className="fa fa-trash"></i> Delete </a>
                        </li>
                        <li className="button" id="button-up">
                          <Link to={`question/${questionid}`}>
                            <i className="fa fa-share-square"></i> View Question </Link>
                        </li>

                      </ul>
                    </div>

                  </div>
                </div>
              )
            })
          }

        </div>


      </div>

    )
  }
}
const mapStateToProps = state => ({
  userQuestions: state.userQuestions.questions
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchUserQuestions, deleteUserQuestions }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(UserQuestions);