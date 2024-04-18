import { Link } from 'react-router-dom';
import profilePic from '../../assets/img/profile-picture1.jpg'

export function MuzikaCard(){
    return (
        <article className="col">

             <div className="d-flex ms-3 gap-2 py-2">
                <span className="fs-5 d-flex align-items-center p-1 pe-2 text-primary-emphasis rounded-pill">
                    <img className="rounded-circle me-1 gap-3" width="40" height="40" src={profilePic} alt="profile-picture" />skotryna
                </span>
            </div>
            
            <div className="card shadow-sm">
                <Link to="/pramogos/muzika/:id">
                    <img src={<></>} alt="Item for sale" className={`bd-placeholder-img card-img-top`} width="100%" height="225" />
                </Link>

                <div className="card-body ms-2 p-4">
                    <Link to="/pramogos/muzika/:id">
                        <h3>Knygu prekiu pavadinimas</h3>
                    </Link>
                    <p className="card-text my-2">Kaina: 15 Eur</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link to='/pramogos/muzika/:id' className="btn btn-sm btn-outline-secondary">Read more</Link>
                        </div>
                        <small className="text-body-secondary">3 mins</small>
                    </div>
                </div>
            </div>
        </article>
    );
}