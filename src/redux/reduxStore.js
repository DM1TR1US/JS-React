import {createStore, combineReducers, applyMiddleware} from "redux";
import authReducer from "./authReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleWare from "redux-thunk";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesInfo: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;