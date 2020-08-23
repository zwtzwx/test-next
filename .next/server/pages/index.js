module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vRNQ");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Home({
  data
}) {
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "\u7269\u6D41\u67E5\u8BE2"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), __jsx("img", {
    src: "/bg.png",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgBg
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.mainBox
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title
  }, "\u7269\u6D41\u67E5\u8BE2"), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.train
  }, __jsx("img", {
    src: "/train.png"
  })), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.queryBox
  }, __jsx("input", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchIpt
  }), __jsx("span", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.searchBtn
  }, __jsx("img", {
    src: "/search.png",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgSearch
  }))), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.resultBox
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.resultTitle
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.time + ' ' + _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.timeLeft
  }, "\u65F6\u95F4"), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.result
  }, "\u65F6\u95F4\u548C\u8DDF\u8E2A\u8FDB\u5EA6")), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.resultContent
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.expressContent
  }, data.length > 0 ? __jsx("div", null, __jsx("ul", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.resultList
  }, data.map(item => {
    return __jsx("li", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.resultItem,
      key: item.ftime
    }, __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.time + ' ' + _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.timeLeft
    }, item.ftime), __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot
    }, __jsx("span", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.outDot + ' ' + _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotBox
    }), __jsx("span", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.inDot + ' ' + _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotBox
    })), __jsx("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.text
    }, item.context));
  }))) : __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.emptyBox
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.timeSty
  }, "\u8FD8\u6CA1\u6709\u4EFB\u4F55\u4FE1\u606F\u54E6\uFF5E"), __jsx("img", {
    src: "/wu.png",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bottomImg
  })))))));
}
async function getStaticProps() {
  // const res = await fetch('http://127.0.0.1:3000/api/hello')
  // const data = await res.json()
  return {
    props: {
      data: []
    }
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "vRNQ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"imgBg": "Home_imgBg__rNb7-",
	"mainBox": "Home_mainBox__2cxgi",
	"title": "Home_title__3DjR7",
	"queryBox": "Home_queryBox__2DciY",
	"searchBtn": "Home_searchBtn__1mbTM",
	"searchIpt": "Home_searchIpt__2VEwY",
	"train": "Home_train__2oQ6d",
	"resultBox": "Home_resultBox__2k9E7",
	"resultContent": "Home_resultContent__3__ij",
	"resultTitle": "Home_resultTitle__Rjwuc",
	"result": "Home_result__1Q4Uf",
	"timeSty": "Home_timeSty__N84pL",
	"timeLeft": "Home_timeLeft__2FROk",
	"expressContent": "Home_expressContent__cg78L",
	"time": "Home_time__ZRE62",
	"resultItem": "Home_resultItem__25SIA",
	"text": "Home_text__1sCQa",
	"outDot": "Home_outDot__2cJjp",
	"inDot": "Home_inDot__2nc9M",
	"resultList": "Home_resultList__1afh3",
	"dot": "Home_dot__QE51i",
	"dotBox": "Home_dotBox__3EDKZ",
	"emptyBox": "Home_emptyBox__2NGmM",
	"bottomImg": "Home_bottomImg__Mib-k",
	"imgSearch": "Home_imgSearch__1fLCu"
};


/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });