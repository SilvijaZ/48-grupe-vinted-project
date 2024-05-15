/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext'; 
import { ItemCard } from './ItemCard';

export function NewestItemsList() {
    const { newestItems, updateNewestItems } = useContext(GlobalContext);

    useEffect(() => {
        if(newestItems.length === 0){
            fetch('http://localhost:4824/api/items/newest')
                .then(res => res.json())
                .then(data => updateNewestItems(data.list))
                .catch(console.error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newestItems]);

    return (
        <section className="container">
            <h1>Newest items for sale</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                {newestItems.map(item => <ItemCard key={item.id} data={item} />)}
            </div>
        </section>
    );
}


/*row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3
Eiluteje stulpeliai krenta pirmiau vienu cols-1, paskui dviem cols-md-2, ir trim cols-xl-3
dar gali buti cols-lg-2 bet nereikia */