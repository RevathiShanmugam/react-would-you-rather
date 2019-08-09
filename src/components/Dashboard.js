import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  state = {
    showAnswered: false,
  }
  handleFilterClicked = function(answered) {
     this.setState(function() {
       return {
         showAnswered: answered
       };
     });
   }
  render() {
    const { showAnswered } = this.state
    return (
      <div>
        Dashboard
        <div className='btn-group'>
          <button
            className={!showAnswered ? 'active' : ''}
            onClick={(event) => this.handleFilterClicked(false)}
          >
            Unanswered
          </button>
          <button
            className={showAnswered ? 'active' : ''}
            onClick={(event) => this.handleFilterClicked(true)}>
            Answered
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }) {
  return {
    questions,
    users,
  };
}

export default connect(mapStateToProps)(Dashboard)
