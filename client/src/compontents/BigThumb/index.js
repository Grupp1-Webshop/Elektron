import {
    Container,
    Picture,
    Title,
    Link
} from './style/BigThumb'
export default function BigThumb({ children }) {
    return (
        <Container>{children}</Container>
    )
}
BigThumb.Picture = function BigThumbPicture({ children, ...restProps }) {
    return (
        <Picture {...restProps}>{children}</Picture>
    )
}
BigThumb.Title = function BigThumbTitle({ children, ...restProps }) {
    return (
        <Title><Link {...restProps} >{children}</Link></Title>
    )
}

