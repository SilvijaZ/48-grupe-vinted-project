import { ZaidimaiCard } from "./ZaidimaiCard";



export function PageZaidimai() {
    return (
        <>
              <section className="container">
                    <h1>Žaidimu page list</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                    <ZaidimaiCard />
                    <ZaidimaiCard />
                </div>
            </section>
        </>
    );
}