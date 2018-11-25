"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _delayUnmount = _interopRequireDefault(require("./delayUnmount"));

var _TextBox = _interopRequireDefault(require("./TextBox"));

var _Arrow = _interopRequireDefault(require("./Arrow"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tooltip =
/*#__PURE__*/
function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tooltip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      hoverArrow: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hoverArrow", function (bool) {
      _this.setState({
        hoverArrow: bool
      });
    });

    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      // Basic prop type checking
      Object.keys(this.props).forEach(function (propName) {
        var type = _typeof(_this2.props[propName]);

        var text = "React-power-tooptip: [".concat(propName, "] prop should be a");

        if (propName !== 'children' && propName !== 'delayTime' && type !== 'boolean' && type !== 'string') {
          // eslint-disable-next-line
          console.error("".concat(text, " string (check also units)"));
        }

        if (propName === 'delayTime' && type !== 'number') {
          // eslint-disable-next-line
          console.error("".concat(text, " number"));
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          lines = _this$props.lineSeparated,
          pos = _this$props.position,
          hoverBackground = _this$props.hoverBackground,
          backgroundColor = _this$props.backgroundColor,
          arwAlign = _this$props.arrow,
          moveDown = _this$props.moveDown,
          moveRight = _this$props.moveRight,
          moveLeft = _this$props.moveLeft,
          moveUp = _this$props.moveUp,
          textAlign = _this$props.textAlign,
          fontFamily = _this$props.fontFamily,
          fontWeight = _this$props.fontWeight,
          fontSize = _this$props.fontSize,
          color = _this$props.color,
          animation = _this$props.animation,
          zIndex = _this$props.zIndex,
          show = _this$props.show,
          flat = _this$props.flat; // Sets if false no line; if true default line; if string custom line;

      var lineSeparated = typeof lines === 'boolean' ? '1px solid #ececec' : lines;

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
      var arrow = {
        isAlign: isAlign,
        position: arwAlign
      }; // TODO: refactor

      var side = position.side,
          align = position.align;
      var classes = ['rct-container'];
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

      var onAxis = {
        y: position.isSide('top') || position.isSide('bottom'),
        x: position.isSide('left') || position.isSide('right')
      };

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
        margin: oneMovePropIsNeg ? adjustment : null
      });
      return _react.default.createElement("div", {
        className: classes.join(' '),
        style: tooltipStyle
      }, _react.default.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          animation: show ? "rct-".concat(animation, " 0.2s") : "rct-".concat(animation, "-out 0.15s")
        }
      }, _react.default.createElement(_Arrow.default, {
        isHovered: this.state.hoverArrow,
        hovBkg: hoverBackground,
        bkgCol: backgroundColor,
        flat: flat
      }), _react.default.createElement(_TextBox.default, _extends({}, this.props, {
        hoverArrow: this.hoverArrow,
        lines: lineSeparated,
        pos: position,
        arw: arrow,
        move: move
      }))));
    }
  }]);

  return Tooltip;
}(_react.Component); // Specifies the default values for props:


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

var _default = (0, _delayUnmount.default)(Tooltip);

exports.default = _default;