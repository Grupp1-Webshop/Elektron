import { useContext, useEffect, useState } from "react"
import CartContext from "../Context/CartContext"
import { UseProduct } from "../Hooks/UseProduct"
import { Panel, Table } from "../compontents"
import AuthContext from "../Context/AuthContext"
import { UseOrder } from "../Hooks/UseOrder"
export function Checkout(){
    const {user} = useContext(AuthContext)
    const {cart, emptyCart} = useContext(CartContext)
    const {order, addOrder, addOrderProduct} = UseOrder()
    const {product, getProducts} = UseProduct()
    const [items , setItems] = useState([])
    const [total , setTotal] = useState(0)
    
    useEffect(() => {
        if(product.length < 1){
            getProducts()
        }else{
            if(cart != null){

            let price = 0
            for (const [index, value] of Object.entries(cart)) {
                const tempItems = items
                const itemProduct = product.filter(e => e.productId == index);
                console.log(itemProduct, value.amount);
                price = price + (value.amount * itemProduct[0].price);
                const entrie = {
                    name : itemProduct[0].name,
                    id : itemProduct[0].productId,
                    price : (value.amount * itemProduct[0].price),
                    amount : value.amount
                }
               
                tempItems.push(entrie)
                setItems(tempItems)
                

            }
            setTotal(price)
        }
            console.log(items)
        }
            
    }, [product])
    let OrderProductsAdded = false;
    useEffect(() =>{
        if(order != null){
            if(!OrderProductsAdded){
                for(const item of items){
                    addOrderProduct(item.id, order.orderId, item.name, item.price, item.amount)
                }
                OrderProductsAdded = true;
            }
            
        }
    }, [order])
    const handler = () => {
        addOrder(user.userId, total)
    }
    const handlerEmpty = () => {
        emptyCart()
        setItems([])
        setTotal(0)
    }
    return <Panel >
        <Panel.Title>Checkout</Panel.Title>
        <Table >
            <Table.Row>
                <Table.Title>Quantity</Table.Title>
                <Table.Title>Name</Table.Title>
                <Table.Title>Price</Table.Title>
            </Table.Row>
            {
                items.map((item) => {
                    return <Table.Row>
                        <Table.Item>{item.amount}</Table.Item>
                        <Table.Item>{item.name}</Table.Item>
                        <Table.Item>{item.price} kr</Table.Item>
                    </Table.Row>;
                })
            }
            <Table.Row>
                <Table.Item>totalt : {total} kr</Table.Item>
            </Table.Row>
        </Table>
        {
            user !== null ? (<Panel.Button onClick={() => handler()} >Lägg order</Panel.Button>):(<Panel.Link to="/login">Logga in</Panel.Link>)

        }
        <Panel.Button onClick={() => handlerEmpty()} >Töm kassa</Panel.Button>
    </Panel>
    
}