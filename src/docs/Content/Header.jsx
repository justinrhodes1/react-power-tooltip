import React from 'react';
import Tooltip from '../../lib';
import '../styles.css';

const Header = () => {
  return (
    <div className="flexContainer purpleGradient header">
      <div className="ribbon">
        <a
          style={{ color: 'white' }}
          href="https://github.com/justinrhodes1/react-power-tooltip/fork"
        >
          Fork me on GitHub
        </a>
      </div>
      <h1>
        React-power-
        <span
          style={{ position: 'relative', display: 'inlineBlock' }}
        >
          tooltip
          <Tooltip
            show
            color="black"
            arrowAlign="center"
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
      <div
        className="github-btn-bar"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '165px'
        }}
      >
        <a className="github-button" href="https://github.com/justinrhodes1/react-power-tooltip" data-size="large" data-show-count="true" aria-label="Star justinrhodes1/react-power-tooltip on GitHub">Star</a>
        <a className="github-button" href="https://github.com/justinrhodes1/react-power-tooltip/fork" data-icon="octicon-repo-forked" data-size="large" aria-label="Fork justinrhodes1/react-power-tooltip on GitHub">Fork</a>
      </div>
    </div>
  );
};

export default Header;
