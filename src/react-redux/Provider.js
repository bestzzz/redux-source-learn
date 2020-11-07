import React, {Component} from 'react';
import ReduxContext from './context';

export default class Provider extends Component {
  render() {
    const {store, children} = this.props;
    return (
      <ReduxContext.Provider value={{store}}>
        {children}
      </ReduxContext.Provider>
    );
  }
};
