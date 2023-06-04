import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/user.context";
import { Modal } from "../Modal/modal.component";
import { StyledModalDeleteUser } from "./modal-delete-user.style";

interface IModalDeleteUserProps {
  toogleDeleteUser: () => void,
  idUser: string,
}

export const ModalDeleteUser = ({toogleDeleteUser, idUser}: IModalDeleteUserProps) => {
  const {deleteUser} = useContext(UserContext);

  const submit = async () => {
    await deleteUser(idUser);
    toogleDeleteUser();
  }

  return (
    <Modal toogleModal={toogleDeleteUser} title="Excluir conta">
      <StyledModalDeleteUser>
        <h2>Tem certeza que deseja excluir sua conta?</h2>
        <div className="cont-button">
          <button onClick={submit} className="button-exclude">Sim, excluir</button>
        </div>
      </StyledModalDeleteUser>
    </Modal>
  )
}