import { createContext, useState, useEffect } from 'react';
import axios from "axios"
const AuthContext = createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState(null)
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
                setUser(response.data)
            })
        })
        .catch(error => {
            console.log(error)
        })
        
    }
    const logout = () => {
        axios.post('http://localhost:5207/api/Logout',{}, { withCredentials: true })
        .then(response => {
            setUser(null)
        })
    }
    return <AuthContext.Provider value={{user, login, logout}}>
    {children}
    </AuthContext.Provider>
}


export default AuthContext;