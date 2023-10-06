import React from "react";
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    return (
        <div className={style.all}>
            <div className={style.dialogs}>
                <DialogItem name="Sasha" id="1" />
                <DialogItem name="Masha" id="2" />
                <DialogItem name="Dasha" id="3" />
                <DialogItem name="Jora" id="4" />
            </div>
            <div className={style.messages}>
                <Message text='Hi! How are you?'/>
                <Message text='Hi! How are you?'/>
                <Message text='Hi! How are you?'/>
                <Message text='Hi! How are you?'/>
            </div>
        </div>
    )
}
export default Dialogs;