import styled from "styled-components";
import {Link as reactLink} from "react-router-dom";
export const Container = styled.div`
    background: #e7edec;
    padding:4rem;
    margin:8rem;
`
export const Title = styled.h1`
    text-align:center;
`
export const Button = styled.button`
margin:1rem;
    padding:0.5rem 1rem;
    text-align:center;
    background:#4b9f9f;
    font-weight:bold;
    color:#fff;
    text-decoration:none;
    font-size:18px;
    border:none;
`
export const Link = styled(reactLink)`
    width:150px;
    display:block;
    margin:1rem;
    padding:0.5rem 1rem;
    text-align:center;
    background:#4b9f9f;
    font-weight:bold;
    color:#fff;
    text-decoration:none;
    font-size:18px;
`
