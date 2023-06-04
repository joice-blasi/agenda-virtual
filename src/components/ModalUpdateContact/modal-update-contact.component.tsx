import { useForm } from "react-hook-form";
import { UpdateContactData, schemaUpdateContact } from "./modal-update-contact.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../Modal/modal.component";
import { Input } from "../Input/input.component";
import { Button } from "../Button/button.component";
import { StyledModalUpdateForm } from "./modal-update-contact.style";
import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext/contact.context";
import { IContact } from "../../contexts/ContactContext/contact.types";

interface IModalUpdateProps {
  toogleModalUpdate: () => void,
  contact: IContact
}

export const ModalUpdateContact = ({ toogleModalUpdate, contact }: IModalUpdateProps) => {
  const {updateContact} = useContext(ContactContext)

  const { register, handleSubmit, formState: { errors } } = useForm<UpdateContactData>({
    mode: "onBlur",
    defaultValues: {
      name: contact.name,
      email: contact.email,
      telephone: contact.telephone
    },
    resolver: zodResolver(schemaUpdateContact)
  })

  const submit = async (data: UpdateContactData) => {
    if(contact.name === data.name) {
      delete data.name;
    }
    await updateContact(data, contact.id);
    toogleModalUpdate();
  }

  return (
    <Modal toogleModal={toogleModalUpdate} title="Editar contato">
      <StyledModalUpdateForm onSubmit={handleSubmit(submit)}>
        <Input id="name" label="Nome" type="text" placeholder="Digite o nome do contato" register={register("name")} error={errors.name}/>

        <Input id="email" label="Email" type="text" placeholder="Digite o email do contato" register={register("email")} error={errors.email}/>
      
        <Input id="telephone" label="Telefone" type="text" placeholder="Digite o telefone do contato" register={register("telephone")} error={errors.telephone}/>

        <Button text="Editar"/>
      </StyledModalUpdateForm>
    </Modal>
  )
}