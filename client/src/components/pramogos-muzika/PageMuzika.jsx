import { MuzikaCard } from "./MuzikaCard";



export function PageMuzika() {
    return (
        <>
              <section className="container">
                    <h1>Muzika page list</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                    <MuzikaCard />
                    <MuzikaCard />
                </div>
            </section>
        </>
    );
}