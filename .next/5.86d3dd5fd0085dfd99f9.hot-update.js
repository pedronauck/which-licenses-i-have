webpackHotUpdate(5,{

/***/ "./pages/components/Licenses.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Licenses; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("./node_modules/ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_spinners_ScaleLoader__ = __webpack_require__("./node_modules/react-spinners/ScaleLoader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_spinners_ScaleLoader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_spinners_ScaleLoader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reach_component_component__ = __webpack_require__("./node_modules/@reach/component-component/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reach_dialog__ = __webpack_require__("./node_modules/@reach/dialog/es/index.js");
var _jsxFileName = "/Users/pedronauck/Desktop/deps-website/pages/components/Licenses.js";






var MARGIN = '50px';
var Loading =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y0"
})("margin-top:", MARGIN, ";text-align:center;font-size:30px;");
var Wrapper =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y1"
})("margin-top:", MARGIN, ";");
var Item =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y2"
})("display:flex;align-items:center;width:100%;min-width:320px;border:1px dashed white;border-radius:5px;");
var Name =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y3"
})("flex:1;padding:20px;");
var Version =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('span', {
  target: "e14vfl5y4"
})("opacity:0.5;");
var License =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y5"
})("border-left:1px dashed white;padding:20px;");
var getLicensesName = __WEBPACK_IMPORTED_MODULE_0_ramda__["d" /* pipe */](__WEBPACK_IMPORTED_MODULE_0_ramda__["c" /* path */](['licenseSources', 'package', 'sources']), __WEBPACK_IMPORTED_MODULE_0_ramda__["a" /* defaultTo */]([]), __WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* map */](__WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('license')));
var Licenses = function Licenses(_ref) {
  var isLoading = _ref.isLoading,
      error = _ref.error,
      data = _ref.data;

  if (isLoading) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Loading, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_spinners_ScaleLoader___default.a, {
      size: 120,
      color: "white",
      loading: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      }
    }));
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, "react", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Version, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, "@1.1.1")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(License, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, ['MIT'].join(', '))), data && data.length > 0 && data.map(function (item) {
    var name = __WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('name', item);
    var version = __WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('version', item);
    var licenses = getLicensesName(item);
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Name, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      }
    }, name, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Version, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      }
    }, "@", version)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__reach_component_component__["a" /* default */], {
      initialState: {
        showDialog: false
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      }
    }, function (_ref2) {
      var state = _ref2.state,
          setState = _ref2.setState;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(License, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, licenses.join(', ')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__reach_dialog__["a" /* Dialog */], {
        isOpen: state.showDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        className: "close-button",
        onClick: function onClick() {
          return setState({
            showDialog: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "aria-hidden": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "\xD7")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Hello there. I am a dialog")));
    }));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/Licenses")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.86d3dd5fd0085dfd99f9.hot-update.js.map