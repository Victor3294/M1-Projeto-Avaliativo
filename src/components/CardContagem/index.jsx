import { useContext } from "react"
import { LocalDeColetaContext } from "../../context/LocalDeColetaContext"
import { UsuariosContext } from "../../context/UsuariosContext"
import style from "./style.module.css"

function CardContagem(){
    const {contagemLocalDeColeta} = useContext(LocalDeColetaContext)
    const {contagemUsuarios} = useContext(UsuariosContext)
    return (
        <div className={style.container}>
            <p className={style.contador}>Quantidade de usuarios cadastrados = {contagemUsuarios}</p>
            <p className={style.contador}>Quantidade de locais de coleta cadastrados = {contagemLocalDeColeta}</p>
        </div>
    )
}

export default CardContagem