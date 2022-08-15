import {
    Container,
    Img
} from './style/Logotype'
import { Link } from "react-router-dom";
import logo from "../../img/png/logo.svg"
export default function Logotype({ children }){
    return (
        <Container>{children}</Container>
    )
}
Logotype.Img = function LogotypeImg({ children }){
    return (
        <Link to="/"><Img src={logo}>{children}</Img></Link>
    )
}