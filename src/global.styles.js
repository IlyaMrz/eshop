import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Open Sans Condensed';
    padding: 20px 60px ;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }
  @media screen and (max-width: 730px) {
    body {
      padding: 5px 10px ;
    }
  }
  
`