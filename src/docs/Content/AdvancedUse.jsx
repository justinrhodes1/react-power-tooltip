import React from 'react';

const AdvUsage = () => {
  return (
    <>
      <h1>Advanced Usage</h1>
      <h2 id="custom-animations">Custom Animations</h2>
      <p style={{ lineHeight: '1.5' }}>
        To customize mount and umount animations
      </p>
      <ol style={{ lineHeight: '1.5' }}>
        <li>Add your own CSS @keyframes rules to the global scope</li>
        <li>Enable react-power-tooptip to use your animations</li>
      </ol>
      <p style={{ lineHeight: '1.5' }}>
        Add your keyframe rules to the
        <strong> global scope </strong>
        using the same selector for both mount and unmount related keyframes. All
        keyframe selectors require an
        <strong> &#39;rpt-&#39; </strong>
        prefix. Unmount related keyframes also require an
        <strong> &#39;-out&#39; </strong>
        suffix.
      </p>
      <pre>
        <code className="language-css">
          {`/* Global Scope */
@keyframes rpt-slideUpDown {
  0%   { transform: translateY(20px); opacity: 0 }
  100% { transform: translateY(0px); opacity: 1 }
}

@keyframes rpt-slideUpDown-out {
  0%   { transform: translateY(0px); opacity: 1 }
  100% { transform: translateY(20px); opacity: 0 }
}`}
        </code>
      </pre>
      <p>
        To enable your animations, add your custom keyframe name (
        <strong>without </strong>
        pre- or suffixes) to your tooltip via the animation prop.
      </p>
      <pre>
        <code className="language-jsx">
          {`<Tooltip
    show={this.state.show}
    animation='slideUpDown'
>
    <span>Some text</span>
</Tooltip>`}
        </code>
      </pre>
    </>
  );
};

export default AdvUsage;
