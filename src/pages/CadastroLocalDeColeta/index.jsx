import { useForm } from "react-hook-form"

function CadastroLocalDeColeta() {
    const { register, handleSubmit, getValues, setValue } = useForm()

    function sendForm(formValue) {
        console.log(formValue)
    }

    const buscaCep = () =>{
        let cep = getValues("cep")
        if(!!cep && cep.length == 9){
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((dados) => {
                setValue("logradouro", dados.logradouro);
                setValue("complemento", dados.complemento);
                setValue("bairro", dados.bairro);
                setValue("cidade", dados.localidade);
                setValue("uf", dados.uf);
            })
            .catch((error) => console.log("fudeu paizao"))
        }
      }
    return (
        <>
            <form onSubmit={handleSubmit(sendForm)}>
                <div>
                    <label htmlFor="">Nome do Local</label>
                    <input type="text" {...register("nomeLocal", {
                        required: "Por favor informe o nome do local!"
                    })} />
                </div>
                <div>
                    <label htmlFor="">Descrição do Local</label>
                    <input type="text" {...register("descricaoLocal", {
                        required: "Por favor informe a descrição do local"
                    })} />
                </div>
                <div>
                    <label htmlFor="">CEP</label>
                    <input
                        type="text"
                        placeholder="Digite seu CEP"
                        {...register("cep", {
                            required: "Por favor informe seu CEP",
                            onBlur : () => buscaCep()
                        })}
                    />
                </div>
                <div>
                    <label htmlFor="">Logradouro</label>
                    <input type="text" {...register("logradouro")} disabled />
                </div>
                <div>
                    <label htmlFor="">Complemento</label>
                    <input type="text" {...register("complemento")} disabled />
                </div>
                <div>
                    <label htmlFor="">Bairro</label>
                    <input type="text" {...register("bairro")} disabled />
                </div>
                <div>
                    <label htmlFor="">Cidade</label>
                    <input type="text" {...register("cidade")} disabled />
                </div>
                <div>
                    <label htmlFor="">Estado</label>
                    <input type="text" {...register("uf")} disabled />
                </div>
                <div>
                    <label htmlFor="">Número</label>
                    <input
                        type="number"
                        placeholder="Digite o numero da sua residencia"
                        {...register("numero", {
                            required: "Por favor informe o número da sua residencia",
                        })}
                    />
                </div>
                <div>
                    <label htmlFor="">Latitude</label>
                    <input type="text"
                        placeholder="Latitude geográfica do local"
                        {...register("latitude", {
                            required: "Por favor informe a latitude geográfica do local"
                        })} />
                </div>
                <div>
                    <label htmlFor="">Longitude</label>
                    <input type="text" placeholder="Longitude geográfica do local" {...register("longitude", {
                        required: "Por favor informe a longitude geográfica do local"
                    })} />
                </div>
                <div>
                    <label htmlFor="">Tipos de residuos aceitos</label>
                    <select {...register("tiposResiduos", {
                        required: "Por favor selecione um dos residuos"
                    })}>
                        <option value="">Selecione um dos tipos de residuos</option>
                        <option value="vidro">Vidro</option>
                        <option value="papel">Papel</option>
                        <option value="metal">Metal</option>
                        <option value="organico">Orgânico</option>
                        <option value="plastico">Plástico</option>
                        <option value="bateria">Bateria</option>
                        <option value="outro">Outro</option>
                    </select>
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}
export default CadastroLocalDeColeta