import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UsuariosContext } from "../../context/UsuariosContext";

function Login() {
  const {
    register, handleSubmit, formState: {errors}
  } = useForm();

  const {login} = useContext(UsuariosContext)

  function sendForm(formValue){
    login(formValue.email, formValue.senha)
  }
  return (
    <>
      <form onSubmit={handleSubmit(sendForm)}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Informe seu email.",
            })}
          />
          {errors?.email && <p>{errors.email?.message}</p>}
        </div>
        <div>
            <label htmlFor="">Senha</label>
            <input type="password" 
            {...register("senha", {
                required: "Informe sua senha.",
            })}/>
            {errors?.senha && <p>{errors.senha?.message}</p>}           
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>Não possui uma conta? <Link to="/usuario/cadastro">Cadastre-se</Link></p>
    </>
  );
}
export default Login;
