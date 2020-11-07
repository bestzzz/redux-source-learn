import {createStore} from 'redux';

let initState = 0;
const INCREMENT = Symbol.for('INCREMENT');
const DECREMENT = Symbol.for('DECREMENT');
function reducer(state, action) {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer, initState);

const contentBox = document.getElementById('counter');
const inscremeBtn = document.getElementById('inscrem');
const descremeBtn = document.getElementById('descrem');

function render() {
  contentBox.innerHTML = store.getState();;
}
render();
store.subscribe(render);

inscremeBtn.addEventListener('click', () => {
  store.dispatch({type: INCREMENT});
});

descremeBtn.addEventListener('click', () => {
  store.dispatch({type: DECREMENT});
});
