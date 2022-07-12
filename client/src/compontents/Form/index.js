import {
    Container,
    Label,
    Input,
    Button,
    Link,
    Picker,
    Selected
} from './style/Form'
export default function Form({ children , ...restProps}){
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Form.Input = function FormInput({ children, ...restProps}){
    
    return (
        <>
        {restProps.type === "hidden" ? ('') : (<Label for={restProps.name}>{restProps.label}</Label>)}
        <Input 
            onChange={restProps.onChange} 
            type={restProps.type === "password" ? ('password')  : ( restProps.type === "file" ? ("file") : (restProps.type === "hidden" ? ('hidden') : ('text')))} 
            id={restProps.name}

            value={restProps.value} 
            name={restProps.name}></Input></>
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
Form.PicturePicker = function FormPicturePicker({ children, ...restProps}){
    return (
        <Picker {...restProps}>{children}</Picker>
    )
}
Form.Selected = function FormSelected({ children, ...restProps}){
    return (
        <Selected {...restProps}>{children}</Selected>
    )
}