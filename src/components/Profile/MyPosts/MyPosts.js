import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = (props) => {


    let postEl = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div>
            <div className={style.area}>
                <textarea> </textarea>
            </div>
            <div className={style.buttons}>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={style.area}>
                {postEl}
            </div>
        </div>
    )
};
export default MyPosts;