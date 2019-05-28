//MASTER_List

import { MASTEREDIT, MASTER_LIST ,MASTERheader, TOGGLE_DCR_HEADER, IS_FULL} from '../actions/constants'

export default function MASTERLIST(state = {}, action) {
    
    switch (action.type) {

        case MASTEREDIT:
        console.log(action.data,'kunal')
        return ({...state, Edit:action.data});

        case MASTER_LIST:
            console.log("setting token in global store....")
            return ({...state, data:action.data});
        case MASTERheader:
            console.log("setting token in global store....")
            return ({...state, header:action.data});
        case TOGGLE_DCR_HEADER:
            return({ ...state, toggleHeader: !state.toggleHeader})
        case IS_FULL: 
            return({ ...state, isFull: !state.isFull})
        default:
            return state
    }
}

