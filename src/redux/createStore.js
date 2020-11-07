import isPlainObject from "./utils/isPlainObject";


export default function createStore(reducer, preloadedState) {
  if (typeof reducer !== 'function') {
    throw new Error('reducer 必须是一个函数');
  }

  let currentState = preloadedState; // 当前状态
  let currentReducer = reducer; // 当前处理器
  let currentListeners = []; // 用于保存当前的监听函数

  // 返回当前状态
  function getState() {
    return currentState;
  }

  // 派发动作给reducer
  function dispatch(action) {
    // if (!isPlainObject(action)) {
    //   throw new Error('action必须是一个纯对象');
    // }
    if (typeof action.type === 'undefined') {
      throw new Error('type不能为undefined');
    }

    currentState = currentReducer(currentState, action);

    // 发布已订阅的监听函数
    currentListeners.forEach(fn => fn());

    return action;
  }

  // 订阅监听事件
  function subscribe(listener) {
    currentListeners.push(listener);

    return () => {
      const index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
    };
  };

  dispatch({type: 'INIT'});

  return {
    getState,
    subscribe,
    dispatch
  };
}