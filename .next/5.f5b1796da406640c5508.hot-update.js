webpackHotUpdate(5,{

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
})("display:flex;align-items:center;padding-left:65px;");
var Input =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_4_react_emotion__["a" /* default */])('input', {
  target: "e15ezrn01"
})("outline:1px solid deeppink;outline:none;padding:20px;border:none;background:white;min-width:280px;font-size:24px;font-weight:300;color:#333;");
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
          placeholder: "Package name...",
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
//# sourceMappingURL=5.f5b1796da406640c5508.hot-update.js.map