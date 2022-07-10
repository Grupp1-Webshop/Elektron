import axios from "axios"
import { useState} from "react"
export function UseCategory() {
    const [category, setCategory] = useState([]);
    function getCategory(id){
        axios.get(`http://localhost:5207/api/Category/${id}`)
            .then(response => setCategory(response.data))
    }
    return {getCategory, category};
}