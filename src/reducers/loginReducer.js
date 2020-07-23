const defaultState = {
    loggedIn: false,
    userEmail: {},
    error: ''
}

const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_REQUEST":
            return {
                loggingIn: true,//for login form
                userEmail: action.email
            }
        case "SET_USER":
            return {
                loggedIn: true,
                userEmail: action.email,
            }
        case "LOG_OUT":
            localStorage.clear()
            return {
                loggedIn: false,
                userEmail: {}
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