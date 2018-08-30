webpackHotUpdate(5,{

/***/ "./pages/components/Licences.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Licences; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form__ = __webpack_require__("./pages/components/Form.js");
var _jsxFileName = "/Users/pedronauck/Desktop/deps-website/pages/components/Licences.js";


var Licences = function Licences(_ref) {
  var isLoading = _ref.isLoading,
      error = _ref.error,
      data = _ref.data;
  if (!data) return null;

  if (isLoading) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, "loading...");
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_1__Form__["b" /* state */].get(function (s) {
    return s.text;
  }));
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
//# sourceMappingURL=5.ed1286969066c866b271.hot-update.js.map