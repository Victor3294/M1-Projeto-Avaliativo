import style from "./style.module.css"

function CardLocalColeta({localDeColeta, children}) {            
    return(
        <div className={style.containerCard}>
            <p className={style.titulo}>{localDeColeta.nomeLocal} --- {localDeColeta.cidade}/{localDeColeta.uf}</p>
            <div>
                <p className={style.descricao}>Descrição do Local: {localDeColeta.descricaoLocal}</p>
                <p>CEP: {localDeColeta.cep}</p>
                <p>Logradouro: {localDeColeta.logradouro}</p>
                <p>Complemento: {localDeColeta.complemento}</p>
                <p>Bairro: {localDeColeta.bairro}</p>  
                <p>Numero: {localDeColeta.numero}</p>
                <p>Latitude: {localDeColeta.latitude}</p>
                <p>Longitude: {localDeColeta.longitude}</p>
                <p>Tipo de Residuo que Coleta: {localDeColeta.tiposResiduos.map((tipoResiduo, index)=>(<span key={index}>{tipoResiduo}</span>))}</p>
                <div>
                    {children}
                </div> 
            </div>
        </div>
    )
}

export default CardLocalColeta