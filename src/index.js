import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './react-redux';
import Counter1 from './component/Counter1';
import Counter2 from './component/Counter2';
import Counter from './component/Counter';
import store from './store';

ReactDOM.render(<Provider store={store}>
  <Counter/>
</Provider>, document.getElementById('root'));
