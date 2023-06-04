import { useNavigate } from "react-router-dom";
import { Modal } from "../Modal/modal.component";

interface IModalErrorProps {
  toogleModalCreate: () => void,
}

export const ModalError = ({toogleModalCreate}: IModalErrorProps) => {
  const navigate = useNavigate();

  const handleCloseAndRedirect = () => {
    toogleModalCreate();
    navigate("/");
  }

  return (
    <Modal toogleModalCreate={toogleModalCreate} blockClosing={true}>
      <h1>Você não está autenticado</h1>
      <button onClick={handleCloseAndRedirect}>Ir para o login</button>
    </Modal>
  )
}