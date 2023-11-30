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

/***/ "./module/js/car-select.js":
/*!*********************************!*\
  !*** ./module/js/car-select.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ carSelect)\n/* harmony export */ });\nfunction carSelect() {\r\n  const imgs = document.querySelectorAll('.list-car img');\r\n  const imgPrincipal = document.querySelector('#img-main img');\r\n  const events = ['touchstart', 'click'];\r\n\r\n  function handleSelect({ target }) {\r\n    const srcImg = target.getAttribute('src');\r\n    imgPrincipal.setAttribute('src', srcImg);\r\n  }\r\n\r\n  if (imgs.length > 0) {\r\n    imgs.forEach((img) => {\r\n      events.forEach((event) => img.addEventListener(event, handleSelect));\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://intacto-motors/./module/js/car-select.js?");

/***/ }),

/***/ "./module/js/changeInfo.js":
/*!*********************************!*\
  !*** ./module/js/changeInfo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeInfo)\n/* harmony export */ });\nfunction changeInfo() {\r\n  const li = document.querySelectorAll('.slide li');\r\n  const btnCar = document.querySelector('.btn-automovel a');\r\n\r\n  function listaLi() {\r\n    li.forEach((li) => {\r\n      if (li.classList.contains('active')) {\r\n        const hrefListaPages = li.children[2].getAttribute('href');\r\n        btnCar.setAttribute('href', hrefListaPages);\r\n      }\r\n    });\r\n  }\r\n\r\n  function handleMutation(mutations) {\r\n    mutations.forEach((mutation) => {\r\n      if (mutation.target.classList.contains('active')) {\r\n        listaLi();\r\n      }\r\n    });\r\n  }\r\n\r\n  const observer = new MutationObserver(handleMutation);\r\n  li.forEach((item) => {\r\n    observer.observe(item, { attributes: true });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://intacto-motors/./module/js/changeInfo.js?");

/***/ }),

/***/ "./module/js/debounce.js":
/*!*******************************!*\
  !*** ./module/js/debounce.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\r\n  let timer;\r\n  return (...args) => {\r\n    if (timer) clearTimeout(timer);\r\n    timer = setTimeout(() => {\r\n      callback(...args);\r\n      timer = null;\r\n    }, delay);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://intacto-motors/./module/js/debounce.js?");

/***/ }),

/***/ "./module/js/menu-mobile.js":
/*!**********************************!*\
  !*** ./module/js/menu-mobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./module/js/outsideclick.js\");\n\r\n\r\nclass MenuMobile {\r\n  constructor(menuButton, menuList, events) {\r\n    this.menuButton = document.querySelector(menuButton);\r\n    this.menuList = document.querySelector(menuList);\r\n    this.activeClass = 'active';\r\n\r\n    // define touchstart e click como argumento padrão\r\n    // de events caso o usuário não define\r\n    if (events === undefined) this.events = ['touchstart', 'click'];\r\n    else this.events = events;\r\n\r\n    this.openMenu = this.openMenu.bind(this);\r\n  }\r\n\r\n  openMenu(event) {\r\n    event.preventDefault();\r\n    this.menuList.classList.add(this.activeClass);\r\n    this.menuButton.classList.add(this.activeClass);\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList, this.events, () => {\r\n      this.menuList.classList.remove(this.activeClass);\r\n      this.menuButton.classList.remove(this.activeClass);\r\n    });\r\n  }\r\n\r\n  addMenuMobileEvents() {\r\n    this.events.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));\r\n  }\r\n\r\n  init() {\r\n    if (this.menuButton && this.menuList) {\r\n      this.addMenuMobileEvents();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://intacto-motors/./module/js/menu-mobile.js?");

/***/ }),

/***/ "./module/js/outsideclick.js":
/*!***********************************!*\
  !*** ./module/js/outsideclick.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = 'data-outside';\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n    });\r\n    element.setAttribute(outside, '');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://intacto-motors/./module/js/outsideclick.js?");

/***/ }),

/***/ "./module/js/scrollSuave.js":
/*!**********************************!*\
  !*** ./module/js/scrollSuave.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scrollSuave)\n/* harmony export */ });\n// Identificar o clique no menu\r\n// Verificar o item que foi clicado e fazer referência com o alvo\r\n// Verificar a distância entre o alvo e o topo\r\n// Animar o scroll até o alvo\r\nfunction scrollSuave() {\r\n  const menuItems = document.querySelectorAll('#menu a[href^=\"#\"]');\r\n\r\n  function handleScrollSuave(top, left) {\r\n    window.scrollTo({ top, left, behavior: 'smooth' });\r\n  }\r\n\r\n  function leftTop(item) {\r\n    const top = item.offsetTop - 20;\r\n    const left = item.offsetLeft;\r\n    handleScrollSuave(top, left);\r\n  }\r\n\r\n  function handleReference(event) {\r\n    event.preventDefault();\r\n    const hrefMenu = event.target.getAttribute('href');\r\n    const section = document.querySelectorAll(`${hrefMenu}`);\r\n    section.forEach((item) => leftTop(item));\r\n  }\r\n\r\n  menuItems.forEach((menu) => {\r\n    menu.addEventListener('click', handleReference);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://intacto-motors/./module/js/scrollSuave.js?");

/***/ }),

