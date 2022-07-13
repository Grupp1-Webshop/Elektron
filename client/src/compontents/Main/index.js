import {
    Container,
    Title,
    Content,
    ThreeCol
} from './style/Main'
export default function Main({ children }){
    return (
        <Container>{children}</Container>
    )
}
Main.Title = function MainTitle({ children }){
    return (
        <Title>{children}</Title>
    )
}
Main.Content = function MainContent({ children }){
    return (
        <Content>{children}</Content>
    )
}
Main.ThreeCol = function MainThreeCol({ children }){
    return (
        <ThreeCol>{children}</ThreeCol>
    )
}