import { createGlobalStyle } from 'styled-components';
import { theme, media } from '@styles';

const { colors } = theme;

const GlobalStyle = createGlobalStyle`
    html {
        font-family: sans-serif;
        background-color: ${colors.dark};
        box-sizing: border-box;

 
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        width: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${colors.dark};
        color: ${colors.lightGrey};
        line-height: 1.5;
    }

`;

export default GlobalStyle;
