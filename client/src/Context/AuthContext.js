import { createContext, useState, useEffect } from 'react';
import axios from "axios"
const AuthContext = createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() =>{
        axios.get('http://localhost:5207/api/User', { withCredentials: true })
        .then(response => {
            setUser(response.data)
        })
    },[])
    const login = (username, password) => {
        const fd = new FormData();
        fd.append("Username", username)
        fd.append("Password", password)
        
        axios.post('http://localhost:5207/api/Login', fd, { withCredentials: true })
        .then(response => {
            axios.get('http://localhost:5207/api/User', { withCredentials: true })
            .then(response => {
                setError(null)
                setUser(response.data)
            })
        })
        .catch(error => {
            console.log(error)
            setError("Lösenord eller användarnamn är ogitligt")
        })
        
    }
    const changePassword = (oldpassword, newpassword) => {
        const fd = new FormData();
        fd.append("oldPassword", oldpassword)
        fd.append("password", newpassword)
        const data = {
            oldPassword : oldpassword,
            password : newpassword
        }
        axios.put('http://localhost:5207/api/User', data, { withCredentials: true })
        .then(response => {
            setError(null)
            console.log(response.data)
        })
        .catch(error => {
            setError("Lösenord eller nya lösenordet ogitligt")
        })
    }
    const logout = () => {
        axios.post('http://localhost:5207/api/Logout',{}, { withCredentials: true })
        .then(response => {
            setUser(null)
        })
    }
    return <AuthContext.Provider value={{error, user, login, logout, changePassword}}>
    {children}
    </AuthContext.Provider>
}


export default AuthContext;