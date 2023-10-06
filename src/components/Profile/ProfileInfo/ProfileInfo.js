import styles from "./ProfileInfo.module.css";
import baner from "../../../img/dsquared2-banner.jpg";


const ProfileInfo = () => {
    return (
        <div className={styles.content}>
            <img src={baner} className={styles.banner}/>
            <div>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;