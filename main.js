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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=MedievalSharp&family=Orbitron:wght@400..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n}\r\n\r\n:root{\r\n    --background-color: #0f0f0f;\r\n    --secondary-background-color: #252323;\r\n    --secondary-font-color: rgb(230, 142, 54);\r\n    --third-font-color: rgb(222, 219, 213);\r\n    --third-font-size: 1rem;\r\n    --price-font-size: 1.3rem;\r\n    --foodName-font-size: 1.4rem;\r\n    --main-content-margin-top: 6rem;\r\n    --main-content-margin-bottom: 6rem;\r\n    --section-bottom-margin: 10rem;\r\n    --headers-margin-bottom: 1.5rem;\r\n    --foodBox-description-margin-top-bottom: 1rem 0;\r\n    --foodBox-description-padding: 1.5rem;\r\n    --main-section-width: 66vw;\r\n    --section-header-font: 2rem;\r\n    --box-radius: 0.6rem;\r\n\r\n    --margin-topBottom-main-content-mobile: 2rem;\r\n    --font-section: 1.8rem;\r\n    --width-mobile: 85vw;\r\n    --section-bottom-margin-mobile: 6rem;\r\n    --foodName-font-size-mobile: 1.2rem;\r\n    --price-font-size-mobile: 1.2rem;\r\n}\r\n\r\nbody{\r\n    background-color: var(--background-color);\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    color: white;\r\n}\r\n\r\nh1{\r\n    font-family: 'Javar', sans-serif;\r\n    text-align: center;\r\n    /* font-weight: 600; */\r\n}\r\n\r\nh1,h2{\r\n    margin-bottom: var(--headers-margin-bottom);\r\n}\r\n\r\nh2{\r\n    font-size: var(--section-header-font);\r\n    text-align: center;\r\n}\r\n\r\nh3{\r\n    margin-left: 2rem;\r\n    color: white;\r\n}\r\n\r\nheader{\r\n    height: 5rem;\r\n    background-color: var(--secondary-background-color);\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    position: sticky;\r\n    top: 0;\r\n    border-bottom: 1px solid var(--secondary-font-color);\r\n    z-index: 10;\r\n}\r\n\r\n.header-logo {\r\n    max-width: auto;\r\n    max-height: 60px;\r\n    margin-left: 1.5rem;\r\n}\r\n\r\n.header-logo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nnav{\r\n    display: flex;\r\n    gap: 2rem;\r\n    margin-right: 2rem ;\r\n}\r\n\r\n.active-btn-colors{\r\n    color: var(--secondary-font-color);\r\n}\r\n\r\nnav button{\r\n    background: none;\r\n    border: none;\r\n    padding: 0;\r\n    color: inherit;\r\n    font: inherit;\r\n    cursor: pointer;\r\n}\r\n\r\nnav button:hover{\r\n    color: var(--secondary-font-color);\r\n    filter: brightness(130%);\r\n}\r\n\r\nnav button {\r\n    position: relative;\r\n}\r\n\r\nnav button::after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: -3px;\r\n    left: 0;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: var(--secondary-font-color);\r\n    transition: width 0.2s ease;\r\n}\r\n\r\nnav button:hover::after {\r\n    width: 100%;\r\n}\r\n\r\n\r\n        /* Content */\r\n#content{\r\n    min-height: 100vh;\r\n}\r\n\r\n.home{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.section-1{\r\n    min-height: 90vh;\r\n    margin-top: var(--main-content-margin-top);\r\n    margin-bottom: var(--section-bottom-margin);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: var(--main-section-width);\r\n}\r\n\r\n.section-1 h1{\r\n    font-size: 2.8rem;\r\n    color: var(--secondary-font-color);\r\n}\r\n\r\n.section-1 h2{\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.main-logo{\r\n    width: 100%;\r\n    border-radius: var(--box-radius);\r\n}\r\n\r\n.section-2{\r\n    /* background-color: rgb(76, 56, 30); */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    width: var(--main-section-width);\r\n    margin-bottom: var(--section-bottom-margin);\r\n}\r\n\r\n\r\n\r\n.sec2-boxes{\r\n    display: flex;\r\n    /* width: 100%; */\r\n    justify-content: space-between;\r\n    column-gap: 2rem;\r\n}\r\n\r\n.sec2-box{\r\n    background-color: var(--secondary-background-color);\r\n    min-height: 15rem;\r\n    flex: 1;\r\n    border-radius: var(--box-radius);\r\n    padding: 1rem 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    width: 100%;\r\n}\r\n\r\n.emoji{\r\n    font-size: 2rem;\r\n}\r\n\r\n.theme{\r\n    font-size: 1.3rem;\r\n    color: var(--secondary-font-color);\r\n    text-align: center;\r\n}\r\n\r\n.text{\r\n    font-size: 1rem;\r\n    text-align: center;\r\n    line-height: 1.8;\r\n    color: var(--third-font-color);\r\n}\r\n\r\n.section-3{\r\n    background-color: var(--secondary-background-color);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    width: var(--main-section-width);\r\n    margin-bottom: var(--main-content-margin-bottom);\r\n    padding: 1rem 2rem;\r\n    line-height: 2;\r\n}\r\n\r\n.section-3 h2{\r\n    color: var(--secondary-font-color);\r\n}\r\n\r\n.section-3 p{\r\n    color: var(--third-font-color);\r\n    font-size: 1rem;\r\n}\r\n\r\n\r\n                                             /* Menu */\r\n.menu{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: var(--main-content-margin-top);\r\n}\r\n\r\n\r\n.menu h2{\r\n    margin-bottom: var(--headers-margin-bottom);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: var(--main-section-width);\r\n}    \r\n\r\n.food-container{\r\n    width: var(--main-section-width);\r\n    margin-bottom: var(--section-bottom-margin);\r\n    min-height: 60vh;\r\n    display: flex;  \r\n    flex-direction: row;\r\n    gap: 1.5rem;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.food-container-last{\r\n    width: var(--main-section-width);\r\n    margin-bottom: var(--main-content-margin-bottom);\r\n    min-height: 60vh;\r\n    display: flex;  \r\n    flex-direction: row;\r\n    gap: 1.5rem;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.food-box{\r\n    flex: 0 0 calc(33.33% - 1rem);\r\n    background-color: var(--secondary-background-color);\r\n    border-radius: var(--box-radius);\r\n    overflow: hidden;\r\n    display: flex;\r\n    flex-direction: column;\r\n    transition: transform 0.2s ease;\r\n\r\n}   \r\n\r\n.food-box:hover{\r\n    filter: brightness(110%);\r\n    transform: translateY(-5px);\r\n}   \r\n\r\n.starterImg{\r\n    flex: 0 0 240px;\r\n    overflow: hidden;\r\n}\r\n\r\n.starterImg img{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.starterDetails1{\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    padding: var(--foodBox-description-padding);\r\n}\r\n\r\n.food-details-name{\r\n    margin: 0;\r\n    color: var(--secondary-font-color);\r\n    font-size: var(--foodName-font-size);\r\n}\r\n\r\n.food-details-description{\r\n    margin: var(--foodBox-description-margin-top-bottom);\r\n    line-height: 1.7;\r\n    color: var(--third-font-color);\r\n}\r\n\r\n.food-details-price{\r\n    font-size: var(--price-font-size);\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n\r\n                            /* About */\r\n.about{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: var(--main-content-margin-top);\r\n}\r\n\r\n.about-section{\r\n    background-color: var(--secondary-background-color);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    width: var(--main-section-width);\r\n    margin-bottom: 4rem;\r\n    padding: 2.5rem 2.5rem;\r\n    border-radius: var(--box-radius);\r\n}\r\n\r\n.about-section-last{\r\n    background-color: var(--secondary-background-color);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    width: var(--main-section-width);\r\n    margin-bottom: 4rem;\r\n    padding: 2.5rem 2.5rem;\r\n    border-radius: var(--box-radius);\r\n}\r\n\r\n.about-section-header{\r\n    color: var(--secondary-font-color);\r\n}\r\n\r\n.about-section-text{\r\n    color: var(--third-font-color);\r\n    line-height: 2;\r\n    display: flex;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n                /* Media query */\r\n\r\n@media only screen and (max-width: 600px) {\r\n\r\nheader{\r\n    height: 5rem;\r\n}\r\n\r\n.header-logo {\r\n    max-width: auto;\r\n    max-height: 50px;\r\n    margin-left: 1rem;\r\n}\r\n\r\nnav{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    font-size: 0.8rem;\r\n    /* margin-right: 2rem ; */\r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n    font-size: 2rem;\r\n}\r\n\r\nh1,h2{\r\n    margin-bottom: var(--headers-margin-bottom);\r\n}\r\n\r\nh2{\r\n    font-size: var(--font-section);\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n.section-1{\r\n    min-height: 30vh;\r\n    margin-top: var(--margin-topBottom-main-content-mobile);\r\n    margin-bottom: var(--section-bottom-margin-mobile);\r\n    display: flex;\r\n    width: var(--width-mobile);\r\n}\r\n\r\n.section-1 h1{\r\n    font-size: 2rem;\r\n}\r\n\r\n.section-1 h2{\r\n    font-size: 1.4rem;\r\n}\r\n\r\n\r\n.section-2{\r\n    width: var(--width-mobile);\r\n    margin-bottom: var(--section-bottom-margin-mobile);\r\n}\r\n\r\n\r\n\r\n.sec2-boxes{\r\n    gap: 2rem;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.sec2-box{\r\n    flex: 0 0 100%;\r\n    padding: 0.8rem 1rem;\r\n}\r\n\r\n.emoji{\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.theme{\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.text{\r\n    font-size: 0.9rem;\r\n}\r\n\r\n\r\n.section-3{\r\n    width: var(--width-mobile);\r\n    margin-bottom: var(--margin-topBottom-main-content-mobile);\r\n    padding: 1rem 1rem;\r\n    line-height: 1.8;\r\n}\r\n\r\n.section-3 p{\r\n    color: var(--third-font-color);\r\n    font-size: 0.9rem;\r\n}\r\n\r\n\r\n.menu{\r\n    margin-top: var(--margin-topBottom-main-content-mobile);\r\n}\r\n\r\n.menu h2{\r\n    margin-bottom: var(--headers-margin-bottom);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: var(--width-mobile);\r\n}  \r\n\r\n.food-container{\r\n    width: var(--width-mobile);\r\n    margin-bottom: var(--section-bottom-margin);\r\n    min-height: 40vh;  \r\n    flex-direction: column;\r\n}\r\n\r\n.food-container-last{\r\n    width: var(--width-mobile);\r\n    margin-bottom: var(--margin-topBottom-main-content-mobile);\r\n    min-height: 40vh;\r\n}\r\n\r\n.starterImg{\r\n    flex: 0 0 200px;\r\n}\r\n\r\n.food-details-name{\r\n    font-size: var(--foodName-font-size-mobile);\r\n}\r\n\r\n.food-details-description{\r\n    margin: var(--foodBox-description-margin-top-bottom);\r\n    line-height: 1.5;\r\n    font-size: 0.9;\r\n}\r\n\r\n.food-details-price{\r\n    font-size: var(--price-font-size-mobile);\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.food-container-last{\r\n    width: var(--width-mobile);\r\n    margin-bottom: var(--margin-topBottom-main-content-mobile);\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n\r\n.about{\r\n    margin-top: var(--margin-topBottom-main-content-mobile);\r\n}\r\n\r\n.about-section{\r\n    width: var(--width-mobile);\r\n    padding: 2rem 2rem;\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n.about-section-last{\r\n    width: var(--width-mobile);\r\n    padding: 2rem 2rem;\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n.about-section-text{\r\n    line-height: 1.8;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n\r\n}                `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout(){\r\n\r\n\r\nconst content = document.getElementById('content');\r\nconst about = document.createElement('div')\r\nabout.classList.add('about');\r\ncontent.append(about);\r\n\r\nconst menuSection1 = document.createElement('div');\r\nmenuSection1.classList.add('about-section');\r\nconst section1Header = document.createElement('h2');\r\nsection1Header.classList.add('about-section-header')\r\nsection1Header.textContent = \"Our Story\"\r\nconst section1Text = document.createElement('p');\r\nsection1Text.classList.add('about-section-text');\r\nsection1Text.textContent = \"Caravan Kitchen was born from a love for Uzbek culinary traditions. Inspired by the rich flavors of the Silk Road, we bring authentic recipes to life using fresh, local ingredients. Since our opening, we’ve been serving classic dishes like plov, somsa, and shashlik, crafted with care by our skilled chefs, all in a warm, inviting atmosphere that celebrates the spirit of Uzbek hospitality.\"\r\nmenuSection1.append(section1Header, section1Text);\r\n\r\n\r\nconst menuSection2 = document.createElement('div');\r\nmenuSection2.classList.add('about-section');\r\nconst section2Header = document.createElement('h2');\r\nsection2Header.classList.add('about-section-header')\r\nsection2Header.textContent = \"Location\"\r\nconst section2Text = document.createElement('p');\r\nsection2Text.classList.add('about-section-text');\r\nsection2Text.innerHTML = `📍 5 Usta Olim St, 100109 <br>  Tashkent, Uzbekistan`;\r\nmenuSection2.append(section2Header, section2Text);\r\n\r\n\r\nconst menuSection3 = document.createElement('div');\r\nmenuSection3.classList.add('about-section-last');\r\nconst section3Header = document.createElement('h2');\r\nsection3Header.classList.add('about-section-header')\r\nsection3Header.textContent = \"Contact\"\r\nconst section3Text = document.createElement('p');\r\nsection3Text.classList.add('about-section-text');\r\nsection3Text.innerHTML = `📞 (71) 006 77 67 <br>📧  caravan@assist.com`;\r\nmenuSection3.append(section3Header, section3Text);\r\n\r\nabout.append(menuSection1, menuSection2, menuSection3);\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _img_main_logo_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/main-logo.webp */ \"./src/img/main-logo.webp\");\n\r\n\r\nfunction loadHome(){\r\n\r\n    const content = document.getElementById('content');\r\n\r\n    function createElement(element, classname, content){\r\n        element = document.createElement(element);\r\n        if(classname) element.classList.add(classname);\r\n        if(content) element.textContent = content;\r\n        return element;\r\n    }\r\n\r\n\r\n    const home = document.createElement('div');\r\n    home.classList.add('home')\r\n    content.append(home);\r\n\r\n    const section1 = document.createElement('div');\r\n    section1.classList.add('section-1')\r\n\r\n\r\n    const section1Header1 = document.createElement('h1');\r\n    section1Header1.textContent = \"Caravan Kitchen\";\r\n\r\n    const section1Header2 = document.createElement('h2');\r\n    section1Header2.textContent = \"Gourmet taste, nomadic soul\"; \r\n\r\n    const mainLogo = document.createElement('img');\r\n    mainLogo.classList.add('main-logo');\r\n    mainLogo.src = _img_main_logo_webp__WEBPACK_IMPORTED_MODULE_0__;\r\n    mainLogo.alt=\"National Uzbek Food\";\r\n\r\n    section1.append(section1Header1, section1Header2, mainLogo);\r\n\r\n\r\n\r\n    const section2 = document.createElement('div');\r\n    section2.classList.add('section-2')\r\n\r\n\r\n    const section2Header2 = document.createElement('h2');\r\n    section2Header2.textContent = \"Our Specialties\";\r\n\r\n    const sec2Boxes = document.createElement('div');\r\n    sec2Boxes.classList.add('sec2-boxes')\r\n    section2.append(section2Header2, sec2Boxes);\r\n\r\n    const firstSec2Box = document.createElement('div');\r\n    firstSec2Box.classList.add('sec2-box');\r\n    const emoji1 = createElement('p', \"emoji\", \"🔥\");\r\n    const theme1 = createElement('p', \"theme\", \"Our Heritage\");\r\n    const text1 = createElement('p', \"text\", \"Traditional recipes crafted with rich spices and time-honored techniques\");\r\n    firstSec2Box.append(emoji1, theme1, text1);\r\n\r\n    const secondSec2Box = document.createElement('div');\r\n    secondSec2Box.classList.add('sec2-box');\r\n    const emoji2 = createElement('p', \"emoji\", \"🍽️\");\r\n    const theme2 = createElement('p', \"theme\", \"Caravan Hospitality\");\r\n    const text2 = createElement('p', \"text\", \"Warm service inspired by the Silk Road traditions of sharing and gathering\");\r\n    secondSec2Box.append(emoji2, theme2, text2);\r\n\r\n    const thirdSec2Box = document.createElement('div');\r\n    thirdSec2Box.classList.add('sec2-box');\r\n    const emoji3 = createElement('p', \"emoji\", \"👨‍🍳\");\r\n    const theme3 = createElement('p', \"theme\", \"Culinary Craftsmanship\");\r\n    const text3 = createElement('p', \"text\", \"Every dish prepared with care, skill, and respect for Uzbek culinary roots\");\r\n    thirdSec2Box.append(emoji3, theme3, text3);\r\n\r\n    sec2Boxes.append(firstSec2Box, secondSec2Box, thirdSec2Box);\r\n\r\n\r\n    const section3 = document.createElement('div');\r\n    section3.classList.add('section-3')\r\n\r\n\r\n    const sec3Header = createElement('h2', null, \"Opening Hours\");\r\n    const sec3p1 = createElement('p', null, \"Mon – Fri: 11:00 AM – 10:00 PM\");\r\n    const sec3p2 = createElement('p', null, \"Saturday: 12:00 PM – 11:00 PM\");\r\n    const sec3p3 = createElement('p', null, \"Sunday: Closed\");\r\n\r\n    section3.append(sec3Header, sec3p1, sec3p2, sec3p3);\r\n\r\n\r\n    home.append(section1, section2, section3);\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _img_karavan_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/karavan.png */ \"./src/img/karavan.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst homeBtn = document.querySelector('.home-btn');\r\nconst menuBtn = document.querySelector('.menu-btn');\r\nconst aboutBtn = document.querySelector('.about-btn');\r\nconst headerLogo = document.querySelector('.header-logo');\r\nheaderLogo.src = _img_karavan_png__WEBPACK_IMPORTED_MODULE_4__;      \r\n\r\n\r\nfunction clearContent(){\r\n    document.getElementById('content').innerHTML = \"\";\r\n}\r\n\r\nfunction setActiveBtn(btn){\r\n    [homeBtn, menuBtn, aboutBtn].forEach(b => b.classList.remove('active-btn-colors'))\r\n    btn.classList.add('active-btn-colors');\r\n}   \r\n\r\nheaderLogo.addEventListener('click', () => {\r\n    clearContent();\r\n    setActiveBtn(aboutBtn)\r\n    ;(0,_about_js__WEBPACK_IMPORTED_MODULE_3__.loadAbout)();\r\n})\r\n\r\nhomeBtn.addEventListener('click', () => {\r\n    clearContent();\r\n    setActiveBtn(homeBtn)\r\n    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\n})\r\n\r\nmenuBtn.addEventListener('click', () => {\r\n    clearContent();\r\n    setActiveBtn(menuBtn)\r\n    ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\r\n})\r\n\r\naboutBtn.addEventListener('click', () => {\r\n    clearContent();\r\n    setActiveBtn(aboutBtn)\r\n    ;(0,_about_js__WEBPACK_IMPORTED_MODULE_3__.loadAbout)();\r\n})\r\n\r\n\r\n;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\nhomeBtn.classList.add('active-btn-colors')\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _img_somsa_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/somsa.webp */ \"./src/img/somsa.webp\");\n/* harmony import */ var _img_norin_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/norin.webp */ \"./src/img/norin.webp\");\n/* harmony import */ var _img_achik_chuchuk_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/achik-chuchuk.webp */ \"./src/img/achik-chuchuk.webp\");\n/* harmony import */ var _img_plov_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/plov.jpg */ \"./src/img/plov.jpg\");\n/* harmony import */ var _img_shashlik_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/shashlik.webp */ \"./src/img/shashlik.webp\");\n/* harmony import */ var _img_honim_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/honim.webp */ \"./src/img/honim.webp\");\n/* harmony import */ var _img_moshxorda_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/moshxorda.webp */ \"./src/img/moshxorda.webp\");\n/* harmony import */ var _img_lagman_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/lagman.webp */ \"./src/img/lagman.webp\");\n/* harmony import */ var _img_dimlama_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/dimlama.webp */ \"./src/img/dimlama.webp\");\n/* harmony import */ var _img_nisholda_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/nisholda.webp */ \"./src/img/nisholda.webp\");\n/* harmony import */ var _img_baklava_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/baklava.webp */ \"./src/img/baklava.webp\");\n/* harmony import */ var _img_medovik_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/medovik.webp */ \"./src/img/medovik.webp\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction loadMenu(){\r\n\r\nconst content = document.getElementById('content');\r\n\r\nfunction createFoodBox(imgSrc, name, description, price){\r\n    const foodBox = document.createElement('div');\r\n    foodBox.classList.add('food-box');\r\n\r\n    const foodImgBox = document.createElement('div');\r\n    foodImgBox.classList.add('starterImg');\r\n    const foodImg = document.createElement('img');\r\n    foodImg.src = imgSrc;\r\n    foodImgBox.append(foodImg);\r\n\r\n    const foodDetailsBox = document.createElement('div');\r\n    foodDetailsBox.classList.add('starterDetails1');\r\n    foodBox.append(foodImgBox, foodDetailsBox);\r\n\r\n    const foodDetailsName = document.createElement('h3');\r\n    foodDetailsName.classList.add('food-details-name');\r\n    foodDetailsName.textContent = name;\r\n\r\n    const foodDetailsDescription = document.createElement('p');\r\n    foodDetailsDescription.classList.add('food-details-description');\r\n    foodDetailsDescription.textContent = description;\r\n\r\n    const foodDetailsPrice = document.createElement('p');\r\n    foodDetailsPrice.classList.add('food-details-price');\r\n    foodDetailsPrice.textContent = price\r\n    foodDetailsBox.append(foodDetailsName, foodDetailsDescription, foodDetailsPrice);\r\n\r\n    return foodBox;\r\n}\r\n\r\n\r\n\r\nconst menu = document.createElement('div');\r\nmenu.classList.add('menu')\r\ncontent.append(menu);\r\n\r\nconst starter = document.createElement('h2');\r\nstarter.textContent = \"Starters\"; \r\nconst starterFoodContainer = document.createElement('div');\r\nstarterFoodContainer.classList.add('food-container');\r\nmenu.append(starter, starterFoodContainer);\r\n\r\nlet starterFood1Name =  \"Samsa\";\r\nlet starterFood1Description =  \"Flaky pastry filled with seasoned meat and onions, baked until golden in a traditional tandoor oven.\";\r\nlet starterFood1Price =  \"$1\";\r\nconst starterFoodbox1 = createFoodBox(_img_somsa_webp__WEBPACK_IMPORTED_MODULE_0__, starterFood1Name, starterFood1Description, starterFood1Price);\r\n\r\nlet starterFood2Name =  \"Naryn\";\r\nlet starterFood2Description =  \"Hand-cut noodles mixed with tender meat, served chilled with light seasoning.\";\r\nlet starterFood2Price =  \"$4\"\r\nconst starterFoodbox2 = createFoodBox(_img_norin_webp__WEBPACK_IMPORTED_MODULE_1__, starterFood2Name, starterFood2Description, starterFood2Price);\r\n\r\n\r\nlet starterFood3Name =  \"Achichuk\";\r\nlet starterFood3Description =  \"HaFresh tomatoes, onions, and herbs, lightly seasoned for a crisp, refreshing taste.\";\r\nlet starterFood3Price =  \"$1.50\"\r\nconst starterFoodbox3 = createFoodBox(_img_achik_chuchuk_webp__WEBPACK_IMPORTED_MODULE_2__, starterFood3Name, starterFood3Description, starterFood3Price);\r\n\r\nstarterFoodContainer.append(starterFoodbox1, starterFoodbox2, starterFoodbox3);\r\n\r\n\r\n\r\n\r\nconst mainDish = document.createElement('h2');\r\nmainDish.textContent = \"Main Dishes\"; \r\nconst mainFoodContainer = document.createElement('div');\r\nmainFoodContainer.classList.add('food-container');\r\nmenu.append(mainDish, mainFoodContainer);\r\n\r\nlet mainFood1Name =  \"Plov\";\r\nlet mainFood1Description =  \"Hearty rice with tender meat, carrots, and onions, cooked in traditional Uzbek style.\";\r\nlet mainFood1Price =  \"$5\";\r\nconst mainFoodbox1 = createFoodBox(_img_plov_jpg__WEBPACK_IMPORTED_MODULE_3__, mainFood1Name, mainFood1Description, mainFood1Price);\r\n\r\nlet mainFood2Name =  \"Kebab\";\r\nlet mainFood2Description =  \"Juicy skewered meat grilled over open flames, seasoned for rich, smoky flavor.\";\r\nlet mainFood2Price =  \"$1.60\";\r\nconst mainFoodbox2 = createFoodBox(_img_shashlik_webp__WEBPACK_IMPORTED_MODULE_4__, mainFood2Name, mainFood2Description, mainFood2Price);\r\n\r\nlet mainFood3Name =  \"Hanum\";\r\nlet mainFood3Description =  \"Soft steamed dough layered with seasoned meat and onions, served warm and flavorful.\";\r\nlet mainFood3Price =  \"$4\";\r\nconst mainFoodbox3 = createFoodBox(_img_honim_webp__WEBPACK_IMPORTED_MODULE_5__, mainFood3Name, mainFood3Description, mainFood3Price);\r\n\r\nlet mainFood4Name =  \"Mashhurda\";\r\nlet mainFood4Description =  \"Hearty mung bean and rice soup with tender meat and vegetables.\";\r\nlet mainFood4Price =  \"$3\";\r\nconst mainFoodbox4 = createFoodBox(_img_moshxorda_webp__WEBPACK_IMPORTED_MODULE_6__, mainFood4Name, mainFood4Description, mainFood4Price);\r\n\r\nlet mainFood5Name =  \"Laghman\";\r\nlet mainFood5Description =  \"Hand-pulled noodles served with tender meat, vegetables, and flavorful broth.\";\r\nlet mainFood5Price =  \"$2.50\";\r\nconst mainFoodbox5 = createFoodBox(_img_lagman_webp__WEBPACK_IMPORTED_MODULE_7__, mainFood5Name, mainFood5Description, mainFood5Price);\r\n\r\nlet mainFood6Name =  \"Dimlama\";\r\nlet mainFood6Description =  \"Slow-cooked meat and vegetables, covered and steamed with cabbage until tender and full of flavor.\";\r\nlet mainFood6Price =  \"$7\";\r\nconst mainFoodbox6 = createFoodBox(_img_dimlama_webp__WEBPACK_IMPORTED_MODULE_8__, mainFood6Name, mainFood6Description, mainFood6Price);\r\n\r\nmainFoodContainer.append(mainFoodbox1, mainFoodbox2, mainFoodbox3, mainFoodbox4, mainFoodbox5, mainFoodbox6);\r\n\r\n\r\n\r\nconst desserts = document.createElement('h2');\r\ndesserts.textContent = \"Desserts\"; \r\nconst dessertFoodContainer = document.createElement('div');\r\ndessertFoodContainer.classList.add('food-container-last');\r\nmenu.append(desserts, dessertFoodContainer);\r\n\r\nlet dessertFood1Name =  \"Nisholda\";\r\nlet dessertFood1Description =  \"Light, airy sweet made from whipped egg whites and sugar, delicately smooth and fluffy.\";\r\nlet dessertFood1Price =  \"$1\";\r\nconst dessertFoodbox1 = createFoodBox(_img_nisholda_webp__WEBPACK_IMPORTED_MODULE_9__, dessertFood1Name, dessertFood1Description, dessertFood1Price);\r\n\r\nlet dessertFood2Name =  \"Baklava\";\r\nlet dessertFood2Description =  \"Layered pastry filled with nuts and honey syrup, rich and sweet.\";\r\nlet dessertFood2Price =  \"$3\";\r\nconst dessertFoodbox2 = createFoodBox(_img_baklava_webp__WEBPACK_IMPORTED_MODULE_10__, dessertFood2Name, dessertFood2Description, dessertFood2Price);\r\n\r\nlet dessertFood3Name =  \"Medovik\";\r\nlet dessertFood3Description =  \"Layered honey cake with soft cream filling, delicate and lightly caramelized.\";\r\nlet dessertFood3Price =  \"$2\";\r\nconst dessertFoodbox3 = createFoodBox(_img_medovik_webp__WEBPACK_IMPORTED_MODULE_11__, dessertFood3Name, dessertFood3Description, dessertFood3Price);\r\n\r\ndessertFoodContainer.append(dessertFoodbox1, dessertFoodbox2, dessertFoodbox3);\r\n\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ },

/***/ "./src/img/achik-chuchuk.webp"
/*!************************************!*\
  !*** ./src/img/achik-chuchuk.webp ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"d877cb9b664feb1480fa.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/achik-chuchuk.webp?\n}");

/***/ },

/***/ "./src/img/baklava.webp"
/*!******************************!*\
  !*** ./src/img/baklava.webp ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f9730f29f49dc9bbb3b9.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/baklava.webp?\n}");

/***/ },

/***/ "./src/img/dimlama.webp"
/*!******************************!*\
  !*** ./src/img/dimlama.webp ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f8638f624c6c604b2238.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/dimlama.webp?\n}");

/***/ },

/***/ "./src/img/honim.webp"
/*!****************************!*\
  !*** ./src/img/honim.webp ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c90eee1508fea75fe844.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/honim.webp?\n}");

/***/ },

/***/ "./src/img/karavan.png"
/*!*****************************!*\
  !*** ./src/img/karavan.png ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"73e555a6e393a4f0328c.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/karavan.png?\n}");

/***/ },

/***/ "./src/img/lagman.webp"
/*!*****************************!*\
  !*** ./src/img/lagman.webp ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"821ddf3b41ff0e341997.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/lagman.webp?\n}");

/***/ },

/***/ "./src/img/main-logo.webp"
/*!********************************!*\
  !*** ./src/img/main-logo.webp ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e8aee7e05d1a3cc33aec.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/main-logo.webp?\n}");

/***/ },

/***/ "./src/img/medovik.webp"
/*!******************************!*\
  !*** ./src/img/medovik.webp ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"0f0a93e4c988dc6136f1.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/medovik.webp?\n}");

/***/ },

/***/ "./src/img/moshxorda.webp"
/*!********************************!*\
  !*** ./src/img/moshxorda.webp ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"29d0092c2ecac5c6f815.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/moshxorda.webp?\n}");

/***/ },

/***/ "./src/img/nisholda.webp"
/*!*******************************!*\
  !*** ./src/img/nisholda.webp ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"aa05f8af527965be53c0.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/nisholda.webp?\n}");

/***/ },

/***/ "./src/img/norin.webp"
/*!****************************!*\
  !*** ./src/img/norin.webp ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"88f379c4c9d61c87c701.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/norin.webp?\n}");

/***/ },

/***/ "./src/img/plov.jpg"
/*!**************************!*\
  !*** ./src/img/plov.jpg ***!
  \**************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3a24f28fa73df82ef02e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/plov.jpg?\n}");

/***/ },

/***/ "./src/img/shashlik.webp"
/*!*******************************!*\
  !*** ./src/img/shashlik.webp ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"dc4d2ee585784cad81b1.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/shashlik.webp?\n}");

/***/ },

/***/ "./src/img/somsa.webp"
/*!****************************!*\
  !*** ./src/img/somsa.webp ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"63536d5dee0debac921f.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/somsa.webp?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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