import React, { Component } from 'react';
import delayUnmount from './delayUnmount';
import TextBox from './TextBox';
import Arrow from './Arrow';

import './style.css';

class Tooltip extends Component {
  state = {
    hoverArrow: false
  }

  componentWillMount() {
    // Basic prop type checking
    Object.keys(this.props).forEach((propName) => {
      const type = typeof this.props[propName];
      const text = `React-power-tooptip: [${propName}] prop should be a`;
      if (propName !== 'children' && propName !== 'delayTime'
        && type !== 'boolean' && type !== 'string') {
        // eslint-disable-next-line
        console.error(`${text} string (check also units)`);
      }
      if (propName === 'delayTime' && type !== 'number') {
        // eslint-disable-next-line
        console.error(`${text} number`);
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
      hoverBackground,
      backgroundColor,
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
      zIndex,
      show,
      flat
    } = this.props;

    // Sets if false no line; if true default line; if string custom line;
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

    // TODO: refactor
    const { side, align } = position;
    const classes = ['rct-container'];
    let tooltipStyle = {};
    let bottom;

    const arrange = (top, left, right, height, width, cssSel) => {
      tooltipStyle = { top, left, right, height, width };
      classes.push(cssSel);
    };

    switch (side) {
      case 'bottom':
        arrange('100%', '0px', '', '', '100%', 'rct-bottom');
        break;
      case 'top':
        arrange('', '0px', '', '', '100%', 'rct-top');
        bottom = '100%';
        break;
      case 'right':
        arrange('0px', '100%', '', '100%', '', 'rct-right');
        break;
      default:
        arrange('0px', '', '100%', '100%', '', 'rct-left');
        break;
    }

    const onAxis = {
      y: position.isSide('top') || position.isSide('bottom'),
      x: position.isSide('left') || position.isSide('right')
    };

    const num = str => Number(str.slice(0, -2));
    const move = {
      down: num(moveDown),
      up: num(moveUp),
      left: num(moveLeft),
      right: num(moveRight)
    };

    const oneMovePropIsNeg = move.down < 0 || move.up < 0
      || move.left < 0 || move.right < 0;

    switch (align) {
      case 'left':
        if (onAxis.y) classes.push('rct-align-left');
        break;
      case 'right':
        if (onAxis.y) classes.push('rct-align-right');
        break;
      case 'bottom':
        if (onAxis.x) classes.push('rct-align-bottom');
        break;
      case 'top':
        break;
      default:
        if (onAxis.x) {
          classes.push('rct-align-center');
          if (!oneMovePropIsNeg) {
            move.down *= 2;
            move.up *= 2;
          }
        }
        if (onAxis.y && !oneMovePropIsNeg) {
          move.right *= 2;
          move.left *= 2;
        }
        break;
    }

    const adjustment = `${move.down}px ${move.left}px ${move.up}px ${move.right}px`;

    tooltipStyle = {
      ...tooltipStyle,
      zIndex,
      color,
      bottom,
      fontSize,
      textAlign,
      fontFamily,
      fontWeight,
      padding: oneMovePropIsNeg ? null : adjustment,
      margin: oneMovePropIsNeg ? adjustment : null
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
            isHovered={this.state.hoverArrow}
            hovBkg={hoverBackground}
            bkgCol={backgroundColor}
            flat={flat}
          />
          <TextBox
            {...this.props}
            hoverArrow={this.hoverArrow}
            lines={lineSeparated}
            pos={position}
            arw={arrow}
            move={move}
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
  zIndex: '100',
  animation: '',
  delayTime: 150
};

export default delayUnmount(Tooltip);
