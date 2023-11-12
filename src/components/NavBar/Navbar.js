import './Navbar.module.css'
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./friends/Friends";



const Navbar = (props) => {

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs/:id'>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
            <div>
                <Friends dialogs={props.dialogs}/>
            </div>
        </nav>
    )
}
export default Navbar;