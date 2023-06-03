import React from "react";
import { LoginData } from "../../components/FormLogin/form-login.validator";
import { RegisterData } from "../../components/FormRegister/form-register.validator";

export interface IUserProviderProps {
  children: React.ReactNode,
}

export interface IUserContext {
  signIn: (data: LoginData) => void,
  userRegister: (data: RegisterData) => void,
  loading: boolean,
  logout: () => void,
  formatDate: (date: Date) => string,
}