import { useForm } from "react-hook-form"
import { Input } from "../Input/input.component"
import { RegisterData, schemaRegister } from "./form-register.validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext/user.context"

export const RegisterForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<RegisterData>({
    resolver: zodResolver(schemaRegister)
  })

  const {userRegister} = useContext(UserContext)

  return (
    <section>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit(userRegister)}>
      
        <Input id="name" label="Nome" type="text" placeholder="Digite seu nome" register={register("name")}/>
        {errors.name && (<p aria-label="error">{errors.name.message}</p>)}

        <Input id="email" label="Email" type="text" placeholder="Digite seu email" register={register("email")}/>
        {errors.email && (<p aria-label="error">{errors.email.message}</p>)}

        <Input id="password" label="Senha" type="password" placeholder="Digite sua senha" register={register("password")}/>
        {errors.password && (<p aria-label="error">{errors.password.message}</p>)}

        <Input id="telephone" label="Telefone" type="number" placeholder="Digite seu telefone" register={register("telephone")}/>
        {errors.telephone && (<p aria-label="error">{errors.telephone.message}</p>)}

      </form>
    </section>
  )
}