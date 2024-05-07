
import { useParams } from 'react-router-dom';

export function PageVaizdoZaidimaiItem() {
    const { id } = useParams();

    const vaizdoImgUrl = `http://localhost:4824/img/vaizdo-zaidimai${id}.jpeg`;

    return (
            <section className="container px-4 ms-2">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={vaizdoImgUrl} className="d-block mx-lg-auto img-fluid" alt="knyga" width="320" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3"></h1>
                        <p className="lead">Lenovo HT38 Bluetooth 5.0 TWS ausinės belaidės ausinės vandeniui atsparios sportinės ausinės triukšmą mažinančios ausinės su mikrofonu.</p>
                        <ul className='ms-2 p-4'>
                            <li>{id}</li>
                            <li></li>
                            <li>Vieta: </li>
                            <li>Mokėjimo būdai: </li>
                            <li>Įkelta: </li>
                        </ul>
                    </div>
                </div>
            </section>
    );
}