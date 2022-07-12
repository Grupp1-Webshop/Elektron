import { useEffect, useState } from "react"
import { Main, SmallThumb, Panel, Table } from "../compontents"
import { UseOrder } from "../Hooks/UseOrder"
export function AdminOrder(){
    const {getOrders, orders} = UseOrder()
    useEffect(() =>{
        getOrders()
    },[])
    return <Main>
        <Main.Title>Orders</Main.Title>
        <Main.Content>
            {orders.map((order) => {
                return <>
                    <Table>
                        <Table.Row>
                            <Table.Item>Name: {order.customer.name}</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Email: {order.customer.email}</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>timeDate: {order.timeDate}</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>total: {order.total} kr</Table.Item>
                        </Table.Row>
                        
                        
                        <Table.Row>
                            <Table.Item>Name</Table.Item>
                            <Table.Item>Quantity</Table.Item>
                            <Table.Item>Price</Table.Item>
                        </Table.Row>
                        {order.orderProducts.map((product) => {
                            return  <Table.Row>
                            <Table.Item>{product.productName}</Table.Item>
                            <Table.Item>{product.quantity}</Table.Item>
                            <Table.Item>{product.price}</Table.Item>
                        </Table.Row>
                        })}
                    </Table>
                </>
            })}
        </Main.Content>
    </Main>
}