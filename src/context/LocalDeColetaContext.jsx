import { createContext, useEffect, useState } from "react";

export const LocalDeColetaContext = createContext();

export const LocalDeColetaContextProvider = ({children}) => {
    const [locaisDeColeta, setLocaisDeColeta] = useState([])

    useEffect(() => {
        getLocalDeColeta()
    }, [])

    function getLocalDeColeta() {
        fetch("http://localhost:3000/localDeColeta")
        .then((response) => response.json())
        .then((dados) => setLocaisDeColeta(dados))
        .catch((error) => console.log(error))
    }


    return(
        <LocalDeColetaContextProvider>
            {children}
        </LocalDeColetaContextProvider>
    )
}

