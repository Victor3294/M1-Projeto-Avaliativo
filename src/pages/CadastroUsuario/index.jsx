import { useForm } from "react-hook-form";
function CadastroUsuario() {
  const { register } = useForm();
  return (
    <>
      <h1>Cadastro Usuario</h1>
      <form action="">
        <div>
          <label htmlFor="">Nome Completo</label>
          <input
            type="text"
            placeholder="Digite seu nome completo"
            {...register("nome", {
              required: "Por favor insira seu nome",
            })}
          />
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
        </div>
        <div>
          <label htmlFor="">CPF</label>
          <input
            type="text"
            {...register("cpf", {
              required: "Por favor informe seu CPF",
            })}
          />
        </div>
        <div>
            <label htmlFor="">Data de Nascimento</label>
            <input type="date" 
            {...register("data-de-nascimento", {
                required: "Por favor informe sua data de nascimento"
            })}
            />    
        </div>    
        <div>
            <label htmlFor="">Email</label>
            <input type="email" {...register("email", {
                required: "Por favor informe seu email"
            })} />
        </div>
        <div>
            <label htmlFor="">Senha</label>
            <input type="password" {...register("senha", {
                required: "Por favor informe uma senha"
            })}/>
        </div>
        
        
        {/* campos do endereço */}
        <div>
            <label htmlFor="">CEP</label>
            <input type="text" {...register("cep", {
                required: "Por favor informe seu CEP"
            })}/>
        </div>
        <div>
            <label htmlFor="">Logradouro</label>
            <input type="text" {...register("logradouro")} disabled />
        </div>
        <div>
            <label htmlFor="">Complemento</label>
            <input type="text" {...register("complemento")} disabled/>
        </div>
        <div>
            <label htmlFor="">Bairro</label>
            <input type="text" {...register("bairro")} disabled/>
        </div>
        <div>
            <label htmlFor="">Cidade</label>
            <input type="text" {...register("cidade")} disabled/>
        </div>
        <div>
            <label htmlFor="">Estado</label>
            <input type="text" {...register("uf")} disabled/>
        </div>
        <div>
            <label htmlFor="">Número</label>
            <input type="text" {...register("numero", {
                required: "Por favor informe o número da sua residencia"
            })}/>
        </div>
      </form>
    </>
  );
}
export default CadastroUsuario;
