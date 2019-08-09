import React, { Component } from 'react';
import { connect } from 'react-redux';

function Question(props) {
  const { authedUser, question, users } = props;

  return (
    <div>
      <img
        src={users[question.author].avatarURL}
        alt={`Avatar of ${question.author}`}
        className='avatar'
      />
      <span>Would you rather ...</span>
      <button
        className={
          question.optionOne.votes.indexOf(authedUser) > -1
          ? 'question-option-one question-option-selected'
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
          : 'question-option-two'
        }
        onClick={(event) => this.handleOptionClicked(2)}
      >
        {question.optionTwo.text}
      </button>
    </div>
  );
}

function mapStateToProps({ authedUser,users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Question)
