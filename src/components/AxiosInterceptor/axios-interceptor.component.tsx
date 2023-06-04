import { ReactNode, useEffect, useState } from "react";
import { api } from "../../services";
import axios from "axios";
import { ModalError } from "../ModalError/modal-error.component";

interface IAxiosProps {
  children: ReactNode
}

export const AxiosInterceptor = ({children}: IAxiosProps) => {
  const[isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const errorInterceptor = (error: Error) => {
      if(!axios.isAxiosError(error)) {
        return Promise.reject(error);
      }

      if(error.response?.status === 401) {
        localStorage.removeItem("agenda-virtual:token");
        setIsOpenModal(true);
      }

      return Promise.reject(error);
    }

    const interceptor = api.interceptors.response.use(null, errorInterceptor);

    return () => api.interceptors.response.eject(interceptor);
  }, []);

  return (
    <>
      {isOpenModal && <ModalError toogleModalCreate={() => setIsOpenModal(!isOpenModal)}/>}
      {children}
    </>
  )
}