import {
    Container,
    Title,
    Button,
    Link
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
Panel.Button = function PanelButton({ children, ...restProps }){
    return (
        <Button {...restProps}>{children}</Button>
    )
}
Panel.Link = function PanelLink({ children, ...restProps}){
    return (
        <Link {...restProps}>{children}</Link>
    )
}