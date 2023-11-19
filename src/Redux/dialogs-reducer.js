const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newTextMessage = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newTextMessage;
            state.newTextMessage = '';
            state.messages.push({text: body, id: 5});
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateMessageTextCreator = (textMessage) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    body: textMessage
})
export default dialogsReducer;