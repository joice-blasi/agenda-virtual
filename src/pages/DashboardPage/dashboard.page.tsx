import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header/header.component";
import { api } from "../../services";
import { Card } from "../../components/Card/card.component";
import { StyledDashboard } from "./dashboard.style";
import {AiOutlineUserAdd} from "react-icons/ai";

import { Contact } from "../../contexts/ContactContext/contact.types";
import { ContactContext } from "../../contexts/ContactContext/contact.context";
import { ModalCreateContact } from "../../components/ModalCreateContact/modal-create-contact.component";

export const DashboardPage = () => {
  const {contacts, setContacts} = useContext(ContactContext);
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("/contacts");
      setContacts(response.data);
    })()
  }, []);

  const toogleModalCreate = () => setIsOpenModalCreate(!isOpenModalCreate)

  return (
    <>
      <Header/>
      <StyledDashboard className="container">
        <section className="cont-identification">
          <h3>Identificação</h3>
        </section>
        
        <div className="cont-contacts">
          <div className="add">
            <h3>Contatos</h3>
            <AiOutlineUserAdd className="add-contact" onClick={toogleModalCreate}/>
          </div>
          {
            isOpenModalCreate && <ModalCreateContact toogleModalCreate={toogleModalCreate} />
          }
          <ul>
            {contacts && contacts.length ?
            contacts.map((contact) => <Card key={contact.id} contact={contact}/>) :
            <h4 className="empty">Nenhum contato adicionado</h4>
            }
          </ul>
        </div>
      </StyledDashboard>
    </>
  )
}