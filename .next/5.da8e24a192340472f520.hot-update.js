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







Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["c" /* injectGlobal */])("[data-reach-dialog-overlay]{background:hsla(0,0%,0%,0.5);position:fixed;top:0;right:0;bottom:0;left:0;overflow:auto;}");
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
var CloseButton =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('span', {
  target: "e14vfl5y6"
})("position:absolute;top:10px;right:10px;&:hover{cursor:pointer;}");
var Dialog =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_6__reach_dialog__["a" /* Dialog */], {
  target: "e14vfl5y7"
})("position:relative;width:50vw;margin:10vh auto;background:white;padding:1rem 3rem 1rem 1.5rem;outline:none;font-family:'IBM Plex Mono',monospace;font-size:14px;color:black;");
var getLicensesName = __WEBPACK_IMPORTED_MODULE_0_ramda__["d" /* pipe */](__WEBPACK_IMPORTED_MODULE_0_ramda__["c" /* path */](['licenseSources', 'package', 'sources']), __WEBPACK_IMPORTED_MODULE_0_ramda__["a" /* defaultTo */]([]), __WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* map */](__WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('license')));

var Item = function Item(_ref) {
  var item = _ref.item;
  var name = __WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('name', item);
  var version = __WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('version', item);
  var licenses = getLicensesName(item);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ItemWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, name, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Version, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, "@", version)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__reach_component_component__["a" /* default */], {
    initialState: {
      showDialog: false
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, function (_ref2) {
    var state = _ref2.state,
        setState = _ref2.setState;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(LicenseList, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      }
    }, licenses.map(function (license) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
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
          lineNumber: 107
        }
      }, license), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Dialog, {
        isOpen: state.showDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CloseButton, {
        "aria-hidden": true,
        onClick: function onClick() {
          return setState({
            showDialog: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_feather__["X"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
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
        lineNumber: 131
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_spinners_ScaleLoader___default.a, {
      size: 120,
      color: "white",
      loading: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      }
    }));
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
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
      lineNumber: 139
    }
  }), data && data.length > 0 && data.map(function (item) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, {
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
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
//# sourceMappingURL=5.da8e24a192340472f520.hot-update.js.map