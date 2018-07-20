import { combineReducers } from 'redux';

import austrianReducer from './austrian';
import pointsReducer from './points';


const rootReducer = combineReducers({
    austrian: austrianReducer,
    points: pointsReducer
});

export default rootReducer;
