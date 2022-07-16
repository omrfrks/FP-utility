"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var spreadArgs = function spreadArgs(fn) {
  return function spreadFn(argsArr) {
    return fn.apply(void 0, _toConsumableArray(argsArr));
  };
};

var gatherArgs = function gatherArgs(fn) {
  return function spreadFn() {
    for (var _len3 = arguments.length, argsArr = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      argsArr[_key3] = arguments[_key3];
    }

    return fn(argsArr);
  };
};

module.exports = {
  pipe: pipe,
  compose: compose,
  findPropIn: findPropIn,
  unary: unary,
  spreadArgs: spreadArgs,
  gatherArgs: gatherArgs
};