function combineReducers(reducers) {

  return function(state, action) {
    const newState = {};
    Object.keys(reducers).forEach(key => {
      const reducer = reducers[key];
      newState[key] = reducer(state[key], action);
    });

    return newState;
  };
};

export default combineReducers;