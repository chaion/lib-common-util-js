"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateMnemonic = exports.validatePositiveInteger = exports.validateAmount = void 0;

var _bip = _interopRequireDefault(require("bip39"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validateAmount = function validateAmount(amount) {
  return /^[0-9]?((\.[0-9]+)|([0-9]+(\.[0-9]+)?))$/.test(amount);
};

exports.validateAmount = validateAmount;

var validatePositiveInteger = function validatePositiveInteger(input) {
  return /^[1-9][0-9]*$/.test(input);
};

exports.validatePositiveInteger = validatePositiveInteger;

var validateMnemonic = function validateMnemonic(mnemonic) {
  var mnemonicFormat = mnemonic.trim().split(/\s+/).join(' ');
  return _bip["default"].validateMnemonic(mnemonicFormat);
};

exports.validateMnemonic = validateMnemonic;
//# sourceMappingURL=validator.js.map