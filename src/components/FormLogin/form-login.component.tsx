import { useForm } from "react-hook-form"
import { Input } from "../Input/input.component"
import { Button } from "../Button/button.component"
import { StyledLoginForm } from "./form-login.style"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginData, schemaLogin } from "./form-login.validator"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext/user.context"

export const LoginForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<LoginData>({
    resolver: zodResolver(schemaLogin)
  })

  const {signIn} = useContext(UserContext)

  return (
    <StyledLoginForm>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(signIn)}>
        <Input id="email" label="Email" type="text" placeholder="Digite seu email" register={register("email")}/>
        {errors.email && (<p aria-label="error">{errors.email.message}</p>)}

        <Input id="password" label="Senha" type="password" placeholder="Digite sua senha" register={register("password")}/>
        {errors.password && (<p aria-label="error">{errors.password.message}</p>)}

        <Button text="Entrar"/>

        <p>Não tem conta? Cadastre-se <span>aqui</span>.</p>
      </form>
    </StyledLoginForm>
  )
}