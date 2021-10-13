import { applyMiddleware, combineReducers, createStore } from 'redux';
import step1Reducer from './reducers/step1Reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    step1: step1Reducer
});

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()