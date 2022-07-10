import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Main } from "../compontents"
export function Logout(){
    const {logout} = useContext(AuthContext)
    logout()
    return <Main>
    <Main.Title>Loggad ut</Main.Title>
    </Main>
}