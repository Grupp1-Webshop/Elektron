import axios from "axios"
import { useState} from "react"
export function UseCategories() {
    const [categories, setCategories] = useState([]);
    function getCategories(id){
        axios.get(`http://localhost:5207/api/Categories/${id}`)
            .then(response => setCategories(response.data))
    }
    return {getCategories, categories};
}