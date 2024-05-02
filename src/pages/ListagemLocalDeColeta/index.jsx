import Menu from "../../components/Menu"
import CardLocalColeta from "../../components/CardLocalColeta"
import { useContext } from "react"
import { LocalDeColetaContext } from "../../context/LocalDeColetaContext"

function ListagemLocalDeColeta(){
    const {locaisDeColeta} = useContext(LocalDeColetaContext)
    return (
        <>
            <Menu></Menu>
            {!!locaisDeColeta && locaisDeColeta.map((localDeColeta) => (
                <CardLocalColeta key={localDeColeta.id} localDeColeta={localDeColeta}></CardLocalColeta>
            ))}
        </>
    )
}
export default ListagemLocalDeColeta