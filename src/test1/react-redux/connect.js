import React from 'react';
import {ReduxContext} from './Provider';
import bindActionCreators from '../bindActionCreators';

const connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
  return class extends React.Component {
    static contextType = ReduxContext;

    constructor(props, context) {
      this.state = mapStateToProps(context.store.getState());
    }

    componentDidMount() {
      this.unsubscribe = this.context.store.subscribe(() => {
        this.setState(mapStateToProps(this.context.store.getState()));
      });
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      const actions = bindActionCreators(mapDispatchToProps, this.context.store.dispatch);
      return <Component {...this.state} {...actions}/>
    }
  }
};

export default connect;
