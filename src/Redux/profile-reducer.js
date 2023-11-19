const UPDATE_POST = 'UPDATE-POST';
const ADD_POST = 'ADD-POST';

const initialState = {
    posts: [
        {id: 1, message: 'hello', likesCount: 11},
        {id: 2, message: 'Blalalallala', likesCount: 10},
        {id: 3, message: 'How are you?', likesCount: 12},
        {id: 4, message: 'Ollloooooloooo', likesCount: 7},
        {id: 5, message: 'Blalalallala', likesCount: 10},
    ],
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: action.newText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newText = '';
            return state;
        case UPDATE_POST:
            state.message = action.text;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = (text) => ({type: ADD_POST,
    newText: text});
export const updatePostActionCreator = (text) => ({
    type: UPDATE_POST,
    newText: text
});
export default profileReducer;