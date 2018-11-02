import React, { Component } from 'react';

class TextBox extends Component {
  state = {
    hoverIndex: null,
    firstH: null,
    lastH: null,
    totH: null
  }

  componentDidMount() {
    const heights = Object.keys(this.spanHeights)
      .map(key => this.spanHeights[key].clientHeight);
    const firstH = heights[0];
    const lastH = heights[heights.length - 1];
    const totH = heights.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0
    );
    this.setState({ totH, firstH, lastH });
  }

  unsetHover = () => {
    this.setState({ hoverIndex: null });
    this.props.hoverArrow(false);
  }


  // Set & unset hover state
  onSpanHover = (index, lastIndex, numChildren) => {
    this.setState({ hoverIndex: index });
    const { static: rctStatic, arw: arrow, pos: position, hoverArrow } = this.props;
    if (!rctStatic
      && ((index === 0
        && (position.isSide('bottom') || arrow.isAlign('top')))
        || (index === lastIndex
          && (position.isSide('top') || arrow.isAlign('bottom')))
        || numChildren === 1)) {
      return hoverArrow(true);
    }
    return hoverArrow(false);
  }

  render() {
    const {
      arw: arrow,
      pos: position,
      lines: lineSeparated,
      static: tpStatic,
      textBoxWidth: width,
      mvDown: moveDown,
      mvLeft: moveLeft,
      mvUp: moveUp,
      mvRight: moveRight,
      backgroundColor,
      padding,
      borderRadius,
      hoverBackground,
      hoverColor,
      alert,
      flat,
      children
    } = this.props;

    const {
      hoverIndex,
      totH,
      firstH,
      lastH
    } = this.state;

    const calcHPos = (left, center, right) => {
      return position.isAlign('center')
        ? center : position.isAlign('left') ? left : right;
    };
    const calcVPos = (perc, elHeight, divider, adjMove, totHeight) => {
      return `calc(${perc}% - ${totHeight || 0}px - ${elHeight}px/${divider} + ${adjMove || 0}px)`;
    };
    // TODO: REfactor
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
    this.spanHeights = {};

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
      ref = span => this.spanHeights[`span${index + 1}`] = span;

      const childProps = {
        ...child.props,
        ref,
        style,
        onMouseOver: () => this.onSpanHover(index, lastIndex, numberChildren)
      };
      return React.cloneElement(child, childProps);
    });

    let left = '';
    let right = '';
    let top = '8px';
    // Align: left, center, right
    const hLeftPos = calcHPos('100% - 50px', '50% - 40px', '0% - 30px');
    const hRightPos = calcHPos('0% - 30px', '50% - 40px', '100% - 50px');

    if (arrow.isAlign('center')
      && (position.isSide('top') || position.isSide('bottom'))) {
      arrow.position = 'hCenter';
    } else if (arrow.isAlign('center')) {
      arrow.position = 'vCenter';
    }

    switch (arrow.position) {
      case 'left':
        right = `calc(${hLeftPos})`;
        break;
      case 'right':
        left = `calc(${hRightPos})`;
        break;
      case 'top':
        top = calcTopPos(firstH, null);
        break;
      case 'bottom':
        top = calcTopPos(lineSeparated ? -lastH + 1 : -lastH, totH);
        break;
      case 'vCenter':
        top = `calc(0% - ${totH}px/2 + 11px)`;
        if (position.isAlign('center')) {
          top = `calc(50% - ${totH}px/2)`;
        }
        if (position.isAlign('bottom')) {
          top = `calc(100% - ${totH}px/2 - 11px)`;
        }
        break;
      case 'hCenter':
        break;
      default:
        break;
    }

    switch (position.side) {
      case 'bottom':
        break;
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
      if (moveLeft > 0) textBoxWidth += moveLeft;
      if (moveRight > 0) textBoxWidth += moveRight;
    }

    const boxStyle = {
      left,
      right,
      top,
      width: textBoxWidth,
      borderRadius
    };

    const showShadow = flat ? 'rct-no-shadow' : 'rct-shadow';
    const alertStyle = alert ? 'rct-alert' : null;
    const rgb = alert || 'rgb(248, 109, 109)';
    const boxShadow = alert ? `0 0 0 ${rgb.slice(0, rgb.length - 1)}, 0.4)` : null;
    const noNeg = number => number > 0 ? number : 0;

    return (
      <div
        className={`wrapper ${alertStyle}`}
        style={{
          ...boxStyle,
          position: 'absolute',
          boxShadow,
          padding: `${moveDown}px ${moveLeft}px ${moveUp}px ${moveRight}px`
        }}
      >
        <div
          className={`rct-shadow-container ${showShadow}`}
          style={{
            borderRadius,
            height: `calc(100% - ${noNeg(moveDown) + noNeg(moveUp)}px)`,
            width: `calc(100% - ${noNeg(moveLeft) + noNeg(moveRight)}px)`
          }}
        />
        <div
          className="rct-textbox"
          onMouseLeave={this.unsetHover}
          style={{
            backgroundColor,
            borderRadius
          }}
        >
          <div
            className={!tpStatic ? 'rct-hover' : null}
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
  }
}

export default TextBox;
