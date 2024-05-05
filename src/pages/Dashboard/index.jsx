import { useContext } from "react"
import CardContagem from "../../components/CardContagem"
import Menu from "../../components/Menu"
import { LocalDeColetaContext } from "../../context/LocalDeColetaContext"
import CardLocalColeta from "../../components/CardLocalColeta"
import style from "./style.module.css"

function Dashboard() {
    const { locaisDeColeta } = useContext(LocalDeColetaContext)
    return (
        <>
            <Menu></Menu>
            <CardContagem></CardContagem>
            <div className={style.containerCardLocalDeColeta}>
                {!!locaisDeColeta && locaisDeColeta.map((localDeColeta) => (
                    <CardLocalColeta localDeColeta={localDeColeta} key={localDeColeta.id}></CardLocalColeta>
                ))}
            </div>
        </>
    )
}

export default Dashboard