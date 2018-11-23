import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchRecentQuestions } from '../actions/recentQuestionsAction';
import formatTime from '../helpers/timeFormater';
class recentQuestions extends Component {
    componentDidMount() {
        this.props.fetchRecentQuestions();
    }
    render() {
        return (
            <div id="questionResult" className="main-col">
                <div className="feed-switcher">
                    <ul className="list-contents">
                        <li className="feed-tab" id="feed-tab-2">
                            Recent Questions
                        </li>
                    </ul>
                </div>

                <div className="feed">
                    
                    {
                        this.props.recentQuestions.map((questions) => {

                        const { questionid, userid, fullname, questiontopic, questionbody, created_at } = questions

                            return (
                                <div className="feed-item"  key={questionid}>
                                    <div className="post-title">
                                        <span className="user-name">
                                            {fullname}
                                        </span>
                                        <span className="light-grey">
                                            asked a question.
                                        </span>
                                        <span className="post-time">
                                       {formatTime(created_at)}
                                        </span>
                                    </div>

                                    <div className="feed-user-pic">
                                        <img className="pic" src="src/images/1.jpg" />
                                    </div>

                                    <div className="post-body">
                                        <div className="article-title">
                                            {questionbody}
                                        </div>
                                    </div>

                                    <div className="feed-item-actions">
                                        <ul className="action-buttons">
                                            <li className="button" id="button-up">
                                             <a href="question.html?id=${questionid}">
                                                    <i className="fa fa-share-square"></i> View Question </a> 
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
    recentQuestions: state.recentQuestions.questions
});

export default connect(mapStateToProps, { fetchRecentQuestions })(recentQuestions);