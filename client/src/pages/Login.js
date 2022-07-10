import { Panel, Form } from "../compontents"
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
export function Login(){
    const {login} = useContext(AuthContext)
    const FormHandle = (event) => {
        
        let username = event.target.username.value
        let password = event.target.password.value
        event.preventDefault()
        
        login(username, password)
    }

    return <Panel>
        <Panel.Title>Login</Panel.Title>
        <Form onSubmit={FormHandle}>
            <Form.Input name="username" label="Username:"></Form.Input>
            <Form.Input name="password" label="Password:"></Form.Input>
            <Form.Button>Logga in</Form.Button>
            <Form.Link to="/">Register</Form.Link>
        </Form>
    </Panel>
    
}