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
    function addProduct(name, description, shortDescription, price, category, picture){
        const data = {
            name : name,
            shortDescription : shortDescription,
            description : description,
            price : price,
            categoryId : category,
            pictureId : picture
        }
        axios.post('http://localhost:5207/api/Product', data,  { withCredentials: true } )
        .then(res =>{
                
            console.log(res)
            getProducts();
        })
        .catch(error => {
            console.log(error)
        })
    }
    function deleteProduct(id){
        axios.delete(`http://localhost:5207/api/Product/${id}`, { withCredentials: true } )
        .then(res =>{
                
            console.log(res)
            getProducts();
        })
    }
    function editProduct(name, description, shortDescription, price, category, picture, id){
        const data = {
            name : name,
            shortDescription : shortDescription,
            description : description,
            price : price,
            categoryId : category,
            pictureId : picture
        }
        axios.put(`http://localhost:5207/api/Product/${id}`, data,  { withCredentials: true } )
        .then(res =>{
                
            console.log(res)
            getProducts();
        })
        .catch(error => {
            console.log(error)
        })
    }
    return {getProduct, addProduct, editProduct, deleteProduct ,  getProducts, product};
}