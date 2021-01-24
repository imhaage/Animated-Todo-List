import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 150%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: 'Fredericka the Great', sans-serif;
  }
  
  body {
    font-family: 'Fredericka the Great', sans-serif;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.background}
    color: #333;
  }
  
  h1 {
    font-size: 1.4rem;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary}
  }

  ul {
    padding: 0;
    list-style: none;
  }
`;
