import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { combineReducers } from 'redux';
import step1Reducer from './state/reducers/step1Reducer';
import { Provider } from 'react-redux';
import { store } from './state/store'

//import { createStore } from 'redux';


const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  userName: '',
  password: ''
}



/* // Action
// An action is a plain object that describes the intention to cause change with a type property.
const saveStep1 = () => {
  return {
    type: "SAVE_FIRST",
    firstName: 'testName'
  };
}

// Reducer
// A reducer is a function that returns the next state of app
const dataSaver = async (state = initialState, action) => {
  switch(action.type){
    case "SAVE_FIRST_STEP":
      return Object.assign({}, state, {
        firstName: action.firstName
      });
    default:
      return state;
  }
}

let store = createStore(dataSaver);

store.dispatch(saveStep1);
store.subscribe(() => {
  console.log(store.getState());
})
 */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
