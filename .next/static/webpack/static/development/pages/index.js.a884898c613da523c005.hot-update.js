webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CardStat.js":
/*!********************************!*\
  !*** ./components/CardStat.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "D:\\Code\\Practice\\cov19ItaliaWeb\\components\\CardStat.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CardStat = function CardStat(props) {
  return __jsx("div", {
    className: "card border-success mb-3",
    style: {
      width: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card-body text-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("h5", {
    className: "card-title",
    style: {
      color: "grey"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, props.title), __jsx("h5", {
    className: "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
    end: parseInt(props.text),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardStat);

/***/ }),

/***/ "./node_modules/countup.js/dist/countUp.min.js":
/*!*****************************************************!*\
  !*** ./node_modules/countup.js/dist/countUp.min.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(a,n){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(a,n,t){var e=function(a,n,t,e,i,r){function o(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(l.decimals),a+="",n=a.split("."),t=n[0],e=n.length>1?l.options.decimal+n[1]:"",l.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3===0&&(i=l.options.separator+i),i=t[o-r-1]+i;t=i}return l.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return l.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return l.options.numerals[+a]})),(s?"-":"")+l.options.prefix+t+e+l.options.suffix}function s(a,n,t,e){return t*(-Math.pow(2,-10*a/e)+1)*1024/1023+n}function u(a){return"number"==typeof a&&!isNaN(a)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var m in l.options)r.hasOwnProperty(m)&&null!==r[m]&&(l.options[m]=r[m]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var d=0,c=["webkit","moz","ms","o"],f=0;f<c.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[c[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[f]+"CancelAnimationFrame"]||window[c[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-d)),i=window.setTimeout(function(){a(t+e)},e);return d=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof a?document.getElementById(a):a,l.d?(l.startVal=Number(n),l.endVal=Number(t),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,e||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(a){var n=l.options.formattingFn(a);"INPUT"===l.d.tagName?this.d.value=n:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=n:this.d.innerHTML=n},l.count=function(a){l.startTime||(l.startTime=a),l.timestamp=a;var n=a-l.startTime;l.remaining=l.duration-n,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(n,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(n,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(n/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(n/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),n<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(a){l.initialize()&&(l.callback=a,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(a){if(l.initialize()){if(a=Number(a),!u(a))return void(l.error="[CountUp] update() - new endVal is not a number: "+a);l.error="",a!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=a,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)};return e});

/***/ }),

/***/ "./node_modules/react-countup/build/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-countup/build/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);
var warning = _interopDefault(__webpack_require__(/*! warning */ "./node_modules/react-countup/node_modules/warning/warning.js"));
var CountUp$1 = _interopDefault(__webpack_require__(/*! countup.js */ "./node_modules/countup.js/dist/countUp.min.js"));

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var createCountUpInstance = function createCountUpInstance(el, props) {
  var decimal = props.decimal,
      decimals = props.decimals,
      duration = props.duration,
      easingFn = props.easingFn,
      end = props.end,
      formattingFn = props.formattingFn,
      prefix = props.prefix,
      separator = props.separator,
      start = props.start,
      suffix = props.suffix,
      useEasing = props.useEasing;
  return new CountUp$1(el, start, end, decimals, duration, {
    decimal: decimal,
    easingFn: easingFn,
    formattingFn: formattingFn,
    separator: separator,
    prefix: prefix,
    suffix: suffix,
    useEasing: useEasing,
    useGrouping: !!separator
  });
};

var CountUp =
/*#__PURE__*/
function (_Component) {
  _inherits(CountUp, _Component);

  function CountUp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CountUp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CountUp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "createInstance", function () {
      if (typeof _this.props.children === 'function') {
        // Warn when user didn't use containerRef at all
        warning(_this.containerRef.current && (_this.containerRef.current instanceof HTMLElement || _this.containerRef.current instanceof SVGTextElement || _this.containerRef.current instanceof SVGTSpanElement), "Couldn't find attached element to hook the CountUp instance into! Try to attach \"containerRef\" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.");
      }

      return createCountUpInstance(_this.containerRef.current, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "pauseResume", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          reset = _assertThisInitialize.reset,
          start = _assertThisInitialize.restart,
          update = _assertThisInitialize.update;

      var onPauseResume = _this.props.onPauseResume;

      _this.instance.pauseResume();

      onPauseResume({
        reset: reset,
        start: start,
        update: update
      });
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          pauseResume = _assertThisInitialize2.pauseResume,
          start = _assertThisInitialize2.restart,
          update = _assertThisInitialize2.update;

      var onReset = _this.props.onReset;

      _this.instance.reset();

      onReset({
        pauseResume: pauseResume,
        start: start,
        update: update
      });
    });

    _defineProperty(_assertThisInitialized(_this), "restart", function () {
      _this.reset();

      _this.start();
    });

    _defineProperty(_assertThisInitialized(_this), "start", function () {
      var _assertThisInitialize3 = _assertThisInitialized(_this),
          pauseResume = _assertThisInitialize3.pauseResume,
          reset = _assertThisInitialize3.reset,
          start = _assertThisInitialize3.restart,
          update = _assertThisInitialize3.update;

      var _this$props = _this.props,
          delay = _this$props.delay,
          onEnd = _this$props.onEnd,
          onStart = _this$props.onStart;

      var run = function run() {
        return _this.instance.start(function () {
          return onEnd({
            pauseResume: pauseResume,
            reset: reset,
            start: start,
            update: update
          });
        });
      }; // Delay start if delay prop is properly set


      if (delay > 0) {
        _this.timeoutId = setTimeout(run, delay * 1000);
      } else {
        run();
      }

      onStart({
        pauseResume: pauseResume,
        reset: reset,
        update: update
      });
    });

    _defineProperty(_assertThisInitialized(_this), "update", function (newEnd) {
      var _assertThisInitialize4 = _assertThisInitialized(_this),
          pauseResume = _assertThisInitialize4.pauseResume,
          reset = _assertThisInitialize4.reset,
          start = _assertThisInitialize4.restart;

      var onUpdate = _this.props.onUpdate;

      _this.instance.update(newEnd);

      onUpdate({
        pauseResume: pauseResume,
        reset: reset,
        start: start
      });
    });

    _defineProperty(_assertThisInitialized(_this), "containerRef", React__default.createRef());

    return _this;
  }

  _createClass(CountUp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          delay = _this$props2.delay;
      this.instance = this.createInstance(); // Don't invoke start if component is used as a render prop

      if (typeof children === 'function' && delay !== 0) return; // Otherwise just start immediately

      this.start();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props3 = this.props,
          end = _this$props3.end,
          start = _this$props3.start,
          suffix = _this$props3.suffix,
          prefix = _this$props3.prefix,
          redraw = _this$props3.redraw,
          duration = _this$props3.duration,
          separator = _this$props3.separator,
          decimals = _this$props3.decimals,
          decimal = _this$props3.decimal;
      var hasCertainPropsChanged = duration !== nextProps.duration || end !== nextProps.end || start !== nextProps.start || suffix !== nextProps.suffix || prefix !== nextProps.prefix || separator !== nextProps.separator || decimals !== nextProps.decimals || decimal !== nextProps.decimal;
      return hasCertainPropsChanged || redraw;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // If duration, suffix, prefix, separator or start has changed
      // there's no way to update the values.
      // So we need to re-create the CountUp instance in order to
      // restart it.
      var _this$props4 = this.props,
          end = _this$props4.end,
          start = _this$props4.start,
          suffix = _this$props4.suffix,
          prefix = _this$props4.prefix,
          duration = _this$props4.duration,
          separator = _this$props4.separator,
          decimals = _this$props4.decimals,
          decimal = _this$props4.decimal,
          preserveValue = _this$props4.preserveValue;

      if (duration !== prevProps.duration || start !== prevProps.start || suffix !== prevProps.suffix || prefix !== prevProps.prefix || separator !== prevProps.separator || decimals !== prevProps.decimals || decimal !== prevProps.decimal) {
        this.instance.reset();
        this.instance = this.createInstance();
        this.start();
      } // Only end value has changed, so reset and and re-animate with the updated
      // end value.


      if (end !== prevProps.end) {
        if (!preserveValue) {
          this.instance.reset();
        }

        this.instance.update(end);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.instance.reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          children = _this$props5.children,
          className = _this$props5.className,
          style = _this$props5.style;
      var containerRef = this.containerRef,
          pauseResume = this.pauseResume,
          reset = this.reset,
          restart = this.restart,
          update = this.update;

      if (typeof children === 'function') {
        return children({
          countUpRef: containerRef,
          pauseResume: pauseResume,
          reset: reset,
          start: restart,
          update: update
        });
      }

      return React__default.createElement("span", {
        className: className,
        ref: containerRef,
        style: style
      });
    }
  }]);

  return CountUp;
}(React.Component);

_defineProperty(CountUp, "propTypes", {
  decimal: PropTypes.string,
  decimals: PropTypes.number,
  delay: PropTypes.number,
  easingFn: PropTypes.func,
  end: PropTypes.number.isRequired,
  formattingFn: PropTypes.func,
  onEnd: PropTypes.func,
  onStart: PropTypes.func,
  prefix: PropTypes.string,
  redraw: PropTypes.bool,
  separator: PropTypes.string,
  start: PropTypes.number,
  startOnMount: PropTypes.bool,
  suffix: PropTypes.string,
  style: PropTypes.object,
  useEasing: PropTypes.bool,
  preserveValue: PropTypes.bool
});

_defineProperty(CountUp, "defaultProps", {
  decimal: '.',
  decimals: 0,
  delay: null,
  duration: null,
  easingFn: null,
  formattingFn: null,
  onEnd: function onEnd() {},
  onPauseResume: function onPauseResume() {},
  onReset: function onReset() {},
  onStart: function onStart() {},
  onUpdate: function onUpdate() {},
  prefix: '',
  redraw: false,
  separator: '',
  start: 0,
  startOnMount: true,
  suffix: '',
  style: undefined,
  useEasing: true,
  preserveValue: false
});

// and just sets the innerHTML of the element.

var MOCK_ELEMENT = {
  innerHTML: null
};

var useCountUp = function useCountUp(props) {
  var _props = _objectSpread2({}, CountUp.defaultProps, {}, props);

  var start = _props.start,
      formattingFn = _props.formattingFn;

  var _useState = React.useState(typeof formattingFn === 'function' ? formattingFn(start) : start),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var countUpRef = React.useRef(null);

  var createInstance = function createInstance() {
    var countUp = createCountUpInstance(MOCK_ELEMENT, _props);
    var formattingFnRef = countUp.options.formattingFn;

    countUp.options.formattingFn = function () {
      var result = formattingFnRef.apply(void 0, arguments);
      setCount(result);
    };

    return countUp;
  };

  var getCountUp = function getCountUp() {
    var countUp = countUpRef.current;

    if (countUp !== null) {
      return countUp;
    }

    var newCountUp = createInstance();
    countUpRef.current = newCountUp;
    return newCountUp;
  };

  var reset = function reset() {
    var onReset = _props.onReset;
    getCountUp().reset();
    onReset({
      pauseResume: pauseResume,
      start: restart,
      update: update
    });
  };

  var restart = function restart() {
    var onStart = _props.onStart,
        onEnd = _props.onEnd;
    getCountUp().reset();
    getCountUp().start(function () {
      onEnd({
        pauseResume: pauseResume,
        reset: reset,
        start: restart,
        update: update
      });
    });
    onStart({
      pauseResume: pauseResume,
      reset: reset,
      update: update
    });
  };

  var pauseResume = function pauseResume() {
    var onPauseResume = _props.onPauseResume;
    getCountUp().pauseResume();
    onPauseResume({
      reset: reset,
      start: restart,
      update: update
    });
  };

  var update = function update(newEnd) {
    var onUpdate = _props.onUpdate;
    getCountUp().update(newEnd);
    onUpdate({
      pauseResume: pauseResume,
      reset: reset,
      start: restart
    });
  };

  React.useEffect(function () {
    var delay = _props.delay,
        onStart = _props.onStart,
        onEnd = _props.onEnd,
        startOnMount = _props.startOnMount;

    if (startOnMount) {
      var timeout = setTimeout(function () {
        onStart({
          pauseResume: pauseResume,
          reset: reset,
          update: update
        });
        getCountUp().start(function () {
          clearTimeout(timeout);
          onEnd({
            pauseResume: pauseResume,
            reset: reset,
            start: restart,
            update: update
          });
        });
      }, delay * 1000);
    }

    return reset;
  }, []);
  return {
    countUp: count,
    start: restart,
    pauseResume: pauseResume,
    reset: reset,
    update: update
  };
};

exports.default = CountUp;
exports.useCountUp = useCountUp;


/***/ }),

/***/ "./node_modules/react-countup/node_modules/warning/warning.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-countup/node_modules/warning/warning.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ })

})
//# sourceMappingURL=index.js.a884898c613da523c005.hot-update.js.map