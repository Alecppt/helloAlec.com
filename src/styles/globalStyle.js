import { createGlobalStyle } from 'styled-components';
import { theme, media } from '@styles';

const { colors } = theme;

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Cutive+Mono|Inconsolata|Major+Mono+Display&display=swap');
    /* @import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap'); */
    html {
        font-family: 'Inconsolata', monospace;
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
        color: ${colors.offWhite};
    }

`;

export default GlobalStyle;
