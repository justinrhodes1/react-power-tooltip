

import React from 'react';

import {
  codeInstallNpm,
  codeInstallCss
} from './CodeSnippets';

const Intro = () => {
  return (
    <>
      <h1 className="firstH1">Introduction</h1>
      <div style={{ marginTop: '15px' }}>
        <img
          src="https://img.shields.io/travis/justinrhodes1/react-custom-tooltip.svg"
          alt=""
        />
        <img
          style={{ margin: '0 20px' }}
          src="https://img.shields.io/coveralls/github/justinrhodes1/react-custom-tooltip/master.svg"
          alt=""
        />
        <img
          src="https://img.shields.io/bundlephobia/minzip/react-custom-tooltip.svg"
          alt=""
        />
      </div>
      <p style={{ lineHeight: '1.5' }}>
        React-custom-tooltip is a powerful, fully customizable and interactive tooltip
        library. Besides the traditional tooltip purposes you can easily also use it
        as your popup or menu library.
      </p>
      <p style={{ lineHeight: '1.5', fontWeight: 'bold' }}>
        We are always open new ideas and improvements. Contribute on
        <a href="https://github.com/justinrhodes1/react-custom-tooltip/blob/master/CONTRIBUTING.md" style={{ fontSize: '16px', color: '#680988' }}> Github</a>
        !
      </p>
      <h1>Installation</h1>
      <h2>Npm</h2>
      <pre>
        <code style={{ color: '#404040' }}>{codeInstallNpm}</code>
      </pre>
      <h2>CSS file</h2>
      <pre>
        <code className="language-markup">
          {codeInstallCss}
        </code>
      </pre>
    </>
  );
};

export default Intro;
