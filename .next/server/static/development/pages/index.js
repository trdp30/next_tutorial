module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/trideep/Desktop/next_projects/project1/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function fetcher(url) {
  return fetch(url).then(r => r.json());
}

function Index() {
  const {
    query
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(`/api/randomQuote${query.author ? '?author=' + query.author : ''}`, fetcher); // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`

  const author = data === null || data === void 0 ? void 0 : data.author;
  let quote = data === null || data === void 0 ? void 0 : data.quote;
  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';
  return __jsx("main", {
    className: "jsx-1236022937" + " " + "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1236022937" + " " + "quote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, quote), author && __jsx("span", {
    className: "jsx-1236022937" + " " + "author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 18
    }
  }, "- ", author), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1236022937",
    __self: this
  }, "main.jsx-1236022937{width:90%;max-width:900px;margin:300px auto;text-align:center;}.quote.jsx-1236022937{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}.author.jsx-1236022937{font-family:sans-serif;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyaWRlZXAvRGVza3RvcC9uZXh0X3Byb2plY3RzL3Byb2plY3QxL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHcUIsQUFNVSxBQU1HLFVBWFAsVUFNRixHQU1BLEdBWEksUUFNSCxHQU1BLE9BWEcsS0FNRSxHQU10QixVQVhBLE9BTUEiLCJmaWxlIjoiL2hvbWUvdHJpZGVlcC9EZXNrdG9wL25leHRfcHJvamVjdHMvcHJvamVjdDEvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG4gIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIGAvYXBpL3JhbmRvbVF1b3RlJHtxdWVyeS5hdXRob3IgPyAnP2F1dGhvcj0nICsgcXVlcnkuYXV0aG9yIDogJyd9YCxcbiAgICBmZXRjaGVyXG4gICk7XG4gIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBoYXMgb3B0aW9uYWwgY2hhaW5pbmcsIGFkZGVkIGluIE5leHQuanMgdjkuMS41LFxuICAvLyBpcyB0aGUgc2FtZSBhcyBgZGF0YSAmJiBkYXRhLmF1dGhvcmBcbiAgY29uc3QgYXV0aG9yID0gZGF0YT8uYXV0aG9yO1xuICBsZXQgcXVvdGUgPSBkYXRhPy5xdW90ZTtcblxuICBpZiAoIWRhdGEpIHF1b3RlID0gJ0xvYWRpbmcuLi4nO1xuICBpZiAoZXJyb3IpIHF1b3RlID0gJ0ZhaWxlZCB0byBmZXRjaCB0aGUgcXVvdGUuJztcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZVwiPntxdW90ZX08L2Rpdj5cbiAgICAgIHthdXRob3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+LSB7YXV0aG9yfTwvc3Bhbj59XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMzAwcHggYXV0bztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnF1b3RlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgICAgICBjb2xvcjogI2UyNDNkZTtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmF1dGhvciB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgY29sb3I6ICM1NTk4MzQ7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApO1xufVxuLy8gaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG4vLyBmdW5jdGlvbiBmZXRjaGVyKHVybCkge1xuLy8gICByZXR1cm4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpO1xuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbi8vICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCcvYXBpL3JhbmRvbVF1b3RlJywgZmV0Y2hlcik7XG4vLyAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBoYXMgb3B0aW9uYWwgY2hhaW5pbmcsIGFkZGVkIGluIE5leHQuanMgdjkuMS41LFxuLy8gICAvLyBpcyB0aGUgc2FtZSBhcyBgZGF0YSAmJiBkYXRhLmF1dGhvcmBcbi8vICAgY29uc3QgYXV0aG9yID0gZGF0YT8uYXV0aG9yO1xuLy8gICBsZXQgcXVvdGUgPSBkYXRhPy5xdW90ZTtcblxuLy8gICBpZiAoIWRhdGEpIHF1b3RlID0gJ0xvYWRpbmcuLi4nO1xuLy8gICBpZiAoZXJyb3IpIHF1b3RlID0gJ0ZhaWxlZCB0byBmZXRjaCB0aGUgcXVvdGUuJztcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxtYWluIGNsYXNzTmFtZT1cImNlbnRlclwiPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZVwiPntxdW90ZX08L2Rpdj5cbi8vICAgICAgIHthdXRob3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+LSB7YXV0aG9yfTwvc3Bhbj59XG5cbi8vICAgICAgIDxzdHlsZSBqc3g+e2Bcbi8vICAgICAgICAgbWFpbiB7XG4vLyAgICAgICAgICAgd2lkdGg6IDkwJTtcbi8vICAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuLy8gICAgICAgICAgIG1hcmdpbjogMzAwcHggYXV0bztcbi8vICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLnF1b3RlIHtcbi8vICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbi8vICAgICAgICAgICBjb2xvcjogI2UyNDNkZTtcbi8vICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4vLyAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLmF1dGhvciB7XG4vLyAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4vLyAgICAgICAgICAgY29sb3I6ICM1NTk4MzQ7XG4vLyAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgICB9XG4vLyAgICAgICBgfTwvc3R5bGU+XG4vLyAgICAgPC9tYWluPlxuLy8gICApO1xuLy8gfVxuLy8gaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0Jztcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuLy8gZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4vLyAgIHJldHVybiBbXG4vLyAgICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcycgfSxcbi8vICAgICB7IGlkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnIH0sXG4vLyAgICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCcgfVxuLy8gICBdO1xuLy8gfVxuXG4vLyBjb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuLy8gICA8bGk+XG4vLyAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zdC5pZH1gfT5cbi8vICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbi8vICAgICA8L0xpbms+XG4vLyAgICAgPHN0eWxlIGpzeD57YFxuLy8gICAgICAgbGkge1xuLy8gICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuLy8gICAgICAgICBtYXJnaW46IDVweCAwO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICBhIHtcbi8vICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICAgICAgICBjb2xvcjogYmx1ZTtcbi8vICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIGE6aG92ZXIge1xuLy8gICAgICAgICBvcGFjaXR5OiAwLjY7XG4vLyAgICAgICB9XG4vLyAgICAgYH08L3N0eWxlPlxuLy8gICA8L2xpPlxuLy8gKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8TGF5b3V0PlxuLy8gICAgICAgPGgxPk15IEJsb2c8L2gxPlxuLy8gICAgICAgPHVsPlxuLy8gICAgICAgICB7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXG4vLyAgICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbi8vICAgICAgICAgKSl9XG4vLyAgICAgICA8L3VsPlxuLy8gICAgICAgPHN0eWxlIGpzeD57YFxuLy8gICAgICAgICBoMSxcbi8vICAgICAgICAgYSB7XG4vLyAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICB1bCB7XG4vLyAgICAgICAgICAgcGFkZGluZzogMDtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGxpIHtcbi8vICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuLy8gICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBhIHtcbi8vICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgICAgICAgY29sb3I6IGJsdWU7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBhOmhvdmVyIHtcbi8vICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIGB9PC9zdHlsZT5cbi8vICAgICA8L0xheW91dD5cbi8vICAgKTtcbi8vIH1cblxuLy8gY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4vLyAgIDxMYXlvdXQ+XG4vLyAgICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4vLyAgICAgPHVsPlxuLy8gICAgICAge3Byb3BzLnNob3dzLm1hcChzaG93ID0+IChcbi8vICAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XG4vLyAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7c2hvdy5pZH1gfT5cbi8vICAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuLy8gICAgICAgICAgIDwvTGluaz5cbi8vICAgICAgICAgPC9saT5cbi8vICAgICAgICkpfVxuLy8gICAgIDwvdWw+XG4vLyAgIDwvTGF5b3V0PlxuLy8gKTtcblxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpO1xuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuLy8gICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgc2hvd3M6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpXG4vLyAgIH07XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleDtcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG4vLyAvLyBpbXBvcnQgd2l0aExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0Jztcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8vIGNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxuLy8gICA8bGk+XG4vLyAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cHJvcHMuaWR9YH0+XG4vLyAgICAgICA8YT57cHJvcHMuaWR9PC9hPlxuLy8gICAgIDwvTGluaz5cbi8vICAgPC9saT5cbi8vICk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPExheW91dD5cbi8vICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbi8vICAgICAgIDx1bD5cbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwiaGVsbG8tbmV4dGpzXCIgLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwibGVhcm4tbmV4dGpzXCIgLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwiZGVwbG95LW5leHRqc1wiIC8+XG4vLyAgICAgICA8L3VsPlxuLy8gICAgIDwvTGF5b3V0PlxuLy8gICApO1xuLy8gfVxuXG4vLyAvLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbi8vIC8vICAgcmV0dXJuIChcbi8vIC8vICAgICA8TGF5b3V0PlxuLy8gLy8gICAgICAgPHA+SGVsbG8gTmV4dC5qczwvcD5cbi8vIC8vICAgICA8L0xheW91dD5cbi8vIC8vICAgKTtcbi8vIC8vIH1cblxuXG4vLyAvLyBjb25zdCBQYWdlID0gKCkgPT4gPHA+SGVsbG8gTmV4dC5qczwvcD47XG5cbi8vIC8vIGV4cG9ydCBkZWZhdWx0IHdpdGhMYXlvdXQoUGFnZSk7Il19 */\n/*@ sourceURL=/home/trideep/Desktop/next_projects/project1/pages/index.js */"));
} // import useSWR from 'swr';
// function fetcher(url) {
//   return fetch(url).then(r => r.json());
// }
// export default function Index() {
//   const { data, error } = useSWR('/api/randomQuote', fetcher);
//   // The following line has optional chaining, added in Next.js v9.1.5,
//   // is the same as `data && data.author`
//   const author = data?.author;
//   let quote = data?.quote;
//   if (!data) quote = 'Loading...';
//   if (error) quote = 'Failed to fetch the quote.';
//   return (
//     <main className="center">
//       <div className="quote">{quote}</div>
//       {author && <span className="author">- {author}</span>}
//       <style jsx>{`
//         main {
//           width: 90%;
//           max-width: 900px;
//           margin: 300px auto;
//           text-align: center;
//         }
//         .quote {
//           font-family: cursive;
//           color: #e243de;
//           font-size: 24px;
//           padding-bottom: 10px;
//         }
//         .author {
//           font-family: sans-serif;
//           color: #559834;
//           font-size: 20px;
//         }
//       `}</style>
//     </main>
//   );
// }
// import Layout from '../components/MyLayout';
// import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';
// function getPosts() {
//   return [
//     { id: 'hello-nextjs', title: 'Hello Next.js' },
//     { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
//     { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
//   ];
// }
// const PostLink = ({ post }) => (
//   <li>
//     <Link href="/p/[id]" as={`/p/${post.id}`}>
//       <a>{post.title}</a>
//     </Link>
//     <style jsx>{`
//       li {
//         list-style: none;
//         margin: 5px 0;
//       }
//       a {
//         text-decoration: none;
//         color: blue;
//         font-family: 'Arial';
//       }
//       a:hover {
//         opacity: 0.6;
//       }
//     `}</style>
//   </li>
// );
// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         {getPosts().map(post => (
//           <PostLink key={post.id} post={post} />
//         ))}
//       </ul>
//       <style jsx>{`
//         h1,
//         a {
//           font-family: 'Arial';
//         }
//         ul {
//           padding: 0;
//         }
//         li {
//           list-style: none;
//           margin: 5px 0;
//         }
//         a {
//           text-decoration: none;
//           color: blue;
//         }
//         a:hover {
//           opacity: 0.6;
//         }
//       `}</style>
//     </Layout>
//   );
// }
// const Index = props => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link href="/p/[id]" as={`/p/${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// );
// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();
//   console.log(`Show data fetched. Count: ${data.length}`);
//   return {
//     shows: data.map(entry => entry.show)
//   };
// };
// export default Index;
// import Layout from '../components/MyLayout';
// // import withLayout from '../components/MyLayout';
// import Link from 'next/link';
// const PostLink = props => (
//   <li>
//     <Link href="/p/[id]" as={`/p/${props.id}`}>
//       <a>{props.id}</a>
//     </Link>
//   </li>
// );
// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id="hello-nextjs" />
//         <PostLink id="learn-nextjs" />
//         <PostLink id="deploy-nextjs" />
//       </ul>
//     </Layout>
//   );
// }
// // export default function Index() {
// //   return (
// //     <Layout>
// //       <p>Hello Next.js</p>
// //     </Layout>
// //   );
// // }
// // const Page = () => <p>Hello Next.js</p>;
// // export default withLayout(Page);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/trideep/Desktop/next_projects/project1/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map