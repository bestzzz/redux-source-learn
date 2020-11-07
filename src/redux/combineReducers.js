

export default function combineReducers (reducers) {
  const reducerKeys = Object.keys(reducers);

  return function (state, action) {
    const newState = {};
    reducerKeys.forEach(key => {
      const reducer = reducers[key];
      newState[key] = reducer(state[key], action);
    });

    return newState;
  }
};