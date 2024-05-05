import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UsuariosContext } from "../../context/UsuariosContext";
import { Link } from "react-router-dom";
import style from "./style.module.css"
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
      <div className={style.containerPai}>
        <div className={style.containerContent}>
          <h1>Login</h1>
          <form className={style.containerFormulario} onSubmit={handleSubmit(sendForm)}>
            <div className={style.caixaInput}>
              <label htmlFor="">Email</label>
              <input
                className={style.input}
                type="email"
                {...register("email", {
                  required: "Informe seu email.",
                })}
              />
              {errors?.email && <p className={style.erro}>{errors.email?.message}</p>}
            </div>
            <div className={style.caixaInput}>
                <label htmlFor="">Senha</label>
                <input type="password"
                 className={style.input} 
                {...register("senha", {
                    required: "Informe sua senha.",
                })}/>
                {errors?.senha && <p className={style.erro}>{errors.senha?.message}</p>}           
            </div>
            <button className={style.button} type="submit">Entrar</button>
          </form>
          <p>Não possui uma conta? <Link to="/usuario/cadastro">Cadastre-se</Link></p>
        </div>
      </div>
    </>
  );
}
export default Login;
