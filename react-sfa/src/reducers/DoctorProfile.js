import { DOCTOR_PROFILE } from '../actions/constants'

export default function DOCTOR(state = {}, action) {
    switch (action.type) {
        case DOCTOR_PROFILE:
            //console.log(action)
            return ({...state, data:action.data});

        default:
            return state
    }
}
