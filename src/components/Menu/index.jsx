import { Link } from "react-router-dom"

function Menu(){
    return(
        <>
            <header>
                <h1><Link to={"/"}>Recicla365</Link></h1>
                <nav>
                    <Link to={"/cadastroLocalDeColeta"}>Cadastrar novo local de coleta</Link>
                    <Link to={"/listagemLocalDeColeta"}>Lista dos locais de coleta</Link>
                </nav>
                <button>Sair</button>
            </header>
        </>
    )
}

export default Menu;