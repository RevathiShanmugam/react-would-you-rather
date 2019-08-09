import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotFound extends Component {
  render() {
    return (
      <div>
        404 Not Found
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(NotFound)
