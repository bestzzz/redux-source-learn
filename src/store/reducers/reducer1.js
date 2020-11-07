import * as type from '../action-types';

export default function reducer1(state = 0, action) {
  switch(action.type) {
    case type.INCREMENT1:
      return state + 1;
    case type.DECREMENT1:
      return state - 1;
    default:
      return state;
  }
}
