import PropTypes from 'prop-types';
import React from 'react';
import './header.css';

const Header = ({ metadata }) => (
  <>
    <header
      className="intro"
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <h1 className="intro_hello">
        Hello! <span className="emoji wave_hand animated"></span>
      </h1>
      <h2>
        I'm <span className="name">Alec Chen</span>, a software engineer based
        in Vancouver BC
      </h2>
    </header>
  </>
);

Header.defaultProps = {
  metadata: PropTypes.object.isRequired,
};

export default Header;
