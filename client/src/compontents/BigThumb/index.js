import {
    Container,
    Title,
    Picture,
    Link
} from './style/BigThumb'
export default function BigThumb({ children, ...restProps }){
    return (
        <Link {...restProps}><Container  >{children}</Container></Link>
    )
}
BigThumb.Title = function BigThumb({ children }){
    return (
        <Title>{children}</Title>
    )
}
BigThumb.Picture = function BigThumb({ children, ...restProps }){
    return (
        <Picture {...restProps} ></Picture>
    )
}