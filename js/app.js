/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_travis_build_Kingzoey_Catji_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/api/index.js\");\n\n\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"app\",\n  data: function data() {\n    return {\n      isRouterAlive: true\n    };\n  },\n  provide: function provide() {\n    return {\n      reload: this.reload\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    return Object(_home_travis_build_Kingzoey_Catji_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              // 先使用localstorage的数据\n              _this.$store.state.user = JSON.parse(localStorage.getItem(\"user\")); // 然后用cookie尝试登录\n\n              _context.next = 4;\n              return Object(_api__WEBPACK_IMPORTED_MODULE_2__[\"loginInfo\"])();\n\n            case 4:\n              res = _context.sent;\n              res = res.data;\n\n              if (res.status === \"ok\") {\n                _this.$store.commit(\"login\", res.data);\n\n                _this.$message.info(\"欢迎用户 \" + res.data.nickname + \" 回到 Catji\");\n              } else {\n                _this.$store.commit(\"logout\");\n              }\n\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](0);\n\n              // 失败说明cookie过期\n              _this.$store.commit(\"logout\");\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 9]]);\n    }))();\n  },\n  methods: {\n    reload: function reload() {\n      var _this2 = this;\n\n      this.isRouterAlive = false;\n      this.$nextTick(function () {\n        return _this2.isRouterAlive = true;\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"d4139930-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d4139930-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm.isRouterAlive ? _c(\"router-view\") : _vm._e()\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22d4139930-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* 以下是全局样式 */\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  /* border-box意思是将元素的height,width视为算上边框宽度之后的值 */\\n}\\nhtml {\\n  color: #505050;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\nbody {\\n  min-width: 1226px;\\n  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,\\n    Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;\\n  font-size: 12px;\\n  line-height: 1.5;\\n  color: #222;\\n}\\na {\\n  color: #222;\\n  background-color: transparent;\\n  outline: none;\\n  cursor: pointer;\\n  transition: color 0.3s;\\n  -webkit-text-decoration-skip: objects;\\n}\\na,\\na:hover {\\n  text-decoration: none;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\ninput,\\nbutton {\\n  border-style: none;\\n  padding: 0;\\n}\\n#app {\\n  position: relative;\\n}\\n\\n/* 用来清除浮动的class */\\n.clearfix::after {\\n  content: \\\".\\\";\\n  display: block;\\n  height: 0;\\n  clear: both;\\n  visibility: hidden;\\n  font-size: 0;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"fa1ef42a\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ \"./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./src/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--6-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_d4139930_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"d4139930-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"d4139930-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_d4139930_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_d4139930_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: hotSearch, searchHistory, hotTag, hotUser, hotCat, hotVideo, newVideo, register, login, logout, loginInfo, videoInfo, userInfo, blogInfo, followers, followings, updateInfo, favorite, watchHistory, myWork, tagInfo, tagVideos, tagBlogs, catInfo, catVideo, catBlog, videoComments, blogContent, postBlog, searchVideo, searchUser, searchCat, searchTag, uploadVideo, likeVideo, unlikeVideo, likeBlog, unlikeBlog, likeVideoComment, unlikeVideoComment, likeBlogComment, unlikeBlogComment, follow, unfollow, block, unblock, favoriteVideo, unfavoriteVideo, addVideoComment, searchCatByName, updateCatInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hotSearch\", function() { return hotSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchHistory\", function() { return searchHistory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hotTag\", function() { return hotTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hotUser\", function() { return hotUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hotCat\", function() { return hotCat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hotVideo\", function() { return hotVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newVideo\", function() { return newVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"register\", function() { return register; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginInfo\", function() { return loginInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"videoInfo\", function() { return videoInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userInfo\", function() { return userInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blogInfo\", function() { return blogInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"followers\", function() { return followers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"followings\", function() { return followings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateInfo\", function() { return updateInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"favorite\", function() { return favorite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"watchHistory\", function() { return watchHistory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myWork\", function() { return myWork; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tagInfo\", function() { return tagInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tagVideos\", function() { return tagVideos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tagBlogs\", function() { return tagBlogs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"catInfo\", function() { return catInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"catVideo\", function() { return catVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"catBlog\", function() { return catBlog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"videoComments\", function() { return videoComments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blogContent\", function() { return blogContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postBlog\", function() { return postBlog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchVideo\", function() { return searchVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchUser\", function() { return searchUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchCat\", function() { return searchCat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchTag\", function() { return searchTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uploadVideo\", function() { return uploadVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"likeVideo\", function() { return likeVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unlikeVideo\", function() { return unlikeVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"likeBlog\", function() { return likeBlog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unlikeBlog\", function() { return unlikeBlog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"likeVideoComment\", function() { return likeVideoComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unlikeVideoComment\", function() { return unlikeVideoComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"likeBlogComment\", function() { return likeBlogComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unlikeBlogComment\", function() { return unlikeBlogComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"follow\", function() { return follow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unfollow\", function() { return unfollow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"block\", function() { return block; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unblock\", function() { return unblock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"favoriteVideo\", function() { return favoriteVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unfavoriteVideo\", function() { return unfavoriteVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addVideoComment\", function() { return addVideoComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchCatByName\", function() { return searchCatByName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateCatInfo\", function() { return updateCatInfo; });\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // import qs from 'querystring';\n\naxios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = \"https://myweb1008.xyz:12340\";\naxios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.withCredentials = true;\nvar debug = false;\n\nif (debug) {\n  axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = \"http://localhost:7843\";\n}\n\nvar hotSearch = function hotSearch() {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/searchhistories/hotlist');\n};\nvar searchHistory = function searchHistory(usid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/searchhistories/content', {\n    params: {\n      usid: usid\n    }\n  });\n};\nvar hotTag = function hotTag() {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/tags/hotlist');\n};\nvar hotUser = function hotUser() {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/users/hotlist');\n};\nvar hotCat = function hotCat() {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/cats/hotlist');\n};\nvar hotVideo = function hotVideo() {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/videos/hotlist');\n};\nvar newVideo = function newVideo() {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/videos/newlist');\n};\nvar register = function register(nickname, email, phone, password) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/users/register', {\n    nickname: nickname,\n    email: email,\n    phone: phone,\n    password: password\n  });\n};\nvar login = function login(nickname, email, phone, password) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/users/login', {\n    nickname: nickname,\n    email: email,\n    phone: phone,\n    password: password\n  });\n};\nvar logout = function logout() {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/users/logout');\n};\nvar loginInfo = function loginInfo() {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/users');\n};\nvar videoInfo = function videoInfo(vid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/videos/info', {\n    params: {\n      vid: vid\n    }\n  });\n};\nvar userInfo = function userInfo(usid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/users/info', {\n    params: {\n      usid: usid\n    }\n  }).then(function (res) {\n    if (res.data.status === 'ok') {\n      res.data.data.birthday = new Date(res.data.data.birthday * 1000);\n    }\n\n    return res;\n  });\n};\nvar blogInfo = function blogInfo(usid, page) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/blogs/info', {\n    params: {\n      usid: usid,\n      offset: page * 10 || 0\n    }\n  });\n}; // 粉丝\n\nvar followers = function followers(usid, page) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/follows/followers', {\n    params: {\n      usid: usid,\n      offset: (page || 0) * 10\n    }\n  });\n}; // 关注\n\nvar followings = function followings(usid, page) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/follows/following', {\n    params: {\n      usid: usid,\n      offset: (page || 0) * 10\n    }\n  });\n}; // /**\n//  * @param {string|Blob} avatarFile \n//  */\n// export const changeAvatar = (avatarFile) => {\n//     // 不知道能不能用, 谁来调试一下\n//     return axios.get('/api/users/changeavatar', formdata);\n// }\n\n/**\n * @param {Object} params - 请求参数\n * @param {Number} params.usid - 用户id\n * @param {String} [params.email] - 用户邮箱\n * @param {String} [params.tel] - 用户手机号\n * @param {String} [params.nickname] - 用户名\n * @param {String} [params.password] - 用户密码\n * @param {String} [params.gender] - 男/女/?\n * @param {Date} [params.birthday] - 用户生日\n * @param {String} [params.signature] - 个性签名\n * @param {Blob} [params.avatar] - 头像文件\n * @param {String} [params.cat_id] - 绑定的猫Tag的id\n */\n\nvar updateInfo = function updateInfo(params) {\n  var formdata = new FormData();\n\n  for (var key in params) {\n    if (key === 'birthday') {\n      formdata.append(key, params[key] / 1000);\n    } else {\n      formdata.append(key, params[key]);\n    }\n  }\n\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/users/updateinfo', formdata);\n};\nvar favorite = function favorite(usid, page) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/favorites/info', {\n    params: {\n      usid: usid,\n      offset: 10 * (page || 0)\n    }\n  });\n};\nvar watchHistory = function watchHistory(usid, page) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/watchhistories/info', {\n    params: {\n      usid: usid,\n      offset: 10 * (page || 0)\n    }\n  });\n};\nvar myWork = function myWork(usid, page) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/videos/own', {\n    params: {\n      usid: usid,\n      offset: 10 * (page || 0)\n    }\n  });\n};\nvar tagInfo = function tagInfo(tag_id) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/tags/name', {\n    params: {\n      tag_id: tag_id\n    }\n  });\n};\nvar tagVideos = function tagVideos(tag_id, page) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/tags/videos', {\n    params: {\n      tag_id: tag_id,\n      offset: 10 * (page || 0)\n    }\n  });\n};\nvar tagBlogs = function tagBlogs(tag_id, page) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/tags/blogs', {\n    params: {\n      tag_id: tag_id,\n      offset: 10 * (page || 0)\n    }\n  });\n};\nvar catInfo = function catInfo(cat_id) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/cats/info', {\n    params: {\n      cat_id: cat_id\n    }\n  });\n};\nvar catVideo = function catVideo(cat_id, page) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/cats/videos', {\n    params: {\n      cat_id: cat_id,\n      page: page || 0\n    }\n  });\n};\nvar catBlog = function catBlog(cat_id, page) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/cats/blogs', {\n    params: {\n      cat_id: cat_id,\n      page: page || 0\n    }\n  });\n};\nvar videoComments = function videoComments(vid, page) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/videos/comments', {\n    params: {\n      vid: vid,\n      offset: 10 * (page || 0)\n    }\n  });\n};\nvar blogContent = function blogContent(only_cat) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/blogs/content', {\n    params: {\n      only_cat: only_cat\n    }\n  });\n};\n/**\n * 上传动态\n * @param {String} content - 动态内容\n * @param {Blob[]} images - 附带图片(<=9)\n * @param {bool} is_public - 是否公开\n */\n\nvar postBlog = function postBlog(content, images, is_public) {\n  var formData = new FormData();\n  formData.append('content', content);\n  images.forEach(function (image) {\n    return formData.append('images', image);\n  });\n  formData.append('is_public', is_public ? 1 : 0);\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/blogs/release', formData);\n};\nvar searchVideo = function searchVideo(keyword, page) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/videos/search', {\n    params: {\n      keyword: keyword,\n      page: page || 0\n    }\n  });\n};\nvar searchUser = function searchUser(keyword, page) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/users/search', {\n    params: {\n      keyword: keyword,\n      only_cat: false,\n      page: page || 0\n    }\n  });\n};\nvar searchCat = function searchCat(keyword, page) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/users/search', {\n    params: {\n      keyword: keyword,\n      only_cat: true,\n      page: page || 0\n    }\n  });\n};\nvar searchTag = function searchTag(keyword, page) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/tags/search', {\n    params: {\n      keyword: keyword,\n      page: page || 0\n    }\n  });\n};\nvar uploadVideo = function uploadVideo(title, desc, coverFile, videoFile, tags, catags) {\n  var formData = new FormData();\n  formData.append('title', title);\n  formData.append('desc', desc);\n  formData.append('cover', coverFile);\n  formData.append('video', videoFile);\n  tags.forEach(function (tag) {\n    return formData.append('tags', tag);\n  });\n  catags.forEach(function (catag) {\n    return formData.append('catags', catag);\n  });\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/videos/release', formData);\n};\nvar likeVideo = function likeVideo(vid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/Likevideos/addLikeV', {\n    vid: vid\n  });\n};\nvar unlikeVideo = function unlikeVideo(vid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/Likevideos/unlikev', {\n    vid: vid\n  });\n};\nvar likeBlog = function likeBlog(bid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/Likeblogs/addLikeB', {\n    bid: bid\n  });\n};\nvar unlikeBlog = function unlikeBlog(bid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/Likeblogs/unLikeB', {\n    bid: bid\n  });\n};\nvar likeVideoComment = function likeVideoComment(vcid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/Likevideocomments/addLikeVc', {\n    vcid: vcid\n  });\n};\nvar unlikeVideoComment = function unlikeVideoComment(vcid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/Likevideocomments/unLikeVc', {\n    vcid: vcid\n  });\n};\nvar likeBlogComment = function likeBlogComment(bcid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/Likeblogcomments/addLikeBc', {\n    bcid: bcid\n  });\n};\nvar unlikeBlogComment = function unlikeBlogComment(bcid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/Likeblogcomments/unLikeBc', {\n    bcid: bcid\n  });\n};\nvar follow = function follow(usid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/follows/follow', {\n    usid: usid\n  });\n};\nvar unfollow = function unfollow(usid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/follows/unfollow', {\n    usid: usid\n  });\n};\nvar block = function block(usid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/blocks/block', {\n    usid: usid\n  });\n};\nvar unblock = function unblock(usid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/blocks/unblock', {\n    usid: usid\n  });\n};\nvar favoriteVideo = function favoriteVideo(vid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/favorites/addfav', {\n    vid: vid\n  });\n};\nvar unfavoriteVideo = function unfavoriteVideo(vid) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/favorites/unfav', {\n    vid: vid\n  });\n};\nvar addVideoComment = function addVideoComment(vid, content) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/Videocomments/addVC', {\n    vid: vid,\n    content: content\n  });\n};\nvar searchCatByName = function searchCatByName(name) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/cats/search', {\n    params: {\n      name: name\n    }\n  });\n};\nvar updateCatInfo = function updateCatInfo(params) {\n  var formdata = new FormData();\n\n  for (var key in params) {\n    if (key == 'description') {\n      formdata.append('desc', params[key]);\n    } else {\n      formdata.append(key, params[key]);\n    }\n  }\n\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/cats/updateinfo', formdata);\n};\n\n//# sourceURL=webpack:///./src/api/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_travis_build_Kingzoey_Catji_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _home_travis_build_Kingzoey_Catji_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_travis_build_Kingzoey_Catji_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_travis_build_Kingzoey_Catji_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _home_travis_build_Kingzoey_Catji_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_travis_build_Kingzoey_Catji_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_travis_build_Kingzoey_Catji_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var _home_travis_build_Kingzoey_Catji_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_travis_build_Kingzoey_Catji_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_travis_build_Kingzoey_Catji_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _home_travis_build_Kingzoey_Catji_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_travis_build_Kingzoey_Catji_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! element-ui */ \"./node_modules/element-ui/lib/element-ui.common.js\");\n/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! element-ui/lib/theme-chalk/index.css */ \"./node_modules/element-ui/lib/theme-chalk/index.css\");\n/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ \"./node_modules/@fortawesome/vue-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store */ \"./src/store/index.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use(element_ui__WEBPACK_IMPORTED_MODULE_5___default.a); // 图标查询地址: https://fontawesome.com/icons?d=gallery&q=cat&m=free\n// 使用方法:\n// 1. 先在网站找到你所需要的的图标\n// 2. 在下面两行注册图标的名字\n// 3. 在需要放置图标的地方这样写 <font-awesome-icon :icon=\"['fas', 'cat']\" />\n// ! 这样可以保证没用到的图标不会被打包进入最终发布文件里\n// 更多参考: https://github.com/FortAwesome/vue-fontawesome#installation\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__[\"library\"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faCamera\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faChild\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faUser\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faSearch\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faCat\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faDog\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faList\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faBookmark\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faEdit\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faSmile\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faHistory\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faFolder\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faUpload\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faDatabase\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faBlog\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faStore\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faRocket\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faPen\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faCalendar\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faAt\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faTransgender\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faMars\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faVenus\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faMask\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faListOl\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faVenusMars\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faFireAlt\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faHashtag\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faNewspaper\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faImages\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faBook\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faFile\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faHatCowboy\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faBirthdayCake\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faLaugh\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faHeart\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faVideo\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faChevronDown\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faChevronUp\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faThumbsUp\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faStar\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faShareSquare\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faCommentAlt\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faEnvelope\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faPlus\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faTrashAlt\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faFire\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faKey\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faPlay\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faClock\"]);\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].component('font-awesome-icon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"]);\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].config.productionTip = false;\nnew vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n  router: _router__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  store: _store__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n  }\n}).$mount('#app');\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar routes = [{\n  path: '/',\n  name: 'Home',\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ../views/Home.vue */ \"./src/views/Home.vue\"));\n  }\n}, {\n  path: '/tag/:tag_id?',\n  name: 'Tag',\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ../views/Tag.vue */ \"./src/views/Tag.vue\"));\n  }\n}, {\n  path: '/login',\n  name: 'Login',\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, /*! ../views/Login.vue */ \"./src/views/Login.vue\"));\n  }\n}, {\n  path: '/logout',\n  name: 'Logout',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! ../views/Logout.vue */ \"./src/views/Logout.vue\"));\n  }\n}, {\n  path: '/register',\n  name: 'Register',\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! ../views/Register.vue */ \"./src/views/Register.vue\"));\n  }\n}, {\n  path: '/search',\n  name: 'Search',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ../views/Search.vue */ \"./src/views/Search.vue\"));\n  }\n}, {\n  path: '/space/:usid(\\\\d+)?/:sub?',\n  name: 'Space',\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, /*! ../views/Space.vue */ \"./src/views/Space.vue\"));\n  }\n}, {\n  path: '/message/:usid?',\n  name: 'Message',\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, /*! ../views/Message.vue */ \"./src/views/Message.vue\"));\n  }\n}, {\n  path: '/blog',\n  name: 'Blog',\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! ../views/Blog.vue */ \"./src/views/Blog.vue\"));\n  }\n}, {\n  path: '/catspace',\n  name: 'CatSpace',\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ../views/CatSpace.vue */ \"./src/views/CatSpace.vue\"));\n  }\n}, {\n  path: '/upload',\n  name: 'Upload',\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, /*! ../views/Upload.vue */ \"./src/views/Upload.vue\"));\n  }\n}, {\n  path: '/video/:vid',\n  name: 'Video',\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ../views/Video.vue */ \"./src/views/Video.vue\"));\n  }\n}, // {\n// \tpath: '/videolist',\n// \tname: 'videolist',\n// \tcomponent: () =>\n// \t\timport('../views/VideoList.vue')\n// },\n{\n  path: '/searchResult',\n  name: 'SearchResult',\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(6), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ../views/SearchResult.vue */ \"./src/views/SearchResult.vue\"));\n  }\n}, {\n  path: '/cat/:cat_id',\n  name: 'Cat',\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, /*! ../views/Cat.vue */ \"./src/views/Cat.vue\"));\n  }\n} // {\n// \tpath: '/userlist',\n// \tname: 'UserList',\n// \tcomponent: () =>\n// \t\timport('../views/UserList.vue')\n// },\n// {\n// \tpath: '/ulist',\n// \tname: 'UList',\n// \tcomponent: () =>\n// \t\timport('../views/UList.vue')\n// },\n// {\n// \tpath: '/uinfo',\n// \tname: 'UInfo',\n// \tcomponent: () =>\n// \t\timport('../views/UInfo.vue')\n// },\n// {\n// \tpath: '/mine0',\n// \tname: 'Mine0',\n// \tcomponent: () =>\n// \t\timport('../views/Mine0.vue')\n// },\n// {\n// \tpath: '/myblog',\n// \tname: 'MyBlog',\n// \tcomponent: () =>\n// \t\timport('../views/MyBlog.vue')\n// },\n// {\n// \tpath: '/game',\n// \tname: 'Game',\n// \tcomponent: () =>\n// \t\timport('../views/Game.vue')\n// }\n];\nvar router = new vue_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n  mode: 'history',\n  base: \"/\",\n  routes: routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.splice */ \"./node_modules/core-js/modules/es.array.splice.js\");\n/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ \"./src/api/index.js\");\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_3__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Store({\n  state: {\n    user: {},\n    // loginInfo接口缓存, 包括账号认证信息等\n    me: {},\n    // userInfo信息缓存, 包括头像等\n    pending: false,\n    waitOnSuccess: [],\n    waitOnFailed: []\n  },\n  mutations: {\n    // // 页面刷新时防止信息丢失可以掉用本地存储获取用户信息\n    // loadUser(state) {\n    //   let user = localStorage.getItem('user')\n    //   if (user) {\n    //     state.user = JSON.parse(user)\n    //   }\n    // },\n    // 登录\n    login: function login(state, user) {\n      // 保存登录状态\n      state.user = user; // 存储到本地存储\n\n      localStorage.setItem('user', JSON.stringify(state.user));\n    },\n    // 退出登录\n    logout: function logout(state) {\n      // 清除状态\n      state.user = {};\n      state.me = {}; // 清除本地存储\n\n      localStorage.removeItem('user');\n      localStorage.removeItem('me');\n    },\n    cacheGetMineInfo: function cacheGetMineInfo(state, payload) {\n      var onSuccess = payload.onSuccess,\n          onFailed = payload.onFailed,\n          noCache = payload.noCache;\n      noCache = true;\n\n      if (!noCache && state.me.usid) {\n        onSuccess(state.me);\n        return;\n      }\n\n      state.waitOnSuccess.push(onSuccess);\n      state.waitOnFailed.push(onFailed);\n\n      if (!state.pending) {\n        state.pending = true;\n        Object(_api__WEBPACK_IMPORTED_MODULE_5__[\"userInfo\"])(state.user.usid).then(function (res) {\n          state.pending = false;\n          res = res.data;\n\n          if (res.status === \"ok\") {\n            state.me = res.data;\n            localStorage.setItem('me', JSON.stringify(res.data));\n            state.waitOnSuccess.splice(0).forEach(function (onSucc) {\n              return onSucc && onSucc(res.data);\n            });\n            state.waitOnFailed.splice(0);\n          } else {\n            state.waitOnSuccess.splice(0);\n            state.waitOnFailed.splice(0).forEach(function (onFail) {\n              return onFail && onFail(res.status);\n            });\n          }\n        }).catch(function (e) {\n          state.pending = false;\n          state.waitOnSuccess.splice(0);\n          state.waitOnFailed.splice(0).forEach(function (onFail) {\n            return onFail(e.response.data.status);\n          });\n        });\n      }\n    }\n  },\n  actions: {},\n  modules: {}\n}));\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });