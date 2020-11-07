import React from 'react';
export const ReduxContext = React.createContext();

export default class Provider extends React.Component {
  render() {
    const {store, children} = this.props;
    return (
      <ReduxContext.Provider value={store}>
        {children}
      </ReduxContext.Provider>
    );
  };
}