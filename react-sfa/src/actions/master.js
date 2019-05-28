import { MASTER_LIST,MASTERheader, MASTEREDIT} from './constants'
import { URL_LIST_MASTER } from '../lib/constants'
import { postToServer } from '../lib/comm-utils'

export const MASTERList = (data) => {
	return {
		type:MASTER_LIST,
		data
	}
}


export const MASTERhead= (data) => {
	return {
		type:MASTERheader,
		data
	}
}





export const MASTEREdit= (data) => {
	 

	return {
		type:MASTEREDIT,
		data
	}
}
export const getMASTERList = (data) => {
    return (dispatch) => {
		postToServer(URL_LIST_MASTER,data)
			.then(function(resp) {
					// header set up
					const headerkey=[]
				if (resp.data.length!=0) {
					console.log(resp.data,'kunal sinha master')
					dispatch(MASTERList(resp.data))
				
					Object.keys(resp.data[0]).map((head_key,kl)=>{ 

						headerkey.push( { "title": head_key , "prop": head_key, "sortable": true, "filterable": true } )
					 } )
					dispatch(MASTERhead(headerkey))
					 

					
				}
				else {
					//console.log(resp)
					//alert("error")
        }
			});
	}
}




export const getMASTERLEdit = (data) => {

	

	
    return (dispatch) => {
	
					dispatch(MASTEREdit(data))
					 
	}
}
