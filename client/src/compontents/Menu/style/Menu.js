import styled from "styled-components";
import {Link as reactLink} from "react-router-dom";
export const Container = styled.nav`
    
`
export const CartAmount = styled.div`
    background:#000;
    width:30px;
    height:30px;
    position:absolute;
    border-radius:30%;
    right:2.8rem;
    top:1.4rem;

`
export const Amount = styled.a`
    position:absolute;
    top: 50%; right: 50%;
    transform: translate(50%,-50%);
    margin:0px;
    padding:0px;
    color:white;
    font-weight:bold;

`
export const List = styled.ul`
    display:flex;
    margin: 0px;
    padding:0px;
    list-style:none;
    height:100%;
`
export const Dropdown = styled.ul`
    display:none;
    position:absolute;
    background:#2e3433;
    top:100%;
    padding:0px;
`
export const DropdownList = styled.ul`
    
    display:flex;
    margin: 0px;
    padding:0px;
    list-style:none;
    height:100%;
    position:relative;
    &:hover {
        & ul{
            display:block;
        }
    }
    & li {
        display:flex;
        align-items: center; /* align items horizontally, in this case */
    }
`
export const Item = styled.li`
    margin-left: 2rem;
    margin-right: 2rem;
    display:flex;
`
export const Link = styled(reactLink)`
    color:#000;
    ${({ white }) => white && `
        color:#fff;
    `} 
    display: flex;
    font-size:18px;
    line-height:3;
    align-items: center;
    justify-content: center;
    text-decoration:none;
    
    font-weight: 500;
`
