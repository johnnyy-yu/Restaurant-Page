/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Thin.ttf */ \"./src/Roboto-Thin.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/KoreanFriedChicken.jpeg */ \"./src/img/KoreanFriedChicken.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"Roboto-Thin\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-style: normal;\\n}\\n* {\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Roboto-Thin\\\";\\n}\\n\\nbutton {\\n  border: 0;\\n  background: none;\\n}\\n\\nhtml {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-position: left center;\\n  background-size: cover;\\n  overflow: hidden;\\n  height: 100vh;\\n}\\n\\n#content {\\n  display: flex;\\n  height: 100vh;\\n}\\n\\nnav {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  color: white;\\n  background-color: rgba(192, 192, 192, 0.692);\\n  box-shadow: 2px 2px 6px rgba(102, 102, 102, 0.322);\\n  height: 100%;\\n  min-width: 300px;\\n  font-size: 2rem;\\n  padding: 20px;\\n}\\n\\n.chicken-logo {\\n  max-width: 200px;\\n  padding: 20px 20px 20px 20px;\\n  margin-bottom: 20px;\\n  box-shadow: 1px 1px 1px white;\\n}\\n\\nnav div:not(.socials) {\\n  cursor: pointer;\\n  transition: transform 0.3s;\\n  user-select: none;\\n}\\n\\nnav div:not(.socials):hover {\\n  transform: translateX(60px) scale(1.4);\\n}\\n\\n.socials {\\n  display: grid;\\n  grid-template-columns: repeat(5, 1fr);\\n  justify-items: center;\\n  align-items: center;\\n  margin-top: auto;\\n  padding: 10px;\\n  border-top: 1px solid white;\\n}\\n\\n.socials img {\\n  max-width: 26px;\\n  cursor: pointer;\\n}\\n\\nmain {\\n  flex: 1;\\n}\\n\\n@keyframes opacityChange {\\n  0% {\\n    opacity: 20%;\\n  }\\n\\n  100% {\\n    opacity: 100%;\\n  }\\n}\\n\\n/* Menu Page */\\n.brand {\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  animation: 1s ease-out 0s 1 opacityChange;\\n}\\n\\n.restaurant-logo {\\n  max-width: 40%;\\n  border-radius: 50%;\\n}\\n\\n.restaurant-name {\\n  font-size: 3em;\\n  color: white;\\n}\\n\\n/* Menu Page */\\n.menu-page {\\n  overflow: auto;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));\\n  gap: 16px;\\n  height: calc(100% - 40px);\\n  justify-items: center;\\n  align-items: center;\\n  color: white;\\n  font-size: 20px;\\n  margin: 20px;\\n  animation: 1s ease-out 0s 1 opacityChange;\\n}\\n\\n.food {\\n  background-color: rgba(192, 192, 192, 0.692);\\n  width: 300px;\\n  height: 300px;\\n  padding: 20px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 4px;\\n  border-radius: 10px;\\n  box-shadow: 2px 2px 10px rgba(102, 102, 102, 0.486);\\n}\\n\\n.menu-page img {\\n  width: 160px;\\n  height: 160px;\\n  object-fit: scale-down;\\n  margin: 0 auto;\\n  background-color: white;\\n}\\n\\n.description {\\n  font-size: 14px;\\n}\\n\\n/* Location Page */\\n\\n.location-page {\\n  height: 100%;\\n  animation: 1s ease-out 0s 1 opacityChange;\\n  display: grid;\\n  grid-template-rows: 3fr 1fr;\\n  justify-items: center;\\n  align-items: center;\\n  padding: 20px;\\n  overflow: auto;\\n}\\n\\n.location-page img {\\n  min-width: 600px;\\n  width: 60%;\\n  box-shadow: 2px 2px 10px rgba(102, 102, 102, 0.486);\\n}\\n\\n.nearest {\\n  color: white;\\n  background-color: rgba(192, 192, 192, 0.692);\\n  font-size: 2rem;\\n  width: 100%;\\n  height: 100%;\\n  padding: 20px;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: minmax(40px, auto) auto;\\n  box-shadow: 2px 2px 10px rgba(102, 102, 102, 0.486);\\n}\\n\\n.location-hours li {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  margin: 6px 0;\\n}\\n\\n.location-hours,\\n.location-container {\\n  font-size: 1.2rem;\\n  padding: 10px 30px;\\n}\\n\\n.location-container {\\n  grid-column: 1;\\n}\\n\\n.location-container div {\\n  margin: 2px 0;\\n}\\n\\n/* media Queries */\\n\\n@media (max-width: 940px) {\\n  #content {\\n    display: block;\\n  }\\n\\n  .socials {\\n    display: none;\\n  }\\n\\n  nav {\\n    height: unset;\\n    flex-direction: unset;\\n    font-size: unset;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 70px;\\n  }\\n\\n  nav img {\\n    display: none;\\n  }\\n\\n  nav div:not(.socials):hover {\\n    transform: none;\\n  }\\n\\n  .brand {\\n    height: 100vh;\\n  }\\n\\n  .restaurant-name {\\n    text-align: center;\\n  }\\n\\n  .menu-page {\\n      height: calc(100vh - 100px);\\n  }\\n\\n  .location-page {\\n    height: calc(100vh - 60px);\\n    grid-template-rows: 1fr 1fr;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homepage)\n/* harmony export */ });\n/* harmony import */ var _img_istockphoto_1289486147_612x612_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/istockphoto-1289486147-612x612.jpeg */ \"./src/img/istockphoto-1289486147-612x612.jpeg\");\n\n\nfunction homepage () {\n    const main = (() => {\n        const container = document.querySelector(\"main\");\n        const brand = document.createElement(\"div\");\n        brand.className = \"brand\"\n        container.appendChild(brand);\n\n        const logo = document.createElement(\"img\");\n        logo.src = _img_istockphoto_1289486147_612x612_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n        logo.className = \"restaurant-logo\";\n        brand.appendChild(logo);\n\n        const name = document.createElement(\"h1\");\n        name.className = \"restaurant-name\";\n        name.textContent = \"Artisan Korean Fried Chicken\";\n        brand.appendChild(name);\n    })();\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _navBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBar.js */ \"./src/navBar.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n(function home () {\n    const content = document.getElementById(\"content\");\n\n    (function navBar () {\n        const navContainer = document.createElement(\"nav\");\n        content.appendChild(navContainer);\n    })();\n\n    (function main () {\n        const main = document.createElement(\"main\");\n        content.appendChild(main);\n    })();\n\n    (0,_navBar_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/locationPage.js":
/*!*****************************!*\
  !*** ./src/locationPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ locationPage)\n/* harmony export */ });\n/* harmony import */ var _img_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/map.png */ \"./src/img/map.png\");\n\n\nfunction locationPage() {\n  const page = (() => {\n    const location = document.createElement(\"div\");\n    location.className = \"location-page\";\n    document.querySelector(\"main\").appendChild(location);\n\n    const map = document.createElement(\"img\");\n    map.src = _img_map_png__WEBPACK_IMPORTED_MODULE_0__;\n    document.querySelector(\".location-page\").appendChild(map);\n\n    const nearestLocation = document.createElement(\"div\");\n    nearestLocation.className = \"nearest\";\n    nearestLocation.textContent = \"NEAREST LOCATION\";\n    document.querySelector(\".location-page\").appendChild(nearestLocation);\n  })();\n\n  const locationInfo = (() => {\n    const locationContainer = (() => {\n      const container = document.createElement(\"div\");\n      container.className = \"location-container\";\n      document.querySelector(\".nearest\").appendChild(container);\n    })();\n\n    const infoContainer = document.querySelector(\".location-container\");\n\n    const locationName = (() => {\n      const name = document.createElement(\"div\");\n      name.className = \"location-name\"\n      name.textContent = \"Artisan Korean Fried Chicken, Real City\"\n      infoContainer.appendChild(name);\n    })();\n\n    (function phoneNumber() {\n      const phone = document.createElement(\"div\");\n      phone.id = \"phoneNumber\";\n      phone.textContent = \"(123) 456-7890\";\n      infoContainer.appendChild(phone);\n    })();\n\n    (function address() {\n      // const addressHeading = document.createElement(\"div\");\n      // addressHeading.id = \"address-heading\";\n      // addressHeading.textContent = \"Address:\";\n      // locationContainer.appendChild(addressHeading);\n\n      const address = document.createElement(\"div\");\n      address.id = \"address\";\n      address.textContent = \"123 W Maple Dr, Real City, CA 12345\";\n      infoContainer.appendChild(address);\n    })();\n\n    (function hour() {\n      // const hoursHeading = document.createElement(\"div\");\n      // hoursHeading.id = \"hours-heading\";\n      // hoursHeading.textContent = \"Hours\";\n      // locationContainer.appendChild(hoursHeading);\n\n      const hoursContainer = document.createElement(\"ul\");\n      hoursContainer.className = \"location-hours\";\n      document.querySelector(\".nearest\").appendChild(hoursContainer);\n\n      const container = document.querySelector(\".location-hours\");\n\n      const daysAndHours = (day, time) => {\n        const aDay = document.createElement(\"li\");\n        aDay.className = day;\n        container.appendChild(aDay);\n\n        const aDayContainer = document.querySelector(`.${day}`);\n\n        const days = document.createElement(\"div\");\n        days.id = day + \"ID\";\n        days.textContent = day;\n        aDayContainer.appendChild(days);\n\n        const hours = document.createElement(\"div\");\n        hours.textContent = time;\n        aDayContainer.appendChild(hours);\n      };\n\n      const mondayThursday = (() => {\n        daysAndHours(\"Monday-Thursday\", \"10:00 AM - 9:00 PM\");\n      })();\n\n      const friday = (() => {\n        daysAndHours(\"Friday\", \"10:00 AM - 10:00 PM\");\n      })();\n\n      const saturday = (() => {\n        daysAndHours(\"Saturday\", \"10:00 AM - 12:00 AM\");\n      })();\n\n      const sunday = (() => {\n        daysAndHours(\"Sunday\", \"Closed\");\n      })();\n    })();\n  })();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/locationPage.js?");

/***/ }),

/***/ "./src/menuConstructor.js":
/*!********************************!*\
  !*** ./src/menuConstructor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuItems\": () => (/* binding */ menuItems)\n/* harmony export */ });\nclass menuItems {\n    constructor (item, price, description, pic) {\n        this.item = item;\n        this.price = price;\n        this.description = description;\n        this.pic = pic;\n    }\n\n    appendMenuItem () {\n        const item = document.createElement(\"div\");\n        item.className = \"food\";\n        item.id = \"container-\" + this.item.replace(/ /g,'');\n        document.querySelector(\".menu-page\").appendChild(item);\n\n        const menuID = \"#\" + item.id\n        const menuContainer = document.querySelector(menuID)\n\n        const foodItem = this.item;\n        const priceOfItem = this.price;\n        const descriptionOfItem = this.description;\n        const picOfItem = this.pic;\n\n        (function appendPic () {\n            const img = document.createElement(\"img\");\n            img.id = \"img-\" + foodItem;\n            img.src = picOfItem;\n            menuContainer.appendChild(img);\n        })();\n\n        (function appendItem () {\n            const item = document.createElement(\"div\");\n            item.id = foodItem;\n            item.textContent = foodItem;\n            menuContainer.appendChild(item);\n        })();\n\n        (function appendPrice () {\n            const price = document.createElement(\"div\");\n            price.className = \"price\";\n            price.textContent = priceOfItem;\n            menuContainer.appendChild(price);\n        })();\n\n        (function appendDescription () {\n            const description = document.createElement('div');\n            description.className = \"description\"\n            description.textContent = descriptionOfItem;\n            menuContainer.appendChild(description);\n        })();\n    }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menuConstructor.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _menuConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuConstructor */ \"./src/menuConstructor.js\");\n/* harmony import */ var _img_ChickenKatsu_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/ChickenKatsu.jpeg */ \"./src/img/ChickenKatsu.jpeg\");\n/* harmony import */ var _img_Potstickers_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/Potstickers.jpeg */ \"./src/img/Potstickers.jpeg\");\n/* harmony import */ var _img_FriedCombo_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/FriedCombo.jpeg */ \"./src/img/FriedCombo.jpeg\");\n/* harmony import */ var _img_KoreanTaco_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/KoreanTaco.jpeg */ \"./src/img/KoreanTaco.jpeg\");\n\n\n\n\n\n\nfunction menuPage () {\n    const container = document.createElement(\"div\");\n    container.className = \"menu-page\";\n    document.querySelector(\"main\").appendChild(container)\n\n    const friedChicken = new _menuConstructor__WEBPACK_IMPORTED_MODULE_0__.menuItems(\"Korean Fried Chicken\", \"$15.95\", \"Combo 6 Wings + 3 Drums\", _img_FriedCombo_jpeg__WEBPACK_IMPORTED_MODULE_3__);\n    friedChicken.appendMenuItem();\n\n    const potstickers = new _menuConstructor__WEBPACK_IMPORTED_MODULE_0__.menuItems(\"Potstickers\", \"$9.95\", \"Lightly fired pork or vegetable dumplings brushed with signature sauce.\", _img_Potstickers_jpeg__WEBPACK_IMPORTED_MODULE_2__);\n    potstickers.appendMenuItem();\n\n    const koreanTacos = new _menuConstructor__WEBPACK_IMPORTED_MODULE_0__.menuItems(\"Korean Tacos\", \"$10.95\", \"Choice of spicy chicken or marinated ribeye over three flour tortillas. Topped with lettuce, coleslaw, buttermilk ranch, spicy mayo and red onions.\", _img_KoreanTaco_jpeg__WEBPACK_IMPORTED_MODULE_4__);\n    koreanTacos.appendMenuItem();\n\n    const chickenKatsu = new _menuConstructor__WEBPACK_IMPORTED_MODULE_0__.menuItems(\"Chicken Katsu\", \"$11.95\", \"Breaded chicken cutlet served with steamed rice, and drizzeled with katsu sauce and spicy mayo.\", _img_ChickenKatsu_jpeg__WEBPACK_IMPORTED_MODULE_1__);\n    chickenKatsu.appendMenuItem();\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuPage.js?");

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navBar)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _locationPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locationPage */ \"./src/locationPage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _img_istockphoto_1289486147_612x612_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/istockphoto-1289486147-612x612.jpeg */ \"./src/img/istockphoto-1289486147-612x612.jpeg\");\n/* harmony import */ var _img_logos_f_logo_RGB_Blue_58_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/logos/f_logo_RGB-Blue_58.png */ \"./src/img/logos/f_logo_RGB-Blue_58.png\");\n/* harmony import */ var _img_logos_Instagram_Glyph_Gradient_RGB_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/logos/Instagram_Glyph_Gradient_RGB.png */ \"./src/img/logos/Instagram_Glyph_Gradient_RGB.png\");\n/* harmony import */ var _img_logos_2021_Twitter_logo_blue_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/logos/2021 Twitter logo - blue.png */ \"./src/img/logos/2021 Twitter logo - blue.png\");\n/* harmony import */ var _img_logos_yt_icon_rgb_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/logos/yt_icon_rgb.png */ \"./src/img/logos/yt_icon_rgb.png\");\n/* harmony import */ var _img_logos_yelp_burst_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/logos/yelp_burst.png */ \"./src/img/logos/yelp_burst.png\");\n\n\n\n\n\n\n\n\n\n\n\nfunction navBar() {\n  const nav = document.querySelector(\"nav\");\n\n  const logo = (() => {\n    const img = document.createElement(\"img\");\n    img.src = _img_istockphoto_1289486147_612x612_jpeg__WEBPACK_IMPORTED_MODULE_3__;\n    img.className = \"chicken-logo\";\n    nav.appendChild(img);\n  })();\n\n  const home = (() => {\n    const home = document.createElement(\"div\");\n    home.id = \"homepage\";\n    home.textContent = \"HOME\";\n    home.onclick = () => {\n      clear();\n      (0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    };\n    nav.appendChild(home);\n  })();\n\n  const menu = (() => {\n    const menu = document.createElement(\"div\");\n    menu.id = \"menu\";\n    menu.textContent = \"MENU\";\n    menu.onclick = () => {\n      clear();\n      (0,_menuPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    };\n    nav.appendChild(menu);\n  })();\n\n  const locations = (() => {\n    const location = document.createElement(\"div\");\n    location.id = \"locations\";\n    location.textContent = \"LOCATIONS\";\n    location.onclick = () => {\n      clear();\n      (0,_locationPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    };\n    nav.appendChild(location);\n  })();\n\n  const socials = (() => {\n    const container = document.createElement(\"div\");\n    container.className = \"socials\"\n    nav.appendChild(container);\n\n    const socialsContainer = document.querySelector(\".socials\");\n\n    const facebook = (() => {\n      const logo = document.createElement(\"img\") \n      logo.src = _img_logos_f_logo_RGB_Blue_58_png__WEBPACK_IMPORTED_MODULE_4__;\n      logo.className = \"fb-logo\";\n      socialsContainer.appendChild(logo);\n    })();\n\n    const instagram = (() => {\n      const logo = document.createElement(\"img\") \n      logo.src = _img_logos_Instagram_Glyph_Gradient_RGB_png__WEBPACK_IMPORTED_MODULE_5__;\n      logo.className = \"ig-logo\";\n      socialsContainer.appendChild(logo);\n    })();\n\n    const twitter = (() => {\n      const logo = document.createElement(\"img\") \n      logo.src = _img_logos_2021_Twitter_logo_blue_png__WEBPACK_IMPORTED_MODULE_6__;\n      logo.className = \"twtr-logo\";\n      socialsContainer.appendChild(logo);\n    })();\n\n    const youtube = (() => {\n      const logo = document.createElement(\"img\") \n      logo.src = _img_logos_yt_icon_rgb_png__WEBPACK_IMPORTED_MODULE_7__;\n      logo.className = \"yt-logo\";\n      socialsContainer.appendChild(logo);\n    })();\n\n    const yelp = (() => {\n      const logo = document.createElement(\"img\") \n      logo.src = _img_logos_yelp_burst_png__WEBPACK_IMPORTED_MODULE_8__;\n      logo.className = \"yelp-logo\";\n      socialsContainer.appendChild(logo);\n    })();\n  })();\n\n  function clear () {\n    const clear = document.querySelector(\"main\");\n    clear.textContent = \"\";\n}\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/navBar.js?");

/***/ }),

/***/ "./src/Roboto-Thin.ttf":
/*!*****************************!*\
  !*** ./src/Roboto-Thin.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1711b41f3ae4cb322eea.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/Roboto-Thin.ttf?");

/***/ }),

/***/ "./src/img/ChickenKatsu.jpeg":
/*!***********************************!*\
  !*** ./src/img/ChickenKatsu.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"106fde86151dc2612cbb.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/ChickenKatsu.jpeg?");

/***/ }),

/***/ "./src/img/FriedCombo.jpeg":
/*!*********************************!*\
  !*** ./src/img/FriedCombo.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3f36576e1da041874b4e.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/FriedCombo.jpeg?");

/***/ }),

/***/ "./src/img/KoreanFriedChicken.jpeg":
/*!*****************************************!*\
  !*** ./src/img/KoreanFriedChicken.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fcc1cfb11fff5caa6045.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/KoreanFriedChicken.jpeg?");

/***/ }),

/***/ "./src/img/KoreanTaco.jpeg":
/*!*********************************!*\
  !*** ./src/img/KoreanTaco.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f9195fe7169ad9193a02.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/KoreanTaco.jpeg?");

/***/ }),

/***/ "./src/img/Potstickers.jpeg":
/*!**********************************!*\
  !*** ./src/img/Potstickers.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1f4a621e4754e286f7c9.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/Potstickers.jpeg?");

/***/ }),

/***/ "./src/img/istockphoto-1289486147-612x612.jpeg":
/*!*****************************************************!*\
  !*** ./src/img/istockphoto-1289486147-612x612.jpeg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5de43fc6b7ca3d1d18d5.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/istockphoto-1289486147-612x612.jpeg?");

/***/ }),

/***/ "./src/img/logos/2021 Twitter logo - blue.png":
/*!****************************************************!*\
  !*** ./src/img/logos/2021 Twitter logo - blue.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f963dcac51d5020e10f3.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/logos/2021_Twitter_logo_-_blue.png?");

/***/ }),

/***/ "./src/img/logos/Instagram_Glyph_Gradient_RGB.png":
/*!********************************************************!*\
  !*** ./src/img/logos/Instagram_Glyph_Gradient_RGB.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f7b3dff34fba7bf43d83.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/logos/Instagram_Glyph_Gradient_RGB.png?");

/***/ }),

/***/ "./src/img/logos/f_logo_RGB-Blue_58.png":
/*!**********************************************!*\
  !*** ./src/img/logos/f_logo_RGB-Blue_58.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f73c71a378f0f63f4386.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/logos/f_logo_RGB-Blue_58.png?");

/***/ }),

/***/ "./src/img/logos/yelp_burst.png":
/*!**************************************!*\
  !*** ./src/img/logos/yelp_burst.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d641496bb7d212578bbf.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/logos/yelp_burst.png?");

/***/ }),

/***/ "./src/img/logos/yt_icon_rgb.png":
/*!***************************************!*\
  !*** ./src/img/logos/yt_icon_rgb.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"062a2857e1f5104bf296.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/logos/yt_icon_rgb.png?");

/***/ }),

/***/ "./src/img/map.png":
/*!*************************!*\
  !*** ./src/img/map.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c13f7c37198ff137d73.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/map.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;