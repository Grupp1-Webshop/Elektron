import { useContext, useEffect, useState } from "react"
import CartContext from "../Context/CartContext"
import { UseProduct } from "../Hooks/UseProduct"
import { Panel, Table } from "../compontents"
import AuthContext from "../Context/AuthContext"
import { UseOrder } from "../Hooks/UseOrder"
export function Checkout(){
    const {user} = useContext(AuthContext)
    const {cart, emptyCart, setAmount, removeItem} = useContext(CartContext)
    const {order, addOrder, addOrderProduct} = UseOrder()
    const {product, getProducts} = UseProduct()
    const [items , setItems] = useState([])
    const [total , setTotal] = useState(0)
    
    useEffect(() => {
        if(product.length < 1){
            getProducts()
        }else{
            if(cart != null){
                const tempItems = []
                let price = 0
                for (const [index, value] of Object.entries(cart)) {
                    
                    const itemProduct = product.filter(e => e.productId == index);
                    price = price + (value.amount * itemProduct[0].price);
                    const entrie = {
                        name : itemProduct[0].name,
                        id : itemProduct[0].productId,
                        price : (value.amount * itemProduct[0].price),
                        amount : value.amount,
                        singlePrice : itemProduct[0].price
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
    const ChangeHandler = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        const tempItems = items
        console.log(tempItems)
        var index = tempItems.map(e => e.id).indexOf(parseInt(event.target.name));
        const singlePrice = tempItems[index].singlePrice
        console.log(singlePrice)
        tempItems[index].amount = parseInt(event.target.value)
        tempItems[index].price = singlePrice * event.target.value
        setAmount(event.target.name, event.target.value)
        let price = 0
        for(const item of tempItems){
            price += item.price
        }
        setTotal(price)
    }
    const removeInCheckout = (id) => {
        const tempItems = items
        var index = tempItems.map(e => e.id).indexOf(parseInt(id));
        tempItems.splice(index, 1);
        let price = 0
        for(const item of tempItems){
            price += item.price
        }
        setTotal(price)
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
                    return <Table.Row key={item.id}>
                        <Table.Item>
                            <Table.NumberChanger value={item.amount} onChange={ChangeHandler} name={item.id}> </Table.NumberChanger>
                        </Table.Item>
                        <Table.Item>{item.name}</Table.Item>
                        <Table.Item>{item.price} kr</Table.Item>
                        <Table.Item>
                            <Table.Button onClick={() => {removeItem(parseInt(item.id)); removeInCheckout(parseInt(item.id))}}>Remove</Table.Button>
                        </Table.Item>
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