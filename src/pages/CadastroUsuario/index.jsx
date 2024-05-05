import { useForm } from "react-hook-form";
import {UsuariosContext} from "../../context/UsuariosContext"
import { useContext, useState } from "react";
import style from "./style.module.css"
function CadastroUsuario() {
  const { register, setValue, getValues, handleSubmit, formState: {errors} } = useForm();
  const {usuarios, cadastrarUsuarios, getUsuariosCpf} = useContext(UsuariosContext);
  

  const sendForm = (formValue) =>{
    console.log(formValue)

    if(!!formValue){
      cadastrarUsuarios(formValue);
    }
  }

  const validaCpf = (value) => {   
      getUsuariosCpf(value);
      if(usuarios.length != 0){
        return 'Cpf já cadastrado';
      }
      return true;
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
    <div className={style.containerPai}>
      <div className={style.containerContent}>
        <h1>Cadastro Usuario</h1>
        <form className={style.containerFormulario} action="" onSubmit={handleSubmit(sendForm)}>
          <div className={style.caixaInput}>
            <label htmlFor="">Nome Completo</label>
            <input
              className={style.input}
              type="text"
              placeholder="Digite seu nome completo"
              {...register("nome", {
                required: "Por favor insira seu nome",
              })}
            />
            {errors?.nome && <p className={style.erro}>{errors.nome?.message}</p>}
          </div>
          <div className={style.caixaInput}>
            <label htmlFor="">Gênero</label>
            <select
              className={style.input}
              {...register("genero", {
                required: "Por favor, selecione um genero",
              })}
            >
              <option value="">Selecione uma das opções</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
              <option value="nao-informado">Prefiro não dizer</option>
            </select>
            {errors?.genero && <p className={style.erro}>{errors.genero?.message}</p>}
          </div>
          <div className={style.caixaInput}>
            <label htmlFor="">CPF</label>
            <input
              className={style.input}
              type="text"
              placeholder="Digite seu CPF"
              {...register("cpf", {
                required: "Por favor informe seu CPF",
                validate: validaCpf
              })}
            />
            {errors?.cpf && <p className={style.erro}>{errors.cpf?.message}</p>}
          </div>
          <div className={style.caixaInput}>
            <label htmlFor="">Data de Nascimento</label>
            <input
              className={style.input}
              type="date"
              {...register("dataDeNascimento", {
                required: "Por favor informe sua data de nascimento",
              })}
            />
            {errors?.dataDeNascimento && <p className={style.erro}>{errors.dataDeNascimento?.message}</p>}
          </div>
          <div className={style.caixaInput}>
            <label htmlFor="">Email</label>
            <input
              className={style.input}
              type="email"
              placeholder="Digite seu email"
              {...register("email", {
                required: "Por favor informe seu email",
              })}
            />
            {errors?.email && <p className={style.erro}>{errors.email?.message}</p>}
          </div>
          <div className={style.caixaInput}>
            <label htmlFor="">Senha</label>
            <input
              className={style.input}
              type="password"
              placeholder="Digite uma senha"
              {...register("senha", {
                required: "Por favor informe uma senha",
              })}
            />
            {errors?.senha && <p className={style.erro}>{errors.senha?.message}</p>}
          </div>

          {/* campos do endereço */}
          <div className={style.caixaInput}>
            <label htmlFor="">CEP</label>
            <input
              className={style.input}
              type="text"
              placeholder="Digite seu CEP"
              {...register("cep", {
                required: "Por favor informe seu CEP",
                onBlur : () => buscaCep()
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
                required: "Por favor informe o número da sua residencia",
              })}
            />
            {errors?.numero && <p className={style.erro}>{errors.numero?.message}</p>}
          </div>
          <button className={style.button} type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
    </>
  );
}
export default CadastroUsuario;
