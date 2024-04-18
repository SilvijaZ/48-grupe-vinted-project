/* eslint-disable react/prop-types */
// import { useContext } from "react";
// import { GlobalContext } from "../../context/GlobalContext";
import { KnygosCard } from "./KnygosCard";
// import { useEffect } from "react";



export function PageKnygos( { data }) {



    // const { allKnygosList, updateKnygosList } = useContext(GlobalContext);

    // useEffect(() => {
    //     if(allKnygosList.length === 0){
    //         fetch('http://localhost:4818/api/knygos-list/knyga') // Pakeiskite kategoriją pagal poreikį
    //             .then(res => res.json())
    //             .then(data => updateKnygosList(data.list))
    //             .catch(console.error);
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [allKnygosList]);

    return (
        <section className="container">
                <h1>Knygu page list</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
            <KnygosCard />
                {data.map((item, index) => <KnygosCard key={index} data={item} />)}
            </div>
        </section>
    );
}