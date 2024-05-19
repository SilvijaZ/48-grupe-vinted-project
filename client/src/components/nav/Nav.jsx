
import { Link } from 'react-router-dom';
import style from './Nav.module.css';

export function Nav(){
    return (
        <nav className={style.mainNav}>
            <Link className={style.navLink} to='/'>Home</Link>
            <Link className={style.navLink} to='/item-list'>Prekės</Link>
            <Link className={style.navLink} to='/about'>Apie mūsų platforma</Link>
        </nav>
    );
}