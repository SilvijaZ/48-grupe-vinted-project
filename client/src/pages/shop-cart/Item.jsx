/* eslint-disable react/prop-types */
import { GlobalContext } from '../../context/GlobalContext';
import style from './ShopCart.module.css';

import { useContext, useState } from "react";

export function Item(  { item, onTotalSum } ){

    const {updateCartItemAmount} = useContext(GlobalContext);
    const { id, name, price } = item;
    const [amount, setAmount] = useState(0);
    const {updateTotalSumToPay} = useContext(GlobalContext);


    function handleAmountPlus(){
        setAmount(n => n + 1);
        onTotalSum(price);
        updateTotalSumToPay(price); // globalus kontekstas
        updateCartItemAmount(name, 1);  // pavdinimas nes naudojamas CartData 
    }

    function handleAmountMinus(){
        if(amount > 0){
            setAmount(n => n - 1);
            onTotalSum(-price);
            updateTotalSumToPay(-price);
            updateCartItemAmount(name, -1);
        }
    }
    
    return (
            <tr>
                <td>{id}</td>
                <td className={style.name}>{`${name}`}</td>
                <td>{price} Eur</td>

                <td>
                    <button className={style.button} onClick={handleAmountMinus}>-</button>
                        {amount}
                    <button className={style.button} onClick={handleAmountPlus}>+</button>
                </td>

                <td>{price * amount} Eur</td>
            </tr>
    );
}