import { Link } from 'react-router-dom';
// import muz1Img from '../../assets/img/muz1.jpeg';
import profilePic from '../../assets/img/profile-picture1.jpg';
import style from '../gyvunams-item-list/Gyvunams.module.css';


export function GyvunamsItemCard(){
    return (
        <article className="col">
            <div className="d-flex ms-3 gap-2 py-2">
                <span className="fs-5 d-flex align-items-center p-1 pe-2 text-primary-emphasis rounded-pill">
                    <img className="rounded-circle me-1 gap-3" width="40" height="40" src={profilePic} alt="profile-picture" />lovelylydi18
                </span>
            </div>

            <div className="card shadow-sm fs-5">
                <img src={<></>} alt="Item for sale" className={`bd-placeholder-img card-img-top ${style.cardImage}`}  width="320" height="400" />
                <div className="card-body ms-2 p-4">
                    <Link to="/pramogos/:id">
                        <h3>Pramogu prekiu pavadinimas</h3>
                    </Link>
                    <p className="card-text my-2">Kaina: 50 Eur</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link to='/pramogos/:id' className="btn btn-sm btn-outline-secondary">Read more</Link>
                        </div>
                        <small className="text-body-secondary">19 mins</small>
                    </div>
                </div>
            </div>
        </article>
    );
}