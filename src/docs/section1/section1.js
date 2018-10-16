

import React from 'react';
import '../styles.css';

const section1 = () => {
    const CSSLink = `<link rel="stylesheet" href="https://github-repo/some-github-repo" />`
    return (
        <>
            <h1>Installation</h1>
            <h2>Npm</h2>
            <pre>
                <code>$ npm install react-custom-tooltip --save</code>
            </pre>
            <h2>CSS file</h2>
            <pre>
                <code>{CSSLink}</code>
            </pre>
        </>
    );
};

export default section1;