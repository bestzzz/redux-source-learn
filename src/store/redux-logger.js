const logger = store => dispatch => action => {
  console.log('老状态', store.getState());
  dispatch(action);
  console.log('新状态', store.getState());
}

export default logger;
