import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { LocalDeColetaContext } from "../../context/LocalDeColetaContext"
import Menu from "../../components/Menu"
import { useParams } from "react-router-dom"

function CadastroLocalDeColeta() {
    const [carregando, setCarregando] = useState(true)
    const { register, handleSubmit, getValues, setValue, formState: {errors} } = useForm()
    const {cadastrarLocalDeColeta, getLocalDeColetaPorId, localDeColeta, editarLocalDeColeta} = useContext(LocalDeColetaContext)
    const {id} = useParams()
    function sendForm(formValue) {
        console.log(formValue)
        if(!!formValue){
            if(!!id){
                cadastrarLocalDeColeta(formValue)
                return
            }
            editarLocalDeColeta(formValue, id)
        }
    }
    async function mostrarLocalEditar (id)  {
        try{
            if(!!id){
                await getLocalDeColetaPorId(id)
                setValue("cep", localDeColeta.cep)
                setValue("descricaoLocal", localDeColeta.descricaoLocal)
                setValue("latitude", localDeColeta.latitude)
                setValue("longitude", localDeColeta.longitude)
                setValue("nomeLocal", localDeColeta.nomeLocal)
                setValue("numero", localDeColeta.numero)
                setValue("tiposResiduos", localDeColeta.tiposResiduos)
                setValue("complemento", localDeColeta.complemento)
                setValue("bairro", localDeColeta.bairro)
                setValue("logradouro", localDeColeta.logradouro)
                setValue("cidade", localDeColeta.cidade)
                setValue("uf", localDeColeta.uf)
            }
        }
        catch (error){
            console.log(error)
        }
        
    }

    useEffect(() => {
        async function carregandoEdição () {
            try {
                setCarregando(true)
                await mostrarLocalEditar(id)
            }
            catch (error){
                console.log(error)
            }
            finally{
                setCarregando(false)
            }
        }
        carregandoEdição()
    }, [])
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
            <Menu></Menu>
            {carregando && <p>Carrgando...</p>}
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
                    <input type="text" {...register("complemento", {
                        required: "Por favor informe um complemento para sua residencia, EX(casa azul, Ap 111, algo que descreva onde voce mora)"
                    })} />
                    {errors?.complemento && <p>{errors.complemento?.message}</p>}
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
                        <option value="papelao">Papelão</option>
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