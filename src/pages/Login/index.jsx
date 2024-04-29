import { useForm } from "react-hook-form";

function Login() {
  const {
    register
  } = useForm();
  return (
    <>
      <form>
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
