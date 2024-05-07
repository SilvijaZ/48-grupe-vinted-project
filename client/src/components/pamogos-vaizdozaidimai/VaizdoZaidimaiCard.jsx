/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import style from '../pramogos-item-list/Pramogos.module.css';
import profilePic from '../../assets/img/profile-picture1.jpg'

export function VaizdoZaidimaiCard( { prekė } ){
    const { id, name, img, price, uploadTime } = prekė;

     
    return (

        <article className="col my-4">
            <div className="d-flex ms-3 gap-2 py-2">
                <span className="fs-5 d-flex align-items-center gap-2 p-1 pe-2 text-primary-emphasis rounded-pill">
                    <img className="rounded-circle me-1 gap-3" width="40" height="40" src={profilePic} alt="profile-picture" />skotryna
                </span>
            </div>
            
            <div className="card shadow-sm fs-5">
                <Link to={`/pramogos/vaizdo-zaidimai/${id}`}>
                    <img src={img} alt="Item for sale" className={`bd-placeholder-img card-img-top ${style.cardImage}`} width="100%" height="225" />
                </Link>

                <div className="card-body ms-2 p-4">
                    <Link to={`/pramogos/vaizdo-zaidimai/${id}`}>
                        <h3>{name}</h3>
                    </Link>
                    <p className="card-text my-2">Kaina: {price} Eur</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link to={`/pramogos/vaizdo-zaidimai/${id}`} className="btn btn-sm btn-outline-secondary">Skaityti toliau</Link>
                        </div>
                        <small className="text-body-secondary">{uploadTime} min</small>
                    </div>
                </div>
            </div>
            </article>
    );
}