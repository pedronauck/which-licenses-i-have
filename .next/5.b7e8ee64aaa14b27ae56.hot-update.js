webpackHotUpdate(5,{

/***/ "./pages/components/Licences.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Licences; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_dynamic__ = __webpack_require__("./node_modules/next/dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_dynamic__);
var _jsxFileName = "/Users/pedronauck/Desktop/deps-website/pages/components/Licences.js";



var Loader = __WEBPACK_IMPORTED_MODULE_2_next_dynamic___default()( false ? new (require('next/dynamic').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require('halogen/PulseLoader');

    m.__webpackChunkName = 'halogen_PulseLoader_93879b7e515e86f7f890d8452c46d8df.js';
    resolve(m);
  }, 'chunks/halogen_PulseLoader_93879b7e515e86f7f890d8452c46d8df.js');
}) : new (__webpack_require__("./node_modules/next/dynamic.js").SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/("./node_modules/halogen/PulseLoader.js");

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  __webpack_require__.e/* require.ensure */(6).then((function (require) {
    try {
      var m = __webpack_require__("./node_modules/halogen/PulseLoader.js");

      m.__webpackChunkName = 'halogen_PulseLoader_93879b7e515e86f7f890d8452c46d8df';
      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}), {
  ssr: false
});
var Loading =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["a" /* default */])('div', {
  target: "ek9g6vf0"
})("margin-top:100px;text-align:center;font-size:30px;");
var Licences = function Licences(_ref) {
  var isLoading = _ref.isLoading,
      error = _ref.error,
      data = _ref.data;

  if (!isLoading) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loading, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loader, {
      color: "#26A65B",
      size: "16px",
      margin: "4px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }));
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
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
//# sourceMappingURL=5.b7e8ee64aaa14b27ae56.hot-update.js.map