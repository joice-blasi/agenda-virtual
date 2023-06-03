import { UserProvider } from "./contexts/UserContext/user.context"
import { RoutesMain } from "./routes"
import { GlobalStyle } from "./styles/global"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <GlobalStyle/>
      <UserProvider>
        <RoutesMain/>
      </UserProvider>
    </>
  )
}
