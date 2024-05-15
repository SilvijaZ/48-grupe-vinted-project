import { useContext } from "react";
import { PageShopCart } from "../shop-cart/PageShopCart";
import { GlobalContext } from "../../context/GlobalContext";


export function PageAbout(){
    const { loginStatus } = useContext(GlobalContext);

    return (
       <section className="container">
            <div className="row">
                <h1 className="col-12">About us</h1>
                
                <div className="col-12">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus fugit excepturi hic voluptatem. Voluptatum, alias accusamus fugit laudantium ratione fugiat nisi! Molestias aperiam doloremque, dolorum quis delectus perferendis. Voluptatem, natus?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quis numquam cum reprehenderit deserunt quibusdam odit eius, fugiat aut maxime vitae quidem, dolorem itaque? Consequatur, laudantium? Eum, fugiat? At, incidunt.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque possimus sed distinctio recusandae, perspiciatis perferendis laboriosam neque adipisci, aperiam ut nam necessitatibus obcaecati deserunt temporibus soluta repudiandae. Iusto, voluptate ab.</p>
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