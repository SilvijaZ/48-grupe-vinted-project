import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NewestItemsList } from '../../components/item-list/NewestItemsList';
import style from '../../components/header/Header.module.css';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';


export function PageItemListingInner() {
    const { loginStatus } = useContext(GlobalContext);
    const [item, setItem] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        fetch('http://localhost:4824/api/items/' + itemId)
            .then(res => res.json())
            .then(data => {
                if (data.type === 'error') {
                    console.error(data);
                } else {
                    setItem(data.item);
                }
            })
            .catch(console.error);
    }, []);


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
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Add to favorite</button>
        </div>
    );


    if (item === null) {
        return (
            <>
                <section className="container px-4">
                    <div className="row align-items-center g-5 py-5">
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Could not find such item for sale</h1>
                        </div>
                    </div>
                </section>
                <NewestItemsList/>
            </>
        );
    }

    return (
        <>
           <section className="container px-4">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={item.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{item.name}</h1>
                        <p>Price: {(item.price / 100).toFixed(2)} Eur</p>
                        <p>User ID: {item.userId}</p>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <ul>
                            <li>Detail</li>
                            <li>Detail</li>
                            <li>Detail</li>
                            <li>Detail</li>
                            <li>Detail</li>
                            <li>Detail</li>
                        </ul>
                        {loginStatus ? userSee : guestSee}
                    </div>
                </div>
            </section>
            <NewestItemsList/>
        </>
    )
}