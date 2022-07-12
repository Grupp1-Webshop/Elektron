import axios from "axios"
import { useState} from "react"
export function UseOrderHistory() {
    const [orderHistory, setOrderHistory] = useState(null);
    function getOrderHistory(id){
        axios.get(`http://localhost:5207/api/OrderHistory/${id}`,  { withCredentials: true })
            .then(response => {
                setOrderHistory(response.data)
            })
    }
    return {orderHistory, getOrderHistory}
}