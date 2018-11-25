"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var Arrow = function Arrow(_ref) {
  var isHovered = _ref.isHovered,
      hovBkg = _ref.hovBkg,
      bkgCol = _ref.bkgCol,
      flat = _ref.flat;
  var backgroundColor = isHovered ? hovBkg : bkgCol;
  var boxShadow = flat ? null : '0 0 0 1px rgba(0,0,0,.18)';
  return _react.default.createElement("div", {
    className: "rpt-arrow",
    style: {
      backgroundColor: backgroundColor,
      boxShadow: boxShadow
    }
  });
};

var _default = Arrow;
exports.default = _default;