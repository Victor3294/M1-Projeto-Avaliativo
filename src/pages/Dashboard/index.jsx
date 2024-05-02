import { useContext } from "react"
import CardContagem from "../../components/CardContagem"
import Menu from "../../components/Menu"
import { LocalDeColetaContext } from "../../context/LocalDeColetaContext"
import CardLocalColeta from "../../components/CardLocalColeta"

function Dashboard (){
    const {locaisDeColeta} = useContext(LocalDeColetaContext)
    return (
        <>
            <Menu></Menu>
            <CardContagem></CardContagem>
            {!!locaisDeColeta && locaisDeColeta.map((localDeColeta) => (
                <CardLocalColeta localDeColeta={localDeColeta} key={localDeColeta.id}></CardLocalColeta>
            ))}
        </>
    )
}

export default Dashboard