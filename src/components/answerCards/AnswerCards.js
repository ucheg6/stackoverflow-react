import React from 'react'
import formatTime from '../../helpers/timeFormater';
import { Link } from "react-router-dom";
import Upvotes from './Upvotes';
import Downvotes from './Downvotes';
import AcceptAnswer from './AcceptAnswer';

const AnswersCard = ({ answers, questionid }) => {
  
    return (
       answers.length === 0 ? 'Be the first to answer this question!' :
            answers.map((answer) => {
              return (
                <div key={answer.answerid}>
                <div className="s-post-body">
                 <div className="s-article-author">
                   {answer.fullname} &nbsp;
                   <span className="s-light-grey">
                     answered.
         </span>
                   <span className="s-post-time">&nbsp;
                     {formatTime(answer.created_at)}
                   </span>
                 </div>
                 <div className="s-article-preview">
                   {answer.answer}
                   <br />
                   <br />
                 </div>
               </div>
               <div className="s-feed-item-actions">
                 <ul className="action-buttons">
                  <Upvotes upvotes={answer.upvotes} answerid={answer.answerid} id={questionid}/>
                  <Downvotes downvotes={answer.downvotes} answerid={answer.answerid} id={questionid}/>
                   <li className="button" id="button-up">
                     <Link to={`/comments/${answer.answerid}`}>
                       <i className="fa fa-edit"></i> Comments</Link>
                   </li>
                   <AcceptAnswer is_preferred={answer.is_preferred} answerid={answer.answerid} id={questionid}/>
                 </ul>
               </div>
               </div>
              );
             })
          
    )
  }


  export default AnswersCard;