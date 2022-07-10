import {
    Container,
    Picture,
    Title,
    Description,
    Price,
    Link
} from './style/SmallThumb'
export default function SmallThumb({ children }){
    return (
        <Container>{children}</Container>
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
SmallThumb.Price = function SmallThumbPrice({ children}){
    return (
        <Price>{children}</Price>
    )
}