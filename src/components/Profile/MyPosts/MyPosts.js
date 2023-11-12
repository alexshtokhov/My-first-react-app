import Post from "./Post/Post";
import style from "./MyPosts.module.css";
import React from "react";

const MyPosts = (props) => {

    let postEl = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    const newPostElement = React.createRef();
    const addPosts = () => {
        props.addPost();
    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePost(text);
    }
    return (
        <div>
            <div className={style.area}>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                value={props.text}/>
            </div>
            <div className={style.buttons}>
                <button onClick={addPosts}>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={style.area}>
                {postEl}
            </div>
        </div>
    )
};
export default MyPosts;