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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n\r\n\r\nclass App {\r\n    constructor() {\r\n        new _router_js__WEBPACK_IMPORTED_MODULE_0__.Router();\r\n    }\r\n}\r\n(new App());\n\n//# sourceURL=webpack://frontend/./src/app.js?");

/***/ }),

/***/ "./src/components/expenses-create.js":
/*!*******************************************!*\
  !*** ./src/components/expenses-create.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExpensesCreate: () => (/* binding */ ExpensesCreate)\n/* harmony export */ });\nclass ExpensesCreate {\r\n    constructor() {\r\n        document.getElementById('cancel').onclick = () => {\r\n            window.location.hash = '#/expenses-main';\r\n        };\r\n        document.getElementById('create').onclick = () => {\r\n            // fetch\r\n            window.location.hash = '#/expenses-main';\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/components/expenses-create.js?");

/***/ }),

/***/ "./src/components/expenses-edit.js":
/*!*****************************************!*\
  !*** ./src/components/expenses-edit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExpensesEdit: () => (/* binding */ ExpensesEdit)\n/* harmony export */ });\nclass ExpensesEdit {\r\n    constructor() {\r\n        document.getElementById('cancel').onclick = () => {\r\n            window.location.hash = '#/expenses-main';\r\n        };\r\n        document.getElementById('save').onclick = () => {\r\n            // fetch\r\n            window.location.hash = '#/expenses-main';\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/components/expenses-edit.js?");

/***/ }),

/***/ "./src/components/expenses-main.js":
/*!*****************************************!*\
  !*** ./src/components/expenses-main.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExpensesMain: () => (/* binding */ ExpensesMain)\n/* harmony export */ });\nclass ExpensesMain {\r\n    constructor() {\r\n        this.initLib();\r\n\r\n        document.getElementById('expenses-collapse').classList.add('collapse-element-active');\r\n    }\r\n\r\n    initLib() {\r\n        $('.open-popup-link').magnificPopup({type:'inline'});\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/components/expenses-main.js?");

/***/ }),

/***/ "./src/components/incomes-create.js":
/*!******************************************!*\
  !*** ./src/components/incomes-create.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IncomesCreate: () => (/* binding */ IncomesCreate)\n/* harmony export */ });\nclass IncomesCreate {\r\n    constructor() {\r\n        document.getElementById('cancel').onclick = () => {\r\n            window.location.hash = '#/incomes-main';\r\n        };\r\n        document.getElementById('create').onclick = () => {\r\n            // fetch\r\n            window.location.hash = '#/incomes-main';\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/components/incomes-create.js?");

/***/ }),

/***/ "./src/components/incomes-edit.js":
/*!****************************************!*\
  !*** ./src/components/incomes-edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IncomesEdit: () => (/* binding */ IncomesEdit)\n/* harmony export */ });\nclass IncomesEdit {\r\n    constructor() {\r\n        document.getElementById('cancel').onclick = () => {\r\n            window.location.hash = '#/incomes-main';\r\n        };\r\n        document.getElementById('save').onclick = () => {\r\n            // fetch\r\n            window.location.hash = '#/incomes-main';\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/components/incomes-edit.js?");

/***/ }),

/***/ "./src/components/incomes-expenses-main.js":
/*!*************************************************!*\
  !*** ./src/components/incomes-expenses-main.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IncomesExpensesMain: () => (/* binding */ IncomesExpensesMain)\n/* harmony export */ });\nclass IncomesExpensesMain {\r\n    constructor() {\r\n        this.initLib();\r\n    }\r\n\r\n    initLib() {\r\n        $('.open-popup-link').magnificPopup({type:'inline'});\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/components/incomes-expenses-main.js?");

/***/ }),

/***/ "./src/components/incomes-main.js":
/*!****************************************!*\
  !*** ./src/components/incomes-main.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IncomesMain: () => (/* binding */ IncomesMain)\n/* harmony export */ });\nclass IncomesMain {\r\n    constructor() {\r\n        this.initLib();\r\n\r\n        document.getElementById('incomes-collapse').classList.add('collapse-element-active');\r\n    }\r\n\r\n    initLib() {\r\n        $('.open-popup-link').magnificPopup({type:'inline'});\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/components/incomes-main.js?");

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Layout: () => (/* binding */ Layout)\n/* harmony export */ });\nclass Layout {\r\n    constructor() {\r\n        this.sidebar = document.querySelector('#sidebar');\r\n        this.sidebarToggler = document.querySelector('.sidebar_toggler');\r\n        document.getElementById('logout').onclick = () => this.logout();\r\n\r\n        this.sidebarToggler.addEventListener('click', () => {\r\n            this.sidebar.classList.toggle('show');\r\n            this.sidebarToggler.classList.toggle('sidebar-is-active');\r\n        });\r\n\r\n        window.addEventListener('resize', () => {\r\n            this.toggleSidebar();\r\n        });\r\n\r\n        this.toggleSidebar();\r\n    }\r\n\r\n    toggleSidebar() {\r\n        const screenWidth = window.screen.width;\r\n        if (screenWidth < 992) {\r\n            this.sidebar.classList.remove('show');\r\n            this.sidebarToggler.classList.remove('sidebar-is-active');\r\n        } else {\r\n            this.sidebar.classList.add('show');\r\n            this.sidebarToggler.classList.add('sidebar-is-active');\r\n        }\r\n    }\r\n\r\n    logout() {\r\n        // fetch\r\n        window.location.hash = '#/login';\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/components/layout.js?");

/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: () => (/* binding */ Main)\n/* harmony export */ });\nclass Main {\r\n    constructor() {\r\n        const incomesChart = document.getElementById('incomes-chart');\r\n        const expensesChart = document.getElementById('expenses-chart');\r\n\r\n        this.setChartsData();\r\n\r\n        this.createChart(incomesChart, this.incomesChartData);\r\n        this.createChart(expensesChart, this.expensesChartData);\r\n    }\r\n\r\n    setChartsData() {\r\n        this.incomesChartData = {\r\n            labels: [\r\n                'Red',\r\n                'Orange',\r\n                'Yellow',\r\n                'Green',\r\n                'Blue',\r\n            ],\r\n            datasets: [{\r\n                label: 'My First Dataset',\r\n                data: [300, 50, 100, 40, 140],\r\n                backgroundColor: [\r\n                    'rgb(220 53 69)',\r\n                    'rgb(255 114 0)',\r\n                    'rgb(255 193 7)',\r\n                    'rgb(25 135 84)',\r\n                    'rgb(13 110 253)',\r\n                ],\r\n                hoverOffset: 4,\r\n                options: {\r\n                    responsive: true,\r\n                },\r\n            }]\r\n        };\r\n        this.expensesChartData = {\r\n            labels: [\r\n                'Red',\r\n                'Orange',\r\n                'Yellow',\r\n                'Green',\r\n                'Blue',\r\n            ],\r\n            datasets: [{\r\n                label: 'My First Dataset',\r\n                data: [300, 50, 100, 40, 140],\r\n                backgroundColor: [\r\n                    'rgb(220 53 69)',\r\n                    'rgb(255 114 0)',\r\n                    'rgb(255 193 7)',\r\n                    'rgb(25 135 84)',\r\n                    'rgb(13 110 253)',\r\n                ],\r\n                hoverOffset: 4,\r\n                options: {\r\n                    responsive: true,\r\n                    maintainAspectRatio: false,\r\n                },\r\n            }]\r\n        };\r\n    }\r\n\r\n    createChart(chartElement, data) {\r\n        new Chart(chartElement, {\r\n            type: 'pie',\r\n            data: data,\r\n            options: {\r\n                plugins: {\r\n                    legend: {\r\n                        maxWidth: 40\r\n                    }\r\n                }\r\n            }\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/components/main.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout.js */ \"./src/components/layout.js\");\n/* harmony import */ var _components_incomes_expenses_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/incomes-expenses-main.js */ \"./src/components/incomes-expenses-main.js\");\n/* harmony import */ var _components_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main.js */ \"./src/components/main.js\");\n/* harmony import */ var _components_incomes_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/incomes-main.js */ \"./src/components/incomes-main.js\");\n/* harmony import */ var _components_expenses_main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/expenses-main.js */ \"./src/components/expenses-main.js\");\n/* harmony import */ var _components_expenses_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/expenses-create.js */ \"./src/components/expenses-create.js\");\n/* harmony import */ var _components_incomes_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/incomes-create.js */ \"./src/components/incomes-create.js\");\n/* harmony import */ var _utils_fileUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/fileUtils.js */ \"./src/utils/fileUtils.js\");\n/* harmony import */ var _components_incomes_edit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/incomes-edit.js */ \"./src/components/incomes-edit.js\");\n/* harmony import */ var _components_expenses_edit_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/expenses-edit.js */ \"./src/components/expenses-edit.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Router {\r\n    constructor() {\r\n        this.pageContentElement = document.getElementById('page');\r\n        this.tabTitle = document.getElementById('tab-title');\r\n\r\n        window.addEventListener('DOMContentLoaded', this.openNewRoute.bind(this));\r\n        window.addEventListener('popstate', this.openNewRoute.bind(this));\r\n\r\n        this.routes = [\r\n            {\r\n                route: '#/registration',\r\n                tabTitle: 'Регистрация',\r\n                template: 'templates/auth/registration.html',\r\n                styles: [\r\n                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',\r\n                ],\r\n                useLayout: false,\r\n                onload: () => {\r\n\r\n                },\r\n            },\r\n            {\r\n                route: '#/login',\r\n                tabTitle: 'Вход в систему',\r\n                template: 'templates/auth/login.html',\r\n                styles: [\r\n                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',\r\n                ],\r\n                useLayout: false,\r\n                onload: () => {\r\n\r\n                },\r\n            },\r\n            {\r\n                route: '#/',\r\n                tabTitle: 'Главная',\r\n                pageTitle: 'Главная',\r\n                template: 'templates/main.html',\r\n                styles: [\r\n                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',\r\n                    'css/layout.css',\r\n                    'css/pages/main.css',\r\n                ],\r\n                useLayout: 'templates/layout.html',\r\n                scripts: [\r\n                    'lib/js/chart.js',\r\n                ],\r\n                onload: () => {\r\n                    new _components_layout_js__WEBPACK_IMPORTED_MODULE_0__.Layout();\r\n                    new _components_main_js__WEBPACK_IMPORTED_MODULE_2__.Main();\r\n                },\r\n            },\r\n            {\r\n                route: '#/expenses-create',\r\n                tabTitle: 'Создание категории',\r\n                pageTitle: 'Создание категории расходов',\r\n                template: 'templates/category-manipulations/create-category.html',\r\n                styles: [\r\n                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',\r\n                    'css/layout.css',\r\n                ],\r\n                useLayout: 'templates/layout.html',\r\n                scripts: [],\r\n                onload: () => {\r\n                    new _components_layout_js__WEBPACK_IMPORTED_MODULE_0__.Layout();\r\n                    new _components_expenses_create_js__WEBPACK_IMPORTED_MODULE_5__.ExpensesCreate();\r\n                },\r\n            },\r\n            {\r\n                route: '#/expenses-edit',\r\n                tabTitle: 'Редактирование категории',\r\n                pageTitle: 'Редактирование категории расходов',\r\n                template: 'templates/category-manipulations/edit-category.html',\r\n                styles: [\r\n                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',\r\n                    'css/layout.css',\r\n                ],\r\n                useLayout: 'templates/layout.html',\r\n                scripts: [],\r\n                onload: () => {\r\n                    new _components_layout_js__WEBPACK_IMPORTED_MODULE_0__.Layout();\r\n                    new _components_expenses_edit_js__WEBPACK_IMPORTED_MODULE_9__.ExpensesEdit();\r\n                },\r\n            },\r\n            {\r\n                route: '#/expenses-main',\r\n                tabTitle: 'Расходы',\r\n                pageTitle: 'Расходы',\r\n                template: 'templates/expenses/expenses-main.html',\r\n                styles: [\r\n                    'lib/css/magnific-popup.css',\r\n                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',\r\n                    'css/layout.css',\r\n                    'css/common.css',\r\n                ],\r\n                useLayout: 'templates/layout.html',\r\n                scripts: [\r\n                    'lib/js/jquery-3.7.1.min.js',\r\n                    'lib/js/jquery.magnific-popup.min.js',\r\n                ],\r\n                onload: () => {\r\n                    new _components_layout_js__WEBPACK_IMPORTED_MODULE_0__.Layout();\r\n                    new _components_expenses_main_js__WEBPACK_IMPORTED_MODULE_4__.ExpensesMain();\r\n                },\r\n            },\r\n            {\r\n                route: '#/incomes-create',\r\n                tabTitle: 'Создание категории',\r\n                pageTitle: 'Создание категории доходов',\r\n                template: 'templates/category-manipulations/create-category.html',\r\n                styles: [\r\n                    'lib/css/magnific-popup.css',\r\n                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',\r\n                    'css/layout.css',\r\n                ],\r\n                useLayout: 'templates/layout.html',\r\n                scripts: [\r\n                    'lib/js/jquery-3.7.1.min.js',\r\n                    'lib/js/jquery.magnific-popup.min.js',\r\n                ],\r\n                onload: () => {\r\n                    new _components_layout_js__WEBPACK_IMPORTED_MODULE_0__.Layout();\r\n                    new _components_incomes_create_js__WEBPACK_IMPORTED_MODULE_6__.IncomesCreate();\r\n                },\r\n            },\r\n            {\r\n                route: '#/incomes-edit',\r\n                tabTitle: 'Редактирование категории',\r\n                pageTitle: 'Редактирование категории доходов',\r\n                template: 'templates/category-manipulations/edit-category.html',\r\n                styles: [\r\n                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',\r\n                    'css/layout.css',\r\n                ],\r\n                useLayout: 'templates/layout.html',\r\n                scripts: [],\r\n                onload: () => {\r\n                    new _components_layout_js__WEBPACK_IMPORTED_MODULE_0__.Layout();\r\n                    new _components_incomes_edit_js__WEBPACK_IMPORTED_MODULE_8__.IncomesEdit();\r\n                },\r\n            },\r\n            {\r\n                route: '#/incomes-main',\r\n                tabTitle: 'Доходы',\r\n                pageTitle: 'Доходы',\r\n                template: 'templates/incomes/incomes-main.html',\r\n                styles: [\r\n                    'lib/css/magnific-popup.css',\r\n                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',\r\n                    'css/layout.css',\r\n                    'css/common.css',\r\n                ],\r\n                useLayout: 'templates/layout.html',\r\n                scripts: [\r\n                    'lib/js/jquery-3.7.1.min.js',\r\n                    'lib/js/jquery.magnific-popup.min.js',\r\n                ],\r\n                onload: () => {\r\n                    new _components_layout_js__WEBPACK_IMPORTED_MODULE_0__.Layout();\r\n                    new _components_incomes_main_js__WEBPACK_IMPORTED_MODULE_3__.IncomesMain();\r\n                },\r\n            },\r\n            {\r\n                route: '#/incomes-expenses-create',\r\n                tabTitle: 'Создание дохода/расхода',\r\n                pageTitle: 'Создание дохода/расхода',\r\n                template: 'templates/incomes-expenses/incomes-expenses-create.html',\r\n                styles: [\r\n                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',\r\n                    'css/layout.css',\r\n                ],\r\n                useLayout: 'templates/layout.html',\r\n                scripts: [],\r\n                onload: () => {\r\n                    new _components_layout_js__WEBPACK_IMPORTED_MODULE_0__.Layout();\r\n                },\r\n            },\r\n            {\r\n                route: '#/incomes-expenses-edit',\r\n                tabTitle: 'Редактирование дохода/расхода',\r\n                pageTitle: 'Редактирование дохода/расхода',\r\n                template: 'templates/incomes-expenses/incomes-expenses-edit.html',\r\n                styles: [\r\n                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',\r\n                    'css/layout.css',\r\n                ],\r\n                useLayout: 'templates/layout.html',\r\n                scripts: [],\r\n                onload: () => {\r\n                    new _components_layout_js__WEBPACK_IMPORTED_MODULE_0__.Layout();\r\n                },\r\n            },\r\n            {\r\n                route: '#/incomes-expenses-main',\r\n                tabTitle: 'Доходы и расходы',\r\n                pageTitle: 'Доходы и расходы',\r\n                template: 'templates/incomes-expenses/incomes-expenses-main.html',\r\n                styles: [\r\n                    'lib/css/magnific-popup.css',\r\n                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',\r\n                    'css/layout.css',\r\n                    'css/pages/incomes-expenses-main.css',\r\n                    'css/common.css',\r\n                ],\r\n                useLayout: 'templates/layout.html',\r\n                scripts: [\r\n                    'lib/js/jquery-3.7.1.min.js',\r\n                    'lib/js/jquery.magnific-popup.min.js',\r\n                ],\r\n                onload: () => {\r\n                    new _components_layout_js__WEBPACK_IMPORTED_MODULE_0__.Layout();\r\n                    new _components_incomes_expenses_main_js__WEBPACK_IMPORTED_MODULE_1__.IncomesExpensesMain();\r\n                },\r\n            }\r\n        ]\r\n    }\r\n\r\n    prepareNewRouteStyles(newRouteObj) {\r\n        let styles = document.head.getElementsByTagName('link');\r\n        for (let i = styles.length - 1; i >= 0; i--) {\r\n            if (!styles[i].href.match(/.*lib\\/css\\/bootstrap\\.min\\.css/)) {\r\n                styles[i].remove();\r\n            }\r\n        }\r\n\r\n        newRouteObj.styles.forEach(style => {\r\n            _utils_fileUtils_js__WEBPACK_IMPORTED_MODULE_7__.FileUtils.addNewStyle(style);\r\n        });\r\n    }\r\n\r\n    async prepareNewRouteScripts(newRouteObj) {\r\n        let scripts = document.body.getElementsByTagName('script');\r\n        for (let i = scripts.length - 1; i >= 0; i--) {\r\n            if (!scripts[i].src.match(/.*lib\\/js\\/bootstrap\\..*min\\.js/)) {\r\n                scripts[i].remove();\r\n            }\r\n        }\r\n\r\n        for (let script of newRouteObj.scripts) {\r\n            await _utils_fileUtils_js__WEBPACK_IMPORTED_MODULE_7__.FileUtils.addNewScript(script);\r\n        }\r\n    }\r\n\r\n    async openNewRoute() {\r\n        const newRouteName = window.location.hash;\r\n        const newRouteObj = this.routes.find(route => route.route === newRouteName);\r\n        if (newRouteObj) {\r\n            if (newRouteObj.useLayout) {\r\n                this.pageContentElement.innerHTML = await fetch(newRouteObj.useLayout).then(response => response.text());\r\n                this.pageContentElement = document.getElementById('content');\r\n\r\n                const title = document.getElementById('page-title');\r\n                if (title) {\r\n                    title.innerText = newRouteObj.pageTitle;\r\n                }\r\n            }\r\n\r\n            this.pageContentElement.innerHTML = await fetch(newRouteObj.template).then(response => response.text());\r\n            this.pageContentElement = document.getElementById('page');\r\n            this.tabTitle.innerText = newRouteObj.tabTitle;\r\n\r\n            this.prepareNewRouteStyles(newRouteObj);\r\n            if (newRouteObj.hasOwnProperty('scripts') && newRouteObj.scripts.length > 0) {\r\n                await this.prepareNewRouteScripts(newRouteObj);\r\n            }\r\n            if (newRouteObj.onload && typeof newRouteObj.onload === 'function') {\r\n                newRouteObj.onload();\r\n            }\r\n        } else {\r\n            window.location.hash = '#/';\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/router.js?");

/***/ }),

/***/ "./src/utils/fileUtils.js":
/*!********************************!*\
  !*** ./src/utils/fileUtils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FileUtils: () => (/* binding */ FileUtils)\n/* harmony export */ });\nclass FileUtils {\r\n    static async addNewScript(scriptSrc) {\r\n        return new Promise((resolve, reject) => {\r\n            let scriptElement = document.createElement('script');\r\n            scriptElement.src = scriptSrc;\r\n            scriptElement.onload = () => {\r\n                resolve('Script loaded: ' + scriptSrc)\r\n            };\r\n            scriptElement.onerror = () => {\r\n                reject('Failed load script: ' + scriptSrc)\r\n            };\r\n            document.body.appendChild(scriptElement);\r\n        })\r\n    }\r\n\r\n    static addNewStyle(styleSrc) {\r\n        let styleElement = document.createElement('link');\r\n        styleElement.setAttribute('rel', 'stylesheet');\r\n        styleElement.setAttribute('href', styleSrc);\r\n        document.head.appendChild(styleElement);\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/utils/fileUtils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;