import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import female from "../../../img/avaFemale.jpeg"
import male from "../../../img/avaMale.png"


const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return  (
        <div className={style.dialog}>
            <img src={female} className={style.avatar}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;