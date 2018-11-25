"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextBox =
/*#__PURE__*/
function (_Component) {
  _inherits(TextBox, _Component);

  function TextBox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TextBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TextBox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      hoverIndex: null,
      firstH: null,
      lastH: null,
      totH: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "unsetHover", function () {
      _this.setState({
        hoverIndex: null
      });

      _this.props.hoverArrow(false);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSpanHover", function (index, lastIndex, numChildren) {
      _this.setState({
        hoverIndex: index
      });

      var _this$props = _this.props,
          rctStatic = _this$props.static,
          arrow = _this$props.arw,
          position = _this$props.pos,
          hoverArrow = _this$props.hoverArrow;

      if (!rctStatic && (index === 0 && (position.isSide('bottom') || arrow.isAlign('top')) || index === lastIndex && (position.isSide('top') || arrow.isAlign('bottom')) || numChildren === 1)) {
        return hoverArrow(true);
      }

      return hoverArrow(false);
    });

    return _this;
  }

  _createClass(TextBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var heights = Object.keys(this.spanHeights).map(function (key) {
        return _this2.spanHeights[key].clientHeight;
      });
      var firstH = heights[0];
      var lastH = heights[heights.length - 1];
      var totH = heights.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
      this.setState({
        totH: totH,
        firstH: firstH,
        lastH: lastH
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          arrow = _this$props2.arw,
          position = _this$props2.pos,
          lineSeparated = _this$props2.lines,
          tpStatic = _this$props2.static,
          width = _this$props2.textBoxWidth,
          move = _this$props2.move,
          backgroundColor = _this$props2.backgroundColor,
          padding = _this$props2.padding,
          borderRadius = _this$props2.borderRadius,
          hoverBackground = _this$props2.hoverBackground,
          hoverColor = _this$props2.hoverColor,
          alert = _this$props2.alert,
          flat = _this$props2.flat,
          children = _this$props2.children;
      var _this$state = this.state,
          hoverIndex = _this$state.hoverIndex,
          totH = _this$state.totH,
          firstH = _this$state.firstH,
          lastH = _this$state.lastH;

      var calcHPos = function calcHPos(left, center, right) {
        return position.isAlign('center') ? center : position.isAlign('left') ? left : right;
      };

      var calcVPos = function calcVPos(perc, elHeight, divider, adjMove, totHeight) {
        return "calc(".concat(perc, "% - ").concat(totHeight || 0, "px - ").concat(elHeight, "px/").concat(divider, " + ").concat(adjMove || 0, "px)");
      }; // TODO: REfactor


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
      this.spanHeights = {};

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
          return _this3.spanHeights["span".concat(index + 1)] = span;
        };

        var childProps = _objectSpread({}, child.props, {
          ref: ref,
          style: style,
          onMouseOver: function onMouseOver() {
            return _this3.onSpanHover(index, lastIndex, numberChildren);
          }
        });

        return _react.default.cloneElement(child, childProps);
      });

      var left = '';
      var right = '';
      var top = '8px'; // Align: left, center, right

      var hLeftPos = calcHPos('100% - 50px', '50% - 40px', '0% - 30px');
      var hRightPos = calcHPos('0% - 30px', '50% - 40px', '100% - 50px');

      if (arrow.isAlign('center') && (position.isSide('top') || position.isSide('bottom'))) {
        arrow.position = 'hCenter';
      } else if (arrow.isAlign('center')) {
        arrow.position = 'vCenter';
      }

      switch (arrow.position) {
        case 'right':
          right = "calc(".concat(hLeftPos, ")");
          break;

        case 'left':
          left = "calc(".concat(hRightPos, ")");
          break;

        case 'top':
          top = calcTopPos(firstH, null);
          break;

        case 'bottom':
          top = calcTopPos(lineSeparated ? -lastH + 1 : -lastH, totH);
          break;

        case 'vCenter':
          top = "calc(0% - ".concat(totH, "px/2 + 11px)");

          if (position.isAlign('center')) {
            top = "calc(50% - ".concat(totH, "px/2)");
          }

          if (position.isAlign('bottom')) {
            top = "calc(100% - ".concat(totH, "px/2 - 11px)");
          }

          break;
        // case 'hCenter':
        //   break;

        default:
          break;
      }

      switch (position.side) {
        // case 'bottom':
        //   break;
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
      var showShadow = flat ? 'rpt-no-shadow' : 'rpt-shadow';
      var alertStyle = alert ? 'rpt-alert' : '';
      var rgb = alert || 'rgb(248, 109, 109)';
      var boxShadow = alert ? "0 0 0 ".concat(rgb.slice(0, rgb.length - 1), ", 0.4)") : null;

      var noNeg = function noNeg(number) {
        return number > 0 ? number : 0;
      };

      return _react.default.createElement("div", {
        className: "rpt-textbox-container ".concat(alertStyle),
        style: _objectSpread({}, boxStyle, {
          position: 'absolute',
          boxShadow: boxShadow,
          padding: "".concat(move.down, "px ").concat(move.left, "px ").concat(move.up, "px ").concat(move.right, "px")
        })
      }, _react.default.createElement("div", {
        className: "rpt-shadow-container ".concat(showShadow),
        style: {
          borderRadius: borderRadius,
          height: "calc(100% - ".concat(noNeg(move.down) + noNeg(move.up), "px)"),
          width: "calc(100% - ".concat(noNeg(move.left) + noNeg(move.right), "px)")
        }
      }), _react.default.createElement("div", {
        className: "rpt-textbox",
        onMouseLeave: this.unsetHover,
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
    }
  }]);

  return TextBox;
}(_react.Component);

var _default = TextBox;
exports.default = _default;