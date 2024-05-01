import { useForm } from "react-hook-form";
import {UsuariosContext} from "../../context/UsuariosContext"
import { useContext, useState } from "react";
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
      <h1>Cadastro Usuario</h1>
      <form action="" onSubmit={handleSubmit(sendForm)}>
        <div>
          <label htmlFor="">Nome Completo</label>
          <input
            type="text"
            placeholder="Digite seu nome completo"
            {...register("nome", {
              required: "Por favor insira seu nome",
            })}
          />
          {errors?.nome && <p>{errors.nome?.message}</p>}
        </div>
        <div>
          <label htmlFor="">Gênero</label>
          <select
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
          {errors?.genero && <p>{errors.genero?.message}</p>}
        </div>
        <div>
          <label htmlFor="">CPF</label>
          <input
            type="text"
            placeholder="Digite seu CPF"
            {...register("cpf", {
              required: "Por favor informe seu CPF",
              validate: validaCpf
            })}
          />
          {errors?.cpf && <p>{errors.cpf?.message}</p>}
        </div>
        <div>
          <label htmlFor="">Data de Nascimento</label>
          <input
            type="date"
            {...register("dataDeNascimento", {
              required: "Por favor informe sua data de nascimento",
            })}
          />
          {errors?.dataDeNascimento && <p>{errors.dataDeNascimento?.message}</p>}
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
            {...register("email", {
              required: "Por favor informe seu email",
            })}
          />
          {errors?.email && <p>{errors.email?.message}</p>}
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            placeholder="Digite uma senha"
            {...register("senha", {
              required: "Por favor informe uma senha",
            })}
          />
          {errors?.senha && <p>{errors.senha?.message}</p>}
        </div>

        {/* campos do endereço */}
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
              required: "Por favor informe o número da sua residencia",
            })}
          />
          {errors?.numero && <p>{errors.numero?.message}</p>}
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}
export default CadastroUsuario;
