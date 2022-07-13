import axios from "axios"
import { useState} from "react"
export function UseProduct() {
    const [product, setProduct] = useState([]);
    function getProduct(id){
        axios.get(`http://localhost:5207/api/product/${id}`)
            .then(response => setProduct(response.data))
    }
    function getProducts(){
        axios.get(`http://localhost:5207/api/product`)
            .then(response => setProduct(response.data))
    }
    return {getProduct, getProducts, product};
}