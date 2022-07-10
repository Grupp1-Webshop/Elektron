import axios from "axios"
import { useState} from "react"
export function UseCategories() {
    const [categories, setCategories] = useState([]);
    function getCategories(){
        axios.get('http://localhost:5207/api/Category')
            .then(response => setCategories(response.data))
    }
    return {getCategories, categories};
}