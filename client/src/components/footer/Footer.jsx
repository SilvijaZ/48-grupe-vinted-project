
import { Link } from 'react-router-dom';
// import {Logo} from '../Logo/Logo';
import style from './Footer.module.css';

export function Footer(){
    return (
        <>
            <footer className={style.footer}>
                <div className={style.footerLinks}>
                    <Link to='/' className={style.footerLink}>Vinted</Link>
                    <Link to='/about' className={style.footerLink}>About</Link>
                </div>
                <p className={style.footerText}>&copy; 2024 - All rights reserved</p>
            </footer>
        </>
    );
}