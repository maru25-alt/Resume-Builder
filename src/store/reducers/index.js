import {combineReducers} from 'redux';
import aboutTemplate from './aboutResume';
import currentResume from './currentResume'

import templetesReducer from './templetesReducer';


export default combineReducers({
    templetesReducer: templetesReducer,
    aboutTemplate: aboutTemplate,
    currentResume
})