import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, media } from '@styles';

const IntroContainer = styled.section`
  ${theme.flexCenter}
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  width: 100%;
`;

const Intro = ({ data }) => {
  return <div></div>;
};

Intro.propTypes = {
  data: PropTypes.array.isRequired,
};
export default Intro;
