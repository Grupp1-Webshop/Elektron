import {
    Container,
    Title
} from './style/Panel'
export default function Panel({ children }){
    return (
        <Container>{children}</Container>
    )
}
Panel.Title = function PanelTitle({ children }){
    return (
        <Title>{children}</Title>
    )
}