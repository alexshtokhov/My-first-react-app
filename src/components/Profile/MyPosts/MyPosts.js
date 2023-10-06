import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div>
            <div className={style.area}>
                <textarea> </textarea>
            </div>
            <div className={style.buttons}>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <Post message='hello'/>
            <Post message='Blalalallala'/>
            <Post message='How are you?'/>
            <Post/>
            <Post/>
        </div>
    )
};
export default MyPosts;