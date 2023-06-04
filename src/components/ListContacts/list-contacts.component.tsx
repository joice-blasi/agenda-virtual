import { AiOutlineUserAdd } from "react-icons/ai";
import { Card } from "../Card/card.component";
import { ModalCreateContact } from "../ModalCreateContact/modal-create-contact.component";
import { IContact } from "../../contexts/ContactContext/contact.types";
import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../../contexts/ContactContext/contact.context";
import { api } from "../../services";
import { StyledListContacts } from "./list-contacts.style";

export const ListContacts = () => {
  const {contacts, setContacts} = useContext(ContactContext);
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await api.get<IContact[]>("/contacts");
      setContacts(response.data);
    })()
  }, []);

  const toogleModalCreate = () => setIsOpenModalCreate(!isOpenModalCreate);
  
  return (
    <StyledListContacts>
      <div className="add">
        <h3>Contatos</h3>
        <AiOutlineUserAdd className="add-contact" onClick={toogleModalCreate}/>
      </div>
      {
        isOpenModalCreate && <ModalCreateContact toogleModalCreate={toogleModalCreate} />
      }
      <ul className="list">
        {contacts && contacts.length ?
          contacts.map((contact) => <Card key={contact.id} contact={contact}/>) :
          <h4 className="empty">Nenhum contato adicionado</h4>
        }
      </ul>
    </StyledListContacts>
  )
}