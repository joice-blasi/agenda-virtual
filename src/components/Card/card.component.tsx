import { useContext, useState } from "react";
import { StyledCard } from "./card.style";
import { UserContext } from "../../contexts/UserContext/user.context";
import {MdOutlineEdit} from "react-icons/md";
import {BsTrash3} from "react-icons/bs"
import { Contact } from "../../contexts/ContactContext/contact.types";
import { ModalUpdateContact } from "../ModalUpdateContact/modal-update-contact.component";
import { ModalDeleteContact } from "../ModalDeleteContact/modal-delete-contact.component";


interface CardProps {
  contact: Contact
}

export const Card = ({contact}: CardProps) => {
  const {formatDate} = useContext(UserContext);
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

  const toogleModalUpdate = () => setIsOpenModalUpdate(!isOpenModalUpdate);

  const toogleModalDelete = () => setIsOpenModalDelete(!isOpenModalDelete);

  return (
    <StyledCard>
      <p>{contact.name}</p>
      <p>{contact.email}</p>
      <p>{contact.telephone}</p>
      <p>Criado em {formatDate(contact.createdAt)}</p>
      <MdOutlineEdit onClick={toogleModalUpdate} />
      {
        isOpenModalUpdate && <ModalUpdateContact toogleModalUpdate={toogleModalUpdate} contact={contact} />
      }
      <BsTrash3 onClick={toogleModalDelete} />
      {
        isOpenModalDelete && <ModalDeleteContact toogleModalDelete={toogleModalDelete} contact={contact} />
      }
    </StyledCard>
  )
}