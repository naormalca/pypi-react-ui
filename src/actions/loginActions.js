// Action Creators

import { loginUser, autoAuth } from "../repository"
import { history } from '../helpers/history.js'

const setUser = (email) => ({ type: "SET_USER", email })
const setError = (error) => ({ type: "SET_ERROR", error });
const loginRequest = (email) => ({ type: "SET_REQUEST", email })
export const logOut = () => ({ type: "LOG_OUT" })

// Methods

export const login = (userData) => dispatch => {
    dispatch(loginRequest(userData.email));
    loginUser(userData)
        .then(res => {
            if (res.status === 202) {
                console.log(res.data);
                dispatch(setError(res.data.error));
            }
            else {
                console.log(res.data)
                localStorage.setItem("auth_token", res.data.auth_token);
                dispatch(setUser(userData.email));
                history.push('/');
            }
        })
}



export const autoLogin = () => dispatch => {
    autoAuth()
        .then(res => {
            if (res.status === 200) {
                // in case of refreshing token
                //localStorage.setItem("auth_token", res.auth_token)
                dispatch(setUser(res.user))
            }
        })
}

export const logout = () => dispatch => {
    localStorage.removeItem('auth_token');
    dispatch(logOut());
    history.push('/');
}