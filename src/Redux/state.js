const UPDATE_POST = 'UPDATE-POST';
const ADD_POST = 'ADD-POST';

const store = {
    _appState: {

        posts: [
            {id: 1, message: 'hello', likesCount: 11},
            {id: 2, message: 'Blalalallala', likesCount: 10},
            {id: 3, message: 'How are you?', likesCount: 12},
            {id: 4, message: 'Ollloooooloooo', likesCount: 7},
            {id: 5, message: 'Blalalallala', likesCount: 10},
        ],
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
        ]
    },
    _calSubscriber() {
        console.log('state changed');
    },

    /* addPost() {
        let newPost = {
            id: 6,
            message: this._appState.posts.message,
            likeCount: 0
        }
        this._appState.posts.push(newPost);
        this._calSubscriber(this._appState);
    },
    updatePost(newText) {
        this._appState.posts.message = newText;
        this._calSubscriber(this._appState);
    },  */

    subscribe(observer) {
        this._calSubscriber = observer;
    },
    getState() {
        return this._appState;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                message: this._appState.posts.message,
                likeCount: 0
            }
            this._appState.posts.push(newPost);
            this._calSubscriber(this._appState);
        } else if (action.type === UPDATE_POST) {
            this._appState.posts.message = action.text;
            this._calSubscriber(this._appState);
        }
    },

}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({
    type: UPDATE_POST,
    text: text
});
export default store;
window.store = store;
