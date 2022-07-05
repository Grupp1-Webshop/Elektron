import {
    Container,
    List,
    Item
} from './style/Menu'
import { Link } from "react-router-dom";
export default function Menu({ children }){
    return (
        <Container>{children}</Container>
    )
}
Menu.List = function menuList({ children }){
    return (
        <List>{children}</List>
    )
}
Menu.Item = function menuItem({ children, ...restProps}){
    return (
        <Item><Link {...restProps} >{children}</Link></Item>
    )
}