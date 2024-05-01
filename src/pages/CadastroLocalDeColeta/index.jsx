import { useContext } from "react"
import { useForm } from "react-hook-form"
import { LocalDeColetaContext } from "../../context/LocalDeColetaContext"

function CadastroLocalDeColeta() {
    const { register, handleSubmit, getValues, setValue, formState: {errors} } = useForm()
    const {cadastrarLocalDeColeta} = useContext(LocalDeColetaContext)

    function sendForm(formValue) {
        console.log(formValue)
        if(!!formValue){
            cadastrarLocalDeColeta(formValue);
        }
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
            .catch((error) => console.log(error))
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
                    {errors?.nomeLocal && <p>{errors.nomeLocal?.message}</p>}
                </div>
                <div>
                    <label htmlFor="">Descrição do Local</label>
                    <input type="text" {...register("descricaoLocal", {
                        required: "Por favor informe a descrição do local"
                    })} />
                    {errors?.descricaoLocal && <p>{errors.descricaoLocal?.message}</p>}
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
                    {errors?.cep && <p>{errors.cep?.message}</p>}
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
                            required: "Por favor informe o número da sua residencia"
                        })}
                    />
                    {errors?.numero && <p>{errors.numero?.message}</p>}
                </div>
                <div>
                    <label htmlFor="">Latitude</label>
                    <input type="text"
                        placeholder="Latitude geográfica do local"
                        {...register("latitude", {
                            required: "Por favor informe a latitude geográfica do local"
                        })} />
                    {errors?.latitude && <p>{errors.latitude?.message}</p>}
                </div>
                <div>
                    <label htmlFor="">Longitude</label>
                    <input type="text" placeholder="Longitude geográfica do local" {...register("longitude", {
                        required: "Por favor informe a longitude geográfica do local"
                    })} />
                    {errors?.longitude && <p>{errors.longitude?.message}</p>}
                </div>
                <div>
                    <label htmlFor="">Tipos de residuos aceitos</label>
                    <select {...register("tiposResiduos", {
                        required: "Por favor selecione um dos tipos de residuos"
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
                    {errors?.tiposResiduos && <p>{errors.tiposResiduos?.message}</p>}
                </div>
                <input type="hidden" {...register("idUsuario")} value={JSON.parse(localStorage.getItem("IdLogado"))}/>

                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}
export default CadastroLocalDeColeta