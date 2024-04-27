import {createContext, useEffect, useState} from "react"

export const UsuariosContext = createContext()

export const UsuariosContextProvider = ({children}) => {
    const [usuarios, setUsuarios] = useState()

    useEffect( () => {
        getUsuarios()
    }, [])

    function getUsuarios () {
        fetch("http://localhost:3000/usuarios")
        .then((response) => response.json())
        .then((dados) => setUsuarios(dados))
        .catch((error) => console.log(error))
    }

    return(
        <UsuariosContext.Provider value={{usuarios}} >
            {children}
        </UsuariosContext.Provider>
    )
}