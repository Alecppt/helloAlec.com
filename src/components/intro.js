import React from 'react';
import styled from 'styled-components';
import { theme, media } from '@styles';
import wave from '../images/emojis/wave.png';
const { colors } = theme;
const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  font-size: 180%;
  padding: 0 17%;
  line-height: 1.1;
  ${media.desktop`padding: 0% 10%;`};
  ${media.tablet`padding: 10% 18%;`};
  ${media.phablet`padding: 5% 5% 5% 10%;`};
`;

const WaveHand = styled.span`
  background-image: url(${wave});
  margin-left: 12px;
  width: 40px;
  height: 40px;
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: contain;
  display: inline-block;
`;
const Hello = styled.p`
  font-size: ${props => props.size};
  margin: 0 0 10px;
  color: ${props => props.color};
`;
const Name = styled.p`
  font-family: 'Inconsolata', monospace;
  font-size: 90px;
  color: ${colors.offWhite};
  font-weight: 1000;
  margin: 20px 0 20px 0;
  ${media.phablet`font-size: 55px;`}
  ${media.tablet`font-size:80px;`}
`;
const Function = styled.span`
  color: ${colors.function};
`;

const Intro = () => {
  return (
    <div>
      <IntroContainer>
        <Hello color={colors.orange} size="40px">
          Hello! <WaveHand />
        </Hello>
        <Hello color={colors.teal}> My name is</Hello>
        <Name>Alec Chen.</Name>
        <p style={{ color: colors.grey }}>
          I am an everlearning{' '}
          <bold style={{ color: colors.red, fontWeight: 'bold' }}>
            software engineer
          </bold>{' '}
          who <Function>build</Function>, <Function>test</Function> and{' '}
          <Function>automate </Function>
          for the web.
        </p>
      </IntroContainer>
    </div>
  );
};

export default Intro;
