"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/popup/VideoPopup.js":
/*!********************************************!*\
  !*** ./src/components/popup/VideoPopup.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useClickOutside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../useClickOutside */ \"./src/useClickOutside.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\package\\\\dizme\\\\src\\\\components\\\\popup\\\\VideoPopup.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\nvar VideoPopup_ = function VideoPopup_(_ref) {\n  _s();\n\n  var close = _ref.close,\n      videoID = _ref.videoID;\n  var domNode = (0,_useClickOutside__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n    close(false);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"mfp-bg mfp-ready\",\n      onClick: function onClick() {\n        return close(false);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready\",\n      tabIndex: -1,\n      style: {\n        overflow: \"hidden auto\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"mfp-container mfp-s-ready mfp-iframe-holder\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"mfp-content\",\n          ref: domNode,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"mfp-iframe-scaler\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n              title: \"Close (Esc)\",\n              type: \"button\",\n              className: \"mfp-close\",\n              onClick: function onClick() {\n                return close();\n              },\n              children: \"\\xD7\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"iframe\", {\n              src: videoID,\n              title: \"YouTube video player\",\n              frameBorder: \"0\",\n              allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n              allowFullScreen: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"mfp-preloader\",\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(VideoPopup_, \"rtQeSb6Cq+hhosP/0ltNGiB9zzs=\", false, function () {\n  return [_useClickOutside__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c = VideoPopup_;\n\nvar VideoPopup = function VideoPopup() {\n  _s2();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      video = _useState[0],\n      setVideo = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      videoValue = _useState2[0],\n      setVideoValue = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setTimeout(function () {\n      var a = document.querySelectorAll(\"a\");\n      a.forEach(function (a) {\n        if (a.href.includes(\"www.youtube.com\")) {\n          a.addEventListener(\"click\", function (e) {\n            e.preventDefault();\n            setVideoValue(a.href);\n            setVideo(true);\n          });\n        }\n      });\n    }, 1500);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: video && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(VideoPopup_, {\n      close: function close() {\n        return setVideo(false);\n      },\n      videoID: videoValue\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(VideoPopup, \"93PkYvOabwtUGJKoxVj0ljcb2Os=\");\n\n_c2 = VideoPopup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoPopup);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"VideoPopup_\");\n$RefreshReg$(_c2, \"VideoPopup\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCRCxHQWpCUSxFQWlCTixFQWpCTSxDQUFUO0FBa0JBLHNCQUNFLDhEQUFDLDJDQUFEO0FBQUEsY0FDR0QsS0FBSyxpQkFDSiw4REFBQyxXQUFEO0FBQWEsV0FBSyxFQUFFO0FBQUEsZUFBTUMsUUFBUSxDQUFDLEtBQUQsQ0FBZDtBQUFBLE9BQXBCO0FBQTJDLGFBQU8sRUFBRUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBNUJEOztJQUFNSDs7TUFBQUE7QUE4Qk4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcG9wdXAvVmlkZW9Qb3B1cC5qcz85ODExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlQ2xpY2tPdXRzaWRlIGZyb20gXCIuLi8uLi91c2VDbGlja091dHNpZGVcIjtcclxuXHJcbmNvbnN0IFZpZGVvUG9wdXBfID0gKHsgY2xvc2UsIHZpZGVvSUQgfSkgPT4ge1xyXG4gIGxldCBkb21Ob2RlID0gdXNlQ2xpY2tPdXRzaWRlKCgpID0+IHtcclxuICAgIGNsb3NlKGZhbHNlKTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1mcC1iZyBtZnAtcmVhZHlcIiBvbkNsaWNrPXsoKSA9PiBjbG9zZShmYWxzZSl9PjwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWZwLXdyYXAgbWZwLWNsb3NlLWJ0bi1pbiBtZnAtYXV0by1jdXJzb3IgbWZwLXJlYWR5XCJcclxuICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgc3R5bGU9e3sgb3ZlcmZsb3c6IFwiaGlkZGVuIGF1dG9cIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZnAtY29udGFpbmVyIG1mcC1zLXJlYWR5IG1mcC1pZnJhbWUtaG9sZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1mcC1jb250ZW50XCIgcmVmPXtkb21Ob2RlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZnAtaWZyYW1lLXNjYWxlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2xvc2UgKEVzYylcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZnAtY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2UoKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDDl1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgIHNyYz17dmlkZW9JRH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIlxyXG4gICAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cclxuICAgICAgICAgICAgICA+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1mcC1wcmVsb2FkZXJcIj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVmlkZW9Qb3B1cCA9ICgpID0+IHtcclxuICBjb25zdCBbdmlkZW8sIHNldFZpZGVvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmlkZW9WYWx1ZSwgc2V0VmlkZW9WYWx1ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcclxuICAgICAgYS5mb3JFYWNoKChhKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgYS5ocmVmLmluY2x1ZGVzKFwid3d3LnlvdXR1YmUuY29tXCIpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRWaWRlb1ZhbHVlKGEuaHJlZik7XHJcbiAgICAgICAgICAgIHNldFZpZGVvKHRydWUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICB7dmlkZW8gJiYgKFxyXG4gICAgICAgIDxWaWRlb1BvcHVwXyBjbG9zZT17KCkgPT4gc2V0VmlkZW8oZmFsc2UpfSB2aWRlb0lEPXt2aWRlb1ZhbHVlfSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW9Qb3B1cDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNsaWNrT3V0c2lkZSIsIlZpZGVvUG9wdXBfIiwiY2xvc2UiLCJ2aWRlb0lEIiwiZG9tTm9kZSIsIm92ZXJmbG93IiwiVmlkZW9Qb3B1cCIsInZpZGVvIiwic2V0VmlkZW8iLCJ2aWRlb1ZhbHVlIiwic2V0VmlkZW9WYWx1ZSIsInNldFRpbWVvdXQiLCJhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImhyZWYiLCJpbmNsdWRlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/popup/VideoPopup.js\n");

/***/ })

});