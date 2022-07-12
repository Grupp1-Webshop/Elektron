import {
    Container,
    Row,
    Title,
    Item
} from './style/Table'
export default function Table({ children }){
    return (
        <Container>{children}</Container>
    )
}
Table.Row = function TableRow({ children }){
    return (
        <Row>{children}</Row>
    )
}
Table.Title = function TableTitle({ children }){
    return (
        <Title>{children}</Title>
    )
}
Table.Item = function TableItem({ children }){
    return (
        <Item>{children}</Item>
    )
}