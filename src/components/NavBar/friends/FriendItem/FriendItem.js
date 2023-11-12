import avatar from "../../../../img/avaMale.png";
import style from "../Friends.module.css";

const FriendItem = (props) => {
    return (
        <div>
            <img src={avatar} className={style.avatar}/>
            <p>{props.names}</p>
        </div>
    );
}
export default FriendItem;