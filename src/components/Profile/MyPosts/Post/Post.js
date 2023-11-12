import style from "./Post.module.css";
import avatar from "../../../../img/avaMale.png";

const Post = (props) => {
    return (
        <div className={style.postBlock}>
            <img src={avatar} className={style.ava} />
            {props.message}
            <div>
                <p>Like {props.likesCount}</p>
            </div>
        </div>
    )
};
export default Post;