import media from './media';
import { css } from 'styled-components';
const theme = {
  colors: {
    dark: '#0F111A',
    lightGrey: '#afafbf',
    mainbackground: '#263238',
    night: '#171c28',
    black: '#36363c',
    darkGrey: '#444452',
    grey: '#777777',
    blue: '#007bff',
    slate: '#afafbf',
    offWhite: '#e7e7e7',
    white: '#ffffff',
    green: '#bae67e',
    purple: '#7d0ce8',
    red: '#f07178',
    orange: '#e8850c',
    yellow: '#ffdc00',
    accent: '#ffcc66',
    violet: '#945EB8',
    teal: '#80cbc4',
    function: '#82aaff',
  },
  fontSize: css`
    ${media.desktop`fontSize: 200%;`};
    ${media.tablet`fontSize:180%;`};
    ${media.phablet`fontSize: 140%;`};
  `,
  sidePadding: css`
    padding: 0 10%;
    ${media.desktop`padding: 0 10%;`};
    ${media.tablet`padding: 0 5%;`};
    ${media.phablet`padding: 0 5%;`};
  `,
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export default theme;
