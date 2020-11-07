
export default function createStore (reducer, defaultState) {

  let state = defaultState;
  let listener = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);

    if (listener && listener.length) {
      listener.forEach(fn => fn());
    }

    return action;
  }

  function subscribe(fn) {
    listener.push(fn);

    return () => {
      const index = listener.indexOf(fn);
      listener.splice(index, 1);
    };
  };

  dispatch('INIT');

  return {
    dispatch,
    getState,
    subscribe
  };
};