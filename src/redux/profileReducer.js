const ADD_POST = "ADD-POST";
const POST_WRITING = "POST-WRITING";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
        postData: [
            { id: 4, UserName: 'Dmytro', title: "Post", text: "Text" },
            { id: 3, UserName: 'Dmytro', title: "PostPost", text: "Text Text" },
            { id: 2, UserName: 'Dmytro', title: "PostPostPost", text: "Text Text Text" },
            { id: 1, UserName: 'Dmytro', title: "PostPostPostPost", text: "Text Text Text Text" },
        ],
        newPostText: "Text for post",
        profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state};
            if (stateCopy.newPostText.length > 3) {
                let newPost = {
                    id: 5,
                    text: stateCopy.newPostText,
                    UserName: "author",
                    title: stateCopy.newPostText
                }
                stateCopy.postData = [{...newPost}, ...state.postData];
                stateCopy.newPostText = "";
                return stateCopy;
            } else {
                alert("Something gone wrong. Try to write something longer than 3 symbols before post it.");
            }
        }
        case POST_WRITING: {
            return{
                    ...state,
                    newPostText: action.value
            }
        }
        case SET_USER_PROFILE: {
            return{
                    ...state,
                    profile: action.value
            }
        }
        default: 
            return state;
    }
}
//     if (action.type === ADD_POST) {
//         if (state.newPostText.length > 3) {
//             let newPost = {
//                 id: 5,
//                 text: state.newPostText,
//                 UserName: "author",
//                 title: state.newPostText
//             }

//             state.newPostText = "";
//             state.postData.unshift(newPost);

//         } else {
//             alert("Something gone wrong. Try to write something longer than 3 symbols before post it.");
//         }
//     } else if (action.type === POST_WRITING) {
//         state.newPostText = action.value;
//     }
//     return state;

export const addPostActionCreator = (props) => {
    return {
        type: ADD_POST
    }
}

export const updateTextAreaActionCreator = (text) => {
    return {
        type: POST_WRITING, value: text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, value: profile
    }
}

export default profileReducer;
