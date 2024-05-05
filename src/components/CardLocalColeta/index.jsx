import style from "./style.module.css"

function CardLocalColeta({localDeColeta, children}) {            
    return(
        <div className={style.containerCard}>
            <p className={style.titulo}>{localDeColeta.nomeLocal} --- {localDeColeta.cidade}/{localDeColeta.uf}</p>
            <div>
                <p className={style.descricao}>Descrição do Local: {localDeColeta.descricaoLocal}</p>
                <div className={style.caixaDoisTexto}>
                    <span>CEP: {localDeColeta.cep}</span><span>Numero: {localDeColeta.numero}</span>
                </div>
                <p>Logradouro: {localDeColeta.logradouro}</p>
                <p>Complemento: {localDeColeta.complemento}</p>
                <div className={style.caixaDoisTexto}>
                    <span>Latitude: {localDeColeta.latitude}</span>
                    <span>Longitude: {localDeColeta.longitude}</span>
                </div>
                <p>Bairro: {localDeColeta.bairro}</p>  
                <p>Tipo de Residuo que Coleta: {localDeColeta.tiposResiduos.map((tipoResiduo, index)=>(<span key={index}>{tipoResiduo} </span>))}</p>
                <div className={style.containerBotao}>
                    {children}
                </div> 
            </div>
        </div>
    )
}

export default CardLocalColeta