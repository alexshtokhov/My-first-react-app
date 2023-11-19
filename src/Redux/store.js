import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
const UPDATE_POST = 'UPDATE-POST';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const store = {
    _appState: {
        profilePage: {
            posts: [
                {id: 1, message: 'hello', likesCount: 11},
                {id: 2, message: 'Blalalallala', likesCount: 10},
                {id: 3, message: 'How are you?', likesCount: 12},
                {id: 4, message: 'Ollloooooloooo', likesCount: 7},
                {id: 5, message: 'Blalalallala', likesCount: 10},
            ],
        },
        dialogsPage: {
            dialogs: [
                {name: "Sasha", id: 1},
                {name: "Masha", id: 2},
                {name: "Dasha", id: 3},
                {name: "Jora", id: 4},
                {name: "Sasha", id: 5},
                {name: "Grisha", id: 6}
            ],
            messages: [
                {text: 'Hi! How are you?', id: 1},
                {text: 'Hi!', id: 2},
                {text: 'Hi! How are you?', id: 3},
                {text: 'Hi! How?', id: 4},
                {text: 'Hi! How are you?', id: 5}
            ],
            newTextMessage: ""
        },
        sideBar: {
            fiendsList: [
                {name: "Sasha", id: 1},
                {name: "Masha", id: 2},
                {name: "Dasha", id: 3},
                {name: "Jora", id: 4},
                {name: "Sasha", id: 5},
                {name: "Grisha", id: 6}
            ]
        },
    },
    _calSubscriber() {
        console.log('state changed');
    },


    subscribe(observer) {
        this._calSubscriber = observer;
    },
    getState() {
        return this._appState;
    },

    dispatch(action) {
        this._appState.profilePage = profileReducer(this._appState.profilePage, action);
        this._appState.dialogsPage = dialogsReducer(this._appState.dialogsPage, action);
        this._appState.sideBar = sidebarReducer(this._appState.sideBar, action);
        this._calSubscriber(this._appState);
    }
}


export default store;
window.store = store;
