import React, { Component } from 'react'
import CommentCards from './CommentCards';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postComment } from '../../actions/commentsAction';
import { ToastContainer } from 'react-toastify';

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    }
    this.handlePostComment = this.handlePostComment.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handlePostComment(event) {
    const { id } = this.props.match.params
    event.preventDefault();
    this.props.postComment(this.state, id);
  }

  render() {
    const { id } = this.props.match.params
    return (
      <div id="commentsResult" className="s-main-col">
        <div className="s-feed">
          <div className="s-feed-item">
            <div className="s-post-title">
              <span className="s-user-name" id="comment_author"></span>
              <span className="s-post-time">

              </span>
            </div>

            <div className="s-article-title" id="comment_body"></div>
            <CommentCards id={id}/>
            <ToastContainer />
            <div className="">
              <div>
                <textarea name="" id="commentBody"
                value={this.state.comment} name="comment" onChange={this.handleChange}
                cols="20" className="form-input" rows="7" placeholder="Enter your comment here"></textarea>
                <button className="search-btn fa fa-share-square " onClick={this.handlePostComment} id="submitComment" > Post Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    postComments: state.postComments.comment,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ postComment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
