import { combineReducers } from 'redux';

import austrianReducer from './austrian';
import advancedReducer from './advanced';
import pointsReducer from './points';
import apiReducer from './api';


const rootReducer = combineReducers({
    austrian: austrianReducer,
    advanced: advancedReducer,
    points: pointsReducer,
    api: apiReducer,
});

export default rootReducer;
