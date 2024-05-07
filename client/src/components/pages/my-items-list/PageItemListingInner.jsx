import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function PageItemListingInner() {
    const [prekė, setPrekė] = useState(null);
    const { prekėId } = useParams();

    useEffect(() => {
        fetch('http://localhost:4824/api/prekė/' + prekėId)
            .then(res => res.json())
            .then(data => {
                if (data.type === 'error') {
                    console.error(data);
                } else {
                     setPrekė(data.prekė);
                }
            })
            .catch(console.error);
    }, []);


    if (prekė === null) {
        return (
            <>
                <section className="container px-4">
                    <div className="row align-items-center g-5 py-5">
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Could not find such item for sale</h1>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
           <section className="container px-4">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={prekė.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{prekė.name}</h1>
                        <p>Price: {prekė.price} Eur</p>
                        <p>User ID: {prekė.userId}</p>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <ul>
                            <li>Detail</li>
                            <li>Detail</li>
                            <li>Detail</li>
                            <li>Detail</li>
                            <li>Detail</li>
                            <li>Detail</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}