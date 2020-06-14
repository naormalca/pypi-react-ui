const defaultState = {
    loggedIn: false,
    user: {},
    error: ''
}

const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_REQUEST":
            return {
                loggingIn: true,//for login form
                user: action.email
            }
        case "SET_USER":
            return {
                loggedIn: true,
                user: action.email
            }
        case "LOG_OUT":
            localStorage.clear()
            return {
                loggedIn: false,
                user: {}
            }
        case "SET_ERROR":
            return {
                loggedIn: false,
                error: action.error
            }
        default: return state
    }
}

export default loginReducer