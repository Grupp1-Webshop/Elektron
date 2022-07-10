import styled from "styled-components";
export const Container = styled.div`
    grid-column:1/-1;
    display:grid;
    grid-template-columns: 50% 1fr;
    width:100%;
`
export const Title = styled.h1`
`
export const Description = styled.p`
`
export const Picture = styled.img`
    width:500px;
    height:500px;
    grid-row:1/-1;
`
export const Category = styled.span`
`
export const Price = styled.span`
`
export const Button = styled.button`
    width:250px;
    padding:0.5rem;
    background:#a9ebeb;
    border:none;
    border-radius:8px;
    font-size:18px;
`
export const Col = styled.div`
    display:grid;
    grid-template-rows:80px 50px 50px auto 50px;
`
