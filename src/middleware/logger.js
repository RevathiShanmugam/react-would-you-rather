export default function(store) {
  return function(next) {
    return function(action) {
      console.group(action.type);
      console.log('The action: ', action);
      const result = next(action);
      console.log('The new state is: ', store.getState());
      console.groupEnd();
      return result;
    }
  }
}
