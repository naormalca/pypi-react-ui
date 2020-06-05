// Action Creators

import { loginUser, signUp, autoAuth } from "../repository"

const setUser = (payload) => ({ type: "SET_USER", payload })

export const logUserOut = () => ({ type: "LOG_OUT" })

// Methods

export const fetchUser = (userData) => dispatch => {
    loginUser(userData)
        .then(data => {

            localStorage.setItem("auth_token", data.token)
            dispatch(setUser(data.user))
        })
}

export const signUserUp = (userData) => dispatch => {
    signUp(userData)
        .then(data => {
            localStorage.setItem("auth_token", data.token)
            dispatch(setUser(data.user))
        })
}

export const autoLogin = () => dispatch => {
    autoAuth()
        .then(data => {
            localStorage.setItem("auth_token", data.token)
            dispatch(setUser(data.user))
        })
}