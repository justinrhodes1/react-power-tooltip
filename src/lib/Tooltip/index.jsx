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
    Object.keys(this.props).forEach((propName) => {
      const type = typeof this.props[propName];
      if (type !== 'string' && type !== 'object' && type !== 'boolean') {
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
      moveDown: mvDown,
      moveRight: mvRight,
      moveLeft: mvLeft,
      moveUp: mvUp,
      textAlign,
      fontFamily,
      fontWeight,
      fontSize,
      color,
      animation,
      show
    } = this.props;

    const lineSeparated = typeof (lines) === 'boolean'
      ? '1px solid #ececec' : lines;

    const num = str => Number(str.slice(0, -2));

    const moveDown = num(mvDown);
    const moveRight = num(mvRight);
    const moveLeft = num(mvLeft);
    const moveUp = num(mvUp);

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

    const { align } = position;
    let bottom;

    // TODO: change logically wrong css classnames
    // const { side, align } = position;

    // switch (side) {
    //     case 'bottom':
    //         arrange('100%', 'tpArrowTop', '0px', '', '', '100%');
    //         console.log('bottom')
    //         break;
    //     case 'top':
    //         arrange('', 'tpArrowBottom', '0px', '', '', '100%');
    //         bottom = '100%';
    //         break;
    //     case 'left':
    //         arrange('0px', 'tpArrowRight', '100%', '', '100%', '');
    //         break;
    //     case 'right':
    //         arrange('0px', 'tpArrowLeft', '', '100%', '100%', '');
    //         break;
    //     default:
    //         break;
    // }

    if (position.isSide('bottom')) {
      arrange('100%', 'tpArrowTop', '0px', '', '', '100%');
    } else if (position.isSide('top')) {
      arrange('', 'tpArrowBottom', '0px', '', '', '100%');
      bottom = '100%';
    } else if (position.isSide('right')) {
      arrange('0px', 'tpArrowLeft', '100%', '', '100%', '');
    } else {
      arrange('0px', 'tpArrowRight',
        '', '100%', '100%', '');
    }

    const onAxis = {
      y: position.isSide('top') || position.isSide('bottom'),
      x: position.isSide('left') || position.isSide('right')
    };

    // TODO: refactor below
    let pushRight = moveRight;
    let pushDown = moveDown;
    let pushLeft = moveLeft;
    let pushUp = moveUp;

    switch (align) {
      case 'left':
        if (onAxis.y) classes.push('tpArrowLeft');
        break;
      case 'right':
        if (onAxis.y) classes.push('tpArrowRight');
        break;
      case 'center':
        if (onAxis.x) {
          classes.push('tpAlignCenter');
          pushDown *= 2;
          pushUp *= 2;
        }
        if (onAxis.y) {
          pushRight *= 2;
          pushLeft *= 2;
        }
        break;
      case 'bottom':
        if (onAxis.x) classes.push('tpAlignBottom');
        break;
      default:
        break;
    }

    let margin;

    if (moveDown < 0 && moveRight < 0) {
      pushDown = 0;
      pushRight = 0;
      margin = `${moveDown}px 0px 0px ${moveRight}px`;
    } else if (moveDown < 0) {
      pushDown = 0;
      margin = `${moveDown}px 0px 0px 0px`;
    } else if (moveRight < 0) {
      pushRight = 0;
      margin = `0px 0px 0px ${moveRight}px`;
    } else if (moveLeft < 0) {
      pushLeft = 0;
      margin = `0px ${moveLeft}px 0px 0px`;
    } else if (moveUp < 0) {
      pushUp = 0;
      margin = `0px 0px ${moveUp}px 0px`;
    }

    tooltipStyle = {
      ...tooltipStyle,
      color,
      bottom,
      fontSize,
      textAlign,
      fontFamily,
      fontWeight,
      padding: `${pushDown}px ${pushLeft}px ${pushUp}px ${pushRight}px`,
      margin
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
            mvUp={moveUp}
            mvDown={moveDown}
            mvRight={moveRight}
            mvLeft={moveLeft}
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
  animation: ''
};

export default delayUnmount(Tooltip);
