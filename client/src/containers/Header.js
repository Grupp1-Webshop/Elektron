import { Menu, Logotype, Actionbar, Icon } from "../compontents"
import { Link } from "react-router-dom"
export function Header(){
    return <header>
        <Menu>
            <Menu.List>
               <Menu.Item to="/">Statsida</Menu.Item>
            </Menu.List>
        </Menu>
        <Menu>
            <Menu.List>
                <Menu.Item to="login">Logga in<Icon src="img/icons/login.svg"></Icon></Menu.Item>
                <Menu.Item to="checkout"><Icon src="img/icons/cart.svg"></Icon></Menu.Item>
            </Menu.List>
        </Menu>
    </header>
}