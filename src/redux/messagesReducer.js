const MESSAGE_WRITING = "MESSAGE_WRITING";
const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
    messagesWith: [
        { id: 1, name: 'Dmytro' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Helena' },
        { id: 4, name: 'Ira' },
        { id: 5, name: 'Tomas' }
    ],
    newMessageText: ""
};

export const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case MESSAGE_WRITING:{
            let stateCopy = {...state};
            stateCopy.newMessageText = action.value;
            return stateCopy;
        }
        case ADD_MESSAGE:{
            let stateCopy = {...state}
            alert("Didn't done yet... \"" + stateCopy.newMessageText +"\" still stay with you.");
            return stateCopy;
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

export const addMessageCreator = (props) => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateTextAreaActionCreator = (text) =>{
    return{
      type: MESSAGE_WRITING, value: text
    }
}

export default messagesReducer;