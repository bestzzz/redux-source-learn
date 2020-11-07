const logger2 = store => dispatch => action => {
  console.log('老状态2', store.getState());
  dispatch(action);
  console.log('新状态2', store.getState());
}

export default logger2;
