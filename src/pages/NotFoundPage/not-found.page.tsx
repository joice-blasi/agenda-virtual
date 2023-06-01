import { Link } from "react-router-dom"
import { Header } from "../../components/Header/header.component"
import { StyledNotFound } from "./not-found.style"

export const NotFoundPage = () => {
  return (
    <>
      <Header/>
      <StyledNotFound>
        <div className="container">
          <h3>Ops! Página não encontrada!</h3>
          <h2>?</h2>
          <Link to="/" className="link">Voltar</Link>
        </div>
      </StyledNotFound>
    </>
  )
}