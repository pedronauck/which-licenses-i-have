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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_feather__ = __webpack_require__("./node_modules/react-feather/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_feather___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_feather__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reach_dialog__ = __webpack_require__("./node_modules/@reach/dialog/es/index.js");
var _jsxFileName = "/Users/pedronauck/Desktop/deps-website/pages/components/Licenses.js";







Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["c" /* injectGlobal */])("[data-reach-dialog-overlay]{background:hsla(0,0%,0%,0.5);position:fixed;top:0;right:0;bottom:0;left:0;overflow:auto;}[data-reach-dialog-content]{position:relative;width:50vw;margin:10vh auto;background:white;padding:2rem;outline:none;color:black;}");
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
var ItemWrapper =
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
var LicenseList =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y5"
})("border-left:1px dashed white;color:deeppink;padding:20px;a{outline:none;color:deeppink;text-decoration:none;}");
var getLicensesName = __WEBPACK_IMPORTED_MODULE_0_ramda__["d" /* pipe */](__WEBPACK_IMPORTED_MODULE_0_ramda__["c" /* path */](['licenseSources', 'package', 'sources']), __WEBPACK_IMPORTED_MODULE_0_ramda__["a" /* defaultTo */]([]), __WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* map */](__WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('license')));

var Item = function Item(_ref) {
  var item = _ref.item;
  var name = __WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('name', item);
  var version = __WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('version', item);
  var licenses = getLicensesName(item);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ItemWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, name, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Version, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, "@", version)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__reach_component_component__["a" /* default */], {
    initialState: {
      showDialog: false
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, function (_ref2) {
    var state = _ref2.state,
        setState = _ref2.setState;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(LicenseList, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      }
    }, licenses.map(function (license) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return setState({
            showDialog: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, license), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__reach_dialog__["a" /* Dialog */], {
        isOpen: state.showDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "aria-hidden": true,
        onClick: function onClick() {
          return setState({
            showDialog: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_feather__["X"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "Hello there. I am a dialog")));
    }));
  }));
};

var Licenses = function Licenses(_ref3) {
  var isLoading = _ref3.isLoading,
      error = _ref3.error,
      data = _ref3.data;

  if (isLoading) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Loading, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_spinners_ScaleLoader___default.a, {
      size: 120,
      color: "white",
      loading: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      }
    }));
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, {
    item: {
      name: 'react',
      version: '1',
      licenseSources: {
        package: {
          sources: [{
            license: 'MIT',
            url: '(none)'
          }]
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    }
  }), data && data.length > 0 && data.map(function (item) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, {
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      }
    });
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
//# sourceMappingURL=5.1ff94f7f8e8a69602a96.hot-update.js.map