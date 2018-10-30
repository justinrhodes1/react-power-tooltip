import React from 'react';

const AdvUsage = () => {
    return (
        <>
            <h1>Advanced Usage</h1>
            <h2>Custom Animations</h2>
            <p style={{ lineHeight: '1.5' }}>
                To customize mount and umount animations
            </p>
            <ol style={{ lineHeight: '1.5' }}>
                <li>Add your own CSS @keyframes rules to the global scope</li>
                <li>Enable your tooptip to use your animations</li>
            </ol>
            <p style={{ lineHeight: '1.5' }}>
                Add your keyframe rules to the global scope using the same selector for both mount and unmount
                related keyframes. All keyframe selectors require an<strong> 'rct-' </strong>prefix.
                Unmount related keyframes also require an <strong> '-out' </strong>suffix.
            </p>
            <pre>
                <code className="language-css">
                    {`/* Global Scope */
@keyframes rct-customFade {
    0%   { opacity: 0}
    100% { opacity: 1}
}

@keyframes rct-customFade-out {
    0% { opacity: 1 }
    100% { opacity: 0}
}`}
                </code>
            </pre>
            <p>
                To enable your animations, add your custom keyframe name (<strong>without </strong>
                pre- or suffixes) to your tooltip via the animation prop.
            </p>
            <pre>
                <code className="language-jsx">
                    {`<Tooltip
    show={this.state.show}
    animation='customFade'
>
    <span>Some text</span>
</Tooltip>`}
                </code>
            </pre>
        </>
    );
};

export default AdvUsage;