import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(114.99deg, rgb(133 106 194 / 70%) -0.99%, rgb(108 81 171 / 56%) 54.28%, rgb(71 45 126 / 61%) 78.99%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

li {
    list-style: none;
}
`;
