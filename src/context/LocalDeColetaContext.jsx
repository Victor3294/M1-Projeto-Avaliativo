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

    function cadastrarLocalDeColeta(localDeColeta) {
        fetch("http://localhost:3000/localDeColeta", {
            method : "POST",
            body : JSON.stringify(localDeColeta),
            headers : {
                'Content-Type': 'application/json',
            }
        })
        .then(() => {
            alert("Local de coleta cadastrado com sucesso")
            getLocalDeColeta()
        })
        .catch(() => {
            alert("Erro ao cadastrar local de coleta")
        })
    }


    return(
        <LocalDeColetaContext.Provider value={{locaisDeColeta, cadastrarLocalDeColeta}}>
            {children}
        </LocalDeColetaContext.Provider>
    )
}

