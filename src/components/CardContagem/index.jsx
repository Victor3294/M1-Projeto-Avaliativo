import { useContext } from "react"
import { LocalDeColetaContext } from "../../context/LocalDeColetaContext"
import { UsuariosContext } from "../../context/UsuariosContext"

function CardContagem(){
    const {contagemLocalDeColeta} = useContext(LocalDeColetaContext)
    const {contagemUsuarios} = useContext(UsuariosContext)
    return (
        <div>
            <p>Quantidade de locais de coleta cadastrados = {contagemLocalDeColeta}</p>
            <p>Quantidade de usuarios cadastrados = {contagemUsuarios}</p>
        </div>
    )
}

export default CardContagem