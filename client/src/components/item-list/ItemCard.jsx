/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import style from './ItemList.module.css';

export function ItemCard({ data }) {
    // console.log(data);
    const { id, name, img, price } = data;

    return (
        <article className="col">
            <div className="card shadow-sm">
                <img src={img} alt="Auto for sale" className={`bd-placeholder-img card-img-top ${style.cardImage}`} width="100%" height="225" />
                <div className="card-body">
                    <Link to={`/item-list/${id}`}>
                        <h3>{name}</h3>
                    </Link>
                    <p className="card-text">Price: {(price / 100).toFixed(2)} Eur</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link to={`/item-list/${id}`} className="btn btn-sm btn-outline-secondary">Read more</Link>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                </div>
            </div>
        </article>
    );
}