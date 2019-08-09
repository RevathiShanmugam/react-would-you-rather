import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser} from '../actions/authedUser';

class Login extends Component {
  state = {
    userId: null,
    toDashboard: false,
  }

  handleSelectionChanged = function(event) {
    const userId = event.target.value;
    this.setState(function(previousState) {
      return {
        ...previousState,
        userId,
      };
    })
  }

  handleLogin = (event)=> {
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
    const { userId, toDashboard } = this.state;
    const { users } = this.props;
    const selected = userId ? userId : -1;
    const avatar = userId ? users[userId].avatarURL : 'placeholder.jpg';

    if(toDashboard) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3 className='center'>Login</h3>
        <div className='login-box'>
          <span>Please select a user and press the login button.</span>
          <div className='user-select'>
           <img
              src={avatar}
              alt={`Avatar of ${userId}`}
              className='avatar'
            />
            <select value={selected} onChange={(event) => this.handleSelectionChanged(event)}>
              <option value={-1} disabled>Select user...</option>
              {Object.keys(users).map(function(key) {
                return (
                  <option value={users[key].id} key={key}>{users[key].id}</option>
                );
              })}
            </select>
          </div>
          <button
            className='btn'
            disabled={userId === null}
            onClick={(event) => this.handleLogin(event)}>
            Login
          </button>
        </div>
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
