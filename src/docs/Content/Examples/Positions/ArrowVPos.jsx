import React from 'react';
import Tooltip from '../../../../lib';

const VerticalArrow = () => {
  return (
    <>
      <h3 style={{ width: '95%', marginBottom: '0' }}>
        <strong>Vertically </strong>
        (when tooltip positioned left / right of target)
      </h3>
      <div className="row">
        <div>
          <p>
            Arrow align:
            <strong> start</strong>
          </p>
          <div className="vPlaceHolder" style={{ marginTop: '70px' }}>
            <Tooltip
              show
              textBoxWidth="auto"
              lineSeparated
            >
              <span>Longer Option 1</span>
              <span>Longer Option 2</span>
            </Tooltip>
          </div>
        </div>
        <div>
          <p>
            Arrow align:
            <strong> center</strong>
          </p>
          <div className="vPlaceHolder" style={{ marginTop: '70px' }}>
            <Tooltip
              show
              arrowAlign="center"
              textBoxWidth="auto"
              lineSeparated
            >
              <span>Longer Option 1</span>
              <span>Longer Option 2</span>
            </Tooltip>
          </div>
        </div>
        <div>
          <p>
            Arrow align:
            <strong> end</strong>
          </p>
          <div className="vPlaceHolder" style={{ marginTop: '70px' }}>
            <Tooltip
              show
              arrowAlign="end"
              textBoxWidth="auto"
              lineSeparated
            >
              <span>Longer Option 1</span>
              <span>Longer Option 2</span>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalArrow;
