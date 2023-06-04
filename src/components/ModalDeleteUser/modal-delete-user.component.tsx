import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/user.context";
import { Modal } from "../Modal/modal.component";

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
    <Modal toogleModal={toogleDeleteUser}>
      <h2>Tem certeza que deseja excluir sua conta?</h2>
      <button onClick={submit}>Sim, excluir</button>
    </Modal>
  )
}