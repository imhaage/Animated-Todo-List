import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Source Sans Pro', sans-serif;
  }
  
  h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary}
  }
`;
