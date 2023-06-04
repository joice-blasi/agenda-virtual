import { ReactNode } from "react";
import { CreateContactData } from "../../components/ModalCreateContact/modal-create-contact.validator";
import { UpdateContactData } from "../../components/ModalUpdateContact/modal-update-contact.validator";

export interface IContactProviderProps {
  children: ReactNode,
}

export interface Contact {
  id: string,
  name: string,
  email: string,
  telephone: string,
  createdAt: Date,
  user_id: string,
}

export interface IContactContext {
  contacts: Contact[],
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>,
  createContact: (data: CreateContactData) => void,
  updateContact: (data: UpdateContactData, idContact: string) => void,
  deleteContact: (idContact: string) => void,
}
