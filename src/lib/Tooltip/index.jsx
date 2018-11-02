import React, { Component } from 'react';
import delayUnmount from './delayUnmount';
import TextBox from './TextBox';
import Arrow from './Arrow';

import './style.css';
import './animation.css';

class Tooltip extends Component {
  state = {
    hoverArrow: false
  }

  componentWillMount() {
    // Basic prop type checking.
    Object.keys(this.props).forEach((propName) => {
      const type = typeof this.props[propName];
      if (propName !== 'children' && type !== 'string' && type !== 'boolean') {
        // eslint-disable-next-line
        console.error(`React-custom-tooptip: [${propName}] prop should be a string (check also units)`)
      }
    });
  }

  hoverArrow = (bool) => {
    this.setState({ hoverArrow: bool });
  }

  render() {
    const {
      lineSeparated: lines,
      position: pos,
      arrow: arwAlign,
      moveDown,
      moveRight,
      moveLeft,
      moveUp,
      textAlign,
      fontFamily,
      fontWeight,
      fontSize,
      color,
      animation,
      show
    } = this.props;

    // Set default line style if lineSep. prop is true.
    // If line style given use custom line.
    const lineSeparated = typeof (lines) === 'boolean'
      ? '1px solid #ececec' : lines;

    function isAlign(str) {
      return this.align ? this.align === str
        : this.position === str;
    }

    function isSide(str) {
      return this.side === str;
    }

    const position = {
      side: pos.split(' ')[0],
      align: pos.split(' ')[1],
      isAlign,
      isSide
    };

    const arrow = {
      isAlign,
      position: arwAlign
    };

    const classes = ['tpContainer'];
    let tooltipStyle = {};

    const arrange = (units, cssClass, left, right, height, width) => {
      tooltipStyle = { left, right, height, width, top: units };
      classes.push(cssClass);
    };

    // TODO: change logically wrong css classnames
    const { side, align } = position;
    let bottom;

    switch (side) {
      case 'bottom':
        arrange('100%', 'tpArrowTop', '0px', '', '', '100%');
        break;
      case 'top':
        arrange('', 'tpArrowBottom', '0px', '', '', '100%');
        bottom = '100%';
        break;
      case 'right':
        arrange('0px', 'tpArrowLeft', '100%', '', '100%', '');
        break;
      default:
        arrange('0px', 'tpArrowRight', '', '100%', '100%', '');
        break;
    }

    const onAxis = {
      y: position.isSide('top') || position.isSide('bottom'),
      x: position.isSide('left') || position.isSide('right')
    };

    const num = str => Number(str.slice(0, -2));
    let mvDown = num(moveDown);
    let mvRight = num(moveRight);
    let mvLeft = num(moveLeft);
    let mvUp = num(moveUp);

    const oneMovePropIsNeg = mvDown < 0 || mvUp < 0
      || mvLeft < 0 || mvRight < 0;

    switch (align) {
      case 'left':
        if (onAxis.y) classes.push('tpArrowLeft');
        break;
      case 'right':
        if (onAxis.y) classes.push('tpArrowRight');
        break;
      case 'bottom':
        if (onAxis.x) classes.push('tpAlignBottom');
        break;
      default:
        if (onAxis.x) {
          classes.push('tpAlignCenter');
        }
        if (onAxis.x && !oneMovePropIsNeg) {
          mvDown *= 2;
          mvUp *= 2;
        }
        if (onAxis.y && !oneMovePropIsNeg) {
          mvRight *= 2;
          mvLeft *= 2;
        }
        break;
    }

    const adjPositioning = `${mvDown}px ${mvLeft}px ${mvUp}px ${mvRight}px`;

    tooltipStyle = {
      ...tooltipStyle,
      color,
      bottom,
      fontSize,
      textAlign,
      fontFamily,
      fontWeight,
      padding: !oneMovePropIsNeg ? adjPositioning : null,
      margin: oneMovePropIsNeg ? adjPositioning : null
    };

    return (
      <div
        className={classes.join(' ')}
        style={tooltipStyle}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            animation: show ? `rct-${animation} 0.2s` : `rct-${animation}-out 0.15s`
          }}
        >
          <Arrow
            {...this.props}
            isHovered={this.state.hoverArrow}
            pos={position}
          />
          <TextBox
            {...this.props}
            hoverArrow={this.hoverArrow}
            lines={lineSeparated}
            pos={position}
            arw={arrow}
            mvUp={mvUp}
            mvDown={mvDown}
            mvRight={mvRight}
            mvLeft={mvLeft}
          />
        </div>
      </div>
    );
  }
}

// Specifies the default values for props:
Tooltip.defaultProps = {
  hoverBackground: '#ececec',
  hoverColor: 'black',
  backgroundColor: 'white',
  lineSeparated: null,
  textBoxWidth: '150px',
  padding: '15px 20px',
  borderRadius: '5px',
  moveDown: '0px',
  moveRight: '0px',
  moveLeft: '0px',
  moveUp: '0px',
  position: 'right center',
  arrow: 'top',
  textAlign: 'left',
  fontFamily: 'inherit',
  fontWeight: 'bold',
  fontSize: 'inherit',
  color: 'inherit',
  animation: ''
};

export default delayUnmount(Tooltip);
