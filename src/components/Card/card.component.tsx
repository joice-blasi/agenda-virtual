import { useContext } from "react";
import { Contact } from "../../pages/DashboardPage/dashboard.types";
import { StyledCard } from "./card.style";
import { UserContext } from "../../contexts/UserContext/user.context";
import {MdOutlineEdit} from "react-icons/md";
import {BsTrash3} from "react-icons/bs"

interface CardProps {
  contact: Contact
}

export const Card = ({contact}: CardProps) => {
  const {formatDate} = useContext(UserContext);

  return (
    <StyledCard>
      <p>{contact.name}</p>
      <p>{contact.email}</p>
      <p>{contact.telephone}</p>
      <p>Criado em {formatDate(contact.createdAt)}</p>
      <MdOutlineEdit />
      <BsTrash3 />
    </StyledCard>
  )
}