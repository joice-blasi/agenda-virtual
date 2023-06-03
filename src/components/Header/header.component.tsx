import { useContext } from "react";
import { StyledHeader } from "./header.style"
import { FiLogOut } from "react-icons/fi"
import { UserContext } from "../../contexts/UserContext/user.context";

export const Header = () => {
  const token = localStorage.getItem("agenda-virtual:token");
  const {logout} = useContext(UserContext);

  if(!token) {
    return (
      <StyledHeader>
        <div className="container cont-header">
          <h1>Agenda <span>Virtual</span></h1>
        </div>
      </StyledHeader>
    )
  } else {
    return (
      <StyledHeader>
        <div className="container cont-logout">
          <h1>Agenda <span>Virtual</span></h1>
          <FiLogOut className="logout" onClick={() => logout()}/>
        </div>
      </StyledHeader>
    )
  }
}