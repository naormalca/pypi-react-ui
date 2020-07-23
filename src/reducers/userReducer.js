const defaultState = {
    userId: '',
    userEmail: ''
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "USER_AUTH":
            return {
                userEmail: action.email,
                userId: action.userId
            }
        default: return state
    }
}

export default userReducer;