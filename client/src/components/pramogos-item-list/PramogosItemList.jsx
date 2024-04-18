
import { PramogosItemCard } from './PramogosItemCard';
import { useEffect } from 'react';


export function PramogosItemList(){
    const [pramogos, setPramogos] = useState([]);

    useEffect(() => {
        if(allPramogosList.length === 0){
            fetch('http://localhost:4818/api/pramogos-list')
                .then(res => res.json())
                .then(data => updateAllPramogosList(data.pramogosList))
                .catch(err => console.error(err));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allPramogosList]);


    return (
        <section className="container">
             <h1>Pramogos all list</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                    {allPramogosList.map(preke => <PramogosItemCard key={preke.id} data={preke} />)}
                </div>
            </div>
        </section>
    );
}