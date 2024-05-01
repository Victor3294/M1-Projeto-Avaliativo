import {createContext, useEffect, useState} from "react"

export const UsuariosContext = createContext()

export const UsuariosContextProvider = ({children}) => {
    const [usuarios, setUsuarios] = useState([])
    const [contagemUsuarios, setContagemUsuarios] = useState()

    useEffect( () => {
        getUsuarios()
    }, [])

    function getUsuarios () {
        fetch("http://localhost:3000/usuarios")
        .then((response) => response.json())
        .then((dados) => {
            setUsuarios(dados)
            setContagemUsuarios(dados.length)
        })
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

    async function login(email, senha) {
        try {
            const response = await fetch("http://localhost:3000/usuarios")
            const dados = await response.json();

            let usuarioExiste = false;
            dados.map(usuario => {
                if(email == usuario.email){
                    usuarioExiste = true;
                    if(senha == usuario.senha){
                        localStorage.setItem("isAutenticado", true);
                        localStorage.setItem("IdLogado", usuario.id);
                        alert("Logado com sucesso")
                        window.location.href = "/"
                        return
                    }
                    alert("senha incorreta")
                    return
                }
            })
            if(!usuarioExiste){
                alert("Não existe usuario cadastro com esse email");
            }
        } catch {
            
        }
    }
    return(
        <UsuariosContext.Provider value={{usuarios, cadastrarUsuarios, getUsuariosCpf, login}} >
            {children}
        </UsuariosContext.Provider>
    )
}