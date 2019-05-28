import axios from 'axios'
import { URL_BASE, SFA_TOKEN } from './constants'

let token = false

export function setCommToken(tkn) {
    token = tkn
    sessionStorage.setItem(SFA_TOKEN, tkn)
}

export function getCommToken() {
    if (token)
        return token
    let tkn = sessionStorage.getItem(SFA_TOKEN)
    if (tkn)
        token = tkn
    return token
}

export function postToServer(url, body={}) {
    body = token ? {...body, Token:token} : body
    return axios.post(URL_BASE+url, body)
}

export function getFromServer(url, body={}) {
    body = token ? {...body, Token:token} : body
    return axios.get(URL_BASE+url, body)
}

