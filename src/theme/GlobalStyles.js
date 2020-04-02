import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
  
  *,*::before,*::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html{
    font-size: 62.5%;
  }
  
  body{
    font-size: 1.6rem;
    font-family: 'Rubik', sans-serif;
    padding: 0;
    margin:0;
  }
`;

export default globalStyles;
