import axios from "axios"
import { useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom';
export function UseRegister() {
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const [responseError, setResponseError] = useState(null)
    useEffect(() => {
        if(responseError != null){
            setError([...error, ...responseError])
        }
       
    }, [responseError])
    function RegisterUser(email, username, password, rpassword){
        let tempArray = []
        if(password != rpassword){
            console.log("here password")
            tempArray.push("passsword matchar inte")
        }
        if(
            !String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ){
            console.log("here Email")
            tempArray.push("E-mail är inte valid") 
        }
        setError(tempArray)
        const fd = new FormData();
        fd.append("Email", email)
        fd.append("Username", username)
        fd.append("Password", password)
        axios.post('http://localhost:5207/api/Register', fd , { withCredentials: true } )
            .then(response => {
                console.log("redirect")
                navigate('/login')
                console.log(response.data)
                
            })
            .catch(response => {
                let tempArray = []
                const errorList = response.response.data.errors
                
                for(const property in errorList){
                    console.log(`${property}: ${errorList[property]}`)
                    tempArray.push(errorList[property][0])
                }
                setResponseError(tempArray)
            })
    }

    return {RegisterUser, error};
}