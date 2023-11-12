import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsEl = props.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messageEl = props.messages.map((message) => <Message text={message.text}/>);


    let newMessageElement = React.createRef();
    const addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={style.all}>
            <div className={style.dialogs}>
                {dialogsEl}
            </div>
            <div className={style.messages}>
                {messageEl}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}
export default Dialogs;