import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({children}) =>{
    const [dados,setDados] = useState(null);
    useEffect(()=>{
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
        .then(response => response.json())
        .then(json => setDados(json))
        console.log('dados aqui: ',dados)
    },[])
    return (
        <GlobalContext.Provider value={{ dados }}>
            {children}
        </GlobalContext.Provider>
    )
}