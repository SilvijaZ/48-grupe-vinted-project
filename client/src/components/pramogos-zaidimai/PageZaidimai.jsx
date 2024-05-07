import { useEffect, useState } from "react";
import { NoData } from "../NoData";
import { ZaidimaiCard } from "./ZaidimaiCard";



export function PageZaidimai() {
    const [zaidimaiData, setZaidimaiData] = useState([]); 


    const dataUrl = 'https://raw.githubusercontent.com/SilvijaZ/48-grupe-vinted-project/main/client/public/data/prek%C4%97s.json';


    useEffect(() => {
        fetch(dataUrl)
            .then(res => res.json())
            .then(data => {
                const zaidimaiData = data.prekės.filter(prekė => prekė.category === 'zaidimai');
                setZaidimaiData(zaidimaiData);
            })
            .catch(e => console.error(e));
    }, []);

    return (
        <section className="container">
            <h1>Žaidimai</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                {zaidimaiData.length === 0 ? (
                    <NoData />
                ) : (
                    zaidimaiData.map(prekė => (
                        <ZaidimaiCard key={prekė.id} prekė={prekė} />
                    ))
                )}
            </div>
        </section>
    );
}