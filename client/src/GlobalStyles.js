import { createGlobalStyle } from 'styled-components';
 
const GlobalStyles = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  img {
    max-width:100%;
  }
  header{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding:2rem;
    background:#4b9f9f;
  }
  .actionbar{
    display: flex;
    grid-column:9/13;
    flex-direction: row-reverse;
  }
  .menu{
    display: grid;
  }
  footer{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding:2rem;
    align-items:center;
    background:#4b9f9f;
  }
`;
 
export default GlobalStyles;