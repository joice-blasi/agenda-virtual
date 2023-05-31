import { useForm } from "react-hook-form"
import { Input } from "../Input/input.component"
import { RegisterData, schemaRegister } from "./form-register.validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext/user.context"
import { StyledRegisterForm } from "./form-register.style"
import { Button } from "../Button/button.component"
import { Link } from "react-router-dom"

export const RegisterForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<RegisterData>({
    mode: "onBlur",
    resolver: zodResolver(schemaRegister)
  })

  const {userRegister} = useContext(UserContext)

  return (
    <StyledRegisterForm>
      <div className="container">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit(userRegister)}>
        
          <Input id="name" label="Nome" type="text" placeholder="Digite seu nome" register={register("name")} error={errors.name}/>

          <Input id="email" label="Email" type="text" placeholder="Digite seu email" register={register("email")} error={errors.email}/>

          <Input id="password" label="Senha" type="password" placeholder="Digite sua senha" register={register("password")} error={errors.password}/>

          <Input id="telephone" label="Telefone" type="text" placeholder="Digite seu telefone" register={register("telephone")} error={errors.telephone}/>

          <div className="center">
            <Button text="Cadastrar" />
            <p>Já tem conta? Faça login <Link to="/" className="link">aqui</Link>.</p>
          </div>
        </form>
      </div>
    </StyledRegisterForm>
  )
}