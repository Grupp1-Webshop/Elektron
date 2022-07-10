import {
    Icon
} from './style/Icon'
import { Link } from "react-router-dom";
export default function IconMain({ children, ...restProps }){
    return (
        <Icon {...restProps} ></Icon>
    )
}