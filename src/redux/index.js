import createStore from './createStore';
import combineReducers from './combineReducers';
import bindActionCreators from './bindActionCreators';
import applyMiddleware from './applyMiddleware';
import compose from './compose';

export {
  createStore, // 创建仓库
  combineReducers, // 合并reducers
  bindActionCreators, // 把actioncreator 和 dispatch绑定
  applyMiddleware, // 中间件
  compose, // 合并中间件
};
