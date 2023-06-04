import { createContext, useEffect, useState } from "react";
import { IUserContext, IUserProviderProps } from "./user.types";
import { LoginData } from "../../components/FormLogin/form-login.validator";
import { RegisterData } from "../../components/FormRegister/form-register.validator";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({children}: IUserProviderProps) => {
  const token = localStorage.getItem("agenda-virtual:token");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(!token) {
      setLoading(false);
      return;
    }
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, [])

  

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
      const {token} = response.data;
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("agenda-virtual:token", token);
      navigate("/dashboard");
      toast.success("Usuário logado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error(`Erro: ${error}`);
    }
  }

  const userRegister = async (data: RegisterData) => {
    try {
      await api.post("/users", data);
      navigate("/");
      toast.success("Usuário criado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error(`Erro: ${error}`);
    }
  }

  const logout = () => {
    if(token) {
      localStorage.removeItem("agenda-virtual:token");
      navigate("/");
    }
  }

  const formatDate = (date: Date) => {
    const newDate = new Date(date);
    const day = newDate.getUTCDate();
    const month = newDate.getUTCMonth() + 1;
    const year = newDate.getUTCFullYear();

    const format = day.toString().padStart(2, "0") + "/" + month.toString().padStart(2, "0") + "/" + year;

    return format;
  }

  return (
    <UserContext.Provider value={{signIn, userRegister, loading, logout, formatDate}}>
      {children}
    </UserContext.Provider>
  )
}