webpackHotUpdate(5,{

/***/ "./node_modules/react-emotion/dist/index.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_emotion__ = __webpack_require__("./node_modules/emotion/dist/index.esm.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["hydrate"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["injectGlobal"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["keyframes"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_emotion_styled__ = __webpack_require__("./node_modules/create-emotion-styled/dist/index.esm.js");





var index = Object(__WEBPACK_IMPORTED_MODULE_2_create_emotion_styled__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_emotion__, __WEBPACK_IMPORTED_MODULE_0_react___default.a);

/* harmony default export */ __webpack_exports__["a"] = (index);


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

/***/ }),

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Form__ = __webpack_require__("./pages/components/Form.js");
var _jsxFileName = "/Users/pedronauck/Desktop/deps-website/pages/components/Licenses.js";








Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["c" /* injectGlobal */])("[data-reach-dialog-overlay]{background:hsla(0,0%,0%,0.5);position:fixed;top:0;right:0;bottom:0;left:0;overflow:auto;}");
var MARGIN = '50px';
var Loading =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y0"
})("margin-top:", MARGIN, ";text-align:center;font-size:30px;");
var Small =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y1"
})("margin-top:5px;font-size:12px;");
var Wrapper =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y2"
})("margin:", MARGIN, " 0;");
var ItemWrapper =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y3"
})("display:flex;align-items:center;width:100%;min-width:320px;margin-top:-1px;border:1px dashed white;");
var Name =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y4"
})("flex:1;padding:20px;");
var Version =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('span', {
  target: "e14vfl5y5"
})("opacity:0.5;");
var LicenseList =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y6"
})("border-left:1px dashed white;color:deeppink;padding:20px;a{outline:none;color:deeppink;text-decoration:none;}");
var CloseButton =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('span', {
  target: "e14vfl5y7"
})("position:absolute;top:10px;right:10px;&:hover{cursor:pointer;}");
var Dialog =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_6__reach_dialog__["a" /* Dialog */], {
  target: "e14vfl5y8"
})("position:relative;width:50vw;margin:10vh auto;background:white;padding:1rem 2rem 1rem 1.5rem;outline:none;font-family:'IBM Plex Mono',monospace;font-size:14px;color:black;");
var Text =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('p', {
  target: "e14vfl5y9"
})("white-space:pre-line;");
var getLicensesName = __WEBPACK_IMPORTED_MODULE_0_ramda__["d" /* pipe */](__WEBPACK_IMPORTED_MODULE_0_ramda__["c" /* path */](['licenseSources', 'package', 'sources']), __WEBPACK_IMPORTED_MODULE_0_ramda__["a" /* defaultTo */]([]), __WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* map */](__WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('license')));
var getLicensesText = __WEBPACK_IMPORTED_MODULE_0_ramda__["d" /* pipe */](__WEBPACK_IMPORTED_MODULE_0_ramda__["c" /* path */](['licenseSources', 'license', 'sources']), __WEBPACK_IMPORTED_MODULE_0_ramda__["a" /* defaultTo */]([]), __WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* map */](__WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('text')));

var Item = function Item(_ref) {
  var selected = _ref.selected,
      item = _ref.item;
  var name = __WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('name', item);
  var version = __WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('version', item);
  var licensesNames = getLicensesName(item);
  var licensesTexts = getLicensesText(item);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ItemWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, name, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Version, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, "@", version)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__reach_component_component__["a" /* default */], {
    initialState: {
      showDialog: false
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  }, function (_ref2) {
    var state = _ref2.state,
        setState = _ref2.setState;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(LicenseList, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      }
    }, licensesNames.map(function (license, i) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
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
          lineNumber: 125
        }
      }, license), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Dialog, {
        isOpen: state.showDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
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
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_feather__["X"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Text, {
        dangerouslySetInnerHTML: {
          __html: licensesTexts[i]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      })));
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
        lineNumber: 151
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_spinners_ScaleLoader___default.a, {
      size: 120,
      color: "white",
      loading: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Small, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      }
    }, "This may take a while..."));
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    }
  }, data && data.length > 0 && data.map(function (item) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, {
      item: item,
      selected: '',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
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

/***/ }),

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
  var handleSubmit = function handleSubmit(fetch) {
    return function (ev) {
      ev.preventDefault();
      fetch();
    };
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "Which licenses I have?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Subtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "Learn about the licenses around your package"), __WEBPACK_IMPORTED_MODULE_3__components_Form__["b" /* state */].get(function (s) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_async_fetcher__["a" /* default */], {
      autoFetch: false,
      url: "https://deps-service-bymhrnqeqs.now.sh/".concat(s.text),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, function (_ref) {
      var fetch = _ref.fetch,
          props = _objectWithoutProperties(_ref, ["fetch"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Form__["a" /* Form */], {
        onSubmit: handleSubmit(fetch),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Licenses__["a" /* Licenses */], _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
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
//# sourceMappingURL=5.f3574822044b8942545c.hot-update.js.map