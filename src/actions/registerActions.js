import { signUp } from '../repository'
import { history } from '../helpers/history'

const registerRequest = () => ( {type: "REGISTER_REQUEST"})
const setError = (error) => ({ type: "REGISTER_ERROR", error });


export const register = (userData) => dispatch => {
    dispatch(registerRequest);
    signUp(userData)
        .then(res => {
            if (res.status === 202) {
                console.log(res.data);
                dispatch(setError(res.data.error));
            }
            else {
                history.push('/login')
            }
        })
}