"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var METHOD_GET = 'get';
var METHOD_POST = 'post';
var METHOD_PUT = 'put';
var METHOD_DELETE = 'delete';

function requestAPI(method, url) {
  var _headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _dataBody = arguments.length > 3 ? arguments[3] : undefined;

  var isJSON = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var timeout = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 90;
  var headers = _headers;
  var dataBody = _dataBody;

  if (isJSON) {
    headers['Content-Type'] = 'application/json';
  }

  if (isJSON && (method === METHOD_POST || method === METHOD_PUT)) {
    headers['Content-Type'] = 'application/json';
  } else if (method === METHOD_POST || method === METHOD_PUT) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    dataBody = _querystring["default"].stringify(dataBody);
  }

  var config = {
    url: url,
    headers: headers,
    method: method,
    validateStatus: function validateStatus() {
      return true;
    },
    timeout: timeout * 1000
  };

  if (method === METHOD_GET) {
    config.params = dataBody;
  } else {
    config.data = dataBody;
  }

  return (0, _axios["default"])(config);
}

var HttpClient = {
  get: function get(url, dataBody) {
    var isJSON = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return requestAPI(METHOD_GET, url, headers, dataBody, isJSON);
  },
  post: function post(url, dataBody) {
    var isJSON = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return requestAPI(METHOD_POST, url, headers, dataBody, isJSON);
  },
  put: function put(url, dataBody) {
    var isJSON = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return requestAPI(METHOD_PUT, url, headers, dataBody, isJSON);
  },
  "delete": function _delete(url, dataBody) {
    var isJSON = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return requestAPI(METHOD_DELETE, url, headers, dataBody, isJSON);
  }
};
var _default = HttpClient;
exports["default"] = _default;
//# sourceMappingURL=httpclient.js.map