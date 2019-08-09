import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewQuestion extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>Would you rather</h3>
        <div className='option'>
          option one
        </div>
        <div className='option'>
          option two
        </div>
    </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(NewQuestion)
