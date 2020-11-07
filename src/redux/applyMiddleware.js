import compose from "./compose";

// function applyMiddleware(middleware) {
//   return function(createStore) {
//     return function(reducer) {
//       const store = createStore(reducer);
//       middleware = middleware(store);
//       const dispatch = middleware(store.dispatch);
//       return {
//         ...store,
//         dispatch
//       };
//     }
//   };
// };

function applyMiddleware(...middleware) {
  return function(createStore) {
    return function(reducer) {
      const store = createStore(reducer);
      const chain = middleware.map(fn => fn(store));
      const dispatch = compose(...chain)(store.dispatch);

      return {
        ...store,
        dispatch
      };
    }
  };
};

export default applyMiddleware;