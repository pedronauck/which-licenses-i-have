webpackHotUpdate(5,{

/***/ "./node_modules/reworm/dist/reworm.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

const observe = operation => source => {
  source(0, (t, d) => {
    if (t === 1) operation(d);
  });
};

var callbagObserve = observe;

function makeSubject() {
  let sinks = [];
  return (type, data) => {
    if (type === 0) {
      const sink = data;
      sinks.push(sink);
      sink(0, t => {
        if (t === 2) {
          const i = sinks.indexOf(sink);
          if (i > -1) sinks.splice(i, 1);
        }
      });
    } else {
      const zinkz = sinks.slice(0);
      for (let i = 0, n = zinkz.length, sink; i < n; i++) {
        sink = zinkz[i];
        if (sinks.indexOf(sink) > -1) sink(type, data);
      }
    }
  }
}

var callbagSubject = makeSubject;

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};

var isPrimitive = function (test) { return test !== Object(test); };
function create(initial) {
    if (initial === void 0) { initial = {}; }
    var subject = callbagSubject();
    var Consumer = /** @class */ (function (_super) {
        __extends(Consumer, _super);
        function Consumer(props) {
            var _this = _super.call(this, props) || this;
            _this.update = function (next) {
                var nextState = typeof next === 'function' ? next(_this._state) : next;
                var newState = !isPrimitive(nextState)
                    ? Object.assign({}, _this._state, nextState)
                    : nextState;
                var isEqual = !isPrimitive(newState)
                    ? fastDeepEqual(_this._state, newState)
                    : _this._state === newState;
                if (!isEqual) {
                    _this._prevState = _this._state;
                    _this._state = newState;
                    _this.forceUpdate();
                }
            };
            _this._state = initial;
            _this._prevState = initial;
            return _this;
        }
        Consumer.prototype.componentDidMount = function () {
            var update = callbagObserve(this.update);
            update(subject);
        };
        Consumer.prototype.componentWillUnmount = function () {
            subject(2);
        };
        Consumer.prototype.render = function () {
            return this.props.children(this._state);
        };
        return Consumer;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));
    return {
        get: function (fn) { return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Consumer, null, fn); },
        set: function (next) { return subject(1, next); },
        select: function (selector) { return function (fn) { return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Consumer, null, function (state) {
            var select = selector(state);
            return fn(select);
        })); }; },
    };
}


//# sourceMappingURL=reworm.es5.js.map


/***/ }),

/***/ "./pages/components/Form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_feather__ = __webpack_require__("./node_modules/react-feather/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_feather___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_feather__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reworm__ = __webpack_require__("./node_modules/reworm/dist/reworm.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reach_component_component__ = __webpack_require__("./node_modules/@reach/component-component/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");
var _jsxFileName = "/Users/pedronauck/Desktop/deps-website/pages/components/Form.js";





var InputWrapper =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_4_react_emotion__["a" /* default */])('div', {
  target: "e15ezrn00"
})("display:flex;align-items:center;");
var Input =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_4_react_emotion__["a" /* default */])('input', {
  target: "e15ezrn01"
})("outline:1px solid deeppink;outline:none;padding:20px;border:none;background:white;border-radius:3px;min-width:270px;font-size:24px;font-weight:300;color:#333;");
var SearchIcon =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_4_react_emotion__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_react_feather__["Search"], {
  target: "e15ezrn02"
})("width:35px;height:35px;stroke:white;stroke-width:2px;");
var SearchButton =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_4_react_emotion__["a" /* default */])('button', {
  target: "e15ezrn03"
})("display:flex;align-items:center;justify-content:center;margin-left:15px;background:none;border:none;");
var inputRef = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();
var state = Object(__WEBPACK_IMPORTED_MODULE_2_reworm__["a" /* create */])({
  text: ''
});
var Form = function Form(_ref) {
  var onSubmit = _ref.onSubmit;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__reach_component_component__["a" /* default */], {
    didMount: function didMount() {
      return inputRef.current.focus();
    },
    render: function render() {
      return state.get(function (s) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
          onSubmit: onSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InputWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Input, {
          innerRef: inputRef,
          value: s.text,
          placeholder: "Your package name...",
          onChange: function onChange(ev) {
            return state.set({
              text: ev.target.value
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SearchButton, {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SearchIcon, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }))));
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  });
};
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/Form")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.a31f83b6018fe885aaee.hot-update.js.map