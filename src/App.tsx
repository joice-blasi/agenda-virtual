import { UserProvider } from "./contexts/UserContext/user.context"
import { RoutesMain } from "./routes"
import { GlobalStyle } from "./styles/global"


export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <UserProvider>
        <RoutesMain/>
      </UserProvider>
    </>
  )
}
