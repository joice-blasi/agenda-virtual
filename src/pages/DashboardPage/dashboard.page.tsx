import { useEffect, useState } from "react";
import { Header } from "../../components/Header/header.component";
import { api } from "../../services";
import { Contact } from "./dashboard.types";
import { Card } from "../../components/Card/card.component";
import { StyledDashboard } from "./dashboard.style";
import {AiOutlineUserAdd} from "react-icons/ai";
import { ModalCreate } from "../../components/ModalCreate/modal-create.component";

export const DashboardPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isOpenModelCreate, setIsOpenModalCreate] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("/contacts");
      setContacts(response.data);
    })()
  }, []);

  const toogleModal = () => setIsOpenModalCreate(!isOpenModelCreate)

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
            <AiOutlineUserAdd className="add-contact" onClick={toogleModal}/>
          </div>
          {
            isOpenModelCreate && <ModalCreate toogleModal={toogleModal} />
          }
          <ul>
            {contacts.length >= 1 ?
            contacts.map((contact) => <Card key={contact.id} contact={contact}/>) :
            <h4 className="empty">Nenhum contato adicionado</h4>
            }
          </ul>
        </div>
      </StyledDashboard>
    </>
  )
}