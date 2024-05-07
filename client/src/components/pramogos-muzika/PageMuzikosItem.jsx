
export function PageMuzikosItem() {
    return (
        <>
            <section className="container px-4 ms-2">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={<></>} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="320" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Ausinės Lenovo</h1>
                        <p className="lead">Lenovo HT38 Bluetooth 5.0 TWS ausinės belaidės ausinės vandeniui atsparios sportinės ausinės triukšmą mažinančios ausinės su mikrofonu.</p>
                        <ul className='ms-2 p-4'>
                            <li>Prekės ženklas: Lenovo</li>
                            <li>Būklė: Nauja</li>
                            <li>Vieta: Kaunas</li>
                            <li>Mokėjimo būdai: Mokėjimo kortele</li>
                            <li>Įkelta: Prieš 30 minučių</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}