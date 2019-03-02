import React, { Component } from 'react';
import Tooltip from '../../../../lib';

class Align extends Component {
  state = {
    hover: false
  }

  hover = (side) => {
    this.setState({ hover: side });
  }

  render() {
    const { hover } = this.state;
    return (
      <div style={{ position: 'relative', fontSize: '14px', width: '250px' }}>
        <Tooltip
          show={hover === 'left'}
          position="left top"
          arrowAlign="center"
          textBoxWidth="auto"
          static
        >
          <span>Top</span>
        </Tooltip>
        <Tooltip
          show={hover === 'left'}
          position="left center"
          arrowAlign="center"
          textBoxWidth="auto"
          static
        >
          <span>Center</span>
        </Tooltip>
        <Tooltip
          show={hover === 'left'}
          position="left bottom"
          arrowAlign="center"
          textBoxWidth="auto"
          static
        >
          <span>Bottom</span>
        </Tooltip>
        <Tooltip
          show={hover === 'right'}
          position="right top"
          arrowAlign="center"
          textBoxWidth="auto"
          static
        >
          <span>Top</span>
        </Tooltip>
        <Tooltip
          show={hover === 'right'}
          position="right center"
          arrowAlign="center"
          textBoxWidth="auto"
          static
        >
          <span>Center</span>
        </Tooltip>
        <Tooltip
          show={hover === 'right'}
          position="right bottom"
          arrowAlign="center"
          textBoxWidth="auto"
          static
        >
          <span>Bottom</span>
        </Tooltip>
        <Tooltip
          show={hover === 'top'}
          position="top left"
          arrowAlign="center"
          textBoxWidth="auto"
          static
        >
          <span>Left</span>
        </Tooltip>
        <Tooltip
          show={hover === 'top'}
          position="top center"
          arrowAlign="center"
          textBoxWidth="auto"
          static
        >
          <span>Center</span>
        </Tooltip>
        <Tooltip
          show={hover === 'top'}
          position="top right"
          arrowAlign="center"
          textBoxWidth="auto"
          static
        >
          <span>Right</span>
        </Tooltip>
        <Tooltip
          show={hover === 'bottom'}
          position="bottom left"
          arrowAlign="center"
          textBoxWidth="auto"
          static
        >
          <span>Left</span>
        </Tooltip>
        <Tooltip
          show={hover === 'bottom'}
          position="bottom center"
          arrowAlign="center"
          textBoxWidth="auto"
          static
        >
          <span>Center</span>
        </Tooltip>
        <Tooltip
          show={hover === 'bottom'}
          position="bottom right"
          arrowAlign="center"
          textBoxWidth="auto"
          static
        >
          <span>Right</span>
        </Tooltip>
        <div className="square purpleGradient">
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '15px'
          }}
          >
            <div style={{
              width: '70%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
            >
              <span>Left</span>
              <span>Right</span>
            </div>
          </div>
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '15px'
          }}
          >
            <div style={{
              height: '70%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
            >
              <span>Top</span>
              <span>Bottom</span>
            </div>
          </div>
          <div
            className="left"
            onMouseEnter={() => this.hover('left')}
            onMouseLeave={() => this.hover(false)}
          />
          <div
            className="top"
            onMouseEnter={() => this.hover('top')}
            onMouseLeave={() => this.hover(false)}
          />
          <div
            className="right"
            onMouseEnter={() => this.hover('right')}
            onMouseLeave={() => this.hover(false)}
          />
          <div
            className="bottom"
            onMouseEnter={() => this.hover('bottom')}
            onMouseLeave={() => this.hover(false)}
          />
        </div>
      </div>
    );
  }
}

export default Align;
