import React from 'react';
import { render } from 'react-dom';
import Tooltip from '../../lib';

const Test = () => {
  return (
    <div
      className="rct-test-target"
      style={{
        position: 'relative',
        margin: '200px',
        width: '200px',
        height: '200px'
      }}
    >
      <Tooltip
        show
        arrow="top"
      >
        <span>Option 1</span>
        <span>Option 2</span>
        <span>Option 3</span>
      </Tooltip>
      <Tooltip
        show
        arrow="center"
      >
        <span>Option 1</span>
        <span>Option 2</span>
        <span>Option 3</span>
      </Tooltip>
      <Tooltip
        show
        arrow="bottom"
      >
        <span>Option 1</span>
        <span>Option 2</span>
        <span>Option 3</span>
      </Tooltip>
    </div>
  );
};

export default Test;

render(<Test />, document.getElementById('test'));
