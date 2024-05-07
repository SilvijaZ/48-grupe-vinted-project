/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useParams } from 'react-router-dom';

export function PageKnygosItem() {
    const { id } = useParams();

    const knygosImgUrl = `http://localhost:4824/img/knygos${id}.jpeg`;

    return (
            <section className="container px-4 ms-2">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={knygosImgUrl} className="d-block mx-lg-auto img-fluid" alt="knyga" width="320" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{name}</h1>
                        <p className="lead">Aprašymas</p>
                        <ul className='ms-2 p-4'>
                            <li>{id}</li>
                            <li>Prekės pavadinimas: Knyga</li>
                            <li>Vieta: Kaunas</li>
                            <li>Mokėjimo būdai: Mokėjimo kortele</li>
                            <li>Įkelta: prieš 30 minučių</li>
                        </ul>
                    </div>
                </div>
            </section>
    );
}