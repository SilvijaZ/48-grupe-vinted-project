import { useContext, useEffect } from "react";
import { Item } from "./Item";
import style from './ShopCart.module.css';
import { useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function PageShopCart(){

    // const {cartData} = useContext(GlobalContext);  data panaudojam i map

    const {loginStatus} = useContext(GlobalContext);

    const [shopData, setShopData] = useState([]); 
    const [totalSum, setTotalSum] = useState(0);

    const dataUrl = 'https://raw.githubusercontent.com/SilvijaZ/48-grupe-vinted-project/main/client/public/data/prek%C4%97s.json';


    function handleTotalSumChange(priceChange){
        setTotalSum(n => n + priceChange);
    }

    useEffect(() => {
        fetch(dataUrl)
            .then(res => res.json())
            .then(data => {
                const shopData = data.prekės;
                setShopData(shopData);
            })
            .catch(e => console.error(e));
    }, []);


    return (
        <>
            {loginStatus &&
            <div className={style.cart}>
                <h2>Prekių krepšelis</h2>
                    <table>
                        <thead className={style.thead}>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Unit price</td>
                                <td>Amount</td>
                                <td>Price</td>
                            </tr>
                        </thead>
                        <tbody className={style.tbody}>
                            {shopData.map(prekė => (
                                <Item key={prekė.id} prekė={prekė} onTotalSum={handleTotalSumChange} />
                            ))}
                        </tbody>
                    </table>
                <div className={style.total}>Galutinė mokėtina suma: <span>{totalSum}</span> Eur</div>
            </div>}
        </>
    );
}