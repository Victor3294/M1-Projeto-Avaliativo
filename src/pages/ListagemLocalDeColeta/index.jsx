import Menu from "../../components/Menu"
import CardLocalColeta from "../../components/CardLocalColeta"
import { useContext } from "react"
import { LocalDeColetaContext } from "../../context/LocalDeColetaContext"
import { useNavigate } from "react-router-dom"
import style from "./style.module.css"
function ListagemLocalDeColeta(){
    const {locaisDeColeta, excluirLocalDeColeta} = useContext(LocalDeColetaContext)
    const navigate = useNavigate()
    return (
        <>
            <Menu></Menu>
            <div className={style.containerCardLocalDeColeta}>
                {!!locaisDeColeta && locaisDeColeta.map((localDeColeta) => (
                    <CardLocalColeta key={localDeColeta.id} localDeColeta={localDeColeta}>
                        <button className={style.button} onClick={() => {navigate(`/cadastroLocalDeColeta/${localDeColeta.id}`, {replace: true})}}>Editar</button>
                        <button className={style.button} onClick={() => {excluirLocalDeColeta(localDeColeta.id)}}>Excluir</button>
                    </CardLocalColeta>
                ))}
            </div>
        </>
    )
}
export default ListagemLocalDeColeta