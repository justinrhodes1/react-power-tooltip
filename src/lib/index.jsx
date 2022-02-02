import React, { useEffect, useState } from 'react';
import TextBox from './Tooltip/TextBox';
import Arrow from './Tooltip/Arrow';

import cssRules from './Tooltip/styles';

const Tooltip = React.memo((props) => {
  const {
    nextProps,
    nextState,
    animation,
    show = false,
    lineSeparated: lines,
    position: pos,
    hoverBackground,
    backgroundColor,
    arrowAlign: arwAlign,
    moveDown,
    moveRight,
    moveLeft,
    moveUp,
    textAlign,
    fontFamily,
    fontWeight,
    fontSize,
    color,
    zIndex,
    flat
  } = props;
  const [hoverArrow, setHoverArrow] = useState(false);
  const [showState, setShowState] = useState(show);
  const [mount, setMount] = useState(true);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    return (
      nextProps !== props
      || nextState.hasInitialized !== hasInitialized
      || nextState.mount !== mount
      || nextState.hoverArrow !== hoverArrow
    );
  }, []);

  useEffect(() => {
    // Injecting styles directly into header
    if (!document.getElementById('rpt-css')) {
      const $style = document.createElement('style');
      $style.type = 'text/css';
      $style.id = 'rpt-css';
      document.head.appendChild($style);
      $style.innerHTML = cssRules;
    }
    // Basic prop type checking
    Object.keys(props).forEach((propName) => {
      const type = typeof props[propName];
      const text = `React-power-tooptip: [${propName}] prop should be a`;
      if (propName !== 'children' && type !== 'boolean' && type !== 'string') {
        // eslint-disable-next-line
        console.error(`${text} string (check also units)`);
      }
    });
  }, []);

  useEffect(() => {
    if (hasInitialized) {
      setShowState(show);
      setHasInitialized(true);
    }
    if (show) {
      setMount(true);
    }
    if (animation) {
      setMount(false);
    }
  }, [hasInitialized, show, animation]);

  const hoverArrowHandler = (bool) => {
    setHoverArrow(bool);
  };
  function isAlign(str) {
    return this.align ? this.align === str : this.position === str;
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
  const { side, align } = position;
  // Sets if false no line; if true default line; if string custom line;
  const lineSeparated = typeof lines === 'boolean' ? '1px solid #ececec' : lines;

  const arrow = {
    isAlign,
    position: arwAlign
  };

  const classes = ['rpt-container'];
  let tooltipStyle = {};
  let bottom;

  const arrange = (top, left, right, height, width, cssSel) => {
    tooltipStyle = { top, left, right, height, width };
    classes.push(cssSel);
  };

  switch (side) {
    case 'bottom':
      arrange('100%', '0px', '', '', '100%', 'rpt-bottom');
      break;
    case 'top':
      arrange('', '0px', '', '', '100%', 'rpt-top');
      bottom = '100%';
      break;
    case 'right':
      arrange('0px', '100%', '', '100%', '', 'rpt-right');
      break;
    default:
      arrange('0px', '', '100%', '100%', '', 'rpt-left');
      break;
  }

  const onAxis = {
    y: position.isSide('top') || position.isSide('bottom'),
    x: position.isSide('left') || position.isSide('right')
  };

  arrow.position = onAxis.y ? `h-${arrow.position}` : `v-${arrow.position}`;

  const num = str => Number(str.slice(0, -2));
  const move = {
    down: num(moveDown),
    up: num(moveUp),
    left: num(moveLeft),
    right: num(moveRight)
  };

  const oneMovePropIsNeg = move.down < 0 || move.up < 0 || move.left < 0 || move.right < 0;

  switch (align) {
    case 'left':
      if (onAxis.y) classes.push('rpt-align-left');
      break;
    case 'right':
      if (onAxis.y) classes.push('rpt-align-right');
      break;
    case 'bottom':
      if (onAxis.x) classes.push('rpt-align-bottom');
      break;
    case 'top':
      break;
    default:
      if (onAxis.x) {
        classes.push('rpt-align-center');
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
    margin: oneMovePropIsNeg ? adjustment : null,
    animation: show ? `rpt-${animation} 0.2s` : `rpt-${animation}-out 0.15s`
  };
  return (!animation && show) || (showState && mount) ? (
    <div
      className={classes.join(' ')}
      style={tooltipStyle}
      onAnimationEnd={() => {
        if (!show && animation) setMount(true);
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Arrow
          isHovered={hoverArrow}
          hovBkg={hoverBackground}
          bkgCol={backgroundColor}
          flat={flat}
        />
        <TextBox
          {...props}
          hoverArrow={hoverArrowHandler}
          lines={lineSeparated}
          pos={position}
          arw={arrow}
          move={move}
        />
      </div>
    </div>
  ) : null;
});

// Specifies the default values for props:
Tooltip.defaultProps = {
  hoverBackground: '#ececec',
  hoverColor: 'black',
  backgroundColor: 'white',
  textBoxWidth: '150px',
  padding: '15px 20px',
  borderRadius: '5px',
  shadowColor: 'rgba(0,0,0,0.251)',
  shadowShape: '0 8px 15px',
  moveDown: '0px',
  moveRight: '0px',
  moveLeft: '0px',
  moveUp: '0px',
  position: 'right center',
  arrowAlign: 'start',
  textAlign: 'left',
  fontFamily: 'inherit',
  fontWeight: 'bold',
  fontSize: 'inherit',
  color: 'inherit',
  zIndex: '100',
  animation: ''
};

export default Tooltip;
