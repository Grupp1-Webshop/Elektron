import styled from "styled-components";
import { Link as reactLink } from "react-router-dom";
export const Container = styled.nav`
    display:grid;
    grid-template-columns: auto auto auto;
    width:100%;
`
export const Picture = styled.img`
    min-width:150px;
    max-width: 400px;
    height:500px;
    grid-row:1/-1;
`
export const Title = styled.h2`
background:#a9ebeb;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`
export const Link = styled(reactLink)`
`