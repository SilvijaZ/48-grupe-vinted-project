/* eslint-disable react/prop-types */
// import muz1Img from '../../assets/img/muz1.jpeg';

export function PagePramogosItem( {data} ){
    const { id, name, img, price, uploadTime, description } = data;

    return (
        <>
                <section className="container px-4 ms-2">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="320" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{data.name}</h1>
                            {/* <p className="lead">{desription}</p> */}
                            <ul className='ms-2 p-4'>
                                <li>{id}</li>
                                <li>Pavadinimas: {name}</li>
                                <li>Aprašymas: {description}</li>
                                <li>Kaina: {price}</li>
                                <li>Įkelta: {uploadTime} minučių</li>
                            </ul>
                        </div>
                    </div>
                </section>
        </>
    );
}