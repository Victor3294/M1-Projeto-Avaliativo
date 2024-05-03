import { useContext } from "react";
import { Link } from "react-router-dom"
import { UsuariosContext } from "../../context/UsuariosContext";

function Menu(){
    const {deslogar} = useContext(UsuariosContext)
    return(
        <>
            <header>
                <h1><Link to={"/"}>Recicla365</Link></h1>
                <nav>
                    <Link to={"/cadastroLocalDeColeta"}>Cadastrar novo local de coleta</Link>
                    <Link to={"/listagemLocalDeColeta"}>Lista dos locais de coleta</Link>
                </nav>
                <button onClick={() => {deslogar()}}>Sair</button>
            </header>
        </>
    )
}

export default Menu;