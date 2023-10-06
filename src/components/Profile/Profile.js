import banner from "../../img/dsquared2-banner.jpg";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={styles.content}>
            <img src={banner}/>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
};
export default Profile;