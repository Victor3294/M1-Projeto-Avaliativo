import {createContext, useEffect, useState} from "react"

export const UsuariosContext = createContext()

export const UsuariosContextProvider = ({children}) => {
    const [usuarios, setUsuarios] = useState([])

    useEffect( () => {
        getUsuarios()
    }, [])

    function getUsuarios () {
        fetch("http://localhost:3000/usuarios")
        .then((response) => response.json())
        .then((dados) => setUsuarios(dados))
        .catch((error) => console.log(error))
    }

    function getUsuariosCpf (cpf) {
        fetch("http://localhost:3000/usuarios?cpf=" + cpf) 
        .then((response) => response.json())
        .then((dados) => setUsuarios(dados))
        .catch((error) => console.log(error))
    }

    function cadastrarUsuarios (usuario) {
        fetch("http://localhost:3000/usuarios", {
            method : "POST",
            body : JSON.stringify(usuario),
            headers : {
                'Content-Type': 'application/json',
            }
        })
        .then(() => {
            alert("Usuario Cadastrado Com Sucesso")
            getUsuarios()
        })
        .catch(() => alert("Erro no cadastro do usuario"))
    }

    return(
        <UsuariosContext.Provider value={{usuarios, cadastrarUsuarios, getUsuariosCpf}} >
            {children}
        </UsuariosContext.Provider>
    )
}