import { DCR_PRODUCT, DCR_DROPDOWN } from '../actions/constants'

export default function DCR(state = {}, action) {
    switch (action.type) {
        case DCR_PRODUCT:
            console.log("setting token in global store....")
            return ({...state, data:action.data});
        case DCR_DROPDOWN:
            console.log("setting token in global storee....")
            return ({...state, dataDropdown:action.data});
        default:
            return state
    }
}