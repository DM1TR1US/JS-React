import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        messagesInfo: {
            messagesWith: [
                { id: 1, name: 'Dmytro' },
                { id: 2, name: 'Alex' },
                { id: 3, name: 'Helena' },
                { id: 4, name: 'Ira' },
                { id: 5, name: 'Tomas' }
            ],
            newMessageText: ""
        },

        profilePage: {
            postData: [
                { id: 4, UserName: 'Dmytro', title: "Post", text: "Text" },
                { id: 3, UserName: 'Dmytro', title: "PostPost", text: "Text Text" },
                { id: 2, UserName: 'Dmytro', title: "PostPostPost", text: "Text Text Text" },
                { id: 1, UserName: 'Dmytro', title: "PostPostPostPost", text: "Text Text Text Text" },
            ],
            newPostText: "Text for post"
        }
    },

    getState() {
        return this._state;
    },

    _subscriberCall() {
        console.log('state modified');
    },

    subscribe(observer) {
        this._subscriberCall = observer;
    },

    dispatch(action) {

        this._state.profilePage =  profileReducer(this._state.profilePage, action);
        this._state.messagesInfo =  messagesReducer(this._state.messagesInfo, action);

        this._subscriberCall(this._state);
    }
}


// export default store;
// window.store = store;