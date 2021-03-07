import React, { createElement, Component, useContext, useState } from 'react';
import { context, useCopy, useApiData } from 'dumi/theme';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".param-builder input[data-attr] {\n  height: 32px;\n}\n.param-builder textarea[data-attr] {\n  height: 50px;\n}\n.param-builder p.title {\n  padding: 18px 0 18px;\n  color: #454d64;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.40625;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-margin-after: 0;\n          margin-block-end: 0;\n}\n.param-builder input[required]:empty,\n.param-builder textarea[required]:empty {\n  border: 1px solid #ff4646;\n}\n.param-builder input[data-attr],\n.param-builder textarea[data-attr] {\n  width: calc(100% - 38 * 2px);\n  padding: 14px 38px 0 14px;\n  color: #454d64;\n  font-size: 14px;\n  border: 0;\n  outline: none;\n  transition: all 0.2s;\n  border-radius: 5px;\n  background: #f5f6f7 no-repeat right 14px center / 16px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  resize: none;\n  word-break: break-word;\n}\n.param-builder .fn-btn {\n  padding: 0 16px;\n  font-size: 14px;\n  line-height: 36px;\n  width: 100%;\n  border: 0;\n  color: #fff;\n  display: block;\n  outline: none;\n  background: #4569d4;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.param-builder .hidden {\n  display: none;\n}\n.param-builder .show {\n  display: block;\n}\n.param-builder .res-box {\n  position: relative;\n}\n.param-builder .res-box .copy {\n  position: absolute;\n  top: 1.1em;\n  right: 1em;\n  width: 16px;\n  height: 16px;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  opacity: 0.6;\n  outline: none;\n  transition: opacity 0.2s, background 0.2s;\n}\n.param-builder .res-box .copy:not(:last-child) {\n  margin-right: 8px;\n}\n.param-builder .res-box .copy::after {\n  content: '';\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  right: -8px;\n  bottom: -8px;\n}\n.param-builder .res-box .copy[data-status='ready'] {\n  background-position: -54px 0;\n}\n.param-builder .res-box .copy[data-status='copied'] {\n  pointer-events: none;\n  background-position: -54px -16px;\n}\n.param-builder .alert {\n  word-break: break-word;\n  position: relative;\n  margin: 24px 0;\n  padding: 10px 20px;\n  color: #454d64;\n  font-size: 14px;\n  line-height: 20px;\n  border-left: 0;\n  background: #ffffff;\n  box-shadow: 0 6px 16px -2px rgb(0 0 0%);\n  border-radius: 1px;\n}\n.param-builder .alert:first-child {\n  margin-top: 0;\n}\n.param-builder .alert::after {\n  content: '';\n  position: absolute;\n  display: inline-block;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 3px;\n  border-radius: 1px;\n}\n.param-builder .alert:not([type])::after,\n.param-builder .alert.warning::after {\n  background: #ffc121;\n}\n.param-builder .alert.error::after {\n  background: #ff4646;\n}\n.param-builder .alert.info::after {\n  background: #69b9ff;\n}\n.param-builder .alert.success::after {\n  background: #8cd225;\n}\n.param-builder .alert.pre {\n  max-height: 100px;\n  overflow-y: auto;\n}\n";
styleInject(css_248z);

var logger = console;
var parse = function parse() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return JSON.parse(str.replace(/\'/g, '"'));
};
var BaseExecFn = function BaseExecFn(dealFnStr) {
  return dealFnStr ? new Function(dealFnStr) : function () {
    return '';
  };
};

var toTitle = function toTitle(error, componentStack) {
  return error && componentStack ? "".concat(error.toString(), "\n\nThis is located at:").concat(componentStack) : '';
};

var style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '100px 0',
  color: '#ed3131'
};

var ErrorBoundaryFallback = function ErrorBoundaryFallback(_ref) {
  var componentStack = _ref.componentStack,
      error = _ref.error;
  return /*#__PURE__*/createElement("div", {
    style: style,
    title: toTitle(error, componentStack)
  }, /*#__PURE__*/createElement("svg", {
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "843",
    width: "60",
    height: "60"
  }, /*#__PURE__*/createElement("path", {
    d: "M1024 512C1024 229.23 794.77 0 512 0S0 229.23 0 512s229.23 512 512 512c117.41 0 228.826-39.669 318.768-111.313 10.79-8.595 12.569-24.308 3.975-35.097-8.594-10.789-24.308-12.568-35.097-3.974C718.47 938.277 618.002 974.049 512 974.049 256.818 974.049 49.951 767.182 49.951 512S256.818 49.951 512 49.951 974.049 256.818 974.049 512c0 87.493-24.334 171.337-69.578 243.96-7.294 11.708-3.716 27.112 7.992 34.405 11.707 7.294 27.11 3.716 34.405-7.991C997.014 701.88 1024 608.898 1024 512z",
    "p-id": "844",
    fill: "#cdcdcd"
  }), /*#__PURE__*/createElement("path", {
    d: "M337.17 499.512c34.485 0 62.44-27.955 62.44-62.439s-27.955-62.439-62.44-62.439c-34.483 0-62.438 27.955-62.438 62.44 0 34.483 27.955 62.438 62.439 62.438z m374.635 0c34.484 0 62.439-27.955 62.439-62.439s-27.955-62.439-62.44-62.439c-34.483 0-62.438 27.955-62.438 62.44 0 34.483 27.955 62.438 62.439 62.438zM352.788 704.785c43.377-34.702 100.364-55.425 171.7-55.425 71.336 0 128.322 20.723 171.7 55.425 26.513 21.21 42.695 42.786 50.444 58.284 6.168 12.337 1.168 27.34-11.17 33.508-12.337 6.169-27.34 1.168-33.508-11.17-0.918-1.834-3.462-6.024-7.788-11.793-7.564-10.084-17.239-20.269-29.183-29.824-34.671-27.737-80.71-44.478-140.495-44.478-59.786 0-105.824 16.74-140.496 44.478-11.944 9.555-21.619 19.74-29.182 29.824-4.327 5.769-6.87 9.959-7.788 11.794-6.169 12.337-21.171 17.338-33.509 11.17-12.337-6.17-17.338-21.172-11.169-33.509 7.75-15.498 23.931-37.074 50.444-58.284z",
    "p-id": "845",
    fill: "#cdcdcd"
  })), /*#__PURE__*/createElement("h3", null, "Oops! Something went wrong."));
};

var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      error: null,
      info: {
        componentStack: ''
      }
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      var onError = this.props.onError;

      if (typeof onError === 'function') {
        try {
          // can’t reproduce missing info in development environment.
          onError.call(this, error, info.componentStack);
        } catch (ignoredError) {// ignored error
        }
      } // Update state so the next render will show the fallback UI.


      this.setState({
        error: error,
        info: info
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          Fallback = _this$props.Fallback,
          _this$props$errorStat = _this$props.errorState,
          errorState = _this$props$errorStat === void 0 ? false : _this$props$errorStat;
      var _this$state = this.state,
          error = _this$state.error,
          info = _this$state.info; // render fallback UI if there is error

      if ((error !== null || errorState === true) && typeof Fallback === 'function') {
        return /*#__PURE__*/createElement(Fallback, {
          componentStack: info && info.componentStack,
          error: error
        });
      }

      return children || null;
    }
  }]);

  return ErrorBoundary;
}(Component);

ErrorBoundary.defaultProps = {
  Fallback: ErrorBoundaryFallback
};

var LOCALE_TEXTS = {
  'zh-CN': {
    name: '属性名',
    description: '描述',
    type: '类型',
    default: '默认值',
    required: '是否必传',
    value: '测试值'
  },
  'en-US': {
    name: 'Name',
    description: 'Description',
    type: 'Type',
    default: 'Default',
    required: 'required',
    value: 'value'
  }
};

var ParamFnBuilder = function ParamFnBuilder(_ref) {
  var identifier = _ref.identifier,
      expt = _ref.export,
      dealFnRun = _ref.dealFnRun,
      _ref$paramArr = _ref.paramArr,
      paramArr = _ref$paramArr === void 0 ? [] : _ref$paramArr;

  if (!paramArr.length) {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }

  var _useContext = useContext(context),
      _useContext$locale = _useContext.locale,
      locale = _useContext$locale === void 0 ? '' : _useContext$locale;

  var texts = /^zh|cn$/i.test(locale) ? LOCALE_TEXTS['zh-CN'] : LOCALE_TEXTS['en-US'];

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      modalConfig = _useState2[0],
      setModalConfig = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      resData = _useState4[0],
      setResData = _useState4[1];

  var defaultFnData = paramArr.reduce(function (acc, param) {
    acc[param.identifier] = param.default;
    return acc;
  }, {});

  var _useState5 = useState(defaultFnData),
      _useState6 = _slicedToArray(_useState5, 2),
      fnData = _useState6[0],
      setFnData = _useState6[1];

  var _useCopy = useCopy(),
      _useCopy2 = _slicedToArray(_useCopy, 2),
      copyCode = _useCopy2[0],
      copyStatus = _useCopy2[1];

  var _dealFnRun = function _dealFnRun() {
    try {
      setResData('');
      var errorMsg = '';
      var errorData = paramArr.filter(function (param) {
        return param.required && !fnData[param.identifier] && fnData[param.identifier] !== 0 && (errorMsg += "\u53C2\u6570 ".concat(param.identifier, ", "));
      });

      if (errorMsg) {
        errorMsg += "\u4EE5\u4E0A ".concat(errorData.length, " \u4E2A\u53C2\u6570\u4E3A\u5FC5\u4F20\uFF0C\u8BF7\u8F93\u5165\u5BF9\u5E94\u503C");
        setModalConfig({
          modalState: true,
          errorMsg: errorMsg
        });
      } else {
        setModalConfig({
          modalState: false,
          errorMsg: ''
        });

        if (typeof dealFnRun === 'function') {
          var res = dealFnRun(_objectSpread2({}, fnData));
          !!res && setResData(res);
        }
      }
    } catch (error) {
      var oEnv = process.env.NODE_ENV;
      oEnv === 'development' && logger.log(identifier, fnData, error);
      setModalConfig({
        modalState: true,
        errorMsg: "\u51FD\u6570\u540D : ".concat(expt, "\n \u8BF7\u6C42\u53C2\u6570:").concat(JSON.stringify(fnData), "\n, \u5177\u4F53\u9519\u8BEF:\n").concat(error)
      });
    }
  };

  var dealFnChange = function dealFnChange(currValue, identifier, paramType) {
    // 预留参数类型做值解析
    setFnData(_objectSpread2(_objectSpread2({}, fnData), {}, _defineProperty({}, identifier, currValue)));
  };

  var _copyCode = function _copyCode() {
    logger.log(resData);
    copyCode(resData);
  };

  return /*#__PURE__*/React.createElement(ErrorBoundary, null, paramArr.length && /*#__PURE__*/React.createElement("div", {
    className: "markdown param-builder"
  }, /*#__PURE__*/React.createElement("p", {
    className: "title"
  }, "".concat(identifier, "--").concat(expt)), /*#__PURE__*/React.createElement("div", {
    className: "alert error ".concat(modalConfig.modalState ? 'show' : 'hidden')
  }, modalConfig.errorMsg), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, texts.name), /*#__PURE__*/React.createElement("th", null, texts.value))), /*#__PURE__*/React.createElement("tbody", null, paramArr.map(function (param, idx) {
    return /*#__PURE__*/React.createElement("tr", {
      key: param.identifier
    }, /*#__PURE__*/React.createElement("td", null, "".concat(param.identifier).concat(param.required ? ' *' : '')), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("textarea", Object.assign({
      "data-index": idx,
      "data-attr": param.identifier,
      className: modalConfig.modalState ? 'error' : '',
      required: !!param.required
    }, {
      value: fnData[param.identifier],
      onChange: function onChange(ev) {
        return dealFnChange(ev.target.value, param.identifier, param.type);
      }
    }))));
  })), /*#__PURE__*/React.createElement("tfoot", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/React.createElement("div", {
    className: "res-box ".concat(!!resData ? 'show' : 'hidden')
  }, /*#__PURE__*/React.createElement("pre", {
    className: "alert info pre "
  }, resData), /*#__PURE__*/React.createElement("button", {
    title: "Copy source code",
    className: "__dumi-default-icon copy",
    role: "copy",
    "data-status": copyStatus,
    onClick: _copyCode
  })))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/React.createElement("input", {
    type: "button",
    className: "fn-btn",
    value: "\u8FD0\u884C",
    onClick: _dealFnRun
  })))))));
};

var css_248z$1 = "";
styleInject(css_248z$1);

var FnBuilder = function FnBuilder(_ref) {
  var identifier = _ref.identifier,
      apiRun = _ref.apiRun;
  var exptsArr = [];

  var _dealFnRun = function _dealFnRun(attr, param) {};

  try {
    var apis = useApiData(identifier);

    if (!apis && _typeof(apis) !== 'object') {
      return /*#__PURE__*/React.createElement(React.Fragment, null);
    }

    exptsArr = Object.entries(apis);

    if (!exptsArr.length) {
      return /*#__PURE__*/React.createElement(React.Fragment, null);
    }

    _dealFnRun = function _dealFnRun(attr, param) {
      var res = typeof apiRun[attr] === 'function' && apiRun[attr](param);
      return Array.isArray(res) || _typeof(res) === 'object' ? JSON.stringify(res, null, 2) : res;
    };
  } catch (error) {
    return /*#__PURE__*/React.createElement(ErrorBoundary, {
      errorState: true
    });
  }

  return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/React.createElement("h2", null, identifier, " \u5728\u7EBF\u8FD0\u884C"), exptsArr.length && exptsArr.reduce(function (expts, _ref2, index) {
    var _ref3 = _slicedToArray(_ref2, 2),
        expt = _ref3[0],
        paramArr = _ref3[1];

    expts.push( /*#__PURE__*/React.createElement(ParamFnBuilder, {
      key: "".concat(identifier, "-").concat(index),
      identifier: identifier,
      export: expt,
      dealFnRun: function dealFnRun(param) {
        return _dealFnRun(expt, param);
      },
      paramArr: paramArr
    }));
    return expts;
  }, [])));
};

var path = require('path');

