import { createPortal } from "react-dom";
import { StyledModalCreate } from "./modal-create.style";
import { useEffect, useRef } from "react";

interface IModalCreateProps {
  toogleModal: () => void
}

export const ModalCreate = ({toogleModal}: IModalCreateProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if(!ref.current) return;

      if(!event.target) return;

      if(!ref.current.contains(event.target as HTMLElement)) {
        toogleModal()
      }
    }

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    }
  }, []);

  return createPortal (
    <StyledModalCreate>
      <div ref={ref}>
        <header>HOLA</header>
      </div>
    </StyledModalCreate>,
    document.body
  )
}