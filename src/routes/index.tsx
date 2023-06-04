import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/login.page";
import { RegisterPage } from "../pages/RegisterPage/register.page";
import { DashboardPage } from "../pages/DashboardPage/dashboard.page";
import { NotFoundPage } from "../pages/NotFoundPage/not-found.page";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { ContactProvider } from "../contexts/ContactContext/contact.context";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={
          <ContactProvider>
            <DashboardPage />
          </ContactProvider>
        } />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}