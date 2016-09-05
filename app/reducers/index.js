import  {combineReducers} from 'redux';
import components from './componentReducers';

const rootReducer = combineReducers({
    components
});

export default rootReducer;