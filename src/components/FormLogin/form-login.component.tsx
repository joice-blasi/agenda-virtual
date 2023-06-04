import { useForm } from "react-hook-form";
import { Input } from "../Input/input.component";
import { Button } from "../Button/button.component";
import { StyledLoginForm } from "./form-login.style";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, schemaLogin } from "./form-login.validator";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/user.context";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<LoginData>({
    mode: "onBlur",
    resolver: zodResolver(schemaLogin)
  });

  const {signIn} = useContext(UserContext);

  return (
    <StyledLoginForm>
      <div className="cont-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(signIn)}>
          <Input id="email" label="Email" type="text" placeholder="Digite seu email" register={register("email")} error={errors.email}/>

          <Input id="password" label="Senha" type="password" placeholder="Digite sua senha" register={register("password")} error={errors.password}/>

          <div className="center">
            <Button text="Entrar"/>
            <p>Não tem conta? Cadastre-se <Link to="register" className="link">aqui</Link>.</p>
          </div>
        </form>
      </div>
    </StyledLoginForm>
  )
}