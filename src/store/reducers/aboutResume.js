import {SELECTED_TEMPELATE} from '../actions/types';

const intialState = {
    selectedResume :"1"

}

export default function (state = intialState, action){
    
    switch(action.type){
        case SELECTED_TEMPELATE:
            return{
                ...state,
                selectedResume: action.payload
            }
       
        default: return state;
    }
}