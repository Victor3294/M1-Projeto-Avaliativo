function CardLocalColeta({localDeColeta}) {            
    return(
        <div>
            <p>Nome do Local: {localDeColeta.nomeLocal}</p>
            <p>Descrição do Local: {localDeColeta.descricaoLocal}</p>
            <p>CEP: {localDeColeta.cep}</p>
            <p>Logradouro: {localDeColeta.logradouro}</p>
            <p>Complemento: {localDeColeta.complemento}</p>
            <p>Bairro: {localDeColeta.bairro}</p>
            <p>Cidade: {localDeColeta.cidade}</p>
            <p>Estado: {localDeColeta.uf}</p>
            <p>Numero: {localDeColeta.numero}</p>
            <p>Latitude: {localDeColeta.latitude}</p>
            <p>Longitude: {localDeColeta.longitude}</p>
            <p>Tipo de Residuo que Coleta: {localDeColeta.tiposResiduos}</p>
        </div>
    )
}

export default CardLocalColeta