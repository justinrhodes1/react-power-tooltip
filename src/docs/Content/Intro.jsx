

import React from 'react';

import {
  codeInstallNpm
} from './CodeSnippets';

const Intro = () => {
  return (
    <>
      <h1 className="firstH1">Introduction</h1>
      <div style={{ marginTop: '15px' }}>
        <img
          src="https://img.shields.io/travis/justinrhodes1/react-power-tooltip.svg"
          alt=""
        />
        <img
          style={{ margin: '0 20px' }}
          src="https://img.shields.io/coveralls/github/justinrhodes1/react-power-tooltip/master.svg"
          alt=""
        />
        <img
          src="https://img.shields.io/bundlephobia/minzip/react-power-tooltip.svg"
          alt=""
        />
      </div>
      <p style={{ lineHeight: '1.5', marginBottom: '0' }}>
        React-power-tooltip is a powerful, fully customizable tooltip library. Besides the
        traditional tooltip purposes you can easily also use it as your popup or menu library:
      </p>
      <h3 style={{ lineHeight: '2', padding: '0' }}>
        <ol>
          <li style={{ cursor: 'default' }}>
            <strong>Ready-to-use defaults: </strong>
            Choose between hoverable, static &amp; alert tooltips.
          </li>
          <li style={{ cursor: 'default' }}>
            <strong>Fully customizable: </strong>
            Easily customize animations &amp; styles to your wishes.
          </li>
          <li style={{ cursor: 'default' }}>
            <strong>Pixel perfect positioning: </strong>
            Easily align your tooltip to your target element.
          </li>
          <li style={{ cursor: 'default' }}>
            <strong>No dependencies: </strong>
            no side-strings attached.
          </li>
        </ol>
      </h3>

      <p style={{ lineHeight: '1.5', fontWeight: 'bold' }}>
        We are always open new ideas and improvements. Contribute on
        <a href="https://github.com/justinrhodes1/react-power-tooltip/blob/master/CONTRIBUTING.md" style={{ fontSize: '16px', color: '#680988' }}> GitHub</a>
        !
      </p>
      <h1 style={{ paddingTop: '30px' }}>Installation</h1>
      <h2>Npm</h2>
      <pre>
        <code style={{ color: '#404040' }}>{codeInstallNpm}</code>
      </pre>
    </>
  );
};

export default Intro;
