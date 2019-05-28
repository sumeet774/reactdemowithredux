import { DCR_PRODUCT, DCR_DROPDOWN } from './constants'
import {URL_DCR, URL_PRODUCT_DROPDOWN} from '../lib/constants'
import { postToServer } from '../lib/comm-utils'

export const getDCR = (data) =>{
    return{
        type:DCR_PRODUCT,
        data
    }
}

export const getProductDetail= (data) =>{
        return (dispatch) =>{
                postToServer(URL_DCR,data)
                        .then(function(resp){ 
                            if(resp.data.Status == 'Success'){ 
                                dispatch(getDCR(resp.data.downloadDcrPdt)) 
                            }else{
                                alert("error")
                            }
                        })

        }
}

export const getDCRDropdown = (data) =>{
    return{
        type:DCR_DROPDOWN,
        data
    }
}

export const getProductDropdown = (data) =>{ 
        return (dispatch) =>{
                postToServer(URL_PRODUCT_DROPDOWN,data)
                        .then(function(resp){ 
                            dispatch(getDCRDropdown(resp.data)) 
                          
                        })

        }
}

