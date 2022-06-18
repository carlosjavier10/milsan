/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/canvas-ui/mixins/base.js":
/*!***********************************************!*\
  !*** ./resources/js/canvas-ui/mixins/base.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    CanvasUI: function CanvasUI() {
      return window.CanvasUI;
    },
    isEditor: function isEditor() {
      return this.CanvasUI.user ? this.CanvasUI.user.role === 2 : false;
    },
    isAdmin: function isAdmin() {
      return this.CanvasUI.user ? this.CanvasUI.user.role === 3 : false;
    }
  },
  methods: {
    request: function request() {
      var instance = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
      instance.defaults.headers.common['X-CSRF-TOKEN'] = document.head.querySelector('meta[name="csrf-token"]').content;
      instance.defaults.baseURL = '/canvas-ui';

      var requestHandler = function requestHandler(request) {
        // Add any request modifiers...
        return request;
      };

      var errorHandler = function errorHandler(error) {
        // Add any error modifiers...
        switch (error.response.status) {
          case 401:
          case 405:
            window.location.href = "/".concat(CanvasUI.canvasPath, "/logout"); // eslint-disable-line no-undef

            break;

          default:
            break;
        }

        return Promise.reject(_objectSpread({}, error));
      };

      var successHandler = function successHandler(response) {
        // Add any response modifiers...
        return response;
      };

      instance.interceptors.request.use(function (request) {
        return requestHandler(request);
      });
      instance.interceptors.response.use(function (response) {
        return successHandler(response);
      }, function (error) {
        return errorHandler(error);
      });
      return instance;
    },

    /**
     * Parse a given url and return the different components.
     *
     * @param url
     * @link https://www.abeautifulsite.net/parsing-urls-in-javascript
     */
    parseURL: function parseURL(url) {
      var parser = document.createElement('a'),
          searchObject = {},
          queries,
          split,
          i;
      parser.href = url;
      queries = parser.search.replace(/^\?/, '').split('&');

      for (i = 0; i < queries.length; i++) {
        split = queries[i].split('=');
        searchObject[split[0]] = split[1];
      }

      return {
        protocol: parser.protocol,
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        searchObject: searchObject,
        hash: parser.hash
      };
    }
  }
});

/***/ }),

/***/ "./resources/js/canvas-ui/routes.js":
/*!******************************************!*\
  !*** ./resources/js/canvas-ui/routes.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/AllPosts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/AllTags'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/AllTopics'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/ShowPost'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/ShowTag'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/ShowTopic'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/ShowUser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  path: '/',
  name: 'posts',
  component: Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/AllPosts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  path: '/posts/:slug',
  name: 'show-post',
  component: Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/ShowPost'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  path: '/tags',
  name: 'tags',
  component: Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/AllTags'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  path: '/tags/:slug',
  name: 'show-tag',
  component: Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/ShowTag'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  path: '/topics',
  name: 'topics',
  component: Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/AllTopics'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  path: '/topics/:slug',
  name: 'show-topic',
  component: Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/ShowTopic'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  path: '/:id',
  name: 'show-user',
  component: Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/ShowUser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  path: '*',
  name: 'catch-all',
  redirect: '/canvas-ui'
}]);

/***/ }),

/***/ "./node_modules/nprogress/nprogress.js":
/*!*********************************************!*\
  !*** ./node_modules/nprogress/nprogress.js ***!
  \*********************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/cacique/htdocs/milsan/node_modules/nprogress/nprogress.js'");

/***/ }),

/***/ "./node_modules/vue-meta/dist/vue-meta.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-meta/dist/vue-meta.esm.js ***!
  \****************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/cacique/htdocs/milsan/node_modules/vue-meta/dist/vue-meta.esm.js'");

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/cacique/htdocs/milsan/node_modules/vue-router/dist/vue-router.esm.js'");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************!*\
  !*** ./resources/js/canvas-ui/app.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var vue_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-meta */ "./node_modules/vue-meta/dist/vue-meta.esm.js");
/* harmony import */ var _mixins_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/base */ "./resources/js/canvas-ui/mixins/base.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./resources/js/canvas-ui/routes.js");








__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

window.Popper = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'popper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) = false;
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_mixins_base__WEBPACK_IMPORTED_MODULE_3__["default"]);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(vue_meta__WEBPACK_IMPORTED_MODULE_2__["default"]);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(vue_router__WEBPACK_IMPORTED_MODULE_5__["default"]);
nprogress__WEBPACK_IMPORTED_MODULE_0___default().configure({
  showSpinner: false,
  easing: 'ease',
  speed: 300
});
var router = new vue_router__WEBPACK_IMPORTED_MODULE_5__["default"]({
  base: 'canvas-ui',
  mode: 'history',
  routes: _routes__WEBPACK_IMPORTED_MODULE_4__["default"]
});
router.beforeEach(function (to, from, next) {
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
  next();
});
new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  el: '#ui',
  router: router
});
})();

/******/ })()
;