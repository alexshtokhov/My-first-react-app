
let renderEntire = () => {
    console.log('state changed');
}

let appState = {

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
}

export const addPost = () => {
    let newPost = {
        id: 6,
        message: appState.posts.message,
        likeCount: 0
    }
    appState.posts.push(newPost);
    renderEntire(appState);
}
export const updatePost = (newText) => {
    appState.posts.message = newText;
    renderEntire(appState);
}

export const subscribe = (observer) => {
    renderEntire = observer;
}
export default appState;
