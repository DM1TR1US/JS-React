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
    loginAPI.isAuth()
    .then(response => {
       if(response.data.resultCode === 0){
           let {userId, login, mail} = response.data.data;
           dispatch(setUser(mail, userId, login, true));
       } 
    });
}


export const setUser = (mail, userId, login, isLogged) => {
    return {
        type: SET_USER, data:{ mail, userId, login, isLogged}
    }
}
export const changeFetch = (isFetching) => ({ type: TOGGLE_FETCH, isFetching });


export const login = (email, password, rememember) => (dispatch) => {
    loginAPI.login(email,password,rememember)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(getUserData());
            }else{
                alert(response.data.messages[0])
            }
        })
}

export const logout = () => (dispatch) => {
    loginAPI.logout()
        .then(response => {
            if(response.resultCode === 0){
                dispatch(setUser(null, null, null, false));
            }
        })
}

export default authReducer;