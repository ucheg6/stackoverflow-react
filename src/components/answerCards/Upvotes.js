import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upvote } from '../../actions/votesAction';

class Upvotes extends Component {
  constructor(props) {
    super(props);
    const { upvotes } = this.props;
    this.state = {
      upvotes,
    }
    this.handleUpvote = this.handleUpvote.bind(this)
  }


  handleUpvote(event) {
    const { id, answerid } = this.props
    let { upvotes } = this.state;
    upvotes += 1;
     event.preventDefault();
     this.props.upvote(this.state, id, answerid);
     this.setState({
      upvotes,
    })
  }

  render() {
    const { upvotes } = this.state;
    return (
        <li className="button" id="button-up" data-testid="upvote" onClick={this.handleUpvote} >
          <i className="fa fa-thumbs-up" id="upvoter"></i>
                     &nbsp; {upvotes}
         </li>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    votes: state.votes.upvotes,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ upvote }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Upvotes);