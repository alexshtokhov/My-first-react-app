import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateMessageTextCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {

    const dialogsEl = props.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messageEl = props.messages.map((message) => <Message text={message.text}/>);
    const newTextMessage = props.newTextMessage;

    const sendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }
    const sendMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateMessageTextCreator(body));
    }

    return (
        <div>
        <div className={style.all}>
            <div className={style.dialogs}>
                {dialogsEl}
            </div>
            <div className={style.messages}>
                {messageEl}
            </div>
        </div>
            <div>
                <div>
                    <textarea
                        value={newTextMessage}
                        onChange={sendMessageChange}
                        className={style.textArea}
                        placeholder={'Enter your message'}
                        >

                    </textarea>
                </div>
                <div><button onClick={sendMessageClick}>Send message</button></div>
            </div>

        </div>
    )
}
export default Dialogs;