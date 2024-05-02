import Menu from "../../components/Menu"
import CardLocalColeta from "../../components/CardLocalColeta"
import { useContext } from "react"
import { LocalDeColetaContext } from "../../context/LocalDeColetaContext"
import { useNavigate } from "react-router-dom"
function ListagemLocalDeColeta(){
    const {locaisDeColeta, excluirLocalDeColeta} = useContext(LocalDeColetaContext)
    const navigate = useNavigate()
    return (
        <>
            <Menu></Menu>
            {!!locaisDeColeta && locaisDeColeta.map((localDeColeta) => (
                <CardLocalColeta key={localDeColeta.id} localDeColeta={localDeColeta}>
                    <button onClick={() => {navigate(`/cadastroLocalDeColeta/${localDeColeta.id}`, {replace: true})}}>Editar</button>
                    <button onClick={() => {excluirLocalDeColeta(localDeColeta.id)}}>Excluir</button>
                </CardLocalColeta>
            ))}
        </>
    )
}
export default ListagemLocalDeColeta