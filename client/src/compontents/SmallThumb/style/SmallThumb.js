import styled from "styled-components";
import {Link as reactLink} from "react-router-dom";
export const Container = styled.div`
    margin:0.5rem;
`
export const Picture = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`
export const Title = styled.h2`
`
export const Description = styled.p`
`
export const Price = styled.p`
`
export const Link = styled(reactLink)`
    color:rgb(65,106,106);
    text-decoration:none;
`
export const Delete = styled.button`
    background:#db5a6d;
    padding:0.5rem 1rem;
    text-align:center;
    font-weight:bold;
    color:#fff;
    text-decoration:none;
    font-size:18px;
    border:none;
    border-radius:8px;
`
export const Edit = styled.button`
    background:#4b9f9f;
    padding:0.5rem 1rem;
    text-align:center;
    font-weight:bold;
    color:#fff;
    text-decoration:none;
    font-size:18px;
    border:none;
    border-radius:8px;
`