import * as type from '../action-types';

const actions2 = {
  INCREMENT(value) {
    return {type: type.INCREMENT2, payload: value};
  },
  DECREMENT(value) {
    return {type: type.DECREMENT2, payload: value};
  }
};

export default actions2;
