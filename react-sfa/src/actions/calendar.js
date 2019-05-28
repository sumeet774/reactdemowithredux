import { COMPLETED_TASK , PLANNED_TASK, UN_PLANNED_TASK, PRE_PLANNED_TASK, TODAY_EVENTS} from './constants'
import { URL_CALENDAR, URL_TASK } from '../lib/constants'
import { postToServer } from '../lib/comm-utils'
import {format} from 'date-fns'


export const CompletedTask = (data) => {
    return {
        type: COMPLETED_TASK,
        data
    }
}

export const getCompletedTask = (data) => {
    return(dispatch) => {
        postToServer(URL_CALENDAR, data)
        .then(function(resp){
            if(resp.statusText == "OK"){
                dispatch(CompletedTask(resp.data))
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const PlannedTask = (data) => {
    return {
        type: PLANNED_TASK, 
        data
    }
}

export const getPlannedTask = (data) => {
    return(dispatch) => {
        postToServer(URL_CALENDAR, data)
        .then(function(resp){
            if(resp.statusText == "OK"){
                dispatch(PlannedTask(resp.data))
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const UnPlannedTask = (data) => {
    return {
        type: UN_PLANNED_TASK, 
        data
    }
}

export const getUnPlannedTask = (data) => {
    return(dispatch) => {
        postToServer(URL_TASK , data)
        .then(function(resp){
            if(resp.statusText == "OK"){
                dispatch(UnPlannedTask(resp.data))
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const PrePlannedTask = (data) => {
    return {
        type: PRE_PLANNED_TASK, 
        data
    }
}

export const getPrePlannedTask = (data) => {
    return(dispatch) => {
        postToServer(URL_TASK , data)
        .then(function(resp){
            if(resp.statusText == "OK"){
                dispatch(PrePlannedTask(resp.data))
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const AddnewTask = (data) => {
    return(dispatch) => {
        postToServer(URL_TASK , data)
        .then(function(resp){
            if(resp.data.Result == 6 ){
                var data = {
                    "Token": "KAPL|SHASHIKANT GARAG|PSR070|A00061|OBgZ2019-05-14T17:52:09+05:30",
                    "task_type_code":"",
                    "task_description":"",
                    "task_date":"",
                    "task_time":"",
                    "index":"3"
                }
                postToServer(URL_TASK , data)
                .then(function(resp){
                    if(resp.statusText == "OK"){
                        dispatch(UnPlannedTask(resp.data))
                    }
                })
                .catch(error => {
                    console.log(error)
                })                  
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const AddnewPlannedTask = (data) => {
    return(dispatch) => {
        postToServer(URL_TASK , data)
        .then(function(resp){
            if(resp.data.Result == 6 ){
                var data = {
                    "Token": "KAPL|SHASHIKANT GARAG|PSR070|A00061|OBgZ2019-05-14T17:52:09+05:30",
                    "task_type_code":"",
                    "task_description":"",
                    "task_date":"2019-05-25",
                    "task_time":"",
                    "index":"3"
                }
                postToServer(URL_TASK , data)
                .then(function(resp){
                    if(resp.statusText == "OK"){
                        dispatch(PrePlannedTask(resp.data))
                    }
                })
                .catch(error => {
                    console.log(error)
                })                  
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const moveToPlannedTask = (data) => {
    return(dispatch) => {
        postToServer(URL_TASK , data)
        .then(function(resp){
            if(resp.data.Result == 6 ){
                var plannedData = {
                    "Token": "KAPL|SHASHIKANT GARAG|PSR070|A00061|OBgZ2019-05-14T17:52:09+05:30",
                    "task_type_code":"",
                    "task_description":"",
                    "task_date":"2019-05-25",
                    "task_time":"",
                    "index":"3"
                }
                postToServer(URL_TASK , plannedData)
                .then(function(resp){
                    if(resp.statusText == "OK"){
                        dispatch(PrePlannedTask(resp.data))
                        var unplannedData = {
                            "Token": "KAPL|SHASHIKANT GARAG|PSR070|A00061|OBgZ2019-05-14T17:52:09+05:30",
                            "task_type_code":"",
                            "task_description":"",
                            "task_date":"",
                            "task_time":"",
                            "index":"3"
                        }
                        postToServer(URL_TASK , unplannedData)
                        .then(function(resp){
                            if(resp.statusText == "OK"){
                                dispatch(UnPlannedTask(resp.data))
                            }
                        })
                        .catch(error => {
                            console.log(error)
                        })  
                    }
                })
                .catch(error => {
                    console.log(error)
                })                  
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const TodayEvents = (data) => {
    return {
        type: TODAY_EVENTS, 
        data
    }
}


export const getTodayEvents = (data) => {
    return(dispatch) => {
        postToServer(URL_CALENDAR, data)
        .then(function(resp){
            if(resp.statusText == "OK"){
                dispatch(TodayEvents(resp.data))
            }
        })
    }
}

