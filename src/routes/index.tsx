import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage/login.page"
import { RegisterPage } from "../pages/RegisterPage/register.page"
import { DashboardPage } from "../pages/DashboardPage/dashboard.page"

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}