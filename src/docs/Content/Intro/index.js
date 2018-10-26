

import React from 'react';

const Intro = () => {

    return (
        <>
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