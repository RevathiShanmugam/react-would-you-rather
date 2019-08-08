import { ANSWER_QUESTION } from '../actions/questions';

export default function checker(store) {
  return function(next) {
    return function(action) {
      const users = store.getState().users;
      if (
        action.type === ANSWER_QUESTION &&
        users[action.authedUser].answers.contains[action.qid]
      ) {
        return alert('You can only answer once a question.');
      }
      return next(action);
    }
  };
}
