webpackHotUpdate(5,{

/***/ "./node_modules/@reach/dialog/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DialogOverlay */
/* unused harmony export DialogContent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reach_component_component__ = __webpack_require__("./node_modules/@reach/component-component/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reach_portal__ = __webpack_require__("./node_modules/@reach/portal/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reach_utils__ = __webpack_require__("./node_modules/@reach/utils/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_focus_trap__ = __webpack_require__("./node_modules/focus-trap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_focus_trap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_focus_trap__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







var createAriaHider = function createAriaHider(dialogNode) {
  var originalValues = [];
  var rootNodes = [];

  Array.prototype.forEach.call(document.querySelectorAll("body > *"), function (node) {
    if (node === dialogNode.parentNode) {
      return;
    }
    var attr = node.getAttribute("aria-hidden");
    var alreadyHidden = attr !== null && attr !== "false";
    if (alreadyHidden) {
      return;
    }
    originalValues.push(attr);
    rootNodes.push(node);
    node.setAttribute("aria-hidden", "true");
  });

  return function () {
    rootNodes.forEach(function (node, index) {
      var originalValue = originalValues[index];
      if (originalValue === null) {
        node.removeAttribute("aria-hidden");
      } else {
        node.setAttribute("aria-hidden", originalValue);
      }
    });
  };
};

var k = function k() {};

var checkDialogStyles = function checkDialogStyles() {
  return Object(__WEBPACK_IMPORTED_MODULE_3__reach_utils__["a" /* checkStyles */])("dialog");
};

var portalDidMount = function portalDidMount(_ref) {
  var refs = _ref.refs;

  refs.disposeAriaHider = createAriaHider(refs.overlayNode);
  refs.trap = __WEBPACK_IMPORTED_MODULE_4_focus_trap___default()(refs.overlayNode, {
    fallbackFocus: refs.contentNode,
    escapeDeactivates: false,
    clickOutsideDeactivates: false
  });
  refs.trap.activate();
};

var contentWillUnmount = function contentWillUnmount(_ref2) {
  var refs = _ref2.refs;

  refs.trap.deactivate();
  refs.disposeAriaHider();
};

var FocusContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext();

var DialogOverlay = __WEBPACK_IMPORTED_MODULE_0_react___default.a.forwardRef(function (_ref3, forwardRef) {
  var _ref3$isOpen = _ref3.isOpen,
      isOpen = _ref3$isOpen === undefined ? true : _ref3$isOpen,
      _ref3$onDismiss = _ref3.onDismiss,
      onDismiss = _ref3$onDismiss === undefined ? k : _ref3$onDismiss,
      onClick = _ref3.onClick,
      onKeyDown = _ref3.onKeyDown,
      props = _objectWithoutProperties(_ref3, ["isOpen", "onDismiss", "onClick", "onKeyDown"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__reach_component_component__["a" /* default */],
    { didMount: checkDialogStyles },
    isOpen ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__reach_portal__["a" /* default */],
      { "data-reach-dialog-wrapper": true },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__reach_component_component__["a" /* default */],
        {
          refs: { overlayNode: null, contentNode: null },
          didMount: portalDidMount,
          willUnmount: contentWillUnmount
        },
        function (_ref4) {
          var refs = _ref4.refs;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            FocusContext.Provider,
            { value: function value(node) {
                return refs.contentNode = node;
              } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({
              "data-reach-dialog-overlay": true,
              onClick: Object(__WEBPACK_IMPORTED_MODULE_3__reach_utils__["b" /* wrapEvent */])(onClick, function (event) {
                event.stopPropagation();
                onDismiss();
              }),
              onKeyDown: Object(__WEBPACK_IMPORTED_MODULE_3__reach_utils__["b" /* wrapEvent */])(onKeyDown, function (event) {
                if (event.key === "Escape") {
                  event.stopPropagation();
                  onDismiss();
                }
              }),
              ref: function ref(node) {
                refs.overlayNode = node;
                forwardRef && forwardRef(node);
              }
            }, props))
          );
        }
      )
    ) : null
  );
});

var stopPropagation = function stopPropagation(event) {
  return event.stopPropagation();
};

var DialogContent = __WEBPACK_IMPORTED_MODULE_0_react___default.a.forwardRef(function (_ref5, forwardRef) {
  var onClick = _ref5.onClick,
      onKeyDown = _ref5.onKeyDown,
      props = _objectWithoutProperties(_ref5, ["onClick", "onKeyDown"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    FocusContext.Consumer,
    null,
    function (contentRef) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({
        "aria-modal": "true",
        "data-reach-dialog-content": true,
        tabIndex: "-1",
        onClick: Object(__WEBPACK_IMPORTED_MODULE_3__reach_utils__["b" /* wrapEvent */])(onClick, stopPropagation),
        ref: function ref(node) {
          contentRef(node);
          forwardRef && forwardRef(node);
        }
      }, props));
    }
  );
});

var Dialog = function Dialog(_ref6) {
  var isOpen = _ref6.isOpen,
      _ref6$onDismiss = _ref6.onDismiss,
      onDismiss = _ref6$onDismiss === undefined ? k : _ref6$onDismiss,
      props = _objectWithoutProperties(_ref6, ["isOpen", "onDismiss"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    DialogOverlay,
    { isOpen: isOpen, onDismiss: onDismiss },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DialogContent, props)
  );
};



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reach_dialog__ = __webpack_require__("./node_modules/@reach/dialog/es/index.js");
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
        lineNumber: 51
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_spinners_ScaleLoader___default.a, {
      size: 120,
      color: "white",
      loading: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    }));
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, "react", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Version, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, "@1.1.1")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(License, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, ['MIT'].join(', '))), data && data.length > 0 && data.map(function (item) {
    var name = __WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('name', item);
    var version = __WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('version', item);
    var licenses = getLicensesName(item);
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Name, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      }
    }, name, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Version, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      }
    }, "@", version)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(License, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      }
    }, licenses.join(', ')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__reach_dialog__["a" /* Dialog */], {
      isOpen: state.showDialog,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
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
        lineNumber: 81
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(VisuallyHidden, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      }
    }, "Close"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      "aria-hidden": true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      }
    }, "\xD7")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      }
    }, "Hello there. I am a dialog")));
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
//# sourceMappingURL=5.541807dc8f81db34cbf9.hot-update.js.map