import { useContext } from "react";
import { PageShopCart } from "../shop-cart/PageShopCart";
import { GlobalContext } from "../../context/GlobalContext";
import style from './PageAbout.module.css';



export function PageAbout(){
    const { loginStatus } = useContext(GlobalContext);

    return (
       <section className="container">
            <div>
            <div className="row">
                <div className={`py-5 container mw-100 d-flex align-center rounded float-end ${style.fonas}`}/></div>
                   
        
            </div>

            {loginStatus ? <div className="row">
                <div className="col-12">
                    <PageShopCart />
                </div>
            </div> : null}
       </section>
       
    );
}