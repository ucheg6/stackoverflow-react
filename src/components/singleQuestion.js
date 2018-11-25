import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleQuestion } from '../actions/singleQuestionAction';
 
class SingleQuestion extends Component {

    componentDidMount(){
        const { id } = this.props.match.params;
        console.log(id);
        this.props.fetchSingleQuestion(id);

    }

   render() {
     return (
       <div>
         <h1>Single Questions</h1>
       </div>
     )
   }
 }

 const mapStateToProps = state => ({
    questions: state.questions
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchSingleQuestion }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleQuestion);