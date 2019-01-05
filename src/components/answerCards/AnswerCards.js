import React from 'react'
import formatTime from '../../helpers/timeFormater';
import { Link } from "react-router-dom";

const AnswersCard = ({ answers }) => {

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
                   <li className="button" id="button-up">
                     <i className="fa fa-thumbs-up" id="upvoter" data-id="${answerid}"></i>
                     &nbsp; {answer.upvotes}
         </li>
                   <li className="button" id="button-up" >
                     <i className="fa fa-thumbs-down" id="downvoter"></i>
                     &nbsp; {answer.downvotes} 
         </li>
                   <li className="button" id="button-up">
                     <Link to={`/comments/${answer.answerid}`}>
                       <i className="fa fa-edit"></i> Comments</Link>
                   </li>
                   <li className="button" id="button-up">
                    { answer.is_preferred ? <i style={{color: 'purple'}} className="fa fa-check-square"> accepted</i>
                    : <i className="fa fa-check-square"> accept</i> }
                   </li>
                 </ul>
               </div>
               </div>
              );
             })
          
    )
  }


  export default AnswersCard;