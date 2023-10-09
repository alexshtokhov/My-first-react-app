import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsEl = props.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messageEl = props.messages.map((message) => <Message text={message.text}/>);

    return (
        <div className={style.all}>
            <div className={style.dialogs}>
                {dialogsEl}
            </div>
            <div className={style.messages}>
                {messageEl}
            </div>
        </div>
    )
}
export default Dialogs;