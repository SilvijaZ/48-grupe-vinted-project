/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext } from "react";


// PRIMINIMAS!!!
// NUOLAT ATNAUJINK JSON FAILĄ< JEIGU JĮ PAKEITI....



const initialContext = {
    allPramogosList: [],
    updateAllPramogosList: () => { },
    // allKnygosList: [],
    // updateKnygosList: () => { },
    loginStatus: false,
    updateLoginStatus: () => { },
    userId: -1,
    updateUserId: () => { },
    allPramogosItem: [],
    updateAllPramogosItem: () => { },
    myItems: [],
    updateMyItems: () => { },
    totalSumToPay: 0,
    updateTotalSumToPay: () => { },
    cartData: [],
    updateCartItemAmount: () => { },
    manoPrekės: [],
    updateManoPrekės: () => { },
};

export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props){
    const [allPramogosList, setPramogosList] = useState(initialContext.allPramogosList);
    // const [allKnygosList, setAllKnygosList] = useState(initialContext.allKnygosList);
    const [loginStatus, setLoginStatus] = useState(initialContext.loginStatus);
    const [userId, updateUserId] = useState(initialContext.userId);
    const [allPramogosItem, setAllPramogosItem] = useState(initialContext.allPramogosItem);
    const [myItems, setMyItems] = useState(initialContext.myItems);
    const [totalSumToPay, setTotalSumToPay] = useState(initialContext.totalSumToPay) 
    const [cartData, setCartData] = useState(initialContext.cartData)   // DUOMENYS KREPSELIUI
    const [manoPrekės, setManoPrekės] = useState(initialContext.manoPrekės)   // DUOMENYS KREPSELIUI


    // prekes krepselis atsisius duomenis i client kai tu prisijunges busi, is naujo pasileidinės puslapi
    useEffect(() => {
        if(loginStatus === true){
             fetch('http://localhost:4824/api/cart-items')
            .then(res => res.json())
            .then(dataObj => setCartData(dataObj.prekės))
            .catch(console.error);

            //localhost:4824/api/my-items/1'
            //localhost:4824/api/my-items/2'
            //localhost:4824/api/my-items/3'

            fetch('http://localhost:4824/api/my-items/' + userId)
            .then(res => res.json())
            .then(dataObj => setManoPrekės(dataObj.list))
            .catch(console.error);
        }
    }, [loginStatus]);


    function updateLoginStatus(newStatusValue){
        setLoginStatus(newStatusValue);
    }

    // randa kokia prekė pasikeite pagal indeksa, ir kiekis koksai pasikeitė
    function updateCartItemAmount(name, amountChange){
       console.log(name, amountChange);
    //    setCartData(itemIndex, amountChange);
    }


    function updateTotalSumToPay(sumChange){
        setTotalSumToPay(n => n + sumChange);
    }

    // function updateKnygosList(list){
    //     setAllKnygosList(list);
    // }

    function updateAllPramogosList(pramogosList){
        setPramogosList(pramogosList);
    }

    function updateAllPramogosItem(list){
        setAllPramogosItem(list);
    }

    function updateMyItems(myList){
        setMyItems(myList);
    }
    
    function updateManoPrekės(list){
        setManoPrekės(list);
    }
    
    function addMyNewItem(naujaPrekė){
        setManoPrekės(prev => [...prev, naujaPrekė]);
    }

    function deletedMyItem(prekėId){
        setManoPrekės(prev => prev.filter(prekė => prekė.id !== prekėId));
    }
    

    
    const value = {
        // allKnygosList,
        // updateKnygosList,
        allPramogosList,
        updateAllPramogosList,
        loginStatus,
        updateLoginStatus,
        allPramogosItem,
        updateAllPramogosItem,
        myItems,
        updateMyItems,
        totalSumToPay,
        updateTotalSumToPay,
        cartData,   // DUOMENYS KREPSELIUI
        updateCartItemAmount,
        userId,
        updateUserId,
        manoPrekės,
        updateManoPrekės,
        addMyNewItem,
        deletedMyItem,
    };


    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
}