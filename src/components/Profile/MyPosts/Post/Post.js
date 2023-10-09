import style from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={style.postBlock}>
            {props.message}
            <div>
                <p>Like {props.likesCount}</p>
            </div>
        </div>
    )
};
export default Post;