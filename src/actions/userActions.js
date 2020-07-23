import { autoAuth } from "../repository"
const userAuth = (email, userId) => ({ type: "USER_AUTH", email, userId })


export const autoLogin = () => dispatch => {
    autoAuth()
        .then(res => {
            if (res.status === 200) {
                // in case of refreshing token
                //localStorage.setItem("auth_token", res.auth_token)
                dispatch(userAuth(res.data.data.email, res.data.data.user_id))
            }
        })
}