"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TextBox = _interopRequireDefault(require("./Tooltip/TextBox"));

var _Arrow = _interopRequireDefault(require("./Tooltip/Arrow"));

var _styles = _interopRequireDefault(require("./Tooltip/styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Tooltip = _react.default.memo(function (props) {
  var nextProps = props.nextProps,
      nextState = props.nextState,
      animation = props.animation,
      _props$show = props.show,
      show = _props$show === void 0 ? false : _props$show,
      lines = props.lineSeparated,
      pos = props.position,
      hoverBackground = props.hoverBackground,
      backgroundColor = props.backgroundColor,
      arwAlign = props.arrowAlign,
      moveDown = props.moveDown,
      moveRight = props.moveRight,
      moveLeft = props.moveLeft,
      moveUp = props.moveUp,
      textAlign = props.textAlign,
      fontFamily = props.fontFamily,
      fontWeight = props.fontWeight,
      fontSize = props.fontSize,
      color = props.color,
      zIndex = props.zIndex,
      flat = props.flat;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hoverArrow = _useState2[0],
      setHoverArrow = _useState2[1];

  var _useState3 = (0, _react.useState)(show),
      _useState4 = _slicedToArray(_useState3, 2),
      showState = _useState4[0],
      setShowState = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      mount = _useState6[0],
      setMount = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      hasInitialized = _useState8[0],
      setHasInitialized = _useState8[1];

  (0, _react.useEffect)(function () {
    return nextProps !== props || nextState.hasInitialized !== hasInitialized || nextState.mount !== mount || nextState.hoverArrow !== hoverArrow;
  }, []);
  (0, _react.useEffect)(function () {
    // Injecting styles directly into header
    if (!document.getElementById('rpt-css')) {
      var $style = document.createElement('style');
      $style.type = 'text/css';
      $style.id = 'rpt-css';
      document.head.appendChild($style);
      $style.innerHTML = _styles.default;
    } // Basic prop type checking


    Object.keys(props).forEach(function (propName) {
      var type = _typeof(props[propName]);

      var text = "React-power-tooptip: [".concat(propName, "] prop should be a");

      if (propName !== 'children' && type !== 'boolean' && type !== 'string') {
        // eslint-disable-next-line
        console.error("".concat(text, " string (check also units)"));
      }
    });
  }, []);
  (0, _react.useEffect)(function () {
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

  var hoverArrowHandler = function hoverArrowHandler(bool) {
    setHoverArrow(bool);
  };

  function isAlign(str) {
    return this.align ? this.align === str : this.position === str;
  }

  function isSide(str) {
    return this.side === str;
  }

  var position = {
    side: pos.split(' ')[0],
    align: pos.split(' ')[1],
    isAlign: isAlign,
    isSide: isSide
  };
  var side = position.side,
      align = position.align; // Sets if false no line; if true default line; if string custom line;

  var lineSeparated = typeof lines === 'boolean' ? '1px solid #ececec' : lines;
  var arrow = {
    isAlign: isAlign,
    position: arwAlign
  };
  var classes = ['rpt-container'];
  var tooltipStyle = {};
  var bottom;

  var arrange = function arrange(top, left, right, height, width, cssSel) {
    tooltipStyle = {
      top: top,
      left: left,
      right: right,
      height: height,
      width: width
    };
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

  var onAxis = {
    y: position.isSide('top') || position.isSide('bottom'),
    x: position.isSide('left') || position.isSide('right')
  };
  arrow.position = onAxis.y ? "h-".concat(arrow.position) : "v-".concat(arrow.position);

  var num = function num(str) {
    return Number(str.slice(0, -2));
  };

  var move = {
    down: num(moveDown),
    up: num(moveUp),
    left: num(moveLeft),
    right: num(moveRight)
  };
  var oneMovePropIsNeg = move.down < 0 || move.up < 0 || move.left < 0 || move.right < 0;

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

  var adjustment = "".concat(move.down, "px ").concat(move.left, "px ").concat(move.up, "px ").concat(move.right, "px");
  tooltipStyle = _objectSpread({}, tooltipStyle, {
    zIndex: zIndex,
    color: color,
    bottom: bottom,
    fontSize: fontSize,
    textAlign: textAlign,
    fontFamily: fontFamily,
    fontWeight: fontWeight,
    padding: oneMovePropIsNeg ? null : adjustment,
    margin: oneMovePropIsNeg ? adjustment : null,
    animation: show ? "rpt-".concat(animation, " 0.2s") : "rpt-".concat(animation, "-out 0.15s")
  });
  return !animation && show || showState && mount ? _react.default.createElement("div", {
    className: classes.join(' '),
    style: tooltipStyle,
    onAnimationEnd: function onAnimationEnd() {
      if (!show && animation) setMount(true);
    }
  }, _react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, _react.default.createElement(_Arrow.default, {
    isHovered: hoverArrow,
    hovBkg: hoverBackground,
    bkgCol: backgroundColor,
    flat: flat
  }), _react.default.createElement(_TextBox.default, _extends({}, props, {
    hoverArrow: hoverArrowHandler,
    lines: lineSeparated,
    pos: position,
    arw: arrow,
    move: move
  })))) : null;
}); // Specifies the default values for props:


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
var _default = Tooltip;
exports.default = _default;