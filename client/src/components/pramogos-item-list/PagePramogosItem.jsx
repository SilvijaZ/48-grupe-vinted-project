/* eslint-disable react/prop-types */
// import muz1Img from '../../assets/img/muz1.jpeg';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import { useParams } from 'react-router-dom';

export function PagePramogosItem(){

    // const { id, name} = useParams(data);
    // const { id, name, img, price, description, uploadTime, place } = prekė;
   
    const { prekėId } = useParams();

    // Kiekvineos prekės aprašai, vartotojo id, ir pan.
    const [prekė, setPrekė] = useState(null);


    useEffect(() => {
        fetch('http://localhost:4824/api/prekė/' + prekėId)
            .then(res => res.json())
            .then(data => {
                 if (data.prekės.length !== 1){
                    return;
                }
                
                setPrekė(data.prekės[0]);
            
            })
               .catch(console.error);

    }, []);

    return (
            <section className="container px-4 ms-2">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={prekė.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="320" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{prekė.name}</h1>
                        {/* <p className="lead">{desription}</p> */}
                        <ul className='ms-2 p-4'>
                            <li>{prekė.id}</li>
                            <li>Pavadinimas: {prekė.name}</li>
                            <li>Aprašymas: {prekė.description}</li>
                            <li>Kaina: {prekė.price}</li>
                            <li>Įkelta: {prekė.uploadTime} minučių</li>
                            <li>Vieta: {prekė.place}</li>
                            <li>User id: {prekė.userId}</li>
                        </ul>
                    </div>
                </div>
            </section>
    );
}