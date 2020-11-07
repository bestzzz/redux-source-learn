import React from 'react';
import ReduxContext from './context';
import {bindActionCreators} from '../redux';

export default function connect(mapStateToProps, mapDispatchToProps) {
  return (WrappedComponent) => {
    return class extends React.Component {
      static contextType = ReduxContext;

      constructor(props, context) {
        super(props);
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
        const dispatch = this.context.store.dispatch;
        const actions = bindActionCreators(mapDispatchToProps, dispatch);
        return <WrappedComponent {...this.state} {...actions}/>;
      };
    }
  };
};
