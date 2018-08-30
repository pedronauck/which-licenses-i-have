webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_async_fetcher__ = __webpack_require__("./node_modules/react-async-fetcher/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Form__ = __webpack_require__("./pages/components/Form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Licenses__ = __webpack_require__("./pages/components/Licenses.js");
var _jsxFileName = "/Users/pedronauck/Desktop/deps-website/pages/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }






var Wrapper =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["a" /* default */])('div', {
  target: "e1v5bpjv0"
})("display:flex;align-items:center;justify-content:center;flex-direction:column;margin-top:80px;");
var Title =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["a" /* default */])('h1', {
  target: "e1v5bpjv1"
})("margin:0;font-size:50px;font-weight:300;letter-spacing:-0.03em;");
var Subtitle =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["a" /* default */])(Title.withComponent('h2', {
  target: "e1v5bpjv3"
}), {
  target: "e1v5bpjv2"
})("margin-bottom:50px;font-size:26px;font-weight:300px;letter-spacing:-0.03em;color:deeppink;");
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var handleSubmit = function handleSubmit(selected, fetch) {
    return function (ev) {
      ev.preventDefault();
      __WEBPACK_IMPORTED_MODULE_3__components_Form__["b" /* state */].set({
        selected: selected
      });
      fetch();
    };
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "Which licenses I have?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Subtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "Learn about the licenses of your dependencies"), __WEBPACK_IMPORTED_MODULE_3__components_Form__["b" /* state */].get(function (s) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_async_fetcher__["a" /* default */], {
      autoFetch: false,
      url: "https://deps-service-bymhrnqeqs.now.sh/".concat(s.text),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }, function (_ref) {
      var fetch = _ref.fetch,
          props = _objectWithoutProperties(_ref, ["fetch"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Form__["a" /* Form */], {
        onSubmit: handleSubmit(s.text, fetch),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Licenses__["a" /* Licenses */], _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })));
    });
  }));
});
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.fbd0dc404866a52e8590.hot-update.js.map