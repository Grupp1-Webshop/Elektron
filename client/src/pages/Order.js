import { useContext, useEffect} from "react"
import { Main, Panel, SmallThumb, Table } from "../compontents"
import AuthContext from "../Context/AuthContext";
import { UseOrderHistory } from "../Hooks/UseOrderHistory"
export function Order(){
    const {user} = useContext(AuthContext)
    const {getOrderHistory, orderHistory} = UseOrderHistory()
    let set = false;
    useEffect(()=> {
        console.log(user)
        if(user != null){
            if(!set){
                set = true;
                getOrderHistory(user.userId)
            }
            
        }
    }, [user])
    
    return <Panel>
        <Panel.Title>Ordrar</Panel.Title>
        <Main>
            <Main.ThreeCol>
                {console.log(orderHistory)}
                { orderHistory != null ? (
                    
                    orderHistory.historyOrders.map((order) =>{
                        return <SmallThumb>
                            <SmallThumb.Description># {order.orderId}</SmallThumb.Description>
                            <SmallThumb.Description>price: {order.total} kr</SmallThumb.Description>
                            <SmallThumb.Description>timeDate: {order.timeDate}</SmallThumb.Description>
                            <Table>
                                <Table.Row>
                                    <Table.Item>Name</Table.Item>
                                    <Table.Item>Price</Table.Item>
                                    <Table.Item>Quantity</Table.Item>
                                </Table.Row>
                                {order.orderProducts.map((product)=> {
                                    return<Table.Row>
                                        <Table.Item>{product.productName}</Table.Item>
                                        <Table.Item>{product.price}</Table.Item>
                                        <Table.Item>{product.quantity}</Table.Item>
                                    </Table.Row>
                                })}
                                
                            </Table>
                        </SmallThumb>
                    })
                ) : ('')}
                
                
            </Main.ThreeCol>
        </Main>
    </Panel>
    
}