import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&family=Montserrat:ital,wght@0,600;1,400&family=Open+Sans:wght@400;700&family=Oswald:wght@700&family=Raleway:wght@700&family=Roboto:wght@400;900&display=swap');

  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
