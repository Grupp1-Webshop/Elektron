import {
    Container,
    List,
    Item,
    Link,
    Dropdown,
    DropdownList,
    CartAmount,
    Amount
} from './style/Menu'
export default function Menu({ children }){
    return (
        <Container>{children}</Container>
    )
}
Menu.List = function menuList({ children }){
    return (
        <List>{children}</List>
    )
}
Menu.Item = function menuItem({ children, ...restProps}){
    return (
        <Item><Link className='link' {...restProps} >{children}</Link></Item>
    )
}
Menu.DropdownList = function menuDropdownList({ children, ...restProps}){
    return (
        <DropdownList><Item>{restProps.label}</Item><Dropdown>{children}</Dropdown></DropdownList>
    )
}
Menu.cartAmount = function menuCartAmount({ children, ...restProps}){
    return (
        <CartAmount><Amount>{children}</Amount></CartAmount>
    )
}