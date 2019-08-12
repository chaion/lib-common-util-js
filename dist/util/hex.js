"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHex = toHex;
exports.appendHexStart = appendHexStart;
exports.hexStringToInt = hexStringToInt;
exports.hexToAscii = hexToAscii;
exports.stripZeroXHexString = stripZeroXHexString;
exports.isHex = isHex;
exports.removeLeadingZeroX = removeLeadingZeroX;
exports.hexString2Array = hexString2Array;

var _bignumber = _interopRequireDefault(require("bignumber.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function appendHexStart(str) {
  var str1 = str.startsWith('0x') ? str.substring(2) : str;
  var str2 = str1.length % 2 ? '0' + str1 : str1;
  return '0x' + str2;
}

function hexStringToInt(str) {
  var strNo0x = str.startsWith('0x') ? str.substring(2) : str;
  return parseInt(strNo0x, 16);
}

function hexToAscii(hex) {
  // if (!isHexStrict(hex))
  //     throw new Error('The parameter must be a valid HEX string.');
  var str = '';
  var i = 0;
  var l = hex.length;

  if (hex.substring(0, 2) === '0x') {
    i = 2;
  }

  for (; i < l; i += 2) {
    var code = parseInt(hex.substr(i, 2), 16);
    str += String.fromCharCode(code);
  }

  return str;
}

function stripZeroXHexString(str) {
  if (isHex(str)) {
    str = str.toLowerCase();
    str = str.startsWith('0x') ? str.slice(2) : str;
    return str;
  } else {
    throw Error('input must be a hex string');
  }
}

function isHex(val) {
  return typeof val === 'string' && /^(-0x|0x)?[0-9a-f]+$/i.test(val) === true;
}

function removeLeadingZeroX(val) {
  return /^0x/i.test(val) === true ? val.replace(/^0x/i, '') : val;
}

function hexString2Array(str) {
  if (str.startsWith('0x')) {
    str = str.substring(2);
  }

  var result = [];

  while (str.length >= 2) {
    result.push(parseInt(str.substring(0, 2), 16));
    str = str.substring(2, str.length);
  }

  return result;
}

function toHex(value) {
  if (!value) {
    return '0x00';
  } else if (typeof value === 'string') {
    return appendHexStart(value);
  } else if (value instanceof Buffer) {
    return appendHexStart(value.toString('hex'));
  } else if (typeof value === 'number') {
    return appendHexStart(value.toString(16));
  } else if (value instanceof Uint8Array) {
    return appendHexStart(Buffer.from(value).toString('hex'));
  } else if (_bignumber["default"].isBigNumber(value)) {
    return appendHexStart(value.toString(16));
  } else {
    throw value;
  }
}
//# sourceMappingURL=hex.js.map