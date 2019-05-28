import { DOCTOR_PROFILE } from './constants'
import {URL_DOCTORPROFILE} from '../lib/constants'
import { postToServer } from '../lib/comm-utils'

export const getDoctor = (data) =>{
    return{
        type:DOCTOR_PROFILE,
        data
    }
}

export const getDoctorDetail= (data) =>{
        return (dispatch) =>{
                postToServer(URL_DOCTORPROFILE,data)
                        .then(function(resp){ 
                            //console.log(resp.data);
                            dispatch(getDoctor(resp.data)) 

                            // if(resp.data.status == 200){ 
                            //     console.log(resp.data.statusText);
                                // dispatch(getDoctor(resp.data.downloadDcrPdt)) 
                            // }else{
                            //     // alert("error")
                            //     console.log(resp.data.statusText);
                            // }
                        })

        }
}

