import { useContext } from "react"
import { Modal } from "../Modal/modal.component"
import { UserContext } from "../../contexts/UserContext/user.context"
import { UpdateUserData, schemaUpdateUser } from "./modal-update-user.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IUser } from "../../contexts/UserContext/user.types";
import { Input } from "../Input/input.component";
import { Button } from "../Button/button.component";

interface IModalUpdateUserProps {
  toogleUpdateUser: () => void,
  user: IUser,
}

export const ModalUpdateUser = ({toogleUpdateUser, user}: IModalUpdateUserProps) => {
  const {updateUser} = useContext(UserContext);

  const {register, handleSubmit, formState: {errors}} = useForm<UpdateUserData>({
    mode: "onBlur",
    defaultValues: {
      name: user.name,
      email: user.email,
      telephone: user.telephone,
    },
    resolver: zodResolver(schemaUpdateUser)
  })

  const submit = async (data: UpdateUserData) => {
    if(user.email === data.email) {
      delete data.email;
    }
    await updateUser(data, user.id);
    toogleUpdateUser();
  }

  return (
    <Modal toogleModal={toogleUpdateUser} title="Editar conta">
      <form onSubmit={handleSubmit(submit)}>
        <Input id="name" label="Nome" type="text" placeholder="Digite seu nome" register={register("name")} error={errors.name}/>

        <Input id="email" label="Email" type="text" placeholder="Digite seu email" register={register("email")} error={errors.email}/>

        <Input id="telephone" label="Telefone" type="text" placeholder="Digite seu telefone" register={register("telephone")} error={errors.telephone}/>
        
        <Button text="Editar"/>
      </form>
    </Modal>
  )
}