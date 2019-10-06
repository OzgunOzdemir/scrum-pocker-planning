import { UPDATE_EXAMPLE } from '../actions/index';

const exampleReducer = (state = [], { type, payload }) => {
    switch(type){
        case UPDATE_EXAMPLE:
            return payload.data;

        default:
            return state; 
    }
}

export default exampleReducer;