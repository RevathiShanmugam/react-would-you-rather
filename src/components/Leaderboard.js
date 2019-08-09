import React from 'react';
import { connect } from 'react-redux';

function Leaderboard(props) {
  const { users } = props;
  const userArray = Object.keys(users).map((key) => users[key]);
  // sort from most to least answered
  const sortedUserArray = userArray.sort((a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length)

  return (
    <div>
      <h3 className='center'>Leaderboard</h3>
      <ul className='user-list'>
        {sortedUserArray.map((user) => (
          <li key={user}>
            <div className='user-stats'>
              {user.name}
              Answers: {Object.keys(user.answers).length}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Leaderboard)
