import compose from "./compose";

const applyMiddleware = (...middlewares) => (createStore) => (reducer, initState) => {
  const store = createStore(reducer, initState);
  const chain = middlewares.map(fn => fn(store));
  const dispatch = compose(...chain)(store.dispatch);

  return {
    ...store,
    dispatch
  };
};

export default applyMiddleware;