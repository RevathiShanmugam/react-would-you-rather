import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
  render() {
    return (
      <div>
        Question
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Question) 
