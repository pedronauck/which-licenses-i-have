webpackHotUpdate(5,{

/***/ "./node_modules/@reach/dialog/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DialogOverlay */
/* unused harmony export DialogContent */
/* unused harmony export Dialog */
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

/***/ "./node_modules/@reach/portal/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reach_component_component__ = __webpack_require__("./node_modules/@reach/component-component/es/index.js");




var Portal = function Portal(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? "reach-portal" : _ref$type;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__reach_component_component__["a" /* default */], {
    getRefs: function getRefs() {
      return { node: null };
    },
    didMount: function didMount(_ref2) {
      var refs = _ref2.refs,
          forceUpdate = _ref2.forceUpdate;

      refs.node = document.createElement(type);
      document.body.appendChild(refs.node);
      forceUpdate();
    },
    willUnmount: function willUnmount(_ref3) {
      var node = _ref3.refs.node;

      document.body.removeChild(node);
    },
    render: function render(_ref4) {
      var node = _ref4.refs.node;

      return node ? Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["createPortal"])(children, node) : null;
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Portal);

/***/ }),

/***/ "./node_modules/@reach/utils/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return wrapEvent; });
var checkedPkgs = {};

var checkStyles = function checkStyles(pkg) {
  // only check once per package
  if (checkedPkgs[pkg]) return;
  checkedPkgs[pkg] = true;

  if (parseInt(window.getComputedStyle(document.body).getPropertyValue("--reach-" + pkg), 10) !== 1) {
    console.warn("@reach/" + pkg + " styles not found. If you are using a bundler like webpack or parcel include this in the entry file of your app before any of your own styles:\n\n    import \"@reach/" + pkg + "/styles.css\";\n\n  Otherwise you'll need to include them some other way:\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"node_modules/@reach/" + pkg + "/styles.css\" />\n\n  For more information visit https://ui.reach.tech/styling.\n  ");
  }
};

var wrapEvent = function wrapEvent(handler, cb) {
  return function (event) {
    handler && handler(event);
    if (!event.defaultPrevented) {
      return cb(event);
    }
  };
};

/***/ }),

/***/ "./node_modules/focus-trap/index.js":
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__("./node_modules/tabbable/index.js");
var xtend = __webpack_require__("./node_modules/xtend/immutable.js");

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var doc = document;
  var container =
    typeof element === 'string' ? doc.querySelector(element) : element;

  var config = xtend(
    {
      returnFocusOnDeactivate: true,
      escapeDeactivates: true
    },
    userOptions
  );

  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (state.active) return;

    updateTabbableNodes();

    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;

    var onActivate =
      activateOptions && activateOptions.onActivate
        ? activateOptions.onActivate
        : config.onActivate;
    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;

    removeListeners();
    state.active = false;
    state.paused = false;

    var onDeactivate =
      deactivateOptions && deactivateOptions.onDeactivate !== undefined
        ? deactivateOptions.onDeactivate
        : config.onDeactivate;
    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus =
      deactivateOptions && deactivateOptions.returnFocus !== undefined
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate;
    if (returnFocus) {
      delay(function() {
        tryFocus(state.nodeFocusedBeforeActivation);
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    addListeners();
  }

  function addListeners() {
    if (!state.active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    delay(function() {
      tryFocus(getInitialFocusNode());
    });
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, true);
    doc.addEventListener('touchstart', checkPointerDown, true);
    doc.addEventListener('click', checkClick, true);
    doc.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!state.active || listeningFocusTrap !== trap) return;

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function getInitialFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error(
        "You can't have a focus-trap without at least one focusable element"
      );
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  function checkPointerDown(e) {
    if (container.contains(e.target)) return;
    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable.isFocusable(e.target)
      });
    } else {
      e.preventDefault();
    }
  }

  // In case focus escapes the trap for some strange reason, pull it back in.
  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }
    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }
    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  }

  // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  function checkTab(e) {
    updateTabbableNodes();
    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }
    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode =
      tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus();
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return (
    node.tagName &&
    node.tagName.toLowerCase() === 'input' &&
    typeof node.select === 'function'
  );
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return setTimeout(fn, 0);
}

module.exports = focusTrap;


/***/ }),

/***/ "./node_modules/tabbable/index.js":
/***/ (function(module, exports) {

var candidateSelectors = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
];
var candidateSelector = candidateSelectors.join(',');

var matches = typeof Element === 'undefined'
  ? function () {}
  : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function tabbable(el, options) {
  options = options || {};

  var elementDocument = el.ownerDocument || el;
  var regularTabbables = [];
  var orderedTabbables = [];

  var untouchabilityChecker = new UntouchabilityChecker(elementDocument);
  var candidates = el.querySelectorAll(candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var i, candidate, candidateTabindex;
  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate, untouchabilityChecker)) continue;

    candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(sortOrderedTabbables)
    .map(function(a) { return a.node })
    .concat(regularTabbables);

  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node, untouchabilityChecker) {
  if (
    !isNodeMatchingSelectorFocusable(node, untouchabilityChecker)
    || isNonTabbableRadio(node)
    || getTabindex(node) < 0
  ) {
    return false;
  }
  return true;
}

function isTabbable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node, untouchabilityChecker);
}

function isNodeMatchingSelectorFocusable(node, untouchabilityChecker) {
  untouchabilityChecker = untouchabilityChecker || new UntouchabilityChecker(node.ownerDocument || node);
  if (
    node.disabled
    || isHiddenInput(node)
    || untouchabilityChecker.isUntouchable(node)
  ) {
    return false;
  }
  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
function isFocusable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node, untouchabilityChecker);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr;
  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

// Array.prototype.find not available in IE.
function find(list, predicate) {
  for (var i = 0, length = list.length; i < length; i++) {
    if (predicate(list[i])) return list[i];
  }
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true;
  // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.
  var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

// An element is "untouchable" if *it or one of its ancestors* has
// `visibility: hidden` or `display: none`.
function UntouchabilityChecker(elementDocument) {
  this.doc = elementDocument;
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed. The cache contains tuples
  // mapping nodes to their boolean result.
  this.cache = [];
}

// getComputedStyle accurately reflects `visibility: hidden` of ancestors
// but not `display: none`, so we need to recursively check parents.
UntouchabilityChecker.prototype.hasDisplayNone = function hasDisplayNone(node, nodeComputedStyle) {
  if (node === this.doc.documentElement) return false;

    // Search for a cached result.
    var cached = find(this.cache, function(item) {
      return item === node;
    });
    if (cached) return cached[1];

    nodeComputedStyle = nodeComputedStyle || this.doc.defaultView.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = this.hasDisplayNone(node.parentNode);
    }

    this.cache.push([node, result]);

    return result;
}

UntouchabilityChecker.prototype.isUntouchable = function isUntouchable(node) {
  if (node === this.doc.documentElement) return false;
  var computedStyle = this.doc.defaultView.getComputedStyle(node);
  if (this.hasDisplayNone(node, computedStyle)) return true;
  return computedStyle.visibility === 'hidden';
}

module.exports = tabbable;


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


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
    }, licenses.join(', ')));
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
//# sourceMappingURL=5.2234f14f3ead21741c34.hot-update.js.map