import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <textarea> </textarea>
            <button>Add post</button>
            <button>Remove post</button>
            <Post message='hello'/>
            <Post message='Blalalallala'/>
            <Post message='How are you?'/>
            <Post/>
            <Post/>
        </div>
    )
};
export default MyPosts;