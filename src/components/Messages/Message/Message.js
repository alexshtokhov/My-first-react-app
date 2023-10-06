import style from "./Message.module.css";
import React from "react";


const Message = (props) => {
    return (
        <div className={style.message}>
            {props.text}
        </div>
    )
}
export default Message;