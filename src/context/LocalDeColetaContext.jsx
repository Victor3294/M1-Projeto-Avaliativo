import { createContext, useEffect, useState } from "react";

export const LocalDeColetaContext = createContext();

export const LocalDeColetaContextProvider = ({children}) => {
    const [locaisDeColeta, setLocaisDeColeta] = useState([])
    const [contagemLocalDeColeta, setContagemLocalDeColeta] = useState()

    useEffect(() => {
        getLocalDeColeta()     
    }, [])

    function getLocalDeColeta() {
        fetch("http://localhost:3000/localDeColeta")
        .then((response) => response.json())
        .then((dados) => {
            setLocaisDeColeta(dados)
            setContagemLocalDeColeta(dados.length)
        })
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

    function excluirLocalDeColeta(id){
        fetch(`http://localhost:3000/localDeColeta/${id}`, {
            method: "DELETE",
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(() => {
            alert("Local de coleta excluido com sucesso")
            getLocalDeColeta()
        })
        .catch(() => alert("Erro ao tentar excluir o local de coleta"))
    } 

    return(
        <LocalDeColetaContext.Provider value={{locaisDeColeta, cadastrarLocalDeColeta, contagemLocalDeColeta, excluirLocalDeColeta}}>
            {children}
        </LocalDeColetaContext.Provider>
    )
}

