import styled from "styled-components";
export const Copyright = styled.span`
    text-align:center;
    ${({ white }) => white && `
        color:#fff;
    `} 
`