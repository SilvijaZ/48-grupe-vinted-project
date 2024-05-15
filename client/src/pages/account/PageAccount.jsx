// import { useState } from 'react';
// import style from './PageAcount.module.css';
import style from '../../components/header/Header.module.css';

import { Link } from "react-router-dom";
import profileImg from '../../assets/img/profile-picture.jpg';

export function PageAccount(){
    return (
        <div className="container ol-12 py-5 ms-5 d-flex">

            <div className='row'>
                <h1 className='col-12'>Your Account</h1>
            </div>
            
            <div className="col-lg-4">
                <img src={profileImg} alt="profile-picture" className="bd-placeholder-img rounded-circle"  width="70" height="70" />
                <h2 className="fw-normal py-3">Profile</h2>
                <p  className="fw-normal">Hello, User!</p>
            </div>

            <div className='row'>
                <div className='col-12'>
                    <div className={`${style.otherBtn}`}>
                        <Link className={style.btn3} to="/account/my-item-list">Žiūrėti įkeltas prekes</Link>
                        <Link className={style.btn3} to="/account/my-item-list/create">Įkelti naują prekę</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}