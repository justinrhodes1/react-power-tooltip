import React from 'react';
// import Prism from 'prismjs';

const BasicUsage = () => {
    const importCode = `import Tooltip from 'react-custom-tooltip'`
    const integratedCode =
        `<div style={{ position: 'relative' }}>
    ...
    <Tooltip
        show={this.props.show}
        animation='fadeIn'
        arrow='rightBottom'
        align='top'
    >
        <span>Our Technology</span>
        <span>Our Story</span>
    </Tooltip>
</div>`
    // const html = Prism.highlight(integratedCode, Prism.languages.javascript, 'javascript');
    return (
        <>
            <h1>Basic Usage:</h1>
            <h3>1) Import the tooltip into your react component file. <strong>Important: </strong>Use a stateful component to handle hover effects (see below).</h3>
            <pre>
                <code>{importCode}</code>
            </pre>
            <h3>2) Set the position of the target element to relative. Then add the tooltip to that element</h3>
            <pre>
                {/* <code>{html}</code> */}
            </pre>
            <h3>3) Add the tooltip to your target element</h3>
        </>
    );
};

export default BasicUsage;