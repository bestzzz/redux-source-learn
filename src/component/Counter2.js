import React from 'react';
import {bindActionCreators} from '../redux';
import store from '../store';
import actions from '../store/actions/action2';

const boundCreators = bindActionCreators(actions, store.dispatch);

export default class Counter2 extends React.Component {
  state = {
    number: store.getState().counter2
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({number: store.getState().counter2});
    });
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <span>{this.state.number}</span>
        <button onClick={boundCreators.INCREMENT}>+</button>
        <button onClick={boundCreators.DECREMENT}>-</button>
      </div>
    );
  }
}
