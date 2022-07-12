import styled from "styled-components";
import {Link as reactLink} from "react-router-dom";
export const Container = styled.form`
    display:grid;
    width:500px;
    margin:auto;
    justify-items: center;
`
export const Label = styled.label`
    
`    
export const Input = styled.input`
    width:100%;
    padding:0.8rem;
    border-radius:8px;
    border:1px solid black;
    margin-top:0.5rem;
    margin-bottom:1rem;
`
export const Button = styled.input`
    width:50%;
    padding:0.5rem;
    background:#4b9f9f;
    border:none;
    margin:0px;
    margin-bottom:1rem;
    color:#fff;
    font-weight:bold;
    font-size:18px;
`
export const Link = styled(reactLink)`
    width:50%;
    padding:0.5rem 0rem;
    text-align:center;
    background:#4b9f9f;
    font-weight:bold;
    color:#fff;
    text-decoration:none;
    font-size:18px;
`
export const Picker = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:2rem;
`
export const Selected = styled.div`
    border:0.5rem solid green;
`
export const Select = styled.select`
    width:100%;
    padding:0.8rem;
    border-radius:8px;
    border:1px solid black;
    margin-top:0.5rem;
    margin-bottom:1rem;
`
export const Option  = styled.option`
    width:100%;
    padding:0.8rem;
    margin-top:0.5rem;
    margin-bottom:1rem;
`