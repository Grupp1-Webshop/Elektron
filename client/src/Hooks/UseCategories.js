import axios from "axios"
import { useState} from "react"
export function UseCategories() {
    const [categories, setCategories] = useState([]);
    function getCategories(){
        axios.get('http://localhost:5207/api/Category')
            .then(response => setCategories(response.data))
    }
    function addCategories(name, picture){
        const data = {
            name : name,
            pictureId : picture
        }
        axios.post('http://localhost:5207/api/Category', data,  { withCredentials: true } )
        .then(res =>{
                
                console.log(res)
                getCategories();
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    function editCategories(name, picture, id){
        const data = {
            name : name,
            pictureId : picture
        }
        axios.put(`http://localhost:5207/api/Category/${id}`, data,  { withCredentials: true } )
        .then(res =>{
                
                console.log(res)
                getCategories();
        })
        .catch(error => {
            console.log(error)
        })
    }
    function removeCategories( id){
        axios.delete(`http://localhost:5207/api/Category/${id}`,  { withCredentials: true } )
        .then(res =>{
                
                console.log(res)
                getCategories();
        })
        .catch(error => {
            console.log(error)
        })
    }
    return {getCategories, removeCategories, addCategories, editCategories, categories};
}