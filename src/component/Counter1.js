import React from 'react';
import {bindActionCreators} from '../redux/index';
import store from '../store';
import actions from '../store/actions/action1';

const boundCreators = bindActionCreators(actions, store.dispatch);

export default class Counter1 extends React.Component {
  state = {
    number: store.getState().counter1
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({number: store.getState().counter1});
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

