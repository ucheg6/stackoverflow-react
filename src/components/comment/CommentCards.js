import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComments } from '../../actions/commentsAction';
import formatTime from '../../helpers/timeFormater';

class CommentCards extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const { id } = this.props
    this.props.fetchComments(id);
  }
  render() {
    return (

      <div>
        {
           !this.props.postComments ? 'Be the first to comment on this answer!':
           this.props.postComments.map((comment) => {

            const { commentid, fullname, created_at, commentbody } = comment
            return (
               <div key={commentid}>
              <div  className="post-body">
                <div className="article-author">
                  {fullname}
                  <span className="light-grey">&nbsp;
                    commented.
              </span>
                  <span className="post-time">&nbsp;
                  {formatTime(created_at)}
                  </span>
                </div>
                <div className="article-preview">
                  {commentbody}
                  <br />

                </div>
              </div>
              <hr/>
                </div>
                )
              })
            }
     </div>
   
       )
     }
   }
const mapStateToProps = state => ({
          postComments: state.postComments.comments
      });
      
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchComments}, dispatch);
      }
export default connect(mapStateToProps, mapDispatchToProps)(CommentCards);