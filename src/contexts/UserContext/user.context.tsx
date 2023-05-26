import { createContext } from "react";
import { IUserContext, IUserProviderProps } from "./user.types";
import { LoginData } from "../../components/FormLogin/form-login.validator";
import { RegisterData } from "../../components/FormRegister/form-register.validator";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({children}: IUserProviderProps) => {

  const signIn = async (data: LoginData) => {
    console.log(data)
  }

  const userRegister = async (data: RegisterData) => {
    console.log(data)
  }

  return (
    <UserContext.Provider value={{signIn, userRegister}}>
      {children}
    </UserContext.Provider>
  )
}