import ExampleReducer from './ExampleReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
        example: ExampleReducer
});


export default rootReducer;