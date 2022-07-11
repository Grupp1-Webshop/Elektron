import {
    Container,
    Label,
    Input,
    Button,
    Link
} from './style/Form'
export default function Form({ children , ...restProps}){
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Form.Input = function FormInput({ children, ...restProps}){
    
    return (
        <><Label for={restProps.name}>{restProps.label}</Label>
        <Input onChange={restProps.onChange} type={restProps.type === "password" ? ('password')  : ( restProps.type === "file" ? ("file") : ("text"))} id={restProps.name} name={restProps.name}></Input></>
    )
}
Form.Button = function FormButton({ children}){
    return (
        <Button value={children} type="submit"/>
    )
}
Form.Link = function FormLink({ children, ...restProps}){
    return (
        <Link {...restProps}>{children}</Link>
    )
}