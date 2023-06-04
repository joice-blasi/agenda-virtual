import { useContext, useEffect, useState } from "react"
import { StyledIdentification } from "./identification.style"
import { UserContext } from "../../contexts/UserContext/user.context"
import { MdOutlineEdit } from "react-icons/md";
import { BsTrash3 } from "react-icons/bs";
import { ModalUpdateUser } from "../ModalUpdateUser/modal-update-user.component";
import { ModalDeleteUser } from "../ModalDeleteUser/modal-delete-user.component";

export const Identification = () => {
  const {me, user, formatDate} = useContext(UserContext);
  const [isOpenModalUpdateUser, setIsOpenModalUpdateUser] = useState(false);
  const [isOpenModalDeleteUser, setIsOpenModalDeleteUser] = useState(false);

  const toogleUpdateUser = () => setIsOpenModalUpdateUser(!isOpenModalUpdateUser);

  const toogleDeleteUser = () => setIsOpenModalDeleteUser(!isOpenModalDeleteUser);

  useEffect(() => {
    me()
  }, [])

  return (
    <StyledIdentification className="cont-identification">
      <h3>Identificação</h3>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <p>{user?.telephone}</p>
      <p>{user && formatDate(user?.createdAt)}</p>
      <MdOutlineEdit onClick={toogleUpdateUser} />
      {
        isOpenModalUpdateUser && <ModalUpdateUser toogleUpdateUser={toogleUpdateUser} user={user!}/>
      }
      <BsTrash3 onClick={toogleDeleteUser} />
      {
        isOpenModalDeleteUser && <ModalDeleteUser toogleDeleteUser={toogleDeleteUser} idUser={user?.id!}/>
      }
    </StyledIdentification>
  )
}
