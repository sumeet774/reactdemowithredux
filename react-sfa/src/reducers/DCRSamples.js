import { DCR_PRAMOTIONS } from '../actions/constants'

export default function DCRSamples(state = {}, action) { 
    switch (action.type) { 
        case DCR_PRAMOTIONS:
            console.log("setting token in global store....")
            return ({...state, data:action.data});
       
        default:
            return state
    }
}
