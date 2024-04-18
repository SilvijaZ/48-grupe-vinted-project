import { VaizdoZaidimaiCard } from "./VaizdoZaidimaiCard";



export function PageVaizdoZaidimai() {
    return (
        <>
        
              <section className="container">
                    <h1>Vaizdo zaidimu page list</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                    <VaizdoZaidimaiCard />
                    <VaizdoZaidimaiCard />
                </div>
            </section>
        </>
    );
}