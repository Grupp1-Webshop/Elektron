import { Menu, Logotype } from "../compontents"
import { Copyright } from "../compontents/Copyright/style/Copyright"
export function Footer(){
    return <footer>
        <Logotype>
            <Logotype.Img></Logotype.Img>
        </Logotype>
        <Copyright white>Electron © Copyright 2022</Copyright>
        <div className="menu">
            <Menu>
                <Menu.List>
                    <Menu.Item white to="/">Statsida</Menu.Item>
                </Menu.List>
            </Menu>
        </div>
    </footer>
}