import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Question from './Question';

function QuestionDetails(props) {
  const { id, questions } = props;
  const question = questions[id];

  if(question == null) {
    return <Redirect from='*' to='/not-found' />
  }

  return(
    <div>
      <h3 className='center'>Question</h3>
      {question &&
          <Question question={question} />
      }
    </div>
  );
}

function mapStateToProps({ authedUser, questions }, props) {
    console.log('props', props)
    const { id } = props.match.params;
    console.log(id)
      return {
        id,
        questions,
      };
}

export default connect(mapStateToProps)(QuestionDetails)
