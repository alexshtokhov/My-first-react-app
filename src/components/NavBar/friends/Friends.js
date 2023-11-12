import './Friends.module.css'
import style from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {

    let friendList = props.dialogs.map(friend => <FriendItem names={friend.name}/>);

    return (
        <div className={style.friendsBlock}>
            <h3>Friends</h3>
            {friendList}
        </div>
    )
}
export default Friends;