import { createStore, combineReducers } from 'redux'
import{reducer as form}from'redux-form';
const reducers = combineReducers({
    form:form
})

const store = createStore(reducers);
window.store = store;
export default store;