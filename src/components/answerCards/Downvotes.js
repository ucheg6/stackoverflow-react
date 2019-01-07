import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { downvote } from '../../actions/downvoteAction';

class Downvotes extends Component {
  constructor(props) {
    super(props);
    const { downvotes } = this.props;
    this.state = {
      downvotes,
    }
    this.handleDownvote = this.handleDownvote.bind(this)
  }


  handleDownvote(event) {
    const { id, answerid } = this.props
    let { downvotes } = this.state;
    downvotes += 1;
     event.preventDefault();
     this.props.downvote(this.state, id, answerid);
     this.setState({
      downvotes,
    })
  }

  render() {
    const { downvotes } = this.state;
    return (
         <li className="button" id="button-up" onClick={this.handleDownvote}>
         <i className="fa fa-thumbs-down" id="downvoter"></i>
         &nbsp; {downvotes} 
        </li>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    votes: state.votes.downvotes,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ downvote }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Downvotes);