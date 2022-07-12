import {
    Container,
    Picture,
    Title,
    Description,
    Price,
    Link,
    Delete,
    Edit
} from './style/SmallThumb'
export default function SmallThumb({ children, ...restProps  }){
    return (
        <Container {...restProps}>{children}</Container>
    )
}
SmallThumb.Picture = function SmallThumbPicture({ children, ...restProps }){
    return (
        <Picture {...restProps}>{children}</Picture>
    )
}
SmallThumb.Title = function SmallThumbTitle({ children, ...restProps}){
    return (
        <Title><Link {...restProps} >{children}</Link></Title>
    )
}
SmallThumb.Description = function SmallThumbDescription({ children, ...restProps}){
    return (
        <Description>{children}</Description>
    )
}
SmallThumb.Delete = function SmallThumbDelete({ children, ...restProps}){
    return (
        <Delete {...restProps}>{children}</Delete>
    )
}
SmallThumb.Edit = function SmallThumbEdit({ children, ...restProps}){
    return (
        <Edit {...restProps}>{children}</Edit>
    )
}
SmallThumb.Price = function SmallThumbPrice({ children}){
    return (
        <Price>{children}</Price>
    )
}