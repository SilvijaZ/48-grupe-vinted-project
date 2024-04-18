import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import style from '../pramogos-item-list/Pramogos.module.css';
import { GyvunamsItemList } from "../gyvunams-item-list/GyvunamsItemList";


export function PageGyvunams(){
    return (
        <section className="container">

            <div>
                <Link className='link-gyvunams' href="/gyvunams">Gyvūnams</Link>
            </div>
        
           <h1 className="title">Gyvūnams</h1>
           
           <hr />

            <div className="selected">
                <select className="option">
                    <option>Kategorija</option>
                    <option value="moterims"></option>
                    <option value="vyrams">Vyrams</option>
                </select>

                <select className="option">
                    <option>Dydis</option>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                </select>

                <select className="option">
                    <option>Prekių Ženklai</option>
                    <option value="trefi">Trefi</option>
                    <option value="xbox">Xbox</option>
                </select>

                <select className="option">
                    <option>Būklė</option>
                    <option value="nauja">Nauja su etiketėmis</option>
                    <option value="labai-gera">Labai gera</option>
                    <option value="gera">Gera</option>
                    <option value="patenkinama">Patenkinama</option>
                </select>

                <select className="option">
                    <option>Spalva</option>
                    <option value="juoda">Juoda</option>
                    <option value="balta">Balta</option>
                    <option value="pilka">Pilka</option>
                </select>
            
                <select className="option">
                    <option>Kaina</option>
                </select>
            </div>

            <hr />

            <div className="links">
                <Link className='link' to='/gyvunams/sunys'>Šunys</Link>
                <Link className='link' to='/gyvunams/kates'>Katės</Link>
                <Link className='link' to='/gyvunams/pauksciai'>Paukščiai</Link>
                <Link className='link' to='/gyvunams/ropliai'>Ropliai</Link>
            </div>

            <div className="d-flex justify-content-start">
                    <span className="badge d-flex align-items-center text-primary-emphasis border border-secondary-subtle text-bg-light rounded-pill">
                        <span className="fw-normal p-8 px-3 py-1 fs-5 gap">
                            Gyvūnams
                        </span>
                        <div className={style.socials}>
                            <a className={style.socialLink} href="/">
                                <IoCloseOutline size="2rem" /></a>
                        </div>
                    </span>
                </div>

                <GyvunamsItemList/>


            <hr />
            
        </section>
    );
}