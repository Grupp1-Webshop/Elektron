import { Panel, Form } from "../compontents"
import { useContext } from "react";
import { Navigate } from 'react-router-dom';
import AuthContext from "../Context/AuthContext";
export function Login(){
    const {error, user,login} = useContext(AuthContext)
    const FormHandle = (event) => {
        
        let username = event.target.username.value
        let password = event.target.password.value
        event.preventDefault()
        
        login(username, password)
    }

    return <Panel>
        {user !== null && <Navigate  to="/" /> }
        <Panel.Title>Login</Panel.Title>
        <Form onSubmit={FormHandle}>
            <Form.Input name="username" label="Username:"></Form.Input>
            <Form.Input type="password" name="password" label="Password:"></Form.Input>
            <p>{error}</p>
            <Form.Button>Logga in</Form.Button>
            
            <Form.Link to="/register">Register</Form.Link>
        </Form>
    </Panel>
    
}