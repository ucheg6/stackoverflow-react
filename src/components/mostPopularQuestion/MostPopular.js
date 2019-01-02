import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import { fetchPopularQuestions } from '../../actions/mostPopularQuestionsAction';

class MostPopular extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchPopularQuestions();
  }

  render() {
    return (
      <div className="side-col">
        <div className="side-col-question-area">
         
        </div>
        <div className="side-column-nav-box">
          <ul className="links">

            <li>
              <i className="fa fa-heart"></i>
              Popular Questions</li>

          </ul>


        </div>

        <div id="mostAnswered">
          {
            this.props.popularQuestions.map((questions) => {

              const { questionid, answersnumber, questionbody } = questions
              return (

                < div className = "feed-item" id = "mostAnswers" key={questionid} >

                  <div className="post-body">
                    <div className="article-title">
                      {questionbody}
                    </div>
                  </div>
                  <div className="feed-item-actions">
                    <ul className="action-buttons">
                      <li className="button" id="button-up">
                      <Link to={`question/${questionid}`}>
                          <i className="fa fa-share-square"></i>&nbsp;
                           {answersnumber} Answers </Link>
                      </li>
                    </ul>
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
  popularQuestions: state.popularQuestions.questions
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPopularQuestions }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(MostPopular);