/***/ "./module/js/slide-main.js":
/*!*********************************!*\
  !*** ./module/js/slide-main.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ slideMain)\n/* harmony export */ });\nclass slideMain {\r\n  constructor(imgs, slide) {\r\n    this.imgs = document.querySelectorAll(imgs);\r\n    this.slide = document.querySelector(slide);\r\n    this.count = 0;\r\n  }\r\n\r\n  styleTransform(index) {\r\n    const imgArray = [...this.imgs];\r\n    if (this.slidePosition(index) === undefined) return undefined;\r\n    imgArray.map((img) => {\r\n      img.style.transform = `translateX(${this.slidePosition(index)}px)`;\r\n    });\r\n    return index;\r\n  }\r\n\r\n  slidePosition(index) {\r\n    const slideArray = Array.from(this.slide.children).map((element) => {\r\n      const position = -element.offsetLeft;\r\n      return {\r\n        position,\r\n      };\r\n    });\r\n    return slideArray[index].position;\r\n  }\r\n\r\n  temporizadorSlide() {\r\n    setInterval(() => {\r\n      this.count += 1;\r\n      if (this.count < 4) {\r\n        this.styleTransform(this.count);\r\n      } else {\r\n        (this.count = -1);\r\n      }\r\n    }, 10000);\r\n  }\r\n\r\n  init() {\r\n    if (this.imgs && this.slide) {\r\n      this.temporizadorSlide();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://intacto-motors/./module/js/slide-main.js?");

/***/ }),

/***/ "./module/js/slide.js":
/*!****************************!*\
  !*** ./module/js/slide.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slide: () => (/* binding */ Slide),\n/* harmony export */   \"default\": () => (/* binding */ SlideNav)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./module/js/debounce.js\");\n\r\n\r\nclass Slide {\r\n  constructor(slide, wrapper) {\r\n    this.slide = document.querySelector(slide);\r\n    this.wrapper = document.querySelector(wrapper);\r\n    this.dist = { finalPosition: 0, startX: 0, movement: 0 };\r\n    this.activeClass = 'active';\r\n    this.changeEvent = new Event('changeEvent');\r\n  }\r\n\r\n  transition(active) {\r\n    this.slide.style.transition = active ? 'transform .3s' : '';\r\n  }\r\n\r\n  moveSlide(distX) {\r\n    this.dist.movePosition = distX;\r\n    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;\r\n  }\r\n\r\n  updatePosition(clientX) {\r\n    this.dist.movement = (this.dist.startX - clientX) * 1.6;\r\n    return this.dist.finalPosition - this.dist.movement;\r\n  }\r\n\r\n  onStart(event) {\r\n    let movetype;\r\n    if (event.type === 'mousedown') {\r\n      event.preventDefault();\r\n      this.dist.startX = event.clientX;\r\n      movetype = 'mousemove';\r\n    } else {\r\n      this.dist.startX = event.changedTouches[0].clientX;\r\n      movetype = 'touchmove';\r\n    }\r\n    this.wrapper.addEventListener(movetype, this.onMove);\r\n    this.transition(false);\r\n  }\r\n\r\n  onMove(event) {\r\n    const pointerPosition =\r\n      event.type === 'mousemove'\r\n        ? event.clientX\r\n        : event.changedTouches[0].clientX;\r\n    const finalPosition = this.updatePosition(pointerPosition);\r\n    this.moveSlide(finalPosition);\r\n  }\r\n\r\n  onEnd(event) {\r\n    const movetype = event.type === 'mouseup' ? 'mousemove' : 'touchmove';\r\n    this.wrapper.removeEventListener(movetype, this.onMove);\r\n    this.dist.finalPosition = this.dist.movePosition;\r\n    this.transition(true);\r\n    this.changeSlideOnEnd();\r\n  }\r\n\r\n  changeSlideOnEnd() {\r\n    if (this.dist.movement > 120 && this.index.next !== undefined) {\r\n      this.activeNextSlide();\r\n    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {\r\n      this.activePrevSlide();\r\n    } else {\r\n      this.changeSlide(this.index.active);\r\n    }\r\n  }\r\n\r\n  addSlideEvents() {\r\n      this.wrapper.addEventListener('mousedown', this.onStart);\r\n    this.wrapper.addEventListener('touchstart', this.onStart);\r\n    this.wrapper.addEventListener('mouseup', this.onEnd);\r\n    this.wrapper.addEventListener('touchend', this.onEnd);\r\n  }\r\n\r\n  // Slides config\r\n\r\n  slidePosition(slide) {\r\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\r\n    return -(slide.offsetLeft - margin);\r\n  }\r\n\r\n  slidesConfig() {\r\n    this.slideArray = [...this.slide.children].map((element) => {\r\n      const position = this.slidePosition(element);\r\n      return { position, element };\r\n    });\r\n  }\r\n\r\n  slidesIndexNav(index) {\r\n    const last = this.slideArray.length - 1;\r\n    this.index = {\r\n      prev: index ? index - 1 : undefined,\r\n      active: index,\r\n      next: index === last ? undefined : index + 1,\r\n    };\r\n  }\r\n\r\n  changeSlide(index) {\r\n    const activeSlide = this.slideArray[index];\r\n    this.moveSlide(activeSlide.position);\r\n    this.slidesIndexNav(index);\r\n    this.dist.finalPosition = activeSlide.position;\r\n    this.changeActiveClass();\r\n    this.wrapper.dispatchEvent(this.changeEvent);\r\n  }\r\n\r\n  changeActiveClass() {\r\n    this.slideArray.forEach((item) =>\r\n      item.element.classList.remove(this.activeClass),\r\n    );\r\n    this.slideArray[this.index.active].element.classList.add(this.activeClass);\r\n  }\r\n\r\n  activePrevSlide() {\r\n    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);\r\n  }\r\n\r\n  activeNextSlide() {\r\n    if (this.index.next !== undefined) this.changeSlide(this.index.next);\r\n  }\r\n\r\n  onResize() {\r\n    setTimeout(() => {\r\n      this.slidesConfig();\r\n      this.changeSlide(this.index.active);\r\n    }, 1000);\r\n  }\r\n\r\n  addResizeEvent() {\r\n    window.addEventListener('resize', this.onResize);\r\n  }\r\n\r\n  bindEvents() {\r\n    this.onStart = this.onStart.bind(this);\r\n    this.onMove = this.onMove.bind(this);\r\n    this.onEnd = this.onEnd.bind(this);\r\n\r\n    this.activePrevSlide = this.activePrevSlide.bind(this);\r\n    this.activeNextSlide = this.activeNextSlide.bind(this);\r\n\r\n    this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.onResize.bind(this), 200);\r\n  }\r\n\r\n  init() {\r\n    if (this.slide && this.wrapper) {\r\n      this.bindEvents();\r\n      this.transition(true);\r\n      this.addSlideEvents();\r\n      this.slidesConfig();\r\n      this.addResizeEvent();\r\n      this.changeSlide(0);\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\r\nclass SlideNav extends Slide {\r\n  constructor(slide, wrapper) {\r\n    super(slide, wrapper);\r\n    this.bindControlEvents();\r\n  }\r\n\r\n  addArrow(prev, next) {\r\n    this.prevElement = document.querySelector(prev);\r\n    this.nextElement = document.querySelector(next);\r\n    this.addArrowEvent();\r\n  }\r\n\r\n  addArrowEvent() {\r\n    this.prevElement.addEventListener('click', this.activePrevSlide);\r\n    this.nextElement.addEventListener('click', this.activeNextSlide);\r\n  }\r\n\r\n  createControl() {\r\n    const control = document.createElement('ul');\r\n    control.dataset.control = 'slide';\r\n    this.slideArray.forEach((item, index) => {\r\n      control.innerHTML += `<li><a href=\"#slide${index + 1}\">${\r\n        index + 1\r\n      }</a></li>`;\r\n    });\r\n    this.wrapper.appendChild(control);\r\n    return control;\r\n  }\r\n\r\n  eventControl(item, index) {\r\n    item.addEventListener('click', (event) => {\r\n      event.preventDefault();\r\n      this.changeSlide(index);\r\n    });\r\n    this.wrapper.addEventListener('changeEvent', this.activeControlItem);\r\n  }\r\n\r\n  activeControlItem() {\r\n    this.controlArray.forEach((item) =>\r\n      item.classList.remove(this.activeClass),\r\n    );\r\n    this.controlArray[this.index.active].classList.add(this.activeClass);\r\n  }\r\n\r\n  addControl(customControl) {\r\n    this.control =\r\n      document.querySelector(customControl) || this.createControl();\r\n    this.controlArray = [...this.control.children];\r\n\r\n    this.activeControlItem();\r\n    this.controlArray.forEach(this.eventControl);\r\n  }\r\n\r\n  bindControlEvents() {\r\n    this.eventControl = this.eventControl.bind(this);\r\n    this.activeControlItem = this.activeControlItem.bind(this);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://intacto-motors/./module/js/slide.js?");

