
import { Link } from 'react-router-dom';
import style from './Nav.module.css';

export function Nav(){
    return (
        <nav className={style.mainNav}>
            <Link className={style.navLink} to='/'></Link>
            <Link className={style.navLink} to='/moterims'>Moterims</Link>
            <Link className={style.navLink} to='/vyrams'>Vyrams</Link>
            <Link className={style.navLink} to='/vaikams'>Vaikams</Link>
            <Link className={style.navLink} to='/namams'>Namams</Link>
            <Link className={style.navLink} to='/pramogos'>Pramogos</Link>
            <Link className={style.navLink} to='/gyvunams'>Gyvūnams</Link>
            <Link className={style.navLink} to='/apie-mus'>Apie mus</Link>
            <Link className={style.navLink} to='/musu-platforma'>Mūsų platforma</Link>
        </nav>
    );
}


