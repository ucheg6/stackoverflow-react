import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { acceptAnswer } from '../../actions/acceptAnswerAction';

class AcceptAnswer extends Component {
  constructor(props) {
    super(props);
    const { is_preferred } = this.props;

    this.state = {
       is_preferred,
    }
    this.handleAcceptAnswer = this.handleAcceptAnswer.bind(this)
  }


  handleAcceptAnswer(event) {
    const { id, answerid } = this.props
    let { is_preferred } = this.state;
    is_preferred ? is_preferred = false : is_preferred = true;
     event.preventDefault();
     this.props.acceptAnswer(id, answerid);
     this.setState({
       is_preferred,
    })
  }

  render() {
    const { is_preferred } = this.state;
    return (
         <li className="button" id="button-up" data-testid="accept" onClick={this.handleAcceptAnswer}>
         { is_preferred ? <i style={{color: 'purple'}} className="fa fa-check-square"> accepted</i>
         : <i className="fa fa-check-square"> accept</i> }
        </li>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    answer: state.answer.answer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ acceptAnswer }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(AcceptAnswer);