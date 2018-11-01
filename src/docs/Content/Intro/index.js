

import React from 'react';

const Intro = () => {
    return (
        <>
            <h1 className='firstH1'>Introduction</h1>
            <div style={{ marginTop: '15px' }}>
                <img src='https://img.shields.io/travis/:user/:repo.svg' />
                <img style={{ margin: '0 20px' }} src='https://img.shields.io/coveralls/github/jekyll/jekyll.svg' />
                <img src='https://img.shields.io/bundlephobia/minzip/react.svg' />
            </div>
            <p style={{ lineHeight: '1.5' }}>
                React-custom-tooltip is a powerful, fully customizable and interactive tooltip library. Besides
                the traditional tooltip purposes you can easily also use it as your popup or menu library.
            </p>
            <p style={{ lineHeight: '1.5', fontWeight: 'bold' }}>
                We are always open new ideas and improvements. Become a collaborator or send us a pull
                request on <a href='http://github.com/myrepo' style={{ fontSize: '16px', color: '#680988' }}>
                    Github</a>!
            </p>
            <h1>Installation</h1>
            <h2>Npm</h2>
            <pre>
                <code style={{ color: '#404040' }}>$ npm install react-custom-tooltip --save</code>
            </pre>
            <h2>CSS file</h2>
            <pre>
                <code className="language-markup">
                    {`<link rel="stylesheet" href="https://github-repo/some-github-repo" />`}
                </code>
            </pre>
        </>
    );
};

export default Intro;
