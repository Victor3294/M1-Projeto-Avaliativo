function CardLocalColeta({localDeColeta}){
    return(
        <div>
            <span>Nome do Local: {localDeColeta.nomeLocal}</span>
            <span>Descrição do Local: {localDeColeta.descricaoLocal}</span>
            <span>CEP: {localDeColeta.cep}</span>
            <span>Logradouro: {localDeColeta.logradouro}</span>
            <span>Complemento: {localDeColeta.complemento}</span>
            <span>Bairro: {localDeColeta.bairro}</span>
            <span>Cidade: {localDeColeta.cidade}</span>
            <span>Estado: {localDeColeta.uf}</span>
            <span>Numero: {localDeColeta.numero}</span>
            <span>Latitude: {localDeColeta.latitude}</span>
            <span>Longitude: {localDeColeta.longitude}</span>
            <span>Tipo de Residuo que Coleta: {localDeColeta.tiposResiduos}</span>
        </div>
    )
}

export default CardLocalColeta