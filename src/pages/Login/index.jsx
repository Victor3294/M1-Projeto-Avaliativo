import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UsuariosContext } from "../../context/UsuariosContext";

function Login() {
  const {
    register, handleSubmit
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
        </div>
        <div>
            <label htmlFor="">Senha</label>
            <input type="password" 
            {...register("senha", {
                required: "Informe sua senha.",
            })}/>           
        </div>
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
export default Login;
