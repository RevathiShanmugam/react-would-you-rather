import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser, clearAuthedUser } from '../actions/authedUser';

class Login extends Component {
  state = {
    userId: undefined,
    toDashboard: false,
  }

  handleSelectionChanged = function(event) {
    const userId = event.target.value;

    this.setState(function() {
      return userId;
    });
  }

  handleLogin = function(event) {
    const { userId } = this.state;
    const { dispatch } = this.props;

    dispatch(setAuthedUser(userId));

    this.setState(function(previousState){
      return {
        ...previousState,
        toDashboard: true,
      };
    });
  }

  render() {
    const { userId, toDashboard } = this.state
    const { users } = this.props

    if(toDashboard) {
      return <Redirect to='/' />
    }

    return (
      <div className='box'>
        Please select a user and login.
        <select value={userId} onChange={(event) => this.handleSelectionChanged}>
          <option disabled>Select an user...</option>
          {Object.keys(users).map(function(key) {
            return (
              <option value={users[key].id}>{users[key].id}</option>
            );
          })}
        </select>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Login)
