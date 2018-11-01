import React from 'react';
import Tooltip from '../../../lib';
import '../styles.css';

const Header = () => {
  return (
    <div className="FlexContainer PurpleGradient Header">
      <div className="ribbon">
        <a href="http">Fork me on GitHub</a>
      </div>
      <h1>
        React-custom-
        <span
          style={{ position: 'relative', display: 'inlineBlock' }}
        >
          tooltip
          <Tooltip
            show
            color="black"
            arrow="center"
            position="bottom center"
            fontSize="13px"
            textBoxWidth="auto"
            moveDown="-4px"
            static
          >
            <span>Simple &amp; Easy!</span>
          </Tooltip>
        </span>
      </h1>
      <h2>A flexible, lightweight tooltip &amp; notification library. </h2>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '120px'
      }}
      >
        <a className="github-button" href="https://github.com/ntkme/github-buttons">Star</a>
        <a className="github-button" href="https://github.com/ntkme/github-buttons/fork">Fork</a>
      </div>
    </div>
  );
};

export default Header;
