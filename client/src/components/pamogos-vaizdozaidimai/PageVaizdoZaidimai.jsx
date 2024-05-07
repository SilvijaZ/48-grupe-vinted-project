import { useEffect, useState } from "react";
import { VaizdoZaidimaiCard } from "./VaizdoZaidimaiCard";
import { NoData } from "../NoData";



export function PageVaizdoZaidimai() {
    const [vaizdoZaidimaiData, setVaizdoZaidimaiData] = useState([]); 


    const dataUrl = 'https://raw.githubusercontent.com/SilvijaZ/48-grupe-vinted-project/main/client/public/data/prek%C4%97s.json';


    useEffect(() => {
        fetch(dataUrl)
            .then(res => res.json())
            .then(data => {
                const vaizdoZaidimaiData = data.prekės.filter(prekė => prekė.category === 'PC-zaidimai');
                setVaizdoZaidimaiData(vaizdoZaidimaiData);
            })
            .catch(e => console.error(e));
    }, []);

    return (
        <>
            <section className="container">
                <h1>Vaizdo Žaidimai</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                {vaizdoZaidimaiData.length === 0 ? (
                    <NoData />
                ) : (
                    vaizdoZaidimaiData.map(prekė => (
                        <VaizdoZaidimaiCard key={prekė.id} prekė={prekė} />
                    ))
                )}
                </div>
        </section>
        </>
    );
}