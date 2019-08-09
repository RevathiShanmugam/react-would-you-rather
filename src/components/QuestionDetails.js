import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionsDetail extends Component {
  render() {
    return (
      <div>
        QuestionsDetail
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(QuestionsDetail) 
