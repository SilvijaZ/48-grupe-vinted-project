import { Link } from "react-router-dom";
import { PramogosItemList } from "../pramogos-item-list/PramogosItemList";
import { IoCloseOutline } from "react-icons/io5";
import style from '../pramogos-item-list/Pramogos.module.css';

export function PagePramogos(){
    return (
        <section className="container">

            <div>
                <Link className='link-pramogos' to='/pramogos'>Pramogos</Link>
            </div>
        
           <h1 className="title">Pramogos</h1>
           
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

            <div className="links">
                <Link className='link' to='/pramogos/vaizdo-zaidimai'>Vaizdo Žaidimai ir konsolės</Link>
                <Link className='link' to='/pramogos/zaidimai'>Žaidimai ir galvosūkiai</Link>
                <Link className='link' to='/pramogos/muzika'>Muzika ir vaizdo turinys</Link>
                <Link className='link' to='/pramogos/knygos'>Knygos</Link> 
            </div>


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

            

            <PramogosItemList />
        </section>

    );
}
 