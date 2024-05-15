/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext } from "react";


// PRIMINIMAS!!!
// NUOLAT ATNAUJINK JSON FAILĄ, JEIGU JĮ PAKEITI ir JEIGU JĮ NAUDOJI....


const initialContext = {
    // visos prekės
    allItems: [],
    updateAllItems: () => { },

    // nauju prekiu sarasas
    newestItems: [],
    updateNewestItems: () => { },

    // prisijungusio statusas
    loginStatus: false,
    updateLoginStatus: () => { },

    // mano prekes 
    myItems: [],
    updateMyItems: () => { },

    // 
    totalSumToPay: 0,
    updateTotalSumToPay: () => { },

    // krepselis
    cartData: [],
    updateCartItemAmount: () => { },

    // vartotojai
    userId: -1,
    updateUserId: () => { },
};

export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props){
    const [allItems, setAllItemsList] = useState(initialContext.allItems);
    const [newestItems, setNewestItems] = useState(initialContext.newestCars);
    const [loginStatus, setLoginStatus] = useState(initialContext.loginStatus);
    const [myItems, setMyItems] = useState(initialContext.myItems);
    const [totalSumToPay, setTotalSumToPay] = useState(initialContext.totalSumToPay);
    const [cartData, setCartData] = useState(initialContext.cartData);
    const [userId, setUserId] = useState(initialContext.userId);


    useEffect(() => {
        fetch('http://localhost:4824/api/account/login', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.type === 'success') {
                    setUserId(data.user.id);  // ateina is apiLoginGet
                    setLoginStatus(true);
                }
            })
            .catch(console.error);
    }, []);


    // prekes krepselis atsisius duomenis i client kai tu prisijunges busi, is naujo pasileidinės puslapi
    useEffect(() => {

        // Paduodam reiksmes i localStorage, kai prisiloginanm jas ismeta; 
        // LocalStrorage metodai:
        // localStorage.setItem('userId', userId);
        // localStorage.setItem('isLoggedIn', true);
        // const localUserId = localStorage.getItem('userId');
        // localStorage.clear();
        // console.log(localUserId);

        // Galima lengvai su localStorage pasiekti vartotojo info - paskyra ir admin matyti info po refresh page. Geriau naudoti Cookies...

        // Krepselis
        if(loginStatus === true){
             fetch('http://localhost:4824/api/cart/cart-items')
            .then(res => res.json())
            .then(dataObj => setCartData(dataObj.data))
            .catch(console.error);

            // Mano prekės
            fetch('http://localhost:4824/api/items/my' + userId)
            .then(res => res.json())
            .then(dataObj => {
                if (dataObj.type === 'success') {
                    setMyItems(dataObj.list);
                } else {
                    console.error(dataObj.message);
                }
            })
            .catch(console.error);
        }
    }, [loginStatus, userId]);


    function updateLoginStatus(newStatusValue){
        setLoginStatus(newStatusValue);
    }

    // USER ID
    function updateUserId(id) {
        setUserId(id); //PageLogin
    }

    function updateTotalSumToPay(sumChange){
        setTotalSumToPay(n => n + sumChange);
    }

    function updateNewestItems(list) {
        setNewestItems(list);
    }

    // visos prekės  PAKEISTI PRMOGOSLIST
    function updateAllItems(list){
        setAllItemsList(list);
    }

    // mano prekiu sarasas
    function updateMyItems(list){
        setMyItems(list);
    }
    
    function addMyNewItem(item){
        setMyItems(prev => [...prev, item]);
    }

    function deletedMyItem(itemId){
        setMyItems(prev => prev.filter(item => item.id !== itemId));
    }


     // randa kokia prekė pasikeite pagal indeksa, ir kiekis koksai pasikeitė
    function updateCartItemAmount(name, amountChange){
       console.log(name, amountChange);
    //    setCartData(itemIndex, amountChange);
    }

    
    const value = {
        // visos prekės
        allItems,
        updateAllItems,
        // nauju prekiu sarasas
        newestItems,
        updateNewestItems,
        // prisijungusio statusas
        loginStatus,
        updateLoginStatus,
        // mano prekes
        myItems,
        updateMyItems,
        // 
        totalSumToPay,
        updateTotalSumToPay,
        // krepselis
        cartData,
        updateCartItemAmount,
        // vartotojai
        userId,
        updateUserId,
        // ikelti nauja preke
        addMyNewItem,
        // istrinti preke
        deletedMyItem,
    };


    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
}