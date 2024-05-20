import style from '../register/Register.module.css';
import style2 from './Items.module.css';
import { Alert } from "../../components/alert/Alert";
import { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import defaultImg from '../../assets/img/item-default.png';

export function PageMyItemCreate(){

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [responseText, setResponseText] = useState('');
    const [responseType, setResponseType] = useState('');
    const { addMyNewItem } = useContext(GlobalContext);
 
    function handleNameChange(e){
        setName(e.target.value);
    }

    function handlePriceChange(e){
        // console.log(e);
        const formData = new FormData();
        // prijungiam key value; leidziama po viena faila pasirinkti
        formData.append('item_default_image', e.target.files[0]);

        // paveiksleliu upload path
        fetch('http://localhost:4824/api/upload/item', {
            method: 'POST',
            credentials: 'include',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if(data.type === 'success'){
                    setImage(data.imgPath);
                }
            })
            .catch(console.error);
    }

    function handleImageChange(e){
        setPrice(e.target.value);
    }

 
    function handleFormSubmit(e){
        e.preventDefault();


        if(name == '' || price == ''){
            setResponseText('error');
            setResponseType('Blogi formos duomenys');
            return;
        }

        fetch('http://localhost:4824/api/items/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: 'include',
            // sukuria skelbima pagal vartotojo id, varda ir image, kaina, kaina ateina is UseState string tai konvertuojam i skaiciu.
            body: JSON.stringify({ name, price: +price, image }),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setResponseText(data.message);
                setResponseType(data.type);

                // Pridesim nauja prekes objekta:
                if(data.type === 'success'){
                    addMyNewItem(data.item);
                }
            })
            .catch(error => console.error(error));
    }




    return (
        <section className="container">
            <div className="row">
                <h1 className="col-12">Sukurk naują prekę</h1>
            </div>
            <div className="row">
              
                <form onSubmit={handleFormSubmit} className={`${style.form} col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-2 col-xxl-4 offset-xxl-4`}>

                    <h1 className={style.h1}>Create your item</h1>

                    <div className={`${style.div}`}>
                        <label className={style.label} htmlFor="">Name</label>
                        <input className={`${style.input} form-control`} onChange={handleNameChange} type="text" value={name} id="name" placeholder="enter item name" />
                    </div>

                    <div className={`${style.div}`}>
                        <label className={style.label} htmlFor="">Price</label>
                        <input className={`${style.eyeInput} form-control`} onChange={handlePriceChange} type="number" value={price} id="price" placeholder="enter item price" />
                    </div>

                    <div className={style.div}>
                        <img className={style2.itemImg} src={image ? image : defaultImg} alt="item-default" />
                        <input onChange={handleImageChange} type="file" id="image" />
                    </div>

                    <div className={style.div}>
                        <button className={style.button} type="submit">Įkelti</button>
                    </div>

                    <Alert type={responseType} text={responseText} />
                </form>
            </div>
        </section>
    );
}