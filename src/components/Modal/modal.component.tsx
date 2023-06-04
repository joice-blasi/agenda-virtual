import { createPortal } from "react-dom";
import { ReactNode, useEffect, useRef } from "react";
import {AiOutlineClose} from "react-icons/ai";
import { StyledModal } from "./modal.style";

interface IModalProps {
  toogleModal: () => void,
  title?: string,
  children: ReactNode,
  blockClosing?: boolean,
}

export const Modal = ({toogleModal, title, children, blockClosing}: IModalProps) => {

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
    <StyledModal>
      <div ref={blockClosing ? null : ref}>
        {title ?
          (<header>
            <h2>{title}</h2>
            <AiOutlineClose onClick={() => toogleModal()} />
          </header>) :
          null
        }
        {children}
      </div>
    </StyledModal>,
    document.body
  )
}