import React from "react";
import { LoginData } from "../../components/FormLogin/form-login.validator";
import { RegisterData } from "../../components/FormRegister/form-register.validator";
import { UpdateUserData } from "../../components/ModalUpdateUser/modal-update-user.validator";

export interface IUserProviderProps {
  children: React.ReactNode,
}

export interface IUser {
  id: string,
  name: string,
  email: string,
  telephone: string,
  createdAt: Date,
  password: string,
}

export interface IUserContext {
  loading: boolean,
  user: IUser | null,
  signIn: (data: LoginData) => void,
  me: () => void,
  userRegister: (data: RegisterData) => void,
  updateUser: (data: UpdateUserData, idUser: string) => void,
  deleteUser: (idUser: string) => void,
  logout: () => void,
  formatDate: (date: Date) => string,
}