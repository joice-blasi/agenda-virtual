import { useContext } from "react";
import { UserContext } from "../contexts/UserContext/user.context";
import { Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const {loading} = useContext(UserContext);

  if(loading) {
    return (
      <>
        <div>
          <h1>Carregando...</h1>
        </div>
      </>
    )
  }

  return <Outlet />
}