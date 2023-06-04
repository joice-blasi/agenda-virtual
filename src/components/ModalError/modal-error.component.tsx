import { useNavigate } from "react-router-dom";
import { Modal } from "../Modal/modal.component";
import { StyledModalError } from "./modal-error.style";

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
    <Modal toogleModal={toogleModalCreate} blockClosing={true}>
      <StyledModalError>
        <h1>Você não está autenticado</h1>
        <div className="cont-button">
          <button onClick={handleCloseAndRedirect} className="button-back">Ir para o login</button>
        </div>
      </StyledModalError>
    </Modal>
  )
}