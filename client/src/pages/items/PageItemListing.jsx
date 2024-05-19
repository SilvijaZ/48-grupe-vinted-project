
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { useEffect } from 'react';
import { ItemCard } from '../../components/item-list/ItemCard';
// import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import style from '../../pages/my-item-list/Items.module.css';


export function PageItemListing(){
    const { allItems, updateAllItems } = useContext(GlobalContext);

    useEffect(() => {
            fetch('http://localhost:4824/api/items/all')
                .then(res => res.json())
                .then(data => {
                    // api/all sekmingu aveju parodo visas prekes
                    if(data.type === "success"){
                        updateAllItems(data.list);
                    }
                    // pagauna catch error, grazina message
                    if(data.type === "error"){
                       console.error(data.message);
                    }
                })
                .catch(console.error);
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <section className="container my-3">


        <section className="container">
            <div>
                {/* <Link className='link-pramogos' to='/'>Pramogos</Link> */}
            </div>

            <h1 className="title">Prekės</h1>

            <hr />

            <div className="selected">
                <select className="option">
                    <option>Kategorija</option>
                    <option value="moterims">Moterims</option>
                    <option value="vyrams">Vyrams</option>
                </select>

                <select className="option">
                    <option>Prekių Ženklai</option>
                    <option value="trefi">Trefi</option>
                    <option value="xbox">Xbox</option>
                </select>

                <select className="option">
                    <option>Amžiaus cenzas</option>
                    <option value="suaugusiems">Tik suaugusiems</option>
                    <option value="jaunimui">Jaunimui</option>
                    <option value="visiems">Skirtas visiems</option>
                </select>

                <select className="option">
                    <option>Būklė</option>
                    <option value="nauja">Nauja su etiketėmis</option>
                    <option value="labai-gera">Labai gera</option>
                    <option value="gera">Gera</option>
                    <option value="patenkinama">Patenkinama</option>
                </select>

                <select className="option">
                    <option>Kaina</option>
                </select>
            </div>

            <hr />

            {/* <div className="links">
                <Link className='link' to='/pramogos/vaizdo-zaidimai'>Vaizdo Žaidimai ir konsolės</Link>
                <Link className='link' to='/pramogos/zaidimai'>Žaidimai ir galvosūkiai</Link>
                <Link className='link' to='/pramogos/muzika'>Muzika ir vaizdo turinys</Link>
                <Link className='link' to='/pramogos/knygos'>Knygos</Link> 
            </div> */}


                <div className="d-flex justify-content-start">
                    <span className="badge d-flex align-items-center text-primary-emphasis border border-secondary-subtle text-bg-light rounded-pill">
                        <span className="fw-normal p-8 px-3 py-1 fs-5 gap">
                            Pramogos
                        </span>
                        <div className={style.socials}>
                            <a className={style.socialLink} href="/">
                                <IoCloseOutline size="2rem" /></a>
                        </div>
                    </span>
                </div>

            <hr />
        </section>


        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 gap-0">
            {allItems.map(item => <ItemCard key={item.id} data={item} />)}
        </div>

        </section>
    );
}