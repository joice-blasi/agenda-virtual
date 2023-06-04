import { useContext } from "react"
import { ContactContext } from "../../contexts/ContactContext/contact.context"
import { Modal } from "../Modal/modal.component";
import { Contact } from "../../contexts/ContactContext/contact.types";

interface IModalDeleteProps {
  toogleModalDelete: () => void,
  contact: Contact
}

export const ModalDeleteContact = ({toogleModalDelete, contact}: IModalDeleteProps) => {
  const {deleteContact} = useContext(ContactContext);

  const submit = async () => {
    await deleteContact(contact.id);
    toogleModalDelete();
  }

  return (
    <Modal toogleModal={toogleModalDelete} title="Excluir contato">
      <h2>Tem certeza que deseja excluir o contato {contact.name}?</h2>
      <button onClick={submit}>Sim, excluir</button>
    </Modal>
  )
}