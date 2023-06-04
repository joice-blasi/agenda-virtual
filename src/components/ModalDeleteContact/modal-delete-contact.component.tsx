import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext/contact.context";
import { Modal } from "../Modal/modal.component";
import { IContact } from "../../contexts/ContactContext/contact.types";
import { StyledModalDeleteContact } from "./modal-delete-contact.style";

interface IModalDeleteProps {
  toogleModalDelete: () => void,
  contact: IContact
}

export const ModalDeleteContact = ({toogleModalDelete, contact}: IModalDeleteProps) => {
  const {deleteContact} = useContext(ContactContext);

  const submit = async () => {
    await deleteContact(contact.id);
    toogleModalDelete();
  }

  return (
    <Modal toogleModal={toogleModalDelete} title="Excluir contato">
      <StyledModalDeleteContact>
        <h2>Tem certeza que deseja excluir o contato {contact.name}?</h2>
        <div className="cont-button">
          <button onClick={submit} className="button-exclude">Sim, excluir</button>
        </div>

      </StyledModalDeleteContact>
    </Modal>
  )
}