import { Panel, Form } from "../compontents"
import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import {UseRegister} from "../Hooks/UseRegister"
export function Register(){
    const {RegisterUser, error} = UseRegister()
    const FormHandle = (event) => {
        event.preventDefault()
        let username = event.target.username.value
        let email = event.target.email.value
        let password = event.target.password.value
        let rpassword = event.target.rpassword.value
        RegisterUser(email,username , password, rpassword)
        
    }

    return <Panel>
        <Panel.Title>Register</Panel.Title>
        <Form onSubmit={FormHandle}>
            <Form.Input name="username" label="Username:"></Form.Input>
            <Form.Input name="email" label="E-mail:"></Form.Input>
            <Form.Input type="password" name="password" label="Password:"></Form.Input>
            <Form.Input type="password" name="rpassword" label="Repeat Password:"></Form.Input>
            {error != null ? (
                error.map(message => {
                    return <p>{message}</p>
                })
            ) : ('')}
            <Form.Button>Register</Form.Button>
        </Form>
    </Panel>
    
}