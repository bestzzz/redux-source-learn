import React from 'react';
import store from '../store';
import actions from '../store/actions/actions';
import {connect} from '../react-redux';

class Counter extends React.Component {
  state = {
    number: store.getState()
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <span>{this.props.number}</span>
        <button onClick={this.props.INCREMENT}>+</button>
        <button onClick={this.props.DECREMENT}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({number: state});
export default connect(mapStateToProps, actions)(Counter);
