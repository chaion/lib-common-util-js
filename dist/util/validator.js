"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateMnemonic = exports.validatePositiveInteger = exports.validateAmount = void 0;

var bip39 = _interopRequireWildcard(require("bip39"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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
  return bip39.validateMnemonic(mnemonicFormat);
};

exports.validateMnemonic = validateMnemonic;
//# sourceMappingURL=validator.js.map