import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { LocalDeColetaContext } from "../../context/LocalDeColetaContext"
import Menu from "../../components/Menu"
import { useParams } from "react-router-dom"
import style from "./style.module.css"

function CadastroLocalDeColeta() {
    const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm()
    const { cadastrarLocalDeColeta, getLocalDeColetaPorId, editarLocalDeColeta } = useContext(LocalDeColetaContext)
    const { id } = useParams()
    function sendForm(formValue) {
        console.log(formValue)
        if (!!formValue) {
            if (!id) {
                cadastrarLocalDeColeta(formValue)
                return
            }
            editarLocalDeColeta(formValue, id)
        }
    }
    async function mostrarLocalEditar(id) {
        try {
            if (!!id) {
                await getLocalDeColetaPorId(id).then((dados) => {
                    setValue("cep", dados.cep)
                    setValue("descricaoLocal", dados.descricaoLocal)
                    setValue("latitude", dados.latitude)
                    setValue("longitude", dados.longitude)
                    setValue("nomeLocal", dados.nomeLocal)
                    setValue("numero", dados.numero)
                    setValue("tiposResiduos", dados.tiposResiduos)
                    setValue("complemento", dados.complemento)
                    setValue("bairro", dados.bairro)
                    setValue("logradouro", dados.logradouro)
                    setValue("cidade", dados.cidade)
                    setValue("uf", dados.uf)
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        mostrarLocalEditar(id);
    }, [])


    const buscaCep = () => {
        let cep = getValues("cep")
        if (!!cep && cep.length == 9) {
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
            <div className={style.containerPai}>
                <h1>Cadastro de Novo Local de Coleta</h1>
                <form className={style.containerFormulario} onSubmit={handleSubmit(sendForm)}>
                    <div className={style.caixaInput}>
                        <label htmlFor="">Nome do Local</label>
                        <input className={style.input} type="text" placeholder="Informe o nome do local de coleta" {...register("nomeLocal", {
                            required: "Por favor informe o nome do local!"
                        })} />
                        {errors?.nomeLocal && <p className={style.erro}>{errors.nomeLocal?.message}</p>}
                    </div>
                    <div className={style.caixaInput}>
                        <label htmlFor="">Descrição do Local</label>
                        <input className={style.input} type="text" placeholder="Informe a descrição do local de coleta" {...register("descricaoLocal", {
                            required: "Por favor informe a descrição do local"
                        })} />
                        {errors?.descricaoLocal && <p className={style.erro}>{errors.descricaoLocal?.message}</p>}
                    </div>
                    <div className={style.caixaInput}>
                        <label htmlFor="">CEP</label>
                        <input
                            className={style.input}
                            type="text"
                            placeholder="Digite seu CEP"
                            {...register("cep", {
                                required: "Por favor informe seu CEP",
                                onBlur: () => buscaCep()
                            })}
                        />
                        {errors?.cep && <p className={style.erro}>{errors.cep?.message}</p>}
                    </div>
                    <div className={style.caixaInput}>
                        <label htmlFor="">Logradouro</label>
                        <input className={style.input} type="text" {...register("logradouro")} disabled />
                    </div>
                    <div className={style.caixaInput}>
                        <label htmlFor="">Complemento</label>
                        <input className={style.input} type="text" {...register("complemento", {
                            required: "Por favor informe um complemento para sua residencia, EX(casa azul, Ap 111, algo que descreva onde voce mora)"
                        })} />
                        {errors?.complemento && <p className={style.erro}>{errors.complemento?.message}</p>}
                    </div>
                    <div className={style.caixaInput}>
                        <label htmlFor="">Bairro</label>
                        <input className={style.input} type="text" {...register("bairro")} disabled />
                    </div>
                    <div className={style.caixaInput}>
                        <label htmlFor="">Cidade</label>
                        <input className={style.input} type="text" {...register("cidade")} disabled />
                    </div>
                    <div className={style.caixaInput}>
                        <label htmlFor="">Estado</label>
                        <input className={style.input} type="text" {...register("uf")} disabled />
                    </div>
                    <div className={style.caixaInput}>
                        <label htmlFor="">Número</label>
                        <input
                            className={style.input}
                            type="number"
                            placeholder="Digite o numero da sua residencia"
                            {...register("numero", {
                                required: "Por favor informe o número da sua residencia"
                            })}
                        />
                        {errors?.numero && <p className={style.erro}>{errors.numero?.message}</p>}
                    </div>
                    <div className={style.caixaInput}>
                        <label htmlFor="">Latitude</label>
                        <input type="text" className={style.input}
                            placeholder="Latitude geográfica do local"
                            {...register("latitude", {
                                required: "Por favor informe a latitude geográfica do local"
                            })} />
                        {errors?.latitude && <p className={style.erro}>{errors.latitude?.message}</p>}
                    </div>
                    <div className={style.caixaInput}>
                        <label htmlFor="">Longitude</label>
                        <input className={style.input} type="text" placeholder="Longitude geográfica do local" {...register("longitude", {
                            required: "Por favor informe a longitude geográfica do local"
                        })} />
                        {errors?.longitude && <p className={style.erro}>{errors.longitude?.message}</p>}
                    </div>
                    <div>
                        <div>
                            <input type="checkbox" value="Vidro" {...register("tiposResiduos", {
                                required: true
                            })} />
                            <span>Vidro</span>
                        </div>
                        <div>
                            <input type="checkbox" value="Papel" {...register("tiposResiduos", {
                                required: true
                            })} />
                            <span>Papel</span>
                        </div>
                        <div>
                            <input type="checkbox" value="Orgânico" {...register("tiposResiduos", {
                                required: true
                            })} />
                            <span>Orgânico</span>
                        </div>
                        <div>
                            <input type="checkbox" value="Plástico" {...register("tiposResiduos", {
                                required: true
                            })} />
                            <span>Plástico</span>
                        </div>
                        <div>
                            <input type="checkbox" value="Bateria" {...register("tiposResiduos", {
                                required: true
                            })} />
                            <span>Bateria</span>
                        </div>
                        <div>
                            <input type="checkbox" value="Papelão" {...register("tiposResiduos", {
                                required: true
                            })} />
                            <span>Papelão</span>
                        </div>
                        <div>
                            <input type="checkbox" value="Outro" {...register("tiposResiduos", {
                                required: true
                            })} />
                            <span>Outro</span>
                        </div>
                        {errors?.tiposResiduos && <p className={style.erro}>Selecione pelo menos uma das opções</p>}
                    </div>
                    <input type="hidden" {...register("idUsuario")} value={localStorage.getItem("IdLogado")} />

                    <button className={style.button} type="submit">Cadastrar</button>
                </form>
            </div>
        </>
    )
}
export default CadastroLocalDeColeta