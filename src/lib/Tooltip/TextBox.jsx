import React, { useEffect, useState } from 'react';

const TextBox = (props) => {
  const {
    arw: arrow,
    pos: position,
    lines: lineSeparated,
    static: tpStatic,
    textBoxWidth: width,
    shadowColor: shCol,
    shadowShape: shShape,
    move,
    backgroundColor,
    padding,
    borderRadius,
    hoverBackground,
    hoverColor,
    alert,
    flat,
    children,
    hoverArrow
  } = props;
  const [hoverIndex, setHoverIndex] = useState(null);
  const [firstH, setFirstH] = useState(null);
  const [lastH, setLastH] = useState(null);
  const [totH, setTotH] = useState(null);
  const spanHeights = {};

  useEffect(() => {
    const heights = Object.keys(spanHeights)
      .map(key => spanHeights[key].clientHeight);
    const firstHVar = heights[0];
    const lastHVar = heights[heights.length - 1];
    const totHVar = heights.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0
    );
    setTotH(totHVar);
    setFirstH(firstHVar);
    setLastH(lastHVar);
  }, []);
  const unsetHover = () => {
    setHoverIndex(null);
    hoverArrow(false);
  };
  // Set & unset hover state
  const onSpanHover = (index, lastIndex, numChildren) => {
    setHoverIndex(index);
    const { static: rctStatic } = props;
    if (!rctStatic
      && ((index === 0
        && (position.isSide('bottom') || arrow.isAlign('v-start')))
        || (index === lastIndex
          && (position.isSide('top') || arrow.isAlign('v-end')))
        || numChildren === 1)) {
      return hoverArrow(true);
    }
    return hoverArrow(false);
  };
  const calcHPos = (left, center, right) => {
    return position.isAlign('center')
      ? center : position.isAlign('left') ? left : right;
  };
  const calcVPos = (perc, elHeight, divider, adjMove, totHeight) => {
    return `calc(${perc}% - ${totHeight || 0}px - ${elHeight}px/${divider} + ${adjMove || 0}px)`;
  };
  const calcTopPos = (elHeight, totHeight) => {
    if (position.align === 'center') {
      return calcVPos(50, elHeight, 2, null, totHeight);
    }
    if (position.align === 'bottom') {
      return calcVPos(100, elHeight, 2, -12, totHeight);
    }
    return calcVPos(0, elHeight, 2, 12, totHeight);
  };
  const numberChildren = React.Children.count(children);
  const lastIndex = numberChildren - 1;

  const adjChildren = React.Children.map(children, (child, index) => {
    const style = {
      backgroundColor,
      padding
    };
    if (width === 'auto') style.whiteSpace = 'nowrap';
    if (!tpStatic && hoverIndex === index) {
      style.color = hoverColor;
      style.backgroundColor = hoverBackground;
    }
    if (lineSeparated && lastIndex !== index) {
      style.borderBottom = lineSeparated;
    }

    let ref = null;
    // eslint-disable-next-line
    ref = span => spanHeights[`span${index + 1}`] = span;

    const childProps = {
      ...child.props,
      ref,
      style,
      onMouseOver: () => onSpanHover(index, lastIndex, numberChildren)
    };
    return React.cloneElement(child, childProps);
  });
  let left = '';
  let right = '';
  let top = '8px';
  // Align: left, center, right
  const hLeftPos = calcHPos('100% - 50px', '50% - 40px', '0% - 30px');
  const hRightPos = calcHPos('0% - 30px', '50% - 40px', '100% - 50px');

  switch (arrow.position) {
    case 'h-start':
      left = `calc(${hRightPos})`;
      break;
    case 'h-end':
      right = `calc(${hLeftPos})`;
      break;
    case 'v-start':
      top = calcTopPos(firstH, null);
      break;
    case 'v-end':
      top = calcTopPos(lineSeparated ? -lastH + 1 : -lastH, totH);
      break;
    case 'v-center':
      top = `calc(0% - ${totH}px/2 + 11px)`;
      if (position.isAlign('center')) {
        top = `calc(50% - ${totH}px/2)`;
      }
      if (position.isAlign('bottom')) {
        top = `calc(100% - ${totH}px/2 - 11px)`;
      }
      break;
    default:
      break;
  }

  switch (position.side) {
    case 'top':
      top = calcVPos(0, totH, 1, 13);
      break;
    case 'left':
      right = '8px';
      break;
    case 'right':
      left = '8px';
      break;
    default:
      break;
  }

  let textBoxWidth = width;

  if (textBoxWidth !== 'auto') {
    textBoxWidth = Number(width.slice(0, -2));
    if (move.left > 0) textBoxWidth += move.left;
    if (move.right > 0) textBoxWidth += move.right;
  }
  const boxStyle = {
    left,
    right,
    top,
    width: textBoxWidth,
    borderRadius
  };

  const shColAdj = shCol.substr(0, shCol.lastIndexOf(',')).replace(/[)]/g, ',');
  const shadow = `${shShape} ${shCol}, 0 0 3px ${shColAdj}, 0.1), 0 0 0 1px ${shColAdj}, 0.15)`;
  const boxShadow = flat ? null : shadow;
  const alertStyle = alert ? 'rpt-alert' : '';
  const rgb = alert || 'rgb(248, 109, 109)';
  const alertShadow = alert ? `0 0 0 ${rgb.slice(0, rgb.length - 1)}, 0.4)` : null;
  const noNeg = number => number > 0 ? number : 0;

  return (
    <div
      className={`rpt-textbox-container ${alertStyle}`}
      style={{
        ...boxStyle,
        position: 'absolute',
        boxShadow: alertShadow,
        padding: `${move.down}px ${move.left}px ${move.up}px ${move.right}px`
      }}
    >
      <div
        className="rpt-shadow-container"
        style={{
          borderRadius,
          boxShadow,
          height: `calc(100% - ${noNeg(move.down) + noNeg(move.up)}px)`,
          width: `calc(100% - ${noNeg(move.left) + noNeg(move.right)}px)`
        }}
      />
      <div
        className="rpt-textbox"
        onMouseLeave={unsetHover}
        style={{
          backgroundColor,
          borderRadius
        }}
      >
        <div
          className={!tpStatic ? 'rpt-hover' : null}
          style={{
            borderRadius,
            overflow: 'hidden'
          }}
        >
          {adjChildren}
        </div>
      </div>
    </div>
  );
};

export default TextBox;
