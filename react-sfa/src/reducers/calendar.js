import { COMPLETED_TASK, PLANNED_TASK, UN_PLANNED_TASK, PRE_PLANNED_TASK, TODAY_EVENTS } from '../actions/constants'

export default function Calendar(state = {}, action){
    switch(action.type){

        case COMPLETED_TASK:
            return ({...state, completedTask: action.data})

        case UN_PLANNED_TASK:
            return ({...state, unPlannedTask: action.data})

        case PRE_PLANNED_TASK: 
            return ({...state, prePlannedTask: action.data})

        case PLANNED_TASK: 
            return ({...state, plannedTask: action.data})
        
        case TODAY_EVENTS: 
            return ({...state, Events: action.data})

        default:
            return state

    }
}