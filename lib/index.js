"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printMsg = exports.default = void 0;

var _Tooltip = _interopRequireDefault(require("./Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Tooltip.default;
exports.default = _default;

var printMsg = function printMsg() {
  // eslint-disable-next-line
  console.log("Thanks for choosing react-custom-tooltip!\n  We are open for collaboration...get involved!!".magenta);
};

exports.printMsg = printMsg;