import React from 'react';
import Tooltip from '../../lib';
import '../styles.css';

const Header = () => {
  return (
    <div className="flexContainer purpleGradient header">
      <div className="ribbon">
        <a
          style={{ color: 'white' }}
          href="https://github.com/justin-rhodes/react-custom-tooltip/fork"
        >
          Fork me on GitHub
        </a>
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
      <h2>A flexible, lightweight tooltip &amp; menu library. </h2>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '120px'
      }}
      >
        <a className="github-button" href="https://github.com/justin-rhodes/react-custom-tooltip">Star</a>
        <a className="github-button" href="https://github.com/ntkme/react-custom-tooltip/fork">Fork</a>
      </div>
    </div>
  );
};

export default Header;
