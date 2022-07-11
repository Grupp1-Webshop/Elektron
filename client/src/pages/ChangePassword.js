import { useContext, useEffect, useState } from "react"

import { Panel, Form } from "../compontents"

import AuthContext from "../Context/AuthContext"

export function ChangePassword(){

    const {user, changePassword} = useContext(AuthContext)

    const FormHandle = (event) => {
        event.preventDefault()
        const oldPassword = event.target.password.value
        const newPassword = event.target.npassword.value
        changePassword(oldPassword, newPassword)
    }
    return <Panel>
        <Panel.Title>Change password</Panel.Title>
        <Form onSubmit={FormHandle}>
            <Form.Input type="password" name="password" label="Current password:"></Form.Input>
            <Form.Input type="password" name="npassword" label="New password:"></Form.Input>
            <Form.Button>Change password</Form.Button>
        </Form>
    </Panel>
    
}