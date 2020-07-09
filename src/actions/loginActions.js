// Action Creators

import { loginUser } from "../repository"
import { history } from '../helpers/history.js'

export const setUser = (email) => ({ type: "SET_USER", email });
const setError = (error) => ({ type: "SET_ERROR", error });
const loginRequest = (email) => ({ type: "SET_REQUEST", email })
export const logOut = () => ({ type: "LOG_OUT" })

// Methods

export const login = (userData) => dispatch => {
    dispatch(loginRequest(userData.email));
    loginUser(userData)
        .then(res => {
            if (res.status === 202) {
                dispatch(setError(res.data.error));
            }
            else {
                localStorage.setItem("auth_token", res.data.auth_token);
                dispatch(setUser(userData.email));
                history.push('/');
            }
        })
}

export const logout = () => dispatch => {
    localStorage.removeItem("auth_token");
    dispatch(logOut());
    history.push('/');
}