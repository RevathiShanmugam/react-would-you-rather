import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { answerQuestion } from '../actions/questions';

class Question extends Component {
  handleOptionClicked = function(option) {
    const { authedUser, question, dispatch } = this.props;
   const answer = option === 1 ? 'optionOne' : 'optionTwo';
   dispatch(answerQuestion(authedUser, question.id, answer));
 }

   render() {
     const { authedUser, question, users } = this.props;
     const answers = Object.keys(users[authedUser].answers);
     const answered = answers.indexOf(question.id) > -1 ? true : false;
     const votesOptionOne = question.optionOne.votes.length;
     const votesOptionTwo = question.optionTwo.votes.length;
     const votesTotal = votesOptionOne + votesOptionTwo;
     const percentVotesOptionOne = (votesOptionOne / votesTotal).toFixed(2) * 100;
     const percentVotesOptionTwo = (votesOptionTwo / votesTotal).toFixed(2) * 100;

     return (
       <Link to={`/questions/${question.id}`}>
         <img
           src={`${users[question.author].avatarURL}`}
           alt={`Avatar of ${question.author}`}
           className='avatar'
         />
         <span>Would you rather ...</span>
         <button
           className={
             question.optionOne.votes.indexOf(authedUser) > -1
             ? 'question-option-one question-option-selected'
             : answered
              ? 'question-option-one answered'
             : 'question-option-one'
           }
           onClick={(event) => this.handleOptionClicked(1)}
         >
           {question.optionOne.text}
         </button>
         <button
           className={
             question.optionTwo.votes.indexOf(authedUser) > -1
             ? 'question-option-two question-option-selected'
             : answered
              ? 'question-option-two answered'
             : 'question-option-two'
           }
           onClick={(event) => this.handleOptionClicked(2)}
         >
           {question.optionTwo.text}
         </button>
         {answered && <div className='stats'>
          <span>
            Votes: {question.optionOne.votes.length} ({percentVotesOptionOne}%)
          </span>
          <span>
            Votes: {question.optionTwo.votes.length} ({percentVotesOptionTwo}%)
          </span>
        </div>}

       </Link>
     );
   }
}

function mapStateToProps({ authedUser,users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Question)
