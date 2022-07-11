import axios from "axios"
import { useState} from "react"
export function UseOrder() {
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState(null);
    function getOrders(){
        axios.get('http://localhost:5207/api/Order')
            .then(response => setOrders(response.data))
    }
    function addOrder(id, total){
        const fd = new FormData();
        fd.append("customerId" , id)
        fd.append("total" , total)
        console.log(fd)
        const data = {
            customerId : id,
            total : total
        }
        axios.post('http://localhost:5207/api/Order', data, { withCredentials: true })
        .then(response => setOrder(response.data))
    }
    function addOrderProduct(productId, orderId, name, price, quantity){
        const fd = new FormData();
        fd.append("productId", productId)
        fd.append("orderId", orderId)
        fd.append("productName", name)
        fd.append("price", price)
        fd.append("quantity", quantity)
        const data = {
            productId : productId,
            orderId : orderId,
            productName : name,
            price : price,
            quantity : quantity,
        }
        axios.post('http://localhost:5207/api/OrderProduct', data, { withCredentials: true })
            .then(response => console.log(response.data))
    }
    return {getOrders, orders, addOrder, order, addOrderProduct};
}