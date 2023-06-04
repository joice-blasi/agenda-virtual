import { createContext, useEffect, useState } from "react";
import { IUser, IUserContext, IUserProviderProps } from "./user.types";
import { LoginData } from "../../components/FormLogin/form-login.validator";
import { RegisterData } from "../../components/FormRegister/form-register.validator";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UpdateUserData } from "../../components/ModalUpdateUser/modal-update-user.validator";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({children}: IUserProviderProps) => {
  const token = localStorage.getItem("agenda-virtual:token");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);

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

  const me = async () => {
    try {
      const response = await api.get("/users/me");
      setUser(response.data);
    } catch (error) {
      console.log(error);
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

  const updateUser = async (data: UpdateUserData, idUser: string) => {
    try {
      const response = await api.patch(`/users/${idUser}`, data);
      setUser(response.data);
      toast.success("Usuário editado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao editar. Tente novamente");
    }
  }

  const deleteUser = async(idUser: string) => {
    try {
      await api.delete(`/users/${idUser}`);
      localStorage.removeItem("agenda-virtual:token");
      setUser(null);
      navigate("/");
      toast.success("Conta deletada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao deletar. Tente novamente");
    }
  }

  const logout = () => {
    if(token) {
      localStorage.removeItem("agenda-virtual:token");
      setUser(null);
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
    <UserContext.Provider value={{loading, user, signIn, me, userRegister, updateUser, deleteUser, logout, formatDate}}>
      {children}
    </UserContext.Provider>
  )
}