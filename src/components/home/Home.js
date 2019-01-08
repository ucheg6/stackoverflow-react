import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import image from '../../images/1.jpg';
import './home.css';

import Header from '../header';
import { fetchRecentQuestions } from '../../actions/recentQuestionsAction';
import formatTime from '../../helpers/timeFormater';
import MostPopular from '../mostPopularQuestion/MostPopular';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.props.fetchRecentQuestions();
    }
    render() {
        return (
            <div>
                <Header />
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
                           this.props.recentQuestions.slice(0,7).map((questions) => {

                                const { questionid, userid, fullname, questiontopic, questionbody, created_at } = questions

                                return (
                                    <div className="feed-item" key={questionid}>
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
                                            <img className="pic" src={image} />
                                        </div>

                                        <div className="post-body">
                                            <div className="article-title">
                                                {questionbody}
                                            </div>
                                        </div>

                                        <div className="feed-item-actions">
                                            <ul className="action-buttons">
                                                <li className="button" id="button-up">
                                                {localStorage.getItem('userToken') ?
                                                    <Link to={`question/${questionid}`}>
                                                        <i className="fa fa-share-square"></i> View Question </Link> :
                                                   <Link to={`/signin`}>
                                                <i className="fa fa-share-square"></i> View Question </Link> }    
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <MostPopular />
            </div>
        )

    }

}

const mapStateToProps = state => ({
    recentQuestions: state.recentQuestions.questions,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchRecentQuestions }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);