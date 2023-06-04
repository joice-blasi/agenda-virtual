import { Header } from "../../components/Header/header.component";
import { StyledDashboard } from "./dashboard.style";
import { Identification } from "../../components/Identification/identification.component";
import { ListContacts } from "../../components/ListContacts/list-contacts.component";

export const DashboardPage = () => {
  return (
    <>
      <Header/>
      <StyledDashboard className="container">
        <Identification/>
        <ListContacts/>
      </StyledDashboard>
    </>
  )
}