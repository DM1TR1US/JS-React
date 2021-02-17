import axios from "axios";
import { usersAPI } from '../api/api';

const CHANGE_FOLLOW = "CHANGE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_FETCH = "TOGGLE_FETCH";
const BUTTON_DISABLER = "BUTTON_DISABLER";

let initialState = {
    users: [
        // { id: 1, fullName: "Alex Mercer", country: "Ukraine", city: "Kharkiv", subscribed: false },
        // { id: 2, fullName: "Frederik Zhopen", country: "US", city: "New York City", subscribed: true },
        // { id: 3, fullName: "Merlin Monro", country: "UK", city: "London", subscribed: false },
        // { id: 4, fullName: "Lena Kuka", country: "Ukraine", city: "Lviv", subscribed: true },
        // { id: 5, fullName: "Sedan Uromas", country: "Belarus", city: "Minsk", subscribed: false },
        // { id: 6, fullName: "Adam Arabov", country: "Poland", city: "Warsawa", subscribed: false },
        // { id: 7, fullName: "People partner", country: "Ukraine", city: "Ternopil", subscribed: false },
        // { id: 8, fullName: "Help me", country: "Ukraine", city: "Merefa", subscribed: false },
        // { id: 9, fullName: "Enough", country: "Ukraine", city: "Kyiv", subscribed: false }
    ],
    buttonsDisabled: [],
    pageSize: 8,
    usersCount: 0,
    currentPage: 1,
    isFetching: true
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FOLLOW: {
            return {
                ...state, 
                users: state.users.map(u => u.id === action.userId ? u.followed ? {...u, followed: false} : {...u, followed: true}: u)
            }
        }
        case SET_USERS: {
            return { ...state, users: [...action.users] }
        }
        case TOGGLE_FETCH: {
            return { ...state, isFetching: action.isFetching }
        }
        case BUTTON_DISABLER: {
            return state.buttonsDisabled.includes(action.userId) ? 
                        {...state, buttonsDisabled: [...state.buttonsDisabled, action.userId]}
                        : {...state, buttonsDisabled: [...state.buttonsDisabled.filter(el => el != action.userId)]}
        }
        case SET_USERS_COUNT: {
            return { ...state, usersCount: action.usersCount }
        }
        case SET_CURRENT_PAGE: {
            return{...state, currentPage: action.currentPage }
        }
        default:
            return state;
    }
}

// if (action.type === MESSAGE_WRITING) {
//     state.newMessageText = action.value;
// } else if (action.type === ADD_MESSAGE) {
//     alert("Didn't done yet...");
// }
// return state;

export const changeFollow = (userId) => ({ type: CHANGE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setUsersCount = (usersCount) => ({ type: SET_USERS_COUNT, usersCount });
export const changePage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const changeFetch = (isFetching) => ({ type: TOGGLE_FETCH, isFetching });
export const buttonDisabler = (userId) => ({ type: BUTTON_DISABLER, userId });

export const getUsers = (currentPage, pageSize) => {
    return dispatch => {
        dispatch(changeFetch(true));
        usersAPI.getUsers(currentPage, pageSize)
        .then(response => {
            dispatch(changeFetch(false));
            dispatch(setUsers(response.items));
            dispatch(setUsersCount(response.totalCount));
        });
    }
}

export const changeFollowed = (userId, isFollowed) => {
    return (dispatch) => {
        dispatch(buttonDisabler(userId));
        usersAPI.changeFollowData(userId, isFollowed).then(data => {
            dispatch(changeFollow(userId));
            dispatch(buttonDisabler(userId));
        }); 
    }
}

export default usersReducer;