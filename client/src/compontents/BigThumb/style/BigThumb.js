import styled from "styled-components";
import {Link as reactLink} from "react-router-dom";
export const Container = styled.div`
    position: relative;
    
`
export const Title = styled.h4`
    color:#fff;
    font-size:2.5rem;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -120%);
    
`
export const Picture = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    
`
export const Link = styled(reactLink)`
`