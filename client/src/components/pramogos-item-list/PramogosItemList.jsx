
import { useContext } from 'react';
import { PramogosItemCard } from './PramogosItemCard';
import { GlobalContext } from '../../content/GlobalContext';
import { useEffect } from 'react';


export function PramogosItemList(){
    const { allPramogosList, updateAllPramogosList } = useContext(GlobalContext);

    useEffect(() => {
            fetch('http://localhost:4824/api/pramogos-list')
                .then(res => res.json())
                .then(data => updateAllPramogosList(data.pramogosList))
                .catch(console.error);
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <section className="container my-3">
             <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 gap-0">
                    {allPramogosList.map(prekė => <PramogosItemCard key={prekė.id} data={prekė} />)}
            </div>
        </section>
    );
}