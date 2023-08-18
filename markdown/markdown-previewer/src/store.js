import { createStore } from 'redux';

const initialState = {
  markdown: ''
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_MARKDOWN':
      return {...state, markdown: action.payload}
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
