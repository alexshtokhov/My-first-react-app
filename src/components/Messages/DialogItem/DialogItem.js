import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return  (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;