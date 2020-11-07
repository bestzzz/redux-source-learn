// import createStore from "../redux/createStore";
import {createStore, applyMiddleware} from '../redux';
import reducer from "./reducers";
import logger from './redux-logger';
import logger2 from './redux-logger2';

// const store = createStore(reducer, 1);
const store = applyMiddleware(logger, logger2)(createStore)(reducer);

export default store;
