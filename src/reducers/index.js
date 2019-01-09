import { combineReducers } from 'redux';
import viewReducer from './viewReducer';

const counterApp = combineReducers({
    viewReducer
})

export default counterApp
