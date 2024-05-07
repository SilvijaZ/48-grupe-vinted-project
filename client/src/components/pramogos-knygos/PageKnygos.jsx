/* eslint-disable react/prop-types */

import { KnygosCard } from "./KnygosCard";
import { useEffect, useState } from "react";
import { NoData } from "../NoData";



export function PageKnygos() {
    const [knygosData, setKnygosData] = useState([]); 


    const dataUrl = 'https://raw.githubusercontent.com/SilvijaZ/48-grupe-vinted-project/main/client/public/data/prek%C4%97s.json';


    useEffect(() => {
        fetch(dataUrl)
            .then(res => res.json())
            .then(data => {
                const knygosData = data.prekės.filter(prekė => prekė.category === 'knyga');
                setKnygosData(knygosData);
            })
            .catch(e => console.error(e));
    }, []);


    return (
        <section className="container">
            <h1>Knygos</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                {knygosData.length === 0 ? (
                    <NoData />
                ) : (
                    knygosData.map(prekė => (
                        <KnygosCard key={prekė.id} prekė={prekė} />
                    ))
                )}
            </div>
        </section>
    );
}



