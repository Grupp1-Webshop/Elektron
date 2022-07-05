import {
    Icon
} from './style/Icon'
import { Link } from "react-router-dom";
export default function Menu({ children, ...restProps }){
    return (
        <Icon {...restProps} ></Icon>
    )
}