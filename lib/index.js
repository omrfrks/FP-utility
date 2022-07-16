"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (currentValue, currentFunction) {
      return currentFunction(currentValue);
    }, value);
  };
};

var compose = function compose() {
  for (var _len2 = arguments.length, functions = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    functions[_key2] = arguments[_key2];
  }

  return function (value) {
    return functions.reduceRight(function (currentValue, currentFunction) {
      return currentFunction(currentValue);
    }, value);
  };
};

var findPropIn = function findPropIn(propName, obj) {
  if (obj == undefined || _typeof(obj) != "object") return;

  if (propName in obj) {
    return obj[propName];
  } else {
    for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
      var prop = _Object$keys[_i];
      var ret = findPropIn(propName, obj[prop]);

      if (ret !== undefined) {
        return ret;
      }
    }
  }
};

var unary = function unary(fn) {
  return function onlyOneArg(arg) {
    return fn(arg);
  };
};

module.exports = {
  pipe: pipe,
  compose: compose,
  findPropIn: findPropIn,
  unary: unary
};