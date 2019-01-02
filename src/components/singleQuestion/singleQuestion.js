import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleQuestion } from '../../actions/singleQuestionAction';
import formatTime from '../../helpers/timeFormater';
import AnswersCard from '../answerCards/AnswerCards';
import './singleQuestion.css';

class SingleQuestion extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSingleQuestion(id);
  }

  render() {
    const { data } = this.props.singleQuestion;
    data && data.data && console.log('this data in', data)

    return (
      <div id="questionsResult" className="s-main-col">
        <div className="s-feed">
          <div className="s-feed-item">
              <div className="s-post-title">
                <span className="s-user-name" id="s-author_name">
                  {data && data.data && data.data[0].fullname}
                </span>
                <span className="s-post-time" id="s-post_time">&nbsp;
                {data && data.data && formatTime(data.data[0].created_at)}
                </span>
              </div>
              <div className="feed-user-pic">
                <img className="pic" src="src/images/1.jpg" />
              </div>
              <div className="s-article-title" id="s-question_body">
                {data && data.data && data.data[0].questionbody}
              </div>
              {data && data.answers &&  <AnswersCard answers={data.answers}/> }
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  singleQuestion: state.singleQuestion.question

});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchSingleQuestion }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleQuestion);