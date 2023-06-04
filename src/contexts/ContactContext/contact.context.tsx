import { createContext, useState } from "react";
import { IContact, IContactContext, IContactProviderProps } from "./contact.types";
import { CreateContactData } from "../../components/ModalCreateContact/modal-create-contact.validator";
import { api } from "../../services";
import { toast } from "react-toastify";
import { UpdateContactData } from "../../components/ModalUpdateContact/modal-update-contact.validator";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({children}: IContactProviderProps) => {
  const [contacts, setContacts] = useState<IContact[]>([]);

  const createContact = async (data: CreateContactData) => {
    try {
      const response = await api.post("/contacts", data);
      setContacts((previousContacts) => [response.data, ...previousContacts]);
      toast.success("Contato criado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro na criação. Tente novamente");
    }
  }

  const updateContact = async (data: UpdateContactData, idContact: string) => {
    try {
      await api.patch(`/contacts/${idContact}`, data);
      const response = await api.get("/contacts");
      setContacts(response.data);
      toast.success("Contato editado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao editar. Tente novamente");
    }
  }

  const deleteContact = async (idContact: string) => {
    try {
      await api.delete(`/contacts/${idContact}`);
      const response = await api.get("/contacts");
      setContacts(response.data);
      toast.success("Contato deletado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao deletar. Tente novamente");
    }
  }

  return (
    <ContactContext.Provider value={{contacts, setContacts, createContact, updateContact, deleteContact}}>
      {children}
    </ContactContext.Provider>
  )
}