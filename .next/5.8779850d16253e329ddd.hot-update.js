webpackHotUpdate(5,{

/***/ "./pages/components/Licences.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Licences; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");
var _jsxFileName = "/Users/pedronauck/Desktop/deps-website/pages/components/Licences.js";


var Loading =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["a" /* default */])('div', {
  target: "ek9g6vf0"
})("margin-top:100px;text-align:center;font-size:30px;");
var Small =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["a" /* default */])('div', {
  target: "ek9g6vf1"
})("margin-top:2px;font-size:11px;color:deeppink;");
var Licences = function Licences(_ref) {
  var isLoading = _ref.isLoading,
      error = _ref.error,
      data = _ref.data;

  if (!isLoading) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loading, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, "Loading, this may take a while...");
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, JSON.stringify(data));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/Licences")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.8779850d16253e329ddd.hot-update.js.map