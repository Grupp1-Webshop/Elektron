import { useContext, useEffect, useState } from "react"

import { Panel, Form } from "../compontents"

import AuthContext from "../Context/AuthContext"
import {useNavigate} from 'react-router-dom';
export function ChangePassword(){
    const navigate = useNavigate();
    const {user, changePassword} = useContext(AuthContext)

    const FormHandle = (event) => {
        event.preventDefault()
        const oldPassword = event.target.password.value
        const newPassword = event.target.npassword.value
        changePassword(oldPassword, newPassword)
    }
    let checked = false;
    useEffect(() => {
        
        if(user != null){
   
        }else if(checked){
            navigate('/');
        }
        checked = true;
        
    }, [user])
    return <Panel>
        <Panel.Title>Change password</Panel.Title>
        <Form onSubmit={FormHandle}>
            <Form.Input type="password" name="password" label="Current password:"></Form.Input>
            <Form.Input type="password" name="npassword" label="New password:"></Form.Input>
            <Form.Button>Change password</Form.Button>
        </Form>
    </Panel>
    
}