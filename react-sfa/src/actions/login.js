import { ADD_TOKEN, SET_LOGIN_ERROR, DELETE_TOKEN } from './constants'
import { URL_LOGIN } from '../lib/constants'
import { postToServer, setCommToken } from '../lib/comm-utils'

export const addToken = (token) => {
	return {
		type:ADD_TOKEN,
		token
	}
}

export const setLoginError = (message) => {
	return {
		type:SET_LOGIN_ERROR,
		message
	}
}

export const deleteToken = () => {
	return {
		type:DELETE_TOKEN,
	}
}

export const doLogin = (data) => {
    return (dispatch) => {
		postToServer(URL_LOGIN,data)
			.then(function(resp) {
				if (resp.data.Status=="Success") {
					dispatch(addToken(resp.data.Token))
					setCommToken(resp.data.Token)
				}
				else {
					dispatch(setLoginError(resp.data.Status_Message))
				}
			});
	}
}
