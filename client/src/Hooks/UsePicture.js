import axios from "axios"
import { useState} from "react"
export function UsePictures() {
    const [pictures, setPictures] = useState([]);
    function getPictures(){
        axios.get('http://localhost:5207/api/Pictures')
            .then(response => {
                if(response.data != pictures){
                    setPictures(response.data)
                }
            })
    }
    function addPictures(alt, file){
        const fd = new FormData();
        fd.append('alt', alt)
        fd.append('file', file, file.name)
        axios.post('http://localhost:5207/api/Pictures', fd,  { withCredentials: true } )
        .then(res =>{
                
                console.log(res)
                getPictures();
        })
        .catch(error => {
            console.log(error)
        })
    }
    function removePictures(id){
        axios.delete(`http://localhost:5207/api/Pictures/${id}`,  { withCredentials: true } )
        .then(res =>{
             console.log(res)
             getPictures();
        })
    }
    return {getPictures, addPictures, removePictures, pictures};
}