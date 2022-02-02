"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TextBox = function TextBox(props) {
  var arrow = props.arw,
      position = props.pos,
      lineSeparated = props.lines,
      tpStatic = props.static,
      width = props.textBoxWidth,
      shCol = props.shadowColor,
      shShape = props.shadowShape,
      move = props.move,
      backgroundColor = props.backgroundColor,
      padding = props.padding,
      borderRadius = props.borderRadius,
      hoverBackground = props.hoverBackground,
      hoverColor = props.hoverColor,
      alert = props.alert,
      flat = props.flat,
      children = props.children,
      hoverArrow = props.hoverArrow;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      hoverIndex = _useState2[0],
      setHoverIndex = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      firstH = _useState4[0],
      setFirstH = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      lastH = _useState6[0],
      setLastH = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      totH = _useState8[0],
      setTotH = _useState8[1];

  var spanHeights = {};
  (0, _react.useEffect)(function () {
    var heights = Object.keys(spanHeights).map(function (key) {
      return spanHeights[key].clientHeight;
    });
    var firstHVar = heights[0];
    var lastHVar = heights[heights.length - 1];
    var totHVar = heights.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    setTotH(totHVar);
    setFirstH(firstHVar);
    setLastH(lastHVar);
  }, []);

  var unsetHover = function unsetHover() {
    setHoverIndex(null);
    hoverArrow(false);
  }; // Set & unset hover state


  var onSpanHover = function onSpanHover(index, lastIndex, numChildren) {
    setHoverIndex(index);
    var rctStatic = props.static;

    if (!rctStatic && (index === 0 && (position.isSide('bottom') || arrow.isAlign('v-start')) || index === lastIndex && (position.isSide('top') || arrow.isAlign('v-end')) || numChildren === 1)) {
      return hoverArrow(true);
    }

    return hoverArrow(false);
  };

  var calcHPos = function calcHPos(left, center, right) {
    return position.isAlign('center') ? center : position.isAlign('left') ? left : right;
  };

  var calcVPos = function calcVPos(perc, elHeight, divider, adjMove, totHeight) {
    return "calc(".concat(perc, "% - ").concat(totHeight || 0, "px - ").concat(elHeight, "px/").concat(divider, " + ").concat(adjMove || 0, "px)");
  };

  var calcTopPos = function calcTopPos(elHeight, totHeight) {
    if (position.align === 'center') {
      return calcVPos(50, elHeight, 2, null, totHeight);
    }

    if (position.align === 'bottom') {
      return calcVPos(100, elHeight, 2, -12, totHeight);
    }

    return calcVPos(0, elHeight, 2, 12, totHeight);
  };

  var numberChildren = _react.default.Children.count(children);

  var lastIndex = numberChildren - 1;

  var adjChildren = _react.default.Children.map(children, function (child, index) {
    var style = {
      backgroundColor: backgroundColor,
      padding: padding
    };
    if (width === 'auto') style.whiteSpace = 'nowrap';

    if (!tpStatic && hoverIndex === index) {
      style.color = hoverColor;
      style.backgroundColor = hoverBackground;
    }

    if (lineSeparated && lastIndex !== index) {
      style.borderBottom = lineSeparated;
    }

    var ref = null; // eslint-disable-next-line

    ref = function ref(span) {
      return spanHeights["span".concat(index + 1)] = span;
    };

    var childProps = _objectSpread({}, child.props, {
      ref: ref,
      style: style,
      onMouseOver: function onMouseOver() {
        return onSpanHover(index, lastIndex, numberChildren);
      }
    });

    return _react.default.cloneElement(child, childProps);
  });

  var left = '';
  var right = '';
  var top = '8px'; // Align: left, center, right

  var hLeftPos = calcHPos('100% - 50px', '50% - 40px', '0% - 30px');
  var hRightPos = calcHPos('0% - 30px', '50% - 40px', '100% - 50px');

  switch (arrow.position) {
    case 'h-start':
      left = "calc(".concat(hRightPos, ")");
      break;

    case 'h-end':
      right = "calc(".concat(hLeftPos, ")");
      break;

    case 'v-start':
      top = calcTopPos(firstH, null);
      break;

    case 'v-end':
      top = calcTopPos(lineSeparated ? -lastH + 1 : -lastH, totH);
      break;

    case 'v-center':
      top = "calc(0% - ".concat(totH, "px/2 + 11px)");

      if (position.isAlign('center')) {
        top = "calc(50% - ".concat(totH, "px/2)");
      }

      if (position.isAlign('bottom')) {
        top = "calc(100% - ".concat(totH, "px/2 - 11px)");
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

  var textBoxWidth = width;

  if (textBoxWidth !== 'auto') {
    textBoxWidth = Number(width.slice(0, -2));
    if (move.left > 0) textBoxWidth += move.left;
    if (move.right > 0) textBoxWidth += move.right;
  }

  var boxStyle = {
    left: left,
    right: right,
    top: top,
    width: textBoxWidth,
    borderRadius: borderRadius
  };
  var shColAdj = shCol.substr(0, shCol.lastIndexOf(',')).replace(/[)]/g, ',');
  var shadow = "".concat(shShape, " ").concat(shCol, ", 0 0 3px ").concat(shColAdj, ", 0.1), 0 0 0 1px ").concat(shColAdj, ", 0.15)");
  var boxShadow = flat ? null : shadow;
  var alertStyle = alert ? 'rpt-alert' : '';
  var rgb = alert || 'rgb(248, 109, 109)';
  var alertShadow = alert ? "0 0 0 ".concat(rgb.slice(0, rgb.length - 1), ", 0.4)") : null;

  var noNeg = function noNeg(number) {
    return number > 0 ? number : 0;
  };

  return _react.default.createElement("div", {
    className: "rpt-textbox-container ".concat(alertStyle),
    style: _objectSpread({}, boxStyle, {
      position: 'absolute',
      boxShadow: alertShadow,
      padding: "".concat(move.down, "px ").concat(move.left, "px ").concat(move.up, "px ").concat(move.right, "px")
    })
  }, _react.default.createElement("div", {
    className: "rpt-shadow-container",
    style: {
      borderRadius: borderRadius,
      boxShadow: boxShadow,
      height: "calc(100% - ".concat(noNeg(move.down) + noNeg(move.up), "px)"),
      width: "calc(100% - ".concat(noNeg(move.left) + noNeg(move.right), "px)")
    }
  }), _react.default.createElement("div", {
    className: "rpt-textbox",
    onMouseLeave: unsetHover,
    style: {
      backgroundColor: backgroundColor,
      borderRadius: borderRadius
    }
  }, _react.default.createElement("div", {
    className: !tpStatic ? 'rpt-hover' : null,
    style: {
      borderRadius: borderRadius,
      overflow: 'hidden'
    }
  }, adjChildren)));
};

var _default = TextBox;
exports.default = _default;