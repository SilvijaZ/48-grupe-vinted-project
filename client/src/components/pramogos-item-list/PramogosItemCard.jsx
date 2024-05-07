/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
// import muz1Img from '../../assets/img/muz1.jpeg';
import profilePic from '../../assets/img/profile-picture1.jpg';
import style from '../pramogos-item-list/Pramogos.module.css';
// import { FaHeart } from "react-icons/fa6";

export function PramogosItemCard({ data }) {
    const { id, name, img, price, uploadTime } = data;

    return (
        <article className="col my-4">
            <div className="d-flex ms-3 gap-5 py-2">
                <span className="fs-5 d-flex align-items-center gap-2 p-1 pe-2 text-primary-emphasis">
                    <img className="rounded-circle me-1 gap-3" width="40" height="40" src={profilePic} alt="profile-picture" />lovelylydi18
                </span>
            </div>

            <div className="card shadow-sm fs-5">

                <Link to={`/pramogos/${id}`}>
                    <img src={img} alt="Prekė pardavimui" className={`bd-placeholder-img card-img-top ${style.cardImage}`} width="100%" height="225" />
                </Link>


                <div className="card-body ms-2 p-4">
                    <Link className={style.nameLink} to={`/pramogos/${id}`}>
                        <h3>{name}</h3>
                    </Link>
                    <p className="card-text my-2">Kaina: {price} Eur</p>
                    <div className="d-flex justify-content-between align-items-center">

                        <div className="btn-group">
                            <Link to={`/pramogos/${id}`} className="btn btn-sm btn-outline-secondary">Skaityti daugiau</Link>
                        </div>
{/*                         
                        <button onClick={<></>}>
                            <FaHeart  size="2rem" />
                        </button> */}

                        <small className="text-body-secondary">{uploadTime} min</small>
                    </div>
                </div>
            </div>
        </article>
    );
}