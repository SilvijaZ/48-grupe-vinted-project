
import { Link, useNavigate } from 'react-router-dom';
import {Logo} from '../Logo/Logo';
import { Nav } from '../nav/Nav';
import style from './Header.module.css';
import { GlobalContext } from '../../content/GlobalContext';
import { useContext } from 'react';
import profilePic from '../../assets/img/profile-picture.jpg';
import { TbShoppingCart } from "react-icons/tb";

export function Header(){

    const navigate = useNavigate();
    const {loginStatus, updateLoginStatus, totalSumToPay} = useContext(GlobalContext);

    function handleLogoutClick(){
        updateLoginStatus(false);
        navigate(`/`);
    }

    const guestSee = (
        <div className="col-md-3 text-end">
            <Link to="/login">
                <button type="button" className={`${style.btn1} me-2`}>Login</button>
            </Link>
            <Link to="/register">
                <button type="button" className={`${style.btn2} me-2`}>Register</button>
            </Link>
        </div>
    );

    const userSee = (
        <div className="d-flex align-items-center justify-content-center col-md-3 text-end">


            <div className="d-flex ms-3 gap-2 py-2">
                <span className="gap-2 py-2">
                    Cart value: {totalSumToPay}
                </span>
                <Link to="/shop-cart">
                    <TbShoppingCart size="2rem" color="grey" />
                </Link>
            </div>

           <ul>
                <Link to="/account" className="nav-link px-2 link-secondary">
                <div className="d-flex ms-3 gap-2 py-2">
                    <span className="fs-5 d-flex align-items-center p-1 pe-2 text-primary-emphasis rounded-pill">
                        <img className="rounded-circle me-1 gap-3" width="40" height="40" src={profilePic} alt="profile-picture" />
                    </span>
                </div>
                </Link>
           </ul>

           <div className={style.div}>
                <button  onClick={handleLogoutClick} className={style.btn3} type="submit">Logout</button>
            </div>
        </div>
    );

    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">

                    <div className="col-md-3 mb-2 mb-md-0">
                        <Logo />
                    </div>

                    <form className="w-80 me-3 col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control ps-5 pe-5" placeholder="Search..." aria-label="Search" />                    
                    </form>

                    {/* Kai prisijungi prie savo paskyros */}
                    {loginStatus ? userSee : guestSee}
                </header>
                <div className='container mb-5'><Nav /></div>
            </div>
        </>
    );
}


