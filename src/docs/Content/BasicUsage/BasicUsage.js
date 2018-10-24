import React from 'react';

const BasicUsage = () => {

    // const html = Prism.highlight(integratedCode, Prism.languages.javascript, 'javascript');
    return (
        <>
            <h1>Basic Usage</h1>
            <h3>1) Import the tooltip into your react component file. <strong>Important: </strong>Use a stateful component to handle hover effects (see below).</h3>
            <pre>
                <code className="language-javascript">import Tooltip from 'react-custom-tooltip'</code>
            </pre>
            <h3>2) Add a hover state default and handler to your stateful component.</h3>
            <pre>
                <code className="language-jsx">
                    {`{/* Hover state*/}
state = {
    show: false
}

{/* Hover hander*/}
showTooltip = boolean => {
    this.setState({ show: boolean })
}
`}
                </code>
            </pre>
            <h3>3) Set the position of the target element to relative. Then add the tooltip to that element</h3>
            <pre>
                <code className="language-jsx">
                    {`{/* Important: set target element position to relative */}
<div 
    style={{ 
        position: 'relative'
        mouseOver: this.showTooltip(true) 
        mouseLeave: this.showTooltip(false)
    }}>
    {/* TARGET ELEMENT CONTENT */}
    <Tooltip
        show={this.props.show}
        animation='fadeIn'
        arrow='rightBottom'
        align='top'
    >
    {/* Add one or more span element(s) for tooltip options */}
        <span>Option 1</span>
        <span>Option 2</span>
    </Tooltip>
</div>`}
                </code>
            </pre>
            <h3>3) Add </h3>
        </>
    );
};

export default BasicUsage;