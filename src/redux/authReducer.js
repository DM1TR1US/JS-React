import { loginAPI } from "../api/api";

const SET_USER = "SET_USER";
const TOGGLE_FETCH = "TOGGLE_FETCH"

let initialState = {
    mail: null,
    userId: null,
    login: null,
    isLogged: false,
    isFetching: true
};

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER:{
            return{
                ...state,
                ...action.data,
                isLogged: true
            }
        }
        case TOGGLE_FETCH: {
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state;
    }
}

export const getUserData = () => (dispatch) =>  {
    loginAPI.isLogged()
    .then(response => {
       if(response.data.resultCode === 0){
           let {userId, login, mail} = response.data.data;
           dispatchEvent(setUser(mail, userId, login));
       } 
    });
}


export const setUser = (mail, userId, login) => {
    return {
        type: SET_USER, data:{ mail, userId, login}
    }
}
export const changeFetch = (isFetching) => ({ type: TOGGLE_FETCH, isFetching });

export default authReducer;