
import { useContext, useEffect, useState } from 'react';
import { Alert } from '../../components/alert/Alert';
import { GlobalContext } from '../../context/GlobalContext';
import style from '../../pages/register/Register.module.css';
import defaultImg from '../../assets/img/item-default.png';
import { useParams } from 'react-router-dom';
import style2 from './Items.module.css';


export function PageMyItemEdit() {
    const [responseText, setResponseText] = useState('');
    const [responseType, setResponseType] = useState('');

    const { itemId } = useParams();
    const { updateMyItem, myItems } = useContext(GlobalContext);
    
    const [item, setItem] = useState({
        // default objektas
        id: -1,
        name: '',
        price: '',
        img: '',
    });

    useEffect(() => {
        for (const item of myItems) {
            if (item.id === +itemId) {
                setItem(item);
                break;
            }
        }

    }, [myItems, itemId]);

    

    function handleNameChange(e) {
        setItem(prev => ({ ...prev, name: e.target.value }));
    }

    function handlePriceChange(e) {
        setItem(prev => ({ ...prev, price: e.target.value }));
    }

    function handleImageChange(e) {
        const formData = new FormData();
        formData.append('item_default_image', e.target.files[0]);

        fetch('http://localhost:4824/api/upload/item', {
            method: 'POST',
            credentials: 'include',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data.type === 'success') {
                    setItem(prev => ({ ...prev, img: data.imgPath }));
                }
            })
            .catch(console.err);
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        if (item.name === '' || item.price === '') {
            setResponseType('error');
            setResponseText('Blogi formos duomenys');
            return;
        }

        fetch('http://localhost:4824/api/items/' + item.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                name: item.name,
                price: +item.price,
                image: item.img,
            }),
        })
            .then(res => res.json())
            .then(data => {
                setResponseType(data.type);
                setResponseText(data.message);

                if (data.type === 'success') {
                    updateMyItem(item);
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <section className="container">
                <div className="row">
                    <h1 className="col-12">Redaguoti prekę: {itemId} </h1>
                </div>
                <div className="row">
                    <form onSubmit={handleFormSubmit} className={`${style.form} col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-2 col-xxl-4 offset-xxl-4`}>
                        <Alert type={responseType} text={responseText} />

                        <div className={`${style.div}`}>
                            <label className={style.label} htmlFor="">Name</label>
                            <input className={`${style.input} form-control`} onChange={handleNameChange} type="text" value={item.name} id="name" placeholder="enter item name" />
                        </div>

                        <div className={`${style.div}`}>
                            <label className={style.label} htmlFor="">Price</label>
                            <input className={`${style.eyeInput} form-control`} onChange={handlePriceChange} type="number" value={item.price} id="price" placeholder="enter item price" />
                        </div>

                        <div className={style.div}>
                            <img className={style2.itemImg} src={item.img ? item.img : defaultImg} alt="image" />
                            <input onChange={handleImageChange} type="file" id="image" />
                        </div>

                        <div className={style.div}>
                            <button className={style.button} type="submit">Redaguoti</button>
                        </div>
                    </form>
                </div>
            </section>
    );
}
