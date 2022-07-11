import styled from "styled-components";
import {Link as reactLink} from "react-router-dom";
export const Container = styled.nav`
    
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
    width:100%;
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
`
export const Item = styled.li`
    margin-left: 2rem;
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