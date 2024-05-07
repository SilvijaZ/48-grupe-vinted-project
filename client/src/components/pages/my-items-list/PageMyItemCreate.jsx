import style from '../registracija/Register.module.css';
import { Alert } from "../../alert/Alert";
import { useContext, useState } from 'react';
import { GlobalContext } from '../../../content/GlobalContext';

export function PageMyItemCreate(){

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [responseText, setResponseText] = useState('');
    const [responseType, setResponseType] = useState('');
    const { userId, addMyNewItem } = useContext(GlobalContext);
 
    function handleNameChange(e){
        setName(e.target.value);
    }

    function handlePriceChange(e){
        setPrice(e.target.value);
    }
 
    function handleFormSubmit(e){
        e.preventDefault();


        if(name == '' || price == ''){
            setResponseText('error');
            setResponseType('Blogi formos duomenys');
            return;
        }

        fetch('http://localhost:4824/api/create-myitem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },

            // sukuria skelbima pagal vartotojo id, varda ir kaina
            body: JSON.stringify({ userId, name, price }),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setResponseText(data.message);
                setResponseType(data.type);

                // Pridesim nauja prekes objekta:
                if(data.type === 'success'){
                    addMyNewItem(data.naujaPrekė);
                }
            })
            .catch(err => console.error(err));
    }




    return (
        <section className="container">
            <div className="row">
                <h1 className="col-12">Create new my item</h1>
            </div>
            <div className="row">
              
                <form onSubmit={handleFormSubmit} className={`${style.fomm} col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-2 col-xxl-4 offset-xxl-4`}>

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
                        <button className={style.button} type="submit">Įkelti prekę</button>
                    </div>

                    <Alert type={responseType} text={responseText} />
                </form>
            </div>

        </section>
    );
}