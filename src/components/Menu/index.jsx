import { useContext } from "react";
import { Link } from "react-router-dom"
import { UsuariosContext } from "../../context/UsuariosContext";
import style from "./style.module.css"

function Menu(){
    const {deslogar} = useContext(UsuariosContext)
    return(
        <>
            <header className={style.header}>
                <h1><Link className={style.link} to={"/"}>Recicla365</Link></h1>
                <div className={style.divNav}>
                    <nav className={style.nav}>
                        <Link className={style.link} to={"/cadastroLocalDeColeta"}>Cadastrar novo local de coleta</Link>
                        <Link className={style.link} to={"/listagemLocalDeColeta"}>Lista dos locais de coleta</Link>
                    </nav>
                    <button className={style.button} onClick={() => {deslogar()}}>Sair</button>
                </div>
            </header>
        </>
    )
}

export default Menu;