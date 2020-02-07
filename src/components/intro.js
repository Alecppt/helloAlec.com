import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, media } from '@styles';
import wave from '../images/emojis/wave.png';

const IntroContainer = styled.section`
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  padding: 200px 200px;
  font-size: 180%;
  ${media.phablet`font-size: 150%;
  padding:100px 60px`};
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

const Intro = () => {
  return (
    <div>
      <IntroContainer>
        <p>
          Hello! <WaveHand />
        </p>
        <h1>
          <span
            style={{
              fontSize: '25px',
              fontWeight: 'normal',
              marginRight: '20px',
            }}
          >
            my name is
          </span>
          Alec Chen,
        </h1>
        <p>
          an everlearning software engineer who build ,test and automate for the
          web.
        </p>
      </IntroContainer>
    </div>
  );
};

// Intro.propTypes = {
//   data: PropTypes.array.isRequired,
// };
export default Intro;
