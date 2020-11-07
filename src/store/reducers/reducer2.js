import * as type from '../action-types';

export default function reducer2(state = 0, action) {
  switch(action.type) {
    case type.INCREMENT2:
      return state + 1;
    case type.DECREMENT2:
      return state - 1;
    default:
      return state;
  }
}
