import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import updateDataReducer from './reducers/updateDataReducer';


const reducers = combineReducers({
    updateData: updateDataReducer,
});

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);