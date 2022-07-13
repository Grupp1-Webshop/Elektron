import styled from "styled-components";
export const Container = styled.main`
    grid-template-columns: repeat(12, 1fr);
    padding:4rem;
`
export const Title = styled.h1`
    font-size:24px;
    text-align:center;
`
export const Content = styled.div`
    display:grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap:2rem;
`
export const ThreeCol = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:2rem;
`