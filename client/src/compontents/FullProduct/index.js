import {
    Container,
    Title,
    Description,
    Picture,
    Category,
    Price,
    Button,
    Col,
    NumberChanger
} from './style/FullProduct'
export default function FullProduct({ children }){
    return (
        <Container>{children}</Container>
    )
}
FullProduct.Col = function FullProductCol({ children }){
    return (
        <Col>{children}</Col>
    )
}
FullProduct.Title = function FullProduct({ children }){
    return (
        <Title>{children}</Title>
    )
}
FullProduct.Description = function FullProductDescription({ children }){
    return (
        <Description>{children}</Description>
    )
}
FullProduct.Picture = function FullProductPicture({ children, ...restProps }){
    return (
        <Picture {...restProps}>{children}</Picture>
    )
}
FullProduct.Category = function FullProductCategory({ children }){
    return (
        <Category>{children}</Category>
    )
}
FullProduct.Price = function FullProductPrice({ children }){
    return (
        <Price>{children}</Price>
    )
}
FullProduct.Button = function FullProductPrice({ children, ...restProps }){
    return (
        <Button {...restProps}>{children}</Button>
    )
}
FullProduct.NumberChanger = function FullProductNumberChanger({ children, ...restProps  }){
    return (
        <NumberChanger type="number" {...restProps} ></NumberChanger>
    )
}