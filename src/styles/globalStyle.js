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

    ::selection {
        color: ${colors.black};
        background: ${colors.yellow};
    }

    body {
        margin: 0;
        width: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${colors.night};
        color: ${colors.slate};
        line-height: 1.5;
        
    }

`;

export default GlobalStyle;
