/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

const initialContext = {
    allPramogosList: [],
    updateAllPramogosList: () => { },
    // allKnygosList: [],
    // updateKnygosList: () => { },
};

export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props){
    const [allPramogosList, setPramogosList] = useState(initialContext.allPramogosList);
    // const [allKnygosList, setAllKnygosList] = useState(initialContext.allKnygosList);
   

    // function updateKnygosList(list){
    //     setAllKnygosList(list);
    // }

    function  updateAllPramogosList(list){
        setPramogosList(list);
    }


    const value = {
        // allKnygosList,
        // updateKnygosList,
        allPramogosList,
        updateAllPramogosList,
    };


    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
}