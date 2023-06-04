import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input/input.component";
import { CreateContactData, schemaCreateContact } from "./modal-create-contact.validator";
import { Button } from "../Button/button.component";
import { ContactContext } from "../../contexts/ContactContext/contact.context";
import { Modal } from "../Modal/modal.component";
import { StyledModalCreateForm } from "./modal-create-contact.style";

interface IModalCreateProps {
  toogleModalCreate: () => void,
}

export const ModalCreateContact = ({toogleModalCreate}: IModalCreateProps) => {
  const {createContact} = useContext(ContactContext);

  const {register, handleSubmit, formState: {errors}} = useForm<CreateContactData>({
    mode: "onBlur",
    resolver: zodResolver(schemaCreateContact)
  })

  const submit = async (data: CreateContactData) => {
    await createContact(data);
    toogleModalCreate();
  }

  return (
    <Modal toogleModal={toogleModalCreate} title="Novo contato">
      <StyledModalCreateForm onSubmit={handleSubmit(submit)}>
        <Input id="name" label="Nome" type="text" placeholder="Digite o nome do contato" register={register("name")} error={errors.name}/>

        <Input id="email" label="Email" type="text" placeholder="Digite o email do contato" register={register("email")} error={errors.email}/>
              
        <Input id="telephone" label="Telefone" type="text" placeholder="Digite o telefone do contato" register={register("telephone")} error={errors.telephone}/>

        <div className="cont-button">
          <Button text="Criar" />
        </div>
      </StyledModalCreateForm>
    </Modal>
  )
}