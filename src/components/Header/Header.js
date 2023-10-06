import logo from "../../img/reactLogo.png";
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img src={logo} />
        </header>
    )
}
export default Header;