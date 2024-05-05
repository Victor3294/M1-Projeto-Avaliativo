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

    async function getLocalDeColetaPorId(id){
        try {
            let data = await fetch("http://localhost:3000/localDeColeta/"+id);
            let dados = await data.json();
            return dados
        } catch (error) {
            console.log(error)
        }
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

    function editarLocalDeColeta(localColeta, id){
        fetch("http://localhost:3000/localDeColeta/"+id, {
            method : "PUT",
            body : JSON.stringify(localColeta),
            headers : {
                'Content-Type': 'application/json'
            },
        })
        .then(() => {
            alert("edição do local de coleta feita com sucesso")
            getLocalDeColeta()
        })
        .catch((error) => console.log(error))
    }

    return(
        <LocalDeColetaContext.Provider value={{locaisDeColeta, cadastrarLocalDeColeta, contagemLocalDeColeta, excluirLocalDeColeta, getLocalDeColetaPorId, editarLocalDeColeta}}>
            {children}
        </LocalDeColetaContext.Provider>
    )
}