var ExecFn = function ExecFn(param) {
  var paramArr = param.paramArr,
      fnStr = param.fnStr;
  var res = '';
  (!paramArr || !paramArr.length) && (paramArr = []);
  var fnReg = /function\s([a-zA-z1-9]+)\(([a-zA-z1-9]+)\)\{([\s\S]+)\}/gm;

  if (fnReg.test(fnStr)) {
    // 删除注释
    fnStr = fnStr.replace(/(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g, '\n').replace(/(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g, '\n');
    var fnName = fnStr.replace(fnReg, '$1');
    var dealFnStr = "\n      ".concat(fnStr, ";\n      return ").concat(fnName, ".apply(this,").concat(paramArr, ");\n    ");
    var fnCallBack = BaseExecFn(dealFnStr);

    try {
      res = fnCallBack() || '';
    } catch (error) {
      res = error.message;
      logger.log(error);
    }
  } else {
    res = "".concat(fnStr, " \u51FD\u6570\u4E2D\u6CA1\u6709\u6709\u6548\u4EE3\u7801~~");
  }

  return res;
};
var GetRandomId = function GetRandomId(param) {
  var _param$prefix = param.prefix,
      prefix = _param$prefix === void 0 ? '' : _param$prefix,
      _param$type = param.type,
      type = _param$type === void 0 ? 0 : _param$type;
  var MAX_LENGTH = 13;
  var _param$length = param.length,
      length = _param$length === void 0 ? MAX_LENGTH : _param$length;
  (length < 0 || length > MAX_LENGTH) && (length = MAX_LENGTH);
  var res = '';

  switch (Number(type)) {
    case 1:
      {
        res = Math.random().toString(16).slice(-length).replace(/(.{4,})(.{4,})(.{5,})/g, '$1-$2-$3');
        break;
      }

    default:
      {
        res = Math.random().toString(16).slice(-length);
        break;
      }
  }

  return "".concat(prefix, "R").concat(res.replace('.', '').toUpperCase());
};
var SplitLineStr = function SplitLineStr(param) {
  var _param$str = param.str,
      str = _param$str === void 0 ? '' : _param$str;
  return typeof str === 'string' && str && /\n/.test(str) ? str.replace(/\s\n/gm, '').split('\n').join(',') : '';
};

var formatFieldStr = function formatFieldStr(str) {
  return "|".concat(str ? '`' + str + '`' : '', " |");
};

var formatArr2MD = function formatArr2MD(_ref) {
  var defaultData = _ref.defaultData,
      titleArr = _ref.titleArr;
  _typeof(defaultData) !== 'object' && (defaultData = parse(defaultData));
  _typeof(titleArr) !== 'object' && (titleArr = parse(titleArr));
  var DEFAUlT_TAG = '|';
  var formatStr = "|".concat(titleArr.join(DEFAUlT_TAG), "|\n|").concat(Array(titleArr.length + 1).join(":---".concat(DEFAUlT_TAG, "|")), "\n");

  var dealArrField = function dealArrField(curr) {
    formatStr += "|";
    _typeof(curr) !== 'object' ? formatStr += curr : Object.keys(curr).map(function (item) {
      return formatStr += formatFieldStr(curr[item]);
    }).join(" ".concat(DEFAUlT_TAG, " "));
    formatStr += "|\n";
    return curr;
  };

  defaultData.reduce(function (acc, curr) {
    return dealArrField(curr);
  }, '');
  return formatStr.replace(/\|{2,}/g, '|');
};
var formatObj2MD = function formatObj2MD(_ref2) {
  var defaultData = _ref2.defaultData,
      titleArr = _ref2.titleArr;
  _typeof(defaultData) !== 'object' && (defaultData = parse(defaultData));
  _typeof(titleArr) !== 'object' && (titleArr = parse(titleArr));
  var DEFAUlT_TAG = '|';
  var formatStr = "|".concat(titleArr.join(DEFAUlT_TAG), "|\n|").concat(Array(titleArr.length + 1).join(":---".concat(DEFAUlT_TAG, "|")), "\n");

  var _loop = function _loop(name) {
    var currItem = defaultData[name];
    Object.keys(currItem).map(function (item) {
      return formatStr += formatFieldStr(currItem[item]);
    }).join(" ".concat(DEFAUlT_TAG, " "));
    formatStr += '\n';
  };

  for (var name in defaultData) {
    _loop(name);
  }

  return formatStr.replace(/\|\|/g, '|');
};
var tranTxt2BaseArr = function tranTxt2BaseArr(_ref3) {
  var sTxt = _ref3.sTxt,
      _ref3$isObject = _ref3.isObject,
      isObject = _ref3$isObject === void 0 ? false : _ref3$isObject,
      _ref3$titleNameIndex = _ref3.titleNameIndex,
      titleNameIndex = _ref3$titleNameIndex === void 0 ? 0 : _ref3$titleNameIndex,
      fnCallBack = _ref3.fnCallBack;
  typeof isObject !== 'boolean' && (isObject = parse(isObject));
  typeof fnCallBack !== 'function' && (fnCallBack = BaseExecFn(fnCallBack || ''));

  if (!sTxt) {
    return isObject ? {} : [];
  }

  var baseArr = sTxt.split('\n').map(function (item) {
    return item.split('\t');
  });
  logger.log('分割之后的长度是：', baseArr.length);

  if (!isObject) {
    return baseArr;
  }

  var repeatArr = [];
  var res = baseArr.reduce(function (acc, cur, idx) {
    if (!cur[titleNameIndex]) {
      logger.log("\u7B2C".concat(idx, " \u884C title \u5B57\u6BB5\u6709\u8BEF"), titleNameIndex, cur);
      return acc;
    }

    if (!acc[cur[titleNameIndex]]) {
      acc[cur[titleNameIndex]] = {};
    } else {
      // 之前已经读写过
      logger.log('已经读写过', titleNameIndex, cur[titleNameIndex], cur);
      repeatArr.push(cur);
    }

    fnCallBack && fnCallBack(acc, cur);
    !Object.keys(acc[cur[titleNameIndex]]).length && (acc[cur[titleNameIndex]] = cur);
    return acc;
  }, {});
  logger.log('转换成对象之后的长度是：', Object.keys(res).length);
  logger.log('重复读写过', repeatArr.length);
  logger.log('重复读写过', repeatArr);
  return res;
};
var tranTxt2DIYArr = function tranTxt2DIYArr(_ref4) {
  var sTxt = _ref4.sTxt,
      _ref4$isObject = _ref4.isObject,
      isObject = _ref4$isObject === void 0 ? false : _ref4$isObject,
      _ref4$titleNameIndex = _ref4.titleNameIndex,
      titleNameIndex = _ref4$titleNameIndex === void 0 ? 0 : _ref4$titleNameIndex,
      fnCallBack = _ref4.fnCallBack;
  typeof isObject !== 'boolean' && (isObject = parse(isObject));
  typeof fnCallBack !== 'function' && (fnCallBack = BaseExecFn(fnCallBack || ''));
  var res = isObject ? {} : [];

  if (!sTxt) {
    return res;
  }

  var baseArr = sTxt.split('\n').map(function (item) {
    return item.split('\t');
  });

  if (!isObject) {
    return baseArr;
  }

  return baseArr.reduce(function (acc, cur) {
    if (!cur[titleNameIndex]) {
      return acc;
    }

    var res = {};
    fnCallBack && (res = fnCallBack(acc, cur));
    acc[cur[titleNameIndex]] = res ? _objectSpread2(_objectSpread2({}, acc[cur[titleNameIndex]]), {}, {
      res: res
    }) : acc[cur[titleNameIndex]];
    return acc;
  }, {});
};
var identifier = 'BaseTool';
var apiRun = {
  ExecFn: ExecFn,
  GetRandomId: GetRandomId,
  SplitLineStr: SplitLineStr,
  // from util
  formatArr2MD: formatArr2MD,
  formatObj2MD: formatObj2MD,
  tranTxt2BaseArr: tranTxt2BaseArr,
  tranTxt2DIYArr: tranTxt2DIYArr
};

var APIHelper = function APIHelper() {
  return /*#__PURE__*/React.createElement(FnBuilder, {
    identifier: identifier,
    apiRun: apiRun
  });
};

var CheckExecFn = function CheckExecFn(param) {};
var identifier$1 = 'Check';
var apiRun$1 = {
  CheckExecFn: CheckExecFn
};

var Check = function Check() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FnBuilder, {
    identifier: identifier$1,
    apiRun: apiRun$1
  }));
};

var DistinctExecFn = function DistinctExecFn(param) {};
var identifier$2 = 'Distinct';
var apiRun$2 = {
  DistinctExecFn: DistinctExecFn
};

var Distinct = function Distinct() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FnBuilder, {
    identifier: identifier$2,
    apiRun: apiRun$2
  }));
};

var TranslationExecFn = function TranslationExecFn(param) {
  logger.log(param);
};
var identifier$3 = 'Translation';
var apiRun$3 = {
  TranslationExecFn: TranslationExecFn
};

var Translation = function Translation() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FnBuilder, {
    identifier: identifier$3,
    apiRun: apiRun$3
  }));
};

export { APIHelper as BaseTool, Check, Distinct, Translation };
