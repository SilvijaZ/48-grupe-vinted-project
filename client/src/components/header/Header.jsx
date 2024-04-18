
import {Logo} from '../Logo/Logo';
import { Nav } from '../nav/Nav';
// import style from './Header.module.css';

function Header(){
    return (
        <>
            <header className="d-flex justify-content-between gap-1 flex-wrap align-items-center ps-5 py-2 border-bottom">
                <Logo />
            </header>
            <Nav />
        </>
    );
}
 
export { Header };