/***/ }),

/***/ "./module/script.js":
/*!**************************!*\
  !*** ./module/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/menu-mobile.js */ \"./module/js/menu-mobile.js\");\n/* harmony import */ var _js_slide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/slide.js */ \"./module/js/slide.js\");\n/* harmony import */ var _js_car_select_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/car-select.js */ \"./module/js/car-select.js\");\n/* harmony import */ var _js_slide_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/slide-main.js */ \"./module/js/slide-main.js\");\n/* harmony import */ var _js_scrollSuave_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/scrollSuave.js */ \"./module/js/scrollSuave.js\");\n/* harmony import */ var _js_changeInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/changeInfo.js */ \"./module/js/changeInfo.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst menuMobile = new _js_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]');\r\nmenuMobile.init();\r\n\r\n(0,_js_car_select_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nconst slide = new _js_slide_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.slide-container-desktop', '.slide-wrapper');\r\nconst slideMobileShow = new _js_slide_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.slide-container-mobile', '.slide-wrapper');\r\nslide.init();\r\nslide.addArrow('.prev', '.next');\r\nslide.addControl('.custom-controls');\r\nslideMobileShow.init();\r\nslideMobileShow.addControl('.custom-controls');\r\n\r\nconst slideDesktop = new _js_slide_main_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('.slide-desktop img', '.slide-desktop');\r\nconst slideMobile = new _js_slide_main_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('.slide-mobile img', '.slide-mobile');\r\nslideDesktop.init();\r\nslideMobile.init();\r\n\r\n(0,_js_scrollSuave_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_js_changeInfo_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\n\n//# sourceURL=webpack://intacto-motors/./module/script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./module/script.js");
/******/ 	
/******/ })()
;