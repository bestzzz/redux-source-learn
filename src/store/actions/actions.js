import * as type from '../action-types';

const actions = {
  INCREMENT(value) {
    return {type: type.INCREMENT1, payload: value};
  },
  DECREMENT(value) {
    return {type: type.DECREMENT1, payload: value};
  }
};

export default actions;
