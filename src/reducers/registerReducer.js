const defaultState = {
    registering: false,
    error: ''
}

const registerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "REGISTER_REQUEST":
            return {
                registering: true
            }
        case "REGISTER_ERROR":
            return {
                registering: false,
                error: action.error
            }
        default: return state
    }
}

export default registerReducer;