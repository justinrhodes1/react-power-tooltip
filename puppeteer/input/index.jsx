import React from 'react';
import { render } from 'react-dom';
import Tooltip from '../../lib';

const Test = () => {
  const targetStyle = {
    position: 'relative',
    margin: '200px',
    width: '100px',
    height: '100px',
    background: 'grey',
    boxSizing: 'border-box'
  };

  return (
    <>
      <div
        className="test-arrow-top"
        style={targetStyle}
      >
        <Tooltip
          show
          arrow="top"
        >
          <span>Option 1</span>
          <span>Option 2</span>
          <span>Option 3</span>
        </Tooltip>
      </div>
      <div
        className="test-arrow-center"
        style={targetStyle}
      >
        <Tooltip
          show
          arrow="center"
        >
          <span>Option 1</span>
          <span>Option 2</span>
          <span>Option 3</span>
        </Tooltip>
      </div>
      <div
        className="test-arrow-bottom"
        style={targetStyle}
      >
        <Tooltip
          show
          arrow="bottom"
        >
          <span>Option 1</span>
          <span>Option 2</span>
          <span>Option 3</span>
        </Tooltip>
      </div>
    </>
  );
};

export default Test;

render(<Test />, document.getElementById('test'));
