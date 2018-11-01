import React from 'react';
import Tooltip from '../../../../lib';

const Types = () => {
  return (
    <div className="row" style={{ width: '95%', justifyContent: 'space-around' }}>
      <div>
        <p>
          <strong>Hoverable</strong>
          tooltips (default)
        </p>
        <div className="vPlaceHolder">
          <Tooltip
            show
            textboxWidth="100px"
            lineSeparated
          >
            <span>Our Technology</span>
            <span>Our story</span>
          </Tooltip>
        </div>
      </div>
      <div>
        <p>
          <strong>Static</strong>
          tooltips (via static prop)
        </p>
        <div className="vPlaceHolder">
          <Tooltip
            show
            textboxWidth="100px"
            lineSeparated
            static
          >
            <span>Our story:</span>
            <span>Show static text which provides some additional information.</span>
          </Tooltip>
        </div>
      </div>
      <div>
        <p>
          <strong>Alert</strong>
          tooltips (via alert prop)
        </p>
        <div className="vPlaceHolder">
          <Tooltip
            show
            textboxWidth="100px"
            alert="rgb(100, 0, 100)"
            lineSeparated
          >
            <span>Our Technology</span>
            <span>Our story</span>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Types;
