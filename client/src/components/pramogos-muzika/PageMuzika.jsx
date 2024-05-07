import { useEffect, useState } from "react";
import { NoData } from "../NoData";
import { MuzikaCard } from "./MuzikaCard";



export function PageMuzika() {
    const [muzikaData, setMuzikaData] = useState([]); 


    const dataUrl = 'https://raw.githubusercontent.com/SilvijaZ/48-grupe-vinted-project/main/client/public/data/prek%C4%97s.json';


    useEffect(() => {
        fetch(dataUrl)
            .then(res => res.json())
            .then(data => {
                const muzikaData = data.prekės.filter(prekė => prekė.category === 'muzika');
                setMuzikaData(muzikaData);
            })
            .catch(e => console.error(e));
    }, []);

    return (
        <> 
            <section className="container">
                <h1>Muzika</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                    {muzikaData.length === 0 ? (
                        <NoData />
                    ) : (
                        muzikaData.map(prekė => (
                            <MuzikaCard key={prekė.id} prekė={prekė} />
                        ))
                    )}
                </div>
             </section>
        </>
    );
}