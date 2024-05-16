import { useContext } from "react";
import { PageShopCart } from "../shop-cart/PageShopCart";
import { GlobalContext } from "../../context/GlobalContext";
import style from './PageAbout.module.css';
import fonasImg from '../../assets/img/fonas.png';
import img1 from '../../assets/img/img1.png';
import img2 from '../../assets/img/img2.png';
import img3 from '../../assets/img/img3.png';
import img4 from '../../assets/img/img4.png';
import img5 from '../../assets/img/img5.png';
import img6 from '../../assets/img/img6.png';
import img7 from '../../assets/img/safe.svg';
import img8 from '../../assets/img/guarantee.svg';

import { Link } from "react-router-dom";



export function PageAbout(){
    const { loginStatus } = useContext(GlobalContext);

    return (
       <section className="container">
        
            <div className={`col-12 ${style.backgroundColor}`}>
                <img src={fonasImg} className={style.fonas} alt="fonas" />
            </div>
            
            <h1 className={style.h1} >Vinted - vieta iš rankų į rankas keliaujantiems daiktams</h1>

            <h2 className={style.description}>Viena bendruomenė, tūkstančiai prekės ženklų ir daugybė stilingų daiktų iš antrų rankų. Pasiruošęs prisijungti? Štai, kaip tai veikia.</h2>

            <p className={style.description}>Parduoti paprasta</p>


                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-sm-3 g-5 align">
                        <article className="col">
                            <div className="shadow-lg fs-5">
                                    <img src={img1} alt="image" className={`bd-placeholder-img card-img-top ${style.aboutImg}`} />

                                <div className="card-body  p-4">
                                    <h2 className={style.h2}>1. Įkelk nemokamai</h2>
                                    <p className={` ${style.p}`}>
                                    Parsisiųsk Vinted programėlę nemokamai. Nufotografuok prekę, aprašyk ją ir nustatyk kainą. Spausk „Pridėti“ ir kiti nariai jau galės iš tavęs pirkti.
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article className="col">
                            <div className="shadow-lg fs-5">
                                    <img src={img2} alt="image" className={`bd-placeholder-img card-img-top ${style.aboutImg}`} />

                                <div className="card-body ms-2 p-4">
                                    <h2 className={style.h2}>2. Parduok ir išsiųsk</h2>
                                    <p className={`card-text my-2 ${style.p}`}>
                                    Parduota! Supakuok prekę ir, gavęs siuntos numerį, per 5 dienas nunešk ją į artimiausią paštomatą išsiuntimui.
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article className="col">
                            <div className="shadow-lg fs-5">
                                    <img src={img3} alt="image" className={`bd-placeholder-img card-img-top ${style.aboutImg}`} />

                                <div className="card-body ms-2 p-4">
                                    <h2 className={style.h2}>3. Gauk pinigus</h2>
                                    <p className={`card-text my-2 ${style.p}`}>
                                    Parsisiųsk Vinted programėlę nemokamai. Nufotografuok prekę, aprašyk ją ir nustatyk kainą. Spausk „Pridėti“ ir kiti nariai jau galės iš tavęs pirkti.
                                    </p>
                                </div>
                            </div>
                        </article>

                        <div className="container align-items-center py-5">
                            <div className="cond-flex justify-content-center py-5">
                                <button className="btn btn-outline-secondary d-inline-flex align-items-center py-3 px-2 fs-5" type="button">
                                    <Link className={style.link} to={`/register`}>
                                        Pradėk dabar
                                    </Link>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>


                <p className={style.description}>Apsipirk greitai ir saugiai</p>


                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-sm-3 g-5 align">
                        <article className="col">
                            <div className="shadow-lg fs-5">
                                    <img src={img4} alt="image" className={`bd-placeholder-img card-img-top ${style.aboutImg}`} />

                                <div className="card-body  p-4">
                                    <h2 className={style.h2}>1. Įkelk nemokamai</h2>
                                    <p className={` ${style.p}`}>
                                    Parsisiųsk Vinted programėlę nemokamai. Nufotografuok prekę, aprašyk ją ir nustatyk kainą. Spausk „Pridėti“ ir kiti nariai jau galės iš tavęs pirkti.
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article className="col">
                            <div className="shadow-lg fs-5">
                                    <img src={img5} alt="image" className={`bd-placeholder-img card-img-top ${style.aboutImg}`} />

                                <div className="card-body ms-2 p-4">
                                    <h2 className={style.h2}>2. Parduok ir išsiųsk</h2>
                                    <p className={`card-text my-2 ${style.p}`}>
                                    Parduota! Supakuok prekę ir, gavęs siuntos numerį, per 5 dienas nunešk ją į artimiausią paštomatą išsiuntimui.
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article className="col">
                            <div className="shadow-lg fs-5">
                                    <img src={img6} alt="image" className={`bd-placeholder-img card-img-top ${style.aboutImg}`} />

                                <div className="card-body ms-2 p-4">
                                    <h2 className={style.h2}>3. Gauk pinigus</h2>
                                    <p className={`card-text my-2 ${style.p}`}>
                                    Parsisiųsk Vinted programėlę nemokamai. Nufotografuok prekę, aprašyk ją ir nustatyk kainą. Spausk „Pridėti“ ir kiti nariai jau galės iš tavęs pirkti.
                                    </p>
                                </div>
                            </div>
                        </article>

                        <div className="container align-items-center py-5">
                            <div className="cond-flex justify-content-center py-5">
                                <button className="btn btn-outline-secondary d-inline-flex align-items-center py-3 px-2 fs-5" type="button">
                                    <Link className={style.link} to={`/`}>
                                        Apsipirk ir sutaupyk
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container px-4 py-5">
                    <h2 className="pb-2 border-bottom">Su mumis esi saugus</h2>
                    <div className="row g-5 py-5 row-cols-1 row-cols-lg-3 flex justify-content-center ">
                        <div className="col d-flex align-items-start">

                            <div className="icon-square d-inline-flex align-items-center justify-content-center fs-4 me-3">
                                <img src={img7} alt="image" />
                            </div>

                            <div className="container">
                                <h3 className="fs-2 text-body-emphasis">Apsipirk be rūpesčių</h3>
                                <p className={style.lastParagraph}>Pirkdamas Vinted „Pirkti“ mygtuko pagalba kaskart moki Pirkėjo apsaugos mokestį. Tai padeda apsaugoti tavo pinigus suteikiant papildomą apsaugą tavo pirkiniams ir duomenims. Paslaugos kainą sudaro 5 % prekės kainos plius 0,70 €.</p>
                            </div>

                        </div>
                        <div className="col d-flex align-items-start">
                                <div className="icon-square d-inline-flex align-items-center justify-content-center fs-4 me-3">
                                    <img src={img8} alt="image" />
                                </div>
                            <div className="container">
                                <h3 className="fs-2 text-body-emphasis">Patikima pinigų grąžinimo politika</h3>
                                <p className={style.lastParagraph}>Kai moki per Vinted, tavo užsakymas yra apsaugotas. Grąžinsime tau pinigus, jei tavo prekė nebus pristatyta, atvyks pažeista arba visiškai neatitiks aprašymo. Jei kažkas ne taip, informuok mus per 2 dienas nuo siuntos gavimo. Jei nesutarta kitaip, siuntos grąžinimo išlaidas apmoka pirkėjas.</p>
                                <a href="https://www.vinted.lt/help/465?access_channel=product_link" className="py-5">
                                    Sužinoti daugiau
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            {loginStatus ? <div className="row">
                <div className="col-12">
                    <PageShopCart />
                </div>
            </div> : null}
       </section>
       
    );
}