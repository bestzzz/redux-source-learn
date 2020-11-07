
function bindActionCreator (actionCreator, dispatch) {
  return function (...arg) {
    dispatch(actionCreator(...arg));
  };
}

function bindActionCreators (actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  };

  const boundActionCreators = {};
  Object.keys(actionCreators).forEach(key => {
    const actionCreator = actionCreators[key];
    const boundActionCreator = bindActionCreator(actionCreator, dispatch);
    boundActionCreators[key] = boundActionCreator;
  });

  return boundActionCreators;
};

export default bindActionCreators;