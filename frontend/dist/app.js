/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/auth/login.ts":
/*!**************************************!*\
  !*** ./src/components/auth/login.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Login: () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth-utils */ "./src/utils/auth-utils.ts");
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http-utils */ "./src/utils/http-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Login = /** @class */ (function () {
    function Login() {
        var _this = this;
        this.loginError = document.getElementById('login-error');
        this.validations = [
            {
                name: 'email',
                id: 'email',
                regex: /^\s*[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}\s*$/,
                valid: false,
                element: null,
            },
            {
                name: 'password',
                id: 'password',
                regex: /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                valid: true,
                element: null,
            },
        ];
        this.initInputs();
        var loginButton = document.getElementById('login-button');
        if (loginButton) {
            loginButton.onclick = function () {
                if (_this.validateForm()) {
                    _this.login().then();
                }
            };
        }
    }
    Login.prototype.initInputs = function () {
        var _this = this;
        this.validations.forEach(function (validation) { return validation.element = document.getElementById(validation.id); });
        var emailValidation = this.validations.find(function (validation) { return validation.name === 'email'; });
        if (emailValidation) {
            emailValidation.element = document.getElementById(emailValidation.id);
            if (emailValidation.element) {
                emailValidation.element.onchange = function () {
                    if (_this.loginError) {
                        _this.loginError.classList.remove('d-block');
                        if (!emailValidation.element.value.match(emailValidation.regex)) {
                            emailValidation.element.classList.add('is-invalid');
                            emailValidation.valid = false;
                        }
                        else {
                            emailValidation.element.classList.remove('is-invalid');
                            emailValidation.valid = true;
                        }
                    }
                };
            }
        }
    };
    Login.prototype.validateForm = function () {
        var isValid = true;
        this.validations.forEach(function (validation) {
            if (!validation.valid && validation.element) {
                validation.element.classList.add('is-invalid');
                isValid = false;
            }
        });
        return isValid;
    };
    Login.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var emailInputObj, email, passwordInputObj, password, rememberMeElement, rememberMe, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        emailInputObj = this.validations.find(function (validation) { return validation.name === 'email'; });
                        email = null;
                        if (emailInputObj) {
                            email = emailInputObj.element.value;
                        }
                        passwordInputObj = this.validations.find(function (validation) { return validation.name === 'password'; });
                        password = null;
                        if (passwordInputObj) {
                            password = passwordInputObj.element.value;
                        }
                        rememberMeElement = document.getElementById('remember-me');
                        rememberMe = false;
                        if (rememberMeElement) {
                            rememberMe = rememberMeElement.checked;
                        }
                        if (!(email && password)) return [3 /*break*/, 2];
                        return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__.HttpUtils.request('/login', 'POST', {
                                email: email,
                                password: password,
                                rememberMe: rememberMe,
                            })];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            if (this.loginError) {
                                this.loginError.classList.add('d-block');
                            }
                        }
                        else if (result && result.tokens && result.tokens.accessToken && result.tokens.refreshToken && result.user) {
                            _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.setAuthInfo(result.tokens.accessToken, result.tokens.refreshToken);
                            if (!_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthUserInfo()) {
                                _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.setUserInfo(result.user);
                            }
                            window.location.hash = '#/';
                        }
                        else {
                            alert('Не удалось запросить данные');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        alert('Не удалось запросить данные');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Login;
}());



/***/ }),

/***/ "./src/components/auth/registration.ts":
/*!*********************************************!*\
  !*** ./src/components/auth/registration.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Registration: () => (/* binding */ Registration)
/* harmony export */ });
/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth-utils */ "./src/utils/auth-utils.ts");
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http-utils */ "./src/utils/http-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Registration = /** @class */ (function () {
    function Registration() {
        var _this = this;
        this.commonErrorElement = document.getElementById('common-error');
        this.validations = [
            {
                name: 'full-name',
                id: 'full-name',
                regex: /^\s*[А-Я][а-я]+\s[А-Я][а-я]+\s[А-Я][а-я]+\s*$/,
                valid: false,
                element: null,
            },
            {
                name: 'email',
                id: 'email',
                regex: /^\s*[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}\s*$/,
                valid: false,
                element: null,
            },
            {
                name: 'password',
                id: 'password',
                regex: /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                valid: false,
                element: null,
            },
            {
                name: 'repeat-password',
                id: 'repeat-password',
                regex: /.*/,
                valid: false,
                element: null,
            },
        ];
        this.initInputs();
        var loginButton = document.getElementById('login-button');
        if (loginButton) {
            loginButton.onclick = function () {
                if (_this.validateForm()) {
                    _this.registration().then();
                }
            };
        }
    }
    Registration.prototype.initInputs = function () {
        var repeatPasswordValidation = this.validations.find(function (validation) { return validation.name === 'password'; });
        this.validations.forEach(function (validation) {
            var validationInput = document.getElementById(validation.id);
            if (validationInput && validation.element) {
                validation.element = validationInput;
                validation.element.onchange = function () {
                    if (validation.name === 'repeat-password') {
                        if (repeatPasswordValidation && repeatPasswordValidation.element) {
                            if (validation.element.value !== repeatPasswordValidation.element.value) {
                                validation.element.classList.add('is-invalid');
                                validation.valid = false;
                            }
                            else {
                                validation.element.classList.remove('is-invalid');
                                validation.valid = true;
                            }
                        }
                        else {
                            alert('Не удалось распознать данные');
                        }
                    }
                    else {
                        if (!validation.element.value.match(validation.regex)) {
                            validation.element.classList.add('is-invalid');
                            validation.valid = false;
                        }
                        else {
                            validation.element.classList.remove('is-invalid');
                            validation.valid = true;
                        }
                    }
                };
            }
        });
    };
    Registration.prototype.validateForm = function () {
        var isValid = true;
        this.validations.forEach(function (validation) {
            if (!validation.valid && validation.element) {
                validation.element.classList.add('is-invalid');
                isValid = false;
            }
        });
        return isValid;
    };
    Registration.prototype.registration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error, nameInputObj, name, lastNameInputObj, lastName, emailInputObj, email, passwordInputObj, password, repeatPasswordObj, repeatPassword, result, result_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        error = false;
                        nameInputObj = this.validations.find(function (validation) { return validation.name === 'full-name'; });
                        name = null;
                        if (nameInputObj) {
                            name = nameInputObj.element.value.split(' ')[1];
                        }
                        lastNameInputObj = this.validations.find(function (validation) { return validation.name === 'full-name'; });
                        lastName = null;
                        if (lastNameInputObj) {
                            lastName = lastNameInputObj.element.value.split(' ')[0];
                        }
                        emailInputObj = this.validations.find(function (validation) { return validation.name === 'email'; });
                        email = null;
                        if (emailInputObj) {
                            email = emailInputObj.element.value;
                        }
                        passwordInputObj = this.validations.find(function (validation) { return validation.name === 'password'; });
                        password = null;
                        if (passwordInputObj) {
                            password = passwordInputObj.element.value;
                        }
                        repeatPasswordObj = this.validations.find(function (validation) { return validation.name === 'repeat-password'; });
                        repeatPassword = null;
                        if (repeatPasswordObj) {
                            repeatPassword = repeatPasswordObj.element.value;
                        }
                        if (!(name && lastName && email && password && repeatPassword)) return [3 /*break*/, 4];
                        return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__.HttpUtils.request('/signup', 'POST', {
                                name: name,
                                lastName: lastName,
                                email: email,
                                password: password,
                                passwordRepeat: repeatPassword,
                            })];
                    case 1:
                        result = _a.sent();
                        if (result !== undefined) {
                            _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.setUserInfo(result.user);
                        }
                        else {
                            error = true;
                            if (this.commonErrorElement) {
                                this.commonErrorElement.classList.add('d-block');
                            }
                        }
                        if (!!error) return [3 /*break*/, 3];
                        return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__.HttpUtils.request('/login', 'POST', {
                                email: email,
                                password: password,
                                rememberMe: false,
                            })];
                    case 2:
                        result_1 = _a.sent();
                        if (result_1 !== undefined) {
                            _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.setAuthInfo(result_1.tokens.accessToken, result_1.tokens.refreshToken);
                            window.location.hash = '#/';
                        }
                        else {
                            alert('Не удалось запросить данные');
                        }
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        alert("Не удалось зарегистрироваться");
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return Registration;
}());



/***/ }),

/***/ "./src/components/expenses/expenses-create.ts":
/*!****************************************************!*\
  !*** ./src/components/expenses/expenses-create.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpensesCreate: () => (/* binding */ ExpensesCreate)
/* harmony export */ });
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/http-utils */ "./src/utils/http-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var ExpensesCreate = /** @class */ (function () {
    function ExpensesCreate() {
        var _this = this;
        var cancelButton = document.getElementById('cancel');
        if (cancelButton) {
            cancelButton.onclick = function () {
                window.location.hash = '#/expenses-main';
            };
        }
        var createButton = document.getElementById('create');
        if (createButton) {
            createButton.onclick = function () {
                _this.createCategory().then();
            };
        }
    }
    ExpensesCreate.prototype.createCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var categoryInputElement, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoryInputElement = document.getElementById('category-name');
                        if (!categoryInputElement) return [3 /*break*/, 3];
                        if (!!categoryInputElement.value) return [3 /*break*/, 1];
                        categoryInputElement.classList.add('is-invalid');
                        return [2 /*return*/];
                    case 1: return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/categories/expense', 'POST', {
                            title: categoryInputElement.value
                        })];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            window.location.hash = '#/expenses-main';
                            return [2 /*return*/];
                        }
                        _a.label = 3;
                    case 3:
                        alert('Не удалось создать категорию');
                        return [2 /*return*/];
                }
            });
        });
    };
    return ExpensesCreate;
}());



/***/ }),

/***/ "./src/components/expenses/expenses-edit.ts":
/*!**************************************************!*\
  !*** ./src/components/expenses/expenses-edit.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpensesEdit: () => (/* binding */ ExpensesEdit)
/* harmony export */ });
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/http-utils */ "./src/utils/http-utils.ts");
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/url-utils */ "./src/utils/url-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ExpensesEdit = /** @class */ (function () {
    function ExpensesEdit() {
        var _this = this;
        this.categoryId = _utils_url_utils__WEBPACK_IMPORTED_MODULE_1__.UrlUtils.getParam('id');
        this.categoryName = _utils_url_utils__WEBPACK_IMPORTED_MODULE_1__.UrlUtils.getParam('name');
        this.categoryInputElement = document.getElementById('category-name');
        if (this.categoryInputElement) {
            if (this.categoryName) {
                this.categoryInputElement.value = this.categoryName;
            }
            else {
                this.categoryInputElement.placeholder = 'Новое название категории...';
            }
        }
        var cancelButton = document.getElementById('cancel');
        if (cancelButton) {
            cancelButton.onclick = function () {
                window.location.hash = '#/expenses-main';
            };
        }
        var saveButton = document.getElementById('save');
        if (saveButton) {
            saveButton.onclick = function () {
                _this.updateCategory().then();
            };
        }
    }
    ExpensesEdit.prototype.updateCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.categoryInputElement) return [3 /*break*/, 3];
                        if (!!this.categoryInputElement.value) return [3 /*break*/, 1];
                        this.categoryInputElement.classList.add('is-invalid');
                        return [2 /*return*/];
                    case 1: return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/categories/expense/' + this.categoryId, 'PUT', {
                            title: this.categoryInputElement.value
                        })];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            window.location.hash = '#/expenses-main';
                            return [2 /*return*/];
                        }
                        _a.label = 3;
                    case 3:
                        alert('Не удалось отредактировать категорию');
                        return [2 /*return*/];
                }
            });
        });
    };
    return ExpensesEdit;
}());



/***/ }),

/***/ "./src/components/expenses/expenses-main.ts":
/*!**************************************************!*\
  !*** ./src/components/expenses/expenses-main.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpensesMain: () => (/* binding */ ExpensesMain)
/* harmony export */ });
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/http-utils */ "./src/utils/http-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var ExpensesMain = /** @class */ (function () {
    function ExpensesMain() {
        var _this = this;
        var _a;
        this.currentCategoryId = null;
        (_a = document.getElementById('expenses-collapse')) === null || _a === void 0 ? void 0 : _a.classList.add('collapse-element-active');
        var deleteButton = document.getElementById('delete');
        if (deleteButton) {
            deleteButton.onclick = function () { return _this.deleteCategory(); };
        }
        this.init().then();
    }
    ExpensesMain.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deleteCardElements, that, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCategories()];
                    case 1:
                        _a.sent();
                        this.initLib();
                        deleteCardElements = document.getElementsByClassName('deleteCardElement');
                        that = this;
                        for (i = 0; i < deleteCardElements.length; i++) {
                            deleteCardElements[i].onclick = function () {
                                that.currentCategoryId = Number(this.getAttribute('data-id'));
                            };
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ExpensesMain.prototype.initLib = function () {
        $('.open-popup-link').magnificPopup({ type: 'inline' });
    };
    ExpensesMain.prototype.getCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, cardsContainerElement_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/categories/expense', 'GET')];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            cardsContainerElement_1 = document.getElementById('cards-container');
                            if (cardsContainerElement_1) {
                                result.forEach(function (category) {
                                    var categoryCard = document.createElement('div');
                                    categoryCard.className = 'category-card p-2';
                                    categoryCard.innerHTML = "<div class=\"card p-3 h-100\">\n            <h3 class=\"h3 text-primary-emphasis mb-3\">".concat(category.title, "</h3>\n            <div class=\"d-flex align-items-center d-flex flex-wrap gap-2\">\n                <a href=\"/#/expenses-edit?name=").concat(category.title, "&id=").concat(category.id, "\" class=\"btn btn-primary\">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</a>\n                <a href=\"#confirmation-popup\" class=\"open-popup-link btn btn-danger deleteCardElement\" data-id=\"").concat(category.id, "\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</a>\n            </div>\n        </div>");
                                    cardsContainerElement_1.prepend(categoryCard);
                                });
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ExpensesMain.prototype.deleteCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.currentCategoryId) return [3 /*break*/, 2];
                        return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/categories/expense/' + this.currentCategoryId, 'DELETE')];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            document.querySelectorAll('[data-id]').forEach(function (item) {
                                var _a, _b;
                                if (item.getAttribute('data-id') === ((_a = _this.currentCategoryId) === null || _a === void 0 ? void 0 : _a.toString()) && _this.currentCategoryId !== null) {
                                    (_b = item.closest('.category-card')) === null || _b === void 0 ? void 0 : _b.remove();
                                    return;
                                }
                            });
                        }
                        _a.label = 2;
                    case 2:
                        alert('Произошла ошибка при удалении категории');
                        return [2 /*return*/];
                }
            });
        });
    };
    return ExpensesMain;
}());



/***/ }),

/***/ "./src/components/incomes-expenses/incomes-expenses-create.ts":
/*!********************************************************************!*\
  !*** ./src/components/incomes-expenses/incomes-expenses-create.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IncomesExpensesCreate: () => (/* binding */ IncomesExpensesCreate)
/* harmony export */ });
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/http-utils */ "./src/utils/http-utils.ts");
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/url-utils */ "./src/utils/url-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var IncomesExpensesCreate = /** @class */ (function () {
    function IncomesExpensesCreate() {
        this.incomeCategories = null;
        this.expenseCategories = null;
        this.categorySelect = document.getElementById('category-select');
        this.typeSelectElement = document.getElementById('type-select');
        this.amountInput = document.getElementById('amount');
        this.dateInput = document.getElementById('date');
        this.initLib();
        this.setEvents();
        this.getData().then();
    }
    IncomesExpensesCreate.prototype.initLib = function () {
        // $.datepicker.regional['ru'] = {
        //     closeText: 'Закрыть',
        //     prevText: 'Предыдущий',
        //     nextText: 'Следующий',
        //     currentText: 'Сегодня',
        //     monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        //     monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        //     dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        //     dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        //     dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        //     weekHeader: 'Не',
        //     dateFormat: 'yy-mm-dd',
        //     firstDay: 1,
        //     isRTL: false,
        //     showMonthAfterYear: false,
        //     yearSuffix: ''
        // };
        // $.datepicker.setDefaults($.datepicker.regional['ru']);
        // $('#date').datepicker();
        var select2 = $('.select2');
        select2.select2();
        select2.select2({
            theme: 'bootstrap4'
        });
    };
    IncomesExpensesCreate.prototype.setEvents = function () {
        var _this = this;
        var createButton = document.getElementById('create');
        if (createButton) {
            createButton.onclick = function () { return _this.createOperation(); };
        }
        if (this.typeSelectElement) {
            this.typeSelectElement.onchange = function () { return _this.processSelects(); };
        }
    };
    IncomesExpensesCreate.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var type, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getIncomeCategories()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getExpenseCategories()];
                    case 2:
                        _a.sent();
                        type = _utils_url_utils__WEBPACK_IMPORTED_MODULE_1__.UrlUtils.getParam('type');
                        if (type && this.typeSelectElement) {
                            for (i = 0; i < this.typeSelectElement.options.length; i++) {
                                if (this.typeSelectElement.options[i].value === type) {
                                    this.typeSelectElement.options[i].setAttribute('selected', 'selected');
                                }
                            }
                        }
                        this.processSelects();
                        return [2 /*return*/];
                }
            });
        });
    };
    IncomesExpensesCreate.prototype.getIncomeCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/categories/income', 'GET')];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.incomeCategories = result;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IncomesExpensesCreate.prototype.getExpenseCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/categories/expense', 'GET')];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.expenseCategories = result;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IncomesExpensesCreate.prototype.processSelects = function () {
        var that = this;
        if (this.typeSelectElement && this.incomeCategories && this.expenseCategories && this.categorySelect) {
            if (this.typeSelectElement.value === 'income') {
                fillSelect(this.incomeCategories);
            }
            else if (this.typeSelectElement.value === 'expense') {
                fillSelect(this.expenseCategories);
            }
        }
        function fillSelect(array) {
            that.categorySelect.innerHTML = '';
            array.forEach(function (category) {
                var option = document.createElement('option');
                option.innerText = category.title;
                option.setAttribute('value', category.id.toString());
                that.categorySelect.appendChild(option);
            });
        }
    };
    IncomesExpensesCreate.prototype.createOperation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var commentInput, hasError, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        commentInput = document.getElementById('comment');
                        hasError = false;
                        if (!(this.amountInput && this.dateInput && this.categorySelect && this.typeSelectElement && commentInput)) return [3 /*break*/, 2];
                        if (!this.amountInput.value) {
                            this.amountInput.classList.add('is-invalid');
                            hasError = true;
                        }
                        else {
                            this.amountInput.classList.remove('is-invalid');
                        }
                        if (!this.dateInput.value) {
                            this.dateInput.classList.add('is-invalid');
                            hasError = true;
                        }
                        else {
                            this.dateInput.classList.remove('is-invalid');
                        }
                        if (!this.categorySelect.value) {
                            this.categorySelect.classList.add('is-invalid');
                            hasError = true;
                        }
                        else {
                            this.categorySelect.classList.remove('is-invalid');
                        }
                        if (!!hasError) return [3 /*break*/, 2];
                        return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/operations', 'POST', {
                                type: this.typeSelectElement.value,
                                amount: +this.amountInput.value,
                                date: this.dateInput.value,
                                comment: commentInput.value ? commentInput.value : ' ',
                                category_id: +this.categorySelect.value,
                            })];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            window.location.hash = '#/incomes-expenses-main';
                            return [2 /*return*/];
                        }
                        _a.label = 2;
                    case 2:
                        alert("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C ".concat(this.typeSelectElement ? (this.typeSelectElement.value === 'income' ? 'доход' : 'расход') : 'доход/расход'));
                        return [2 /*return*/];
                }
            });
        });
    };
    return IncomesExpensesCreate;
}());



/***/ }),

/***/ "./src/components/incomes-expenses/incomes-expenses-edit.ts":
/*!******************************************************************!*\
  !*** ./src/components/incomes-expenses/incomes-expenses-edit.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IncomesExpensesEdit: () => (/* binding */ IncomesExpensesEdit)
/* harmony export */ });
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/http-utils */ "./src/utils/http-utils.ts");
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/url-utils */ "./src/utils/url-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var IncomesExpensesEdit = /** @class */ (function () {
    function IncomesExpensesEdit() {
        this.incomeCategories = null;
        this.expenseCategories = null;
        this.categorySelect = document.getElementById('category-select');
        this.typeSelect = document.getElementById('type-select');
        this.amountInput = document.getElementById('amount');
        this.dateInput = document.getElementById('date');
        this.commentInput = document.getElementById('comment');
        this.initLib();
        this.setEvents();
        this.init().then();
    }
    IncomesExpensesEdit.prototype.initLib = function () {
        var select2 = $('.select2');
        select2.select2();
        select2.select2({
            theme: 'bootstrap4'
        });
    };
    IncomesExpensesEdit.prototype.setEvents = function () {
        var _this = this;
        var updateButton = document.getElementById('update');
        if (updateButton) {
            updateButton.onclick = function () { return _this.updateOperation(); };
        }
        if (this.typeSelect) {
            this.typeSelect.onchange = function () { return _this.processSelects(); };
        }
    };
    IncomesExpensesEdit.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var operationId, result, i, _i, _a, option, valueAttribute;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getData()];
                    case 1:
                        _b.sent();
                        operationId = _utils_url_utils__WEBPACK_IMPORTED_MODULE_1__.UrlUtils.getParam('id');
                        if (!(operationId && this.typeSelect && this.amountInput && this.dateInput && this.commentInput && this.categorySelect)) return [3 /*break*/, 3];
                        return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/operations/' + operationId, 'GET')];
                    case 2:
                        result = _b.sent();
                        if (result) {
                            this.typeSelect.value = result.type === 'income' ? 'income' : 'expense';
                            this.processSelects();
                            for (i = 0; i < this.typeSelect.options.length; i++) {
                                if (this.typeSelect.options[i].value === result.type) {
                                    this.typeSelect.options[i].setAttribute('selected', 'selected');
                                }
                            }
                            this.amountInput.value = result.amount.toString();
                            this.dateInput.value = result.date;
                            this.commentInput.value = result.comment;
                            for (_i = 0, _a = Array.from(this.categorySelect.options); _i < _a.length; _i++) {
                                option = _a[_i];
                                if (option.innerText === result.category) {
                                    valueAttribute = option.getAttribute('value');
                                    if (valueAttribute) {
                                        this.categorySelect.value = valueAttribute;
                                    }
                                }
                            }
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    IncomesExpensesEdit.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getIncomeCategories()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getExpenseCategories()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    IncomesExpensesEdit.prototype.getIncomeCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/categories/income', 'GET')];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.incomeCategories = result;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IncomesExpensesEdit.prototype.getExpenseCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/categories/expense', 'GET')];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.expenseCategories = result;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IncomesExpensesEdit.prototype.processSelects = function () {
        var that = this;
        if (this.typeSelect && this.categorySelect && this.incomeCategories && this.expenseCategories) {
            if (this.typeSelect.value === 'income') {
                fillSelect(this.incomeCategories);
            }
            else if (this.typeSelect.value === 'expense') {
                fillSelect(this.expenseCategories);
            }
        }
        function fillSelect(array) {
            that.categorySelect.innerHTML = '';
            array.forEach(function (category) {
                var option = document.createElement('option');
                option.innerText = category.title;
                option.setAttribute('value', category.id.toString());
                that.categorySelect.appendChild(option);
            });
        }
    };
    IncomesExpensesEdit.prototype.updateOperation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var operationId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.typeSelect && this.amountInput && this.dateInput && this.commentInput && this.categorySelect)) return [3 /*break*/, 2];
                        operationId = _utils_url_utils__WEBPACK_IMPORTED_MODULE_1__.UrlUtils.getParam('id');
                        return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/operations/' + operationId, 'PUT', {
                                type: this.typeSelect.value,
                                amount: +this.amountInput.value,
                                date: this.dateInput.value,
                                comment: this.commentInput.value ? this.commentInput.value : ' ',
                                category_id: +this.categorySelect.value,
                            })];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            window.location.hash = '#/incomes-expenses-main';
                        }
                        _a.label = 2;
                    case 2:
                        alert("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C ".concat(this.typeSelect ? (this.typeSelect.value === 'income' ? 'доход' : 'расход') : 'доход/расход'));
                        return [2 /*return*/];
                }
            });
        });
    };
    return IncomesExpensesEdit;
}());



/***/ }),

/***/ "./src/components/incomes-expenses/incomes-expenses-main.ts":
/*!******************************************************************!*\
  !*** ./src/components/incomes-expenses/incomes-expenses-main.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IncomesExpensesMain: () => (/* binding */ IncomesExpensesMain)
/* harmony export */ });
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/http-utils */ "./src/utils/http-utils.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _utils_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/date-utils */ "./src/utils/date-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var IncomesExpensesMain = /** @class */ (function () {
    function IncomesExpensesMain() {
        var _this = this;
        var _a;
        this.rowIdElements = null;
        this.currentOperation = null;
        this.initLib();
        this.initButtons();
        (_a = document.getElementById('incomes-expenses-button')) === null || _a === void 0 ? void 0 : _a.classList.add('active');
        this.tableContainer = document.getElementById('table-content');
        this.dateButtons = [
            _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].date.today,
            _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].date.week,
            _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].date.month,
            _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].date.year,
            _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].date.all,
            _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].date.interval
        ];
        this.currentDateOption = this.dateButtons[0];
        this.today = (new Date()).toLocaleDateString();
        this.dateFromInput = document.getElementById('date-from');
        if (this.dateFromInput) {
            this.dateFromInput.onchange = function () {
                _this.getOperations().then();
            };
        }
        this.dateToInput = document.getElementById('date-to');
        if (this.dateToInput) {
            this.dateToInput.onchange = function () {
                _this.getOperations().then();
            };
        }
        var deleteOperationButton = document.getElementById('delete-operation');
        if (deleteOperationButton) {
            deleteOperationButton.onclick = function () { return _this.deleteOperation(); };
        }
        this.getOperations().then();
    }
    IncomesExpensesMain.prototype.initLib = function () {
        $('.open-popup-link').magnificPopup({ type: 'inline' });
        $.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: 'Предыдущий',
            nextText: 'Следующий',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Не',
            dateFormat: 'yy-mm-dd',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['ru']);
        $('.date-input').datepicker();
    };
    IncomesExpensesMain.prototype.initButtons = function () {
        var _this = this;
        var dateButtonsElement = document.getElementById('period-buttons');
        if (dateButtonsElement) {
            var _loop_1 = function (i) {
                dateButtonsElement.children[i].children[0].setAttribute('data-id', i.toString());
                dateButtonsElement.children[i].children[0].onclick = function () {
                    for (var i_1 = 0; i_1 < dateButtonsElement.children.length - 1; i_1++) {
                        if (dateButtonsElement.children[i_1].children[0].classList.contains('btn-secondary')) {
                            dateButtonsElement.children[i_1].children[0].classList.remove('btn-secondary');
                            dateButtonsElement.children[i_1].children[0].classList.add('btn-outline-secondary');
                        }
                    }
                    dateButtonsElement.children[i].children[0].classList.add('btn-secondary');
                    dateButtonsElement.children[i].children[0].classList.remove('btn-outline-secondary');
                    var currentPeriod = Number(dateButtonsElement.children[i].children[0].getAttribute('data-id'));
                    if (currentPeriod) {
                        _this.currentDateOption = _this.dateButtons[currentPeriod];
                    }
                    _this.getOperations().then();
                    if (_this.dateFromInput && _this.dateToInput) {
                        if (dateButtonsElement.children[i].children[0].innerText === 'Интервал') {
                            _this.dateFromInput.removeAttribute('disabled');
                            _this.dateToInput.removeAttribute('disabled');
                        }
                        else {
                            _this.dateFromInput.setAttribute('disabled', 'disabled');
                            _this.dateToInput.setAttribute('disabled', 'disabled');
                        }
                    }
                };
            };
            for (var i = 0; i < dateButtonsElement.children.length - 1; i++) {
                _loop_1(i);
            }
        }
    };
    IncomesExpensesMain.prototype.getOperations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var period, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        period = "?period=";
                        period += "".concat(this.currentDateOption);
                        switch (this.currentDateOption) {
                            case _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].date.today:
                                period += "&dateFrom=".concat(_utils_date_utils__WEBPACK_IMPORTED_MODULE_2__.DateUtils.parseDate(this.today), "&dateTo=").concat(_utils_date_utils__WEBPACK_IMPORTED_MODULE_2__.DateUtils.parseDate(this.today));
                                break;
                            case _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].date.interval:
                                if (this.dateFromInput && this.dateToInput) {
                                    if (this.dateFromInput.value.match(/[12][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/)
                                        && this.dateToInput.value.match(/[12][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/)) {
                                        period += "&dateFrom=".concat(this.dateFromInput.value, "&dateTo=").concat(this.dateToInput.value);
                                    }
                                    else {
                                        return [2 /*return*/];
                                    }
                                }
                                else {
                                    return [2 /*return*/];
                                }
                        }
                        return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/operations' + period, 'GET')];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.buildTable(result);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IncomesExpensesMain.prototype.buildTable = function (operations) {
        var _this = this;
        if (this.tableContainer) {
            this.tableContainer.innerHTML = '';
            operations.forEach(function (operation, index) {
                var _a = operation.date.split('-'), day = _a[0], month = _a[1], year = _a[2];
                var date = "".concat(year, ".").concat(month, ".").concat(day);
                _this.tableContainer.innerHTML += "<tr>\n                <td class=\"\">".concat(index + 1, "</td>\n                <td class=\"").concat(operation.type === 'income' ? 'text-success' : 'text-danger', "\">").concat(operation.type === 'income' ? 'Доход' : 'Расход', "</td>\n                <td class=\"\">").concat(operation.category, "</td>\n                <td class=\"\">").concat(operation.amount, " $</td>\n                <td class=\"\">").concat(date, "</td>\n                <td class=\"\">").concat(operation.comment, "</td>\n                <td class=\"text-end\">\n                    <div data-id=\"").concat(operation.id, "\" class=\"row-id\">\n                        <a href=\"#confirmation-popup\" class=\"open-popup-link text-primary-emphasis text-decoration-none\">\n                            <i class=\"fa-regular fa-trash-can\"></i>\n                        </a>\n                        <a href=\"/#/incomes-expenses-edit?id=").concat(operation.id, "\" class=\"text-primary-emphasis text-decoration-none\">\n                            <i class=\"fa-solid fa-pencil\"></i>\n                        </a>\n                    </div>\n                </td>\n            </tr>");
            });
        }
        $('.open-popup-link').magnificPopup({ type: 'inline' });
        if (this.tableContainer) {
            this.rowIdElements = this.tableContainer.getElementsByClassName('row-id');
            if (this.rowIdElements) {
                var _loop_2 = function (operation) {
                    operation.onclick = function () {
                        _this.currentOperation = Number(operation.getAttribute('data-id'));
                    };
                };
                for (var _i = 0, _a = Array.from(this.rowIdElements); _i < _a.length; _i++) {
                    var operation = _a[_i];
                    _loop_2(operation);
                }
            }
        }
    };
    IncomesExpensesMain.prototype.deleteOperation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/operations/' + this.currentOperation, 'DELETE')];
                    case 1:
                        result = _a.sent();
                        if (result && this.rowIdElements) {
                            for (i = 0; i < this.rowIdElements.length; i++) {
                                if (this.currentOperation && this.rowIdElements[i].getAttribute('data-id') === this.currentOperation.toString()) {
                                    this.rowIdElements[i].closest('tr').remove();
                                    return [2 /*return*/];
                                }
                            }
                        }
                        else {
                            alert('Не удалось удалить операцию');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return IncomesExpensesMain;
}());



/***/ }),

/***/ "./src/components/incomes/incomes-create.ts":
/*!**************************************************!*\
  !*** ./src/components/incomes/incomes-create.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IncomesCreate: () => (/* binding */ IncomesCreate)
/* harmony export */ });
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/http-utils */ "./src/utils/http-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var IncomesCreate = /** @class */ (function () {
    function IncomesCreate() {
        var _this = this;
        var cancelButton = document.getElementById('cancel');
        if (cancelButton) {
            cancelButton.onclick = function () {
                window.location.hash = '#/incomes-main';
            };
        }
        var createButton = document.getElementById('create');
        if (createButton) {
            createButton.onclick = function () {
                _this.createCategory().then();
            };
        }
    }
    IncomesCreate.prototype.createCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var categoryInputElement, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoryInputElement = document.getElementById('category-name');
                        if (!categoryInputElement) return [3 /*break*/, 3];
                        if (!!categoryInputElement.value) return [3 /*break*/, 1];
                        categoryInputElement.classList.add('is-invalid');
                        return [2 /*return*/];
                    case 1: return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/categories/income', 'POST', {
                            title: categoryInputElement.value
                        })];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            window.location.hash = '#/incomes-main';
                            return [2 /*return*/];
                        }
                        _a.label = 3;
                    case 3:
                        alert("Не удалось создать категорию");
                        return [2 /*return*/];
                }
            });
        });
    };
    return IncomesCreate;
}());



/***/ }),

/***/ "./src/components/incomes/incomes-edit.ts":
/*!************************************************!*\
  !*** ./src/components/incomes/incomes-edit.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IncomesEdit: () => (/* binding */ IncomesEdit)
/* harmony export */ });
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/http-utils */ "./src/utils/http-utils.ts");
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/url-utils */ "./src/utils/url-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var IncomesEdit = /** @class */ (function () {
    function IncomesEdit() {
        var _this = this;
        this.categoryId = _utils_url_utils__WEBPACK_IMPORTED_MODULE_1__.UrlUtils.getParam('id');
        this.categoryName = _utils_url_utils__WEBPACK_IMPORTED_MODULE_1__.UrlUtils.getParam('name');
        this.categoryInputElement = document.getElementById('category-name');
        if (this.categoryInputElement) {
            if (this.categoryName) {
                this.categoryInputElement.value = this.categoryName;
            }
            else {
                this.categoryInputElement.placeholder = 'Новое название категории...';
            }
        }
        var cancelButton = document.getElementById('cancel');
        if (cancelButton) {
            cancelButton.onclick = function () {
                window.location.hash = '#/incomes-main';
            };
        }
        var saveButton = document.getElementById('save');
        if (saveButton) {
            saveButton.onclick = function () {
                _this.updateCategory().then();
            };
        }
    }
    IncomesEdit.prototype.updateCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.categoryInputElement) return [3 /*break*/, 3];
                        if (!!this.categoryInputElement.value) return [3 /*break*/, 1];
                        this.categoryInputElement.classList.add('is-invalid');
                        return [2 /*return*/];
                    case 1: return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/categories/income/' + this.categoryId, 'PUT', {
                            title: this.categoryInputElement.value
                        })];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            window.location.hash = '#/incomes-main';
                            return [2 /*return*/];
                        }
                        _a.label = 3;
                    case 3:
                        alert('Не удалось отредактировать категорию');
                        return [2 /*return*/];
                }
            });
        });
    };
    return IncomesEdit;
}());



/***/ }),

/***/ "./src/components/incomes/incomes-main.ts":
/*!************************************************!*\
  !*** ./src/components/incomes/incomes-main.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IncomesMain: () => (/* binding */ IncomesMain)
/* harmony export */ });
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/http-utils */ "./src/utils/http-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var IncomesMain = /** @class */ (function () {
    function IncomesMain() {
        var _this = this;
        var _a;
        this.currentCategoryId = null;
        (_a = document.getElementById('incomes-collapse')) === null || _a === void 0 ? void 0 : _a.classList.add('collapse-element-active');
        var deleteButton = document.getElementById('delete');
        if (deleteButton) {
            deleteButton.onclick = function () { return _this.deleteCategory(); };
        }
        this.init().then();
    }
    IncomesMain.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deleteCardElements, that, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCategories()];
                    case 1:
                        _a.sent();
                        this.initLib();
                        deleteCardElements = document.getElementsByClassName('deleteCardElement');
                        that = this;
                        for (i = 0; i < deleteCardElements.length; i++) {
                            deleteCardElements[i].onclick = function () {
                                that.currentCategoryId = Number(this.getAttribute('data-id'));
                            };
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IncomesMain.prototype.initLib = function () {
        $('.open-popup-link').magnificPopup({ type: 'inline' });
    };
    IncomesMain.prototype.getCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, cardsContainerElement_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/categories/income', 'GET')];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            cardsContainerElement_1 = document.getElementById('cards-container');
                            if (cardsContainerElement_1) {
                                result.forEach(function (category) {
                                    var categoryCard = document.createElement('div');
                                    categoryCard.className = 'category-card p-2';
                                    categoryCard.innerHTML = "<div class=\"card p-3 h-100\">\n            <h3 class=\"h3 text-primary-emphasis mb-3\">".concat(category.title, "</h3>\n            <div class=\"d-flex align-items-center d-flex flex-wrap gap-2\">\n                <a href=\"/#/incomes-edit?name=").concat(category.title, "&id=").concat(category.id, "\" class=\"btn btn-primary\">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</a>\n                <a href=\"#confirmation-popup\" class=\"open-popup-link btn btn-danger deleteCardElement\" data-id=\"").concat(category.id, "\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</a>\n            </div>\n        </div>");
                                    cardsContainerElement_1.prepend(categoryCard);
                                });
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IncomesMain.prototype.deleteCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.currentCategoryId) return [3 /*break*/, 2];
                        return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/categories/income/' + this.currentCategoryId, 'DELETE')];
                    case 1:
                        result = _b.sent();
                        if (result) {
                            (_a = document.querySelectorAll('[data-id]')) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                                var _a;
                                if (item.getAttribute('data-id') === _this.currentCategoryId.toString() && _this.currentCategoryId !== null) {
                                    (_a = item.closest('.category-card')) === null || _a === void 0 ? void 0 : _a.remove();
                                    return;
                                }
                            });
                        }
                        _b.label = 2;
                    case 2:
                        alert('Произошла ошибка при удалении категории');
                        return [2 /*return*/];
                }
            });
        });
    };
    return IncomesMain;
}());



/***/ }),

/***/ "./src/components/layout.ts":
/*!**********************************!*\
  !*** ./src/components/layout.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Layout: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/auth-utils */ "./src/utils/auth-utils.ts");
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/http-utils */ "./src/utils/http-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Layout = /** @class */ (function () {
    function Layout() {
        this.sidebar = document.getElementById('sidebar');
        this.sidebarToggler = document.querySelector('.sidebar_toggler');
        this.balanceElement = document.getElementById('balance');
        this.changeBalanceInput = document.getElementById('edit-balance');
        this.initLayout();
    }
    Layout.prototype.initLayout = function () {
        var _this = this;
        var logoutButton = document.getElementById('logout');
        if (logoutButton) {
            logoutButton.onclick = function () { return _this.logout(); };
        }
        if (_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthUserInfo()) {
            var fullNameElement = document.getElementById('full-name');
            if (fullNameElement) {
                fullNameElement.innerHTML = "".concat(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthUserInfo().name, " ").concat(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthUserInfo().lastName);
            }
        }
        if (this.sidebarToggler && this.sidebar) {
            this.sidebarToggler.addEventListener('click', function () {
                _this.sidebar.classList.toggle('show');
                _this.sidebarToggler.classList.toggle('sidebar-is-active');
            });
        }
        window.addEventListener('resize', function () {
            _this.toggleSidebar();
        });
        $('#balance-element').magnificPopup({ type: 'inline' });
        this.toggleSidebar();
        this.getBalance().then();
        var saveBalanceButton = document.getElementById('save-balance');
        if (saveBalanceButton) {
            saveBalanceButton.onclick = function () { return _this.changeBalance(); };
        }
    };
    Layout.prototype.toggleSidebar = function () {
        if (this.sidebar && this.sidebarToggler) {
            var screenWidth = window.screen.width;
            if (screenWidth < 992) {
                this.sidebar.classList.remove('show');
                this.sidebarToggler.classList.remove('sidebar-is-active');
            }
            else {
                this.sidebar.classList.add('show');
                this.sidebarToggler.classList.add('sidebar-is-active');
            }
        }
    };
    Layout.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refreshToken = _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthTokensInfo().refreshToken;
                        if (!refreshToken) return [3 /*break*/, 2];
                        return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__.HttpUtils.request('/logout', 'POST', {
                                refreshToken: refreshToken,
                            })];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.resetAuthInfo();
                            window.location.hash = '#/login';
                            return [2 /*return*/];
                        }
                        else {
                            alert('Ошибка выхода');
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        alert('Ошибка выхода');
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Layout.prototype.getBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.balanceElement && this.changeBalanceInput)) return [3 /*break*/, 2];
                        return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__.HttpUtils.request('/balance', 'GET')];
                    case 1:
                        result = _a.sent();
                        if (result && result.hasOwnProperty('balance')) {
                            this.balanceElement.innerText = result.balance.toString();
                            this.changeBalanceInput.value = result.balance.toString();
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Layout.prototype.changeBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.changeBalanceInput) return [3 /*break*/, 2];
                        return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__.HttpUtils.request('/balance', 'PUT', {
                                newBalance: this.changeBalanceInput.value
                            })];
                    case 1:
                        result = _a.sent();
                        if (result && this.balanceElement) {
                            this.balanceElement.innerText = result.balance.toString();
                            return [2 /*return*/];
                        }
                        _a.label = 2;
                    case 2:
                        alert('Не удалось изменить баланс');
                        return [2 /*return*/];
                }
            });
        });
    };
    return Layout;
}());



/***/ }),

/***/ "./src/components/main.ts":
/*!********************************!*\
  !*** ./src/components/main.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Main: () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ "./src/config/config.ts");
/* harmony import */ var _utils_date_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date-utils */ "./src/utils/date-utils.ts");
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/http-utils */ "./src/utils/http-utils.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/@types/chart.js/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var Main = /** @class */ (function () {
    function Main() {
        this.charts = [];
        this.incomesChartData = null;
        this.expensesChartData = null;
        this.incomesChart = document.getElementById('incomes-chart');
        this.expensesChart = document.getElementById('expenses-chart');
        this.dateFromInput = document.getElementById('date-from');
        this.dateToInput = document.getElementById('date-to');
        this.dateButtons = [
            _config_config__WEBPACK_IMPORTED_MODULE_0__["default"].date.today,
            _config_config__WEBPACK_IMPORTED_MODULE_0__["default"].date.week,
            _config_config__WEBPACK_IMPORTED_MODULE_0__["default"].date.month,
            _config_config__WEBPACK_IMPORTED_MODULE_0__["default"].date.year,
            _config_config__WEBPACK_IMPORTED_MODULE_0__["default"].date.all,
            _config_config__WEBPACK_IMPORTED_MODULE_0__["default"].date.interval
        ];
        this.currentDateOption = this.dateButtons[0];
        this.today = (new Date()).toLocaleDateString();
        this.initLib();
        this.initButtons();
        this.init().then();
    }
    Main.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                (_a = document.getElementById('main-button')) === null || _a === void 0 ? void 0 : _a.classList.add('active');
                if (this.dateFromInput) {
                    this.dateFromInput.onchange = function () {
                        _this.charts.forEach(function (chart) { return chart.destroy(); });
                        _this.getOperations().then();
                    };
                }
                if (this.dateToInput) {
                    this.dateToInput.onchange = function () {
                        _this.charts.forEach(function (chart) { return chart.destroy(); });
                        _this.getOperations().then();
                    };
                }
                this.getOperations().then();
                return [2 /*return*/];
            });
        });
    };
    Main.prototype.initLib = function () {
        $.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: 'Предыдущий',
            nextText: 'Следующий',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Не',
            dateFormat: 'yy-mm-dd',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['ru']);
        $('.date-input').datepicker();
    };
    Main.prototype.initButtons = function () {
        var _this = this;
        var dateButtonsElement = document.getElementById('period-buttons');
        if (dateButtonsElement) {
            var _loop_1 = function (i) {
                dateButtonsElement.children[i].children[0].setAttribute('data-id', i.toString());
                dateButtonsElement.children[i].children[0].onclick = function () {
                    _this.charts.forEach(function (chart) { return chart.destroy(); });
                    for (var i_1 = 0; i_1 < dateButtonsElement.children.length - 1; i_1++) {
                        if (dateButtonsElement.children[i_1].children[0].classList.contains('btn-secondary')) {
                            dateButtonsElement.children[i_1].children[0].classList.remove('btn-secondary');
                            dateButtonsElement.children[i_1].children[0].classList.add('btn-outline-secondary');
                        }
                    }
                    dateButtonsElement.children[i].children[0].classList.add('btn-secondary');
                    dateButtonsElement.children[i].children[0].classList.remove('btn-outline-secondary');
                    _this.currentDateOption = _this.dateButtons[Number(dateButtonsElement.children[i].children[0].getAttribute('data-id'))];
                    _this.getOperations().then();
                    if (_this.dateFromInput && _this.dateToInput) {
                        if (dateButtonsElement.children[i].children[0].innerText === 'Интервал') {
                            _this.dateFromInput.removeAttribute('disabled');
                            _this.dateToInput.removeAttribute('disabled');
                        }
                        else {
                            _this.dateFromInput.setAttribute('disabled', 'disabled');
                            _this.dateToInput.setAttribute('disabled', 'disabled');
                        }
                    }
                };
            };
            for (var i = 0; i < dateButtonsElement.children.length - 1; i++) {
                _loop_1(i);
            }
        }
    };
    Main.prototype.getOperations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var period, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        period = "?period=";
                        period += "".concat(this.currentDateOption);
                        switch (this.currentDateOption) {
                            case _config_config__WEBPACK_IMPORTED_MODULE_0__["default"].date.today:
                                period += "&dateFrom=".concat(_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__.DateUtils.parseDate(this.today), "&dateTo=").concat(_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__.DateUtils.parseDate(this.today));
                                break;
                            case _config_config__WEBPACK_IMPORTED_MODULE_0__["default"].date.interval:
                                if (this.dateToInput && this.dateFromInput && this.dateFromInput.value.match(/[12][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/) &&
                                    this.dateToInput.value.match(/[12][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/)) {
                                    period += "&dateFrom=".concat(this.dateFromInput.value, "&dateTo=").concat(this.dateToInput.value);
                                }
                                else {
                                    return [2 /*return*/];
                                }
                        }
                        return [4 /*yield*/, _utils_http_utils__WEBPACK_IMPORTED_MODULE_2__.HttpUtils.request('/operations' + period, 'GET')];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.processCharts(result);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.processCharts = function (result) {
        this.setChartsData(result);
        if (this.incomesChart && this.incomesChartData) {
            this.createChart(this.incomesChart, this.incomesChartData);
        }
        if (this.expensesChart && this.expensesChartData) {
            this.createChart(this.expensesChart, this.expensesChartData);
        }
    };
    Main.prototype.setChartsData = function (result) {
        setIncomeChartData.call(this, result);
        setExpenseChartData.call(this, result);
        var that = this;
        function setIncomeChartData(result) {
            var incomeOperations = result.filter(function (operation) { return operation.type === 'income'; });
            var categories = incomeOperations.map(function (operation) { return operation.category; });
            var amounts = incomeOperations.map(function (operation) { return operation.amount; });
            var colors = [];
            incomeOperations.forEach(function (operation, index) {
                colors.push("rgb(".concat((12 * (index + 1)) % 256, ", ").concat((100 * (index + 1)) % 256, ", ").concat((200 * (index + 1)) % 256, ")"));
            });
            that.incomesChartData = {
                labels: categories,
                datasets: [{
                        label: ' Доход',
                        data: amounts,
                        backgroundColor: colors,
                        hoverOffset: 4,
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                        },
                    }]
            };
        }
        function setExpenseChartData(result) {
            var expenseOperations = result.filter(function (operation) { return operation.type === 'expense'; });
            var categories = expenseOperations.map(function (operation) { return operation.category; });
            var amounts = expenseOperations.map(function (operation) { return operation.amount; });
            var colors = [];
            expenseOperations.forEach(function (operation, index) {
                colors.push("rgb(".concat((24 * (index + 1)) % 256, ", ").concat((120 * (index + 1)) % 256, ", ").concat((230 * (index + 1)) % 256, ")"));
            });
            that.expensesChartData = {
                labels: categories,
                datasets: [{
                        label: ' Расход',
                        data: amounts,
                        backgroundColor: colors,
                        hoverOffset: 4,
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                        },
                    }]
            };
        }
    };
    Main.prototype.createChart = function (chartElement, data) {
        var chart = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/@types/chart.js/index'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(chartElement, {
            type: 'pie',
            data: data,
            options: {
                plugins: {
                    legend: {
                        maxWidth: 40
                    }
                }
            }
        });
        this.charts.push(chart);
    };
    return Main;
}());



/***/ }),

/***/ "./src/config/config.ts":
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var config = {
    api: 'http://localhost:3000/api',
    date: {
        today: 'today',
        week: 'week',
        month: 'month',
        year: 'year',
        all: 'all',
        interval: 'interval',
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Router: () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout */ "./src/components/layout.ts");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main */ "./src/components/main.ts");
/* harmony import */ var _components_incomes_incomes_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/incomes/incomes-main */ "./src/components/incomes/incomes-main.ts");
/* harmony import */ var _components_expenses_expenses_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/expenses/expenses-main */ "./src/components/expenses/expenses-main.ts");
/* harmony import */ var _components_expenses_expenses_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/expenses/expenses-create */ "./src/components/expenses/expenses-create.ts");
/* harmony import */ var _components_incomes_incomes_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/incomes/incomes-create */ "./src/components/incomes/incomes-create.ts");
/* harmony import */ var _utils_file_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/file-utils */ "./src/utils/file-utils.ts");
/* harmony import */ var _components_incomes_incomes_edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/incomes/incomes-edit */ "./src/components/incomes/incomes-edit.ts");
/* harmony import */ var _components_expenses_expenses_edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/expenses/expenses-edit */ "./src/components/expenses/expenses-edit.ts");
/* harmony import */ var _components_auth_registration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/auth/registration */ "./src/components/auth/registration.ts");
/* harmony import */ var _components_auth_login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/auth/login */ "./src/components/auth/login.ts");
/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/auth-utils */ "./src/utils/auth-utils.ts");
/* harmony import */ var _components_incomes_expenses_incomes_expenses_create__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/incomes-expenses/incomes-expenses-create */ "./src/components/incomes-expenses/incomes-expenses-create.ts");
/* harmony import */ var _components_incomes_expenses_incomes_expenses_main__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/incomes-expenses/incomes-expenses-main */ "./src/components/incomes-expenses/incomes-expenses-main.ts");
/* harmony import */ var _components_incomes_expenses_incomes_expenses_edit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/incomes-expenses/incomes-expenses-edit */ "./src/components/incomes-expenses/incomes-expenses-edit.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};















var Router = /** @class */ (function () {
    function Router() {
        this.pageContentElement = null;
        this.tabTitle = null;
        this.pageContentElement = document.getElementById('page');
        this.tabTitle = document.getElementById('tab-title');
        window.addEventListener('DOMContentLoaded', this.openNewRoute.bind(this));
        window.addEventListener('popstate', this.openNewRoute.bind(this));
        this.routes = [
            {
                route: '#/registration',
                tabTitle: 'Регистрация',
                pageTitle: null,
                template: 'templates/auth/registration.html',
                styles: [
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                ],
                useLayout: false,
                scripts: null,
                onload: function () {
                    new _components_auth_registration__WEBPACK_IMPORTED_MODULE_9__.Registration();
                },
                needAuthorization: false,
            },
            {
                route: '#/login',
                tabTitle: 'Вход в систему',
                pageTitle: null,
                template: 'templates/auth/login.html',
                styles: [
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                ],
                useLayout: false,
                scripts: null,
                onload: function () {
                    new _components_auth_login__WEBPACK_IMPORTED_MODULE_10__.Login();
                },
                needAuthorization: false,
            },
            {
                route: '#/',
                tabTitle: 'Главная',
                pageTitle: 'Главная',
                template: 'templates/main.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                    'lib/css/jquery-ui.min.css',
                    'css/common.css',
                    'css/pages/main.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery.magnific-popup.min.js',
                    'lib/js/jquery-ui.min.js',
                    'lib/js/chart.js',
                ],
                onload: function () {
                    new _components_layout__WEBPACK_IMPORTED_MODULE_0__.Layout();
                    new _components_main__WEBPACK_IMPORTED_MODULE_1__.Main();
                },
                needAuthorization: true,
            },
            {
                route: '#/expenses-create',
                tabTitle: 'Создание категории',
                pageTitle: 'Создание категории расходов',
                template: 'templates/category-manipulations/create-category.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery.magnific-popup.min.js',
                ],
                onload: function () {
                    new _components_layout__WEBPACK_IMPORTED_MODULE_0__.Layout();
                    new _components_expenses_expenses_create__WEBPACK_IMPORTED_MODULE_4__.ExpensesCreate();
                },
                needAuthorization: true,
            },
            {
                route: '#/expenses-edit',
                tabTitle: 'Редактирование категории',
                pageTitle: 'Редактирование категории расходов',
                template: 'templates/category-manipulations/edit-category.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery.magnific-popup.min.js',
                ],
                onload: function () {
                    new _components_layout__WEBPACK_IMPORTED_MODULE_0__.Layout();
                    new _components_expenses_expenses_edit__WEBPACK_IMPORTED_MODULE_8__.ExpensesEdit();
                },
                needAuthorization: true,
            },
            {
                route: '#/expenses-main',
                tabTitle: 'Расходы',
                pageTitle: 'Расходы',
                template: 'templates/expenses/expenses-main.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                    'css/common.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery.magnific-popup.min.js',
                ],
                onload: function () {
                    new _components_layout__WEBPACK_IMPORTED_MODULE_0__.Layout();
                    new _components_expenses_expenses_main__WEBPACK_IMPORTED_MODULE_3__.ExpensesMain();
                },
                needAuthorization: true,
            },
            {
                route: '#/incomes-create',
                tabTitle: 'Создание категории',
                pageTitle: 'Создание категории доходов',
                template: 'templates/category-manipulations/create-category.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery.magnific-popup.min.js',
                ],
                onload: function () {
                    new _components_layout__WEBPACK_IMPORTED_MODULE_0__.Layout();
                    new _components_incomes_incomes_create__WEBPACK_IMPORTED_MODULE_5__.IncomesCreate();
                },
                needAuthorization: true,
            },
            {
                route: '#/incomes-edit',
                tabTitle: 'Редактирование категории',
                pageTitle: 'Редактирование категории доходов',
                template: 'templates/category-manipulations/edit-category.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery.magnific-popup.min.js',
                ],
                onload: function () {
                    new _components_layout__WEBPACK_IMPORTED_MODULE_0__.Layout();
                    new _components_incomes_incomes_edit__WEBPACK_IMPORTED_MODULE_7__.IncomesEdit();
                },
                needAuthorization: true,
            },
            {
                route: '#/incomes-main',
                tabTitle: 'Доходы',
                pageTitle: 'Доходы',
                template: 'templates/incomes/incomes-main.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                    'css/common.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery.magnific-popup.min.js',
                ],
                onload: function () {
                    new _components_layout__WEBPACK_IMPORTED_MODULE_0__.Layout();
                    new _components_incomes_incomes_main__WEBPACK_IMPORTED_MODULE_2__.IncomesMain();
                },
                needAuthorization: true,
            },
            {
                route: '#/incomes-expenses-create',
                tabTitle: 'Создание дохода/расхода',
                pageTitle: 'Создание дохода/расхода',
                template: 'templates/incomes-expenses/incomes-expenses-create.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                    'lib/css/jquery-ui.min.css',
                    'lib/css/select2.min.css',
                    'lib/css/select2-bootstrap4.min.css',
                    'css/common.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery.magnific-popup.min.js',
                    'lib/js/jquery-ui.min.js',
                    'lib/js/select2.full.min.js',
                ],
                onload: function () {
                    new _components_layout__WEBPACK_IMPORTED_MODULE_0__.Layout();
                    new _components_incomes_expenses_incomes_expenses_create__WEBPACK_IMPORTED_MODULE_12__.IncomesExpensesCreate();
                },
                needAuthorization: true,
            },
            {
                route: '#/incomes-expenses-edit',
                tabTitle: 'Редактирование дохода/расхода',
                pageTitle: 'Редактирование дохода/расхода',
                template: 'templates/incomes-expenses/incomes-expenses-edit.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                    'lib/css/jquery-ui.min.css',
                    'lib/css/select2.min.css',
                    'lib/css/select2-bootstrap4.min.css',
                    'css/common.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery.magnific-popup.min.js',
                    'lib/js/jquery-ui.min.js',
                    'lib/js/select2.full.min.js',
                ],
                onload: function () {
                    new _components_layout__WEBPACK_IMPORTED_MODULE_0__.Layout();
                    new _components_incomes_expenses_incomes_expenses_edit__WEBPACK_IMPORTED_MODULE_14__.IncomesExpensesEdit();
                },
                needAuthorization: true,
            },
            {
                route: '#/incomes-expenses-main',
                tabTitle: 'Доходы и расходы',
                pageTitle: 'Доходы и расходы',
                template: 'templates/incomes-expenses/incomes-expenses-main.html',
                styles: [
                    'lib/css/magnific-popup.css',
                    'lib/fontawesome-free-6.6.0-web/css/all.min.css',
                    'css/layout.css',
                    'lib/css/jquery-ui.min.css',
                    'css/common.css',
                ],
                useLayout: 'templates/layout.html',
                scripts: [
                    'lib/js/jquery.magnific-popup.min.js',
                    'lib/js/jquery-ui.min.js',
                ],
                onload: function () {
                    new _components_layout__WEBPACK_IMPORTED_MODULE_0__.Layout();
                    new _components_incomes_expenses_incomes_expenses_main__WEBPACK_IMPORTED_MODULE_13__.IncomesExpensesMain();
                },
                needAuthorization: true,
            }
        ];
    }
    Router.prototype.prepareNewRouteStyles = function (newRouteObj) {
        var styles = document.head.getElementsByTagName('link');
        for (var i = styles.length - 1; i >= 0; i--) {
            if (!styles[i].getAttribute('href').match(/.*lib\/css\/bootstrap\.min\.css/)) {
                styles[i].remove();
            }
        }
        newRouteObj.styles.forEach(function (style) {
            _utils_file_utils__WEBPACK_IMPORTED_MODULE_6__.FileUtils.addNewStyle(style);
        });
    };
    Router.prototype.prepareNewRouteScripts = function (newRouteObj) {
        return __awaiter(this, void 0, void 0, function () {
            var scripts, i, _i, _a, script;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        scripts = document.body.getElementsByTagName('script');
                        for (i = scripts.length - 1; i >= 0; i--) {
                            if (!scripts[i].getAttribute('href').match(/.*lib\/js\/bootstrap\..*min\.js/) &&
                                !scripts[i].getAttribute('href').match(/.*lib\/js\/jquery-3.7.1.min.js/)) {
                                scripts[i].remove();
                            }
                        }
                        _i = 0, _a = newRouteObj.scripts;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        script = _a[_i];
                        return [4 /*yield*/, _utils_file_utils__WEBPACK_IMPORTED_MODULE_6__.FileUtils.addNewScript(script)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Router.prototype.openNewRoute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newRouteName, newRouteObj, _a, title, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        newRouteName = window.location.hash.split('?')[0];
                        newRouteObj = this.routes.find(function (route) { return route.route === newRouteName; });
                        if (!newRouteObj) return [3 /*break*/, 9];
                        if (newRouteObj.needAuthorization && !_utils_auth_utils__WEBPACK_IMPORTED_MODULE_11__.AuthUtils.userIsAuthorized()) {
                            window.location.hash = '#/login';
                            return [2 /*return*/];
                        }
                        else if (!newRouteObj.needAuthorization && _utils_auth_utils__WEBPACK_IMPORTED_MODULE_11__.AuthUtils.userIsAuthorized()) {
                            window.location.hash = '#/';
                            return [2 /*return*/];
                        }
                        if (!newRouteObj.useLayout) return [3 /*break*/, 3];
                        if (!this.pageContentElement) return [3 /*break*/, 2];
                        _a = this.pageContentElement;
                        return [4 /*yield*/, fetch(newRouteObj.useLayout).then(function (response) { return response.text(); })];
                    case 1:
                        _a.innerHTML = _c.sent();
                        this.pageContentElement = document.getElementById('content');
                        title = document.getElementById('page-title');
                        if (title) {
                            title.innerText = newRouteObj.pageTitle;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        alert("Не удалось загрузить страницу");
                        return [2 /*return*/];
                    case 3:
                        if (!this.pageContentElement) return [3 /*break*/, 7];
                        _b = this.pageContentElement;
                        return [4 /*yield*/, fetch(newRouteObj.template).then(function (response) { return response.text(); })];
                    case 4:
                        _b.innerHTML = _c.sent();
                        this.pageContentElement = document.getElementById('page');
                        if (this.tabTitle) {
                            this.tabTitle.innerText = newRouteObj.tabTitle;
                        }
                        this.prepareNewRouteStyles(newRouteObj);
                        if (!(newRouteObj.hasOwnProperty('scripts') && newRouteObj.scripts.length > 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.prepareNewRouteScripts(newRouteObj)];
                    case 5:
                        _c.sent();
                        _c.label = 6;
                    case 6:
                        if (newRouteObj.onload && typeof newRouteObj.onload === 'function') {
                            newRouteObj.onload();
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        alert("Не удалось загрузить страницу");
                        return [2 /*return*/];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        if (_utils_auth_utils__WEBPACK_IMPORTED_MODULE_11__.AuthUtils.userIsAuthorized()) {
                            window.location.hash = '#/';
                        }
                        else {
                            window.location.hash = '#/login';
                        }
                        _c.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    return Router;
}());



/***/ }),

/***/ "./src/utils/auth-utils.ts":
/*!*********************************!*\
  !*** ./src/utils/auth-utils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthUtils: () => (/* binding */ AuthUtils)
/* harmony export */ });
/* harmony import */ var _http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-utils */ "./src/utils/http-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var AuthUtils = /** @class */ (function () {
    function AuthUtils() {
    }
    AuthUtils.setAuthInfo = function (accessToken, refreshToken) {
        if (refreshToken === void 0) { refreshToken = null; }
        localStorage.setItem(this.accessToken, accessToken);
        if (refreshToken) {
            localStorage.setItem(this.refreshToken, refreshToken);
        }
    };
    AuthUtils.setUserInfo = function (info) {
        localStorage.setItem(this.userInfo, JSON.stringify(info));
    };
    AuthUtils.getAuthTokensInfo = function () {
        var _a;
        return _a = {},
            _a[this.accessToken] = localStorage.getItem(this.accessToken),
            _a[this.refreshToken] = localStorage.getItem(this.refreshToken),
            _a;
    };
    AuthUtils.getAuthUserInfo = function () {
        var authInfo = localStorage.getItem(this.userInfo);
        if (authInfo) {
            return JSON.parse(authInfo);
        }
        return null;
    };
    AuthUtils.resetAuthInfo = function () {
        localStorage.clear();
    };
    AuthUtils.userIsAuthorized = function () {
        return Boolean(AuthUtils.getAuthTokensInfo().accessToken);
    };
    AuthUtils.processUnauthorizedRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refreshToken = AuthUtils.getAuthTokensInfo().refreshToken;
                        if (!refreshToken) return [3 /*break*/, 2];
                        return [4 /*yield*/, _http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/refresh', 'POST', {
                                refreshToken: refreshToken,
                            })];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            AuthUtils.setAuthInfo(result.tokens.accessToken, result.tokens.refreshToken);
                            return [2 /*return*/, true];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, false];
                }
            });
        });
    };
    AuthUtils.accessToken = 'accessToken';
    AuthUtils.refreshToken = 'refreshToken';
    AuthUtils.userInfo = 'user';
    return AuthUtils;
}());



/***/ }),

/***/ "./src/utils/date-utils.ts":
/*!*********************************!*\
  !*** ./src/utils/date-utils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateUtils: () => (/* binding */ DateUtils)
/* harmony export */ });
var DateUtils = /** @class */ (function () {
    function DateUtils() {
    }
    DateUtils.parseDate = function (date) {
        var _a = date.split('.'), day = _a[0], month = _a[1], year = _a[2];
        return "".concat(year, "-").concat(month, "-").concat(day);
    };
    return DateUtils;
}());



/***/ }),

/***/ "./src/utils/file-utils.ts":
/*!*********************************!*\
  !*** ./src/utils/file-utils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUtils: () => (/* binding */ FileUtils)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var FileUtils = /** @class */ (function () {
    function FileUtils() {
    }
    FileUtils.addNewScript = function (scriptSrc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var scriptElement = document.createElement('script');
                        scriptElement.src = scriptSrc;
                        scriptElement.onload = function () {
                            resolve('Script loaded: ' + scriptSrc);
                        };
                        scriptElement.onerror = function () {
                            reject('Failed load script: ' + scriptSrc);
                        };
                        document.body.appendChild(scriptElement);
                    })];
            });
        });
    };
    FileUtils.addNewStyle = function (styleSrc) {
        var styleElement = document.createElement('link');
        styleElement.setAttribute('rel', 'stylesheet');
        styleElement.setAttribute('href', styleSrc);
        document.head.appendChild(styleElement);
    };
    return FileUtils;
}());



/***/ }),

/***/ "./src/utils/http-utils.ts":
/*!*********************************!*\
  !*** ./src/utils/http-utils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpUtils: () => (/* binding */ HttpUtils)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ "./src/config/config.ts");
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-utils */ "./src/utils/auth-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var HttpUtils = /** @class */ (function () {
    function HttpUtils() {
    }
    HttpUtils.request = function (url_1) {
        return __awaiter(this, arguments, void 0, function (url, method, data) {
            var params, token, response, result, result;
            if (method === void 0) { method = 'GET'; }
            if (data === void 0) { data = null; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            method: method,
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                            },
                        };
                        if (data) {
                            params.body = JSON.stringify(data);
                        }
                        token = _auth_utils__WEBPACK_IMPORTED_MODULE_1__.AuthUtils.getAuthTokensInfo().accessToken;
                        if (token) {
                            params.headers['x-auth-token'] = token;
                        }
                        return [4 /*yield*/, fetch(_config_config__WEBPACK_IMPORTED_MODULE_0__["default"].api + url, params)];
                    case 1:
                        response = _a.sent();
                        if (!(response.status >= 200 && response.status < 300)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            return [2 /*return*/, result];
                        }
                        return [3 /*break*/, 7];
                    case 3:
                        if (!(response.status === 401)) return [3 /*break*/, 7];
                        return [4 /*yield*/, _auth_utils__WEBPACK_IMPORTED_MODULE_1__.AuthUtils.processUnauthorizedRequest()];
                    case 4:
                        result = _a.sent();
                        if (!result) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.request(url, method, data)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6:
                        _auth_utils__WEBPACK_IMPORTED_MODULE_1__.AuthUtils.resetAuthInfo();
                        return [2 /*return*/, null];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return HttpUtils;
}());



/***/ }),

/***/ "./src/utils/url-utils.ts":
/*!********************************!*\
  !*** ./src/utils/url-utils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlUtils: () => (/* binding */ UrlUtils)
/* harmony export */ });
var UrlUtils = /** @class */ (function () {
    function UrlUtils() {
    }
    UrlUtils.getParam = function (name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };
    return UrlUtils;
}());



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
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/router.ts");

var App = /** @class */ (function () {
    function App() {
        new _router__WEBPACK_IMPORTED_MODULE_0__.Router();
    }
    return App;
}());
(new App());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxLQUFLLEdBQVcsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxFQUMvRCxPQUFPLEdBQTJCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sRUFBRSxDQUFDO1FBQzNCLE9BQU8sa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUM7Ozs7Ozs7O1VDVkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOZ0M7QUFFaEM7SUFDSTtRQUNJLElBQUksMkNBQU0sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FBQztBQUNELENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9hdXRoL2xvZ2luLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9yZWdpc3RyYXRpb24udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9leHBlbnNlcy9leHBlbnNlcy1jcmVhdGUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9leHBlbnNlcy9leHBlbnNlcy1lZGl0LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvZXhwZW5zZXMvZXhwZW5zZXMtbWFpbi50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL2luY29tZXMtZXhwZW5zZXMvaW5jb21lcy1leHBlbnNlcy1jcmVhdGUudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9pbmNvbWVzLWV4cGVuc2VzL2luY29tZXMtZXhwZW5zZXMtZWRpdC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL2luY29tZXMtZXhwZW5zZXMvaW5jb21lcy1leHBlbnNlcy1tYWluLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvaW5jb21lcy9pbmNvbWVzLWNyZWF0ZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL2luY29tZXMvaW5jb21lcy1lZGl0LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvaW5jb21lcy9pbmNvbWVzLW1haW4udHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9tYWluLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbmZpZy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGVyLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3V0aWxzL2F1dGgtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdXRpbHMvZGF0ZS11dGlscy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy91dGlscy9maWxlLXV0aWxzLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3V0aWxzL2h0dHAtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdXRpbHMvdXJsLXV0aWxzLnRzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXV0aFV0aWxzfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXV0aC11dGlsc1wiO1xyXG5pbXBvcnQge0h0dHBVdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL2h0dHAtdXRpbHNcIjtcclxuaW1wb3J0IHtWYWxpZGF0aW9uVHlwZX0gZnJvbSBcIi4uLy4uL3R5cGVzL3ZhbGlkYXRpb24udHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luIHtcclxuICAgIHJlYWRvbmx5IGxvZ2luRXJyb3I6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIHByaXZhdGUgdmFsaWRhdGlvbnM6IFZhbGlkYXRpb25UeXBlW107XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmxvZ2luRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZXJyb3InKTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZW1haWwnLFxyXG4gICAgICAgICAgICAgICAgaWQ6ICdlbWFpbCcsXHJcbiAgICAgICAgICAgICAgICByZWdleDogL15cXHMqW1xcdy5dK0BbYS16QS1aX10rP1xcLlthLXpBLVpdezIsNn1cXHMqJC8sXHJcbiAgICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgaWQ6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICByZWdleDogL14oPz0uKlxcZCkoPz0uKltBLVpdKVswLTlhLXpBLVpdezgsfSQvLFxyXG4gICAgICAgICAgICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdElucHV0cygpO1xyXG5cclxuICAgICAgICBjb25zdCBsb2dpbkJ1dHRvbjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWJ1dHRvbicpO1xyXG4gICAgICAgIGlmIChsb2dpbkJ1dHRvbikge1xyXG4gICAgICAgICAgICBsb2dpbkJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCkudGhlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdElucHV0cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25zLmZvckVhY2goKHZhbGlkYXRpb246IFZhbGlkYXRpb25UeXBlKSA9PiB2YWxpZGF0aW9uLmVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmFsaWRhdGlvbi5pZCkpO1xyXG4gICAgICAgIGxldCBlbWFpbFZhbGlkYXRpb246IFZhbGlkYXRpb25UeXBlIHwgdW5kZWZpbmVkID0gdGhpcy52YWxpZGF0aW9ucy5maW5kKCh2YWxpZGF0aW9uOiBWYWxpZGF0aW9uVHlwZSkgPT4gdmFsaWRhdGlvbi5uYW1lID09PSAnZW1haWwnKTtcclxuICAgICAgICBpZiAoZW1haWxWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgIGVtYWlsVmFsaWRhdGlvbi5lbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVtYWlsVmFsaWRhdGlvbi5pZCk7XHJcbiAgICAgICAgICAgIGlmIChlbWFpbFZhbGlkYXRpb24uZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZW1haWxWYWxpZGF0aW9uLmVsZW1lbnQub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubG9naW5FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgnZC1ibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVtYWlsVmFsaWRhdGlvbiEuZWxlbWVudCEudmFsdWUubWF0Y2goZW1haWxWYWxpZGF0aW9uIS5yZWdleCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsVmFsaWRhdGlvbiEuZWxlbWVudCEuY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxWYWxpZGF0aW9uIS52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxWYWxpZGF0aW9uIS5lbGVtZW50IS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbFZhbGlkYXRpb24hLnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlRm9ybSgpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgaXNWYWxpZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9ucy5mb3JFYWNoKCh2YWxpZGF0aW9uOiBWYWxpZGF0aW9uVHlwZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRpb24udmFsaWQgJiYgdmFsaWRhdGlvbi5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBsb2dpbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBlbWFpbElucHV0T2JqOiBWYWxpZGF0aW9uVHlwZSB8IHVuZGVmaW5lZCA9IHRoaXMudmFsaWRhdGlvbnMuZmluZCgodmFsaWRhdGlvbjogVmFsaWRhdGlvblR5cGUpID0+IHZhbGlkYXRpb24ubmFtZSA9PT0gJ2VtYWlsJylcclxuICAgICAgICBsZXQgZW1haWw6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGlmIChlbWFpbElucHV0T2JqKSB7XHJcbiAgICAgICAgICAgIGVtYWlsID0gZW1haWxJbnB1dE9iai5lbGVtZW50IS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmRJbnB1dE9iajogVmFsaWRhdGlvblR5cGUgfCB1bmRlZmluZWQgPSB0aGlzLnZhbGlkYXRpb25zLmZpbmQoKHZhbGlkYXRpb246IFZhbGlkYXRpb25UeXBlKSA9PiB2YWxpZGF0aW9uLm5hbWUgPT09ICdwYXNzd29yZCcpO1xyXG4gICAgICAgIGxldCBwYXNzd29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkSW5wdXRPYmopIHtcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSBwYXNzd29yZElucHV0T2JqLmVsZW1lbnQhLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZW1lbWJlck1lRWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSA8SFRNTElucHV0RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbWVtYmVyLW1lJyk7XHJcbiAgICAgICAgbGV0IHJlbWVtYmVyTWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBpZiAocmVtZW1iZXJNZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmVtZW1iZXJNZSA9IHJlbWVtYmVyTWVFbGVtZW50LmNoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbWFpbCAmJiBwYXNzd29yZCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgSHR0cFV0aWxzLnJlcXVlc3QoJy9sb2dpbicsICdQT1NUJywge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgcmVtZW1iZXJNZTogcmVtZW1iZXJNZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2dpbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkVycm9yLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgJiYgcmVzdWx0LnRva2VucyAmJiByZXN1bHQudG9rZW5zLmFjY2Vzc1Rva2VuICYmIHJlc3VsdC50b2tlbnMucmVmcmVzaFRva2VuICYmIHJlc3VsdC51c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBBdXRoVXRpbHMuc2V0QXV0aEluZm8ocmVzdWx0LnRva2Vucy5hY2Nlc3NUb2tlbiwgcmVzdWx0LnRva2Vucy5yZWZyZXNoVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFBdXRoVXRpbHMuZ2V0QXV0aFVzZXJJbmZvKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRoVXRpbHMuc2V0VXNlckluZm8ocmVzdWx0LnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy8nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNC/0YDQvtGB0LjRgtGMINC00LDQvdC90YvQtScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNC/0YDQvtGB0LjRgtGMINC00LDQvdC90YvQtScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7QXV0aFV0aWxzfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXV0aC11dGlsc1wiO1xyXG5pbXBvcnQge0h0dHBVdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL2h0dHAtdXRpbHNcIjtcclxuaW1wb3J0IHtcclxuICAgIEF1dGhFcnJvclJlc3BvbnNlVHlwZSxcclxuICAgIExvZ2luUmVzcG9uc2VUeXBlLFxyXG4gICAgUmVnaXN0cmF0aW9uUmVzcG9uc2VUeXBlXHJcbn0gZnJvbSBcIi4uLy4uL3R5cGVzL2h0dHAtcmVzcG9uc2UudHlwZVwiO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25UeXBlfSBmcm9tIFwiLi4vLi4vdHlwZXMvdmFsaWRhdGlvbi50eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVnaXN0cmF0aW9uIHtcclxuICAgIHByaXZhdGUgY29tbW9uRXJyb3JFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBwcml2YXRlIHZhbGlkYXRpb25zOiBWYWxpZGF0aW9uVHlwZVtdO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb21tb25FcnJvckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbW9uLWVycm9yJyk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdmdWxsLW5hbWUnLFxyXG4gICAgICAgICAgICAgICAgaWQ6ICdmdWxsLW5hbWUnLFxyXG4gICAgICAgICAgICAgICAgcmVnZXg6IC9eXFxzKlvQkC3Qr11b0LAt0Y9dK1xcc1vQkC3Qr11b0LAt0Y9dK1xcc1vQkC3Qr11b0LAt0Y9dK1xccyokLyxcclxuICAgICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlbWFpbCcsXHJcbiAgICAgICAgICAgICAgICBpZDogJ2VtYWlsJyxcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiAvXlxccypbXFx3Ll0rQFthLXpBLVpfXSs/XFwuW2EtekEtWl17Miw2fVxccyokLyxcclxuICAgICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICBpZDogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiAvXig/PS4qXFxkKSg/PS4qW0EtWl0pWzAtOWEtekEtWl17OCx9JC8sXHJcbiAgICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncmVwZWF0LXBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIGlkOiAncmVwZWF0LXBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiAvLiovLFxyXG4gICAgICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRJbnB1dHMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9naW5CdXR0b246IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1idXR0b24nKTtcclxuICAgICAgICBpZiAobG9naW5CdXR0b24pIHtcclxuICAgICAgICAgICAgbG9naW5CdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RyYXRpb24oKS50aGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0SW5wdXRzKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCByZXBlYXRQYXNzd29yZFZhbGlkYXRpb246IFZhbGlkYXRpb25UeXBlIHwgdW5kZWZpbmVkID0gdGhpcy52YWxpZGF0aW9ucy5maW5kKCh2YWxpZGF0aW9uOiBWYWxpZGF0aW9uVHlwZSkgPT4gdmFsaWRhdGlvbi5uYW1lID09PSAncGFzc3dvcmQnKTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25zLmZvckVhY2goKHZhbGlkYXRpb246IFZhbGlkYXRpb25UeXBlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25JbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSA8SFRNTElucHV0RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmFsaWRhdGlvbi5pZCk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uSW5wdXQgJiYgdmFsaWRhdGlvbi5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uLmVsZW1lbnQgPSB2YWxpZGF0aW9uSW5wdXQ7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uLmVsZW1lbnQub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24ubmFtZSA9PT0gJ3JlcGVhdC1wYXNzd29yZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcGVhdFBhc3N3b3JkVmFsaWRhdGlvbiAmJiByZXBlYXRQYXNzd29yZFZhbGlkYXRpb24uZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24uZWxlbWVudCEudmFsdWUgIT09IHJlcGVhdFBhc3N3b3JkVmFsaWRhdGlvbi5lbGVtZW50LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbi5lbGVtZW50IS5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbi52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uLmVsZW1lbnQhLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWludmFsaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uLnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfQndC1INGD0LTQsNC70L7RgdGMINGA0LDRgdC/0L7Qt9C90LDRgtGMINC00LDQvdC90YvQtScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9uLmVsZW1lbnQhLnZhbHVlLm1hdGNoKHZhbGlkYXRpb24ucmVnZXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uLmVsZW1lbnQhLmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb24udmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb24uZWxlbWVudCEuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbi52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlRm9ybSgpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgaXNWYWxpZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9ucy5mb3JFYWNoKCh2YWxpZGF0aW9uOiBWYWxpZGF0aW9uVHlwZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRpb24udmFsaWQgJiYgdmFsaWRhdGlvbi5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyByZWdpc3RyYXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbGV0IGVycm9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0T2JqOiBWYWxpZGF0aW9uVHlwZSB8IHVuZGVmaW5lZCA9IHRoaXMudmFsaWRhdGlvbnMuZmluZCgodmFsaWRhdGlvbjogVmFsaWRhdGlvblR5cGUpID0+IHZhbGlkYXRpb24ubmFtZSA9PT0gJ2Z1bGwtbmFtZScpO1xyXG4gICAgICAgIGxldCBuYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBpZiAobmFtZUlucHV0T2JqKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lSW5wdXRPYmouZWxlbWVudCEudmFsdWUuc3BsaXQoJyAnKVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGFzdE5hbWVJbnB1dE9iajogVmFsaWRhdGlvblR5cGUgfCB1bmRlZmluZWQgPSB0aGlzLnZhbGlkYXRpb25zLmZpbmQoKHZhbGlkYXRpb246IFZhbGlkYXRpb25UeXBlKSA9PiB2YWxpZGF0aW9uLm5hbWUgPT09ICdmdWxsLW5hbWUnKTtcclxuICAgICAgICBsZXQgbGFzdE5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGlmIChsYXN0TmFtZUlucHV0T2JqKSB7XHJcbiAgICAgICAgICAgIGxhc3ROYW1lID0gbGFzdE5hbWVJbnB1dE9iai5lbGVtZW50IS52YWx1ZS5zcGxpdCgnICcpWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBlbWFpbElucHV0T2JqOiBWYWxpZGF0aW9uVHlwZSB8IHVuZGVmaW5lZCA9IHRoaXMudmFsaWRhdGlvbnMuZmluZCgodmFsaWRhdGlvbjogVmFsaWRhdGlvblR5cGUpID0+IHZhbGlkYXRpb24ubmFtZSA9PT0gJ2VtYWlsJylcclxuICAgICAgICBsZXQgZW1haWw6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGlmIChlbWFpbElucHV0T2JqKSB7XHJcbiAgICAgICAgICAgIGVtYWlsID0gZW1haWxJbnB1dE9iai5lbGVtZW50IS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmRJbnB1dE9iajogVmFsaWRhdGlvblR5cGUgfCB1bmRlZmluZWQgPSB0aGlzLnZhbGlkYXRpb25zLmZpbmQoKHZhbGlkYXRpb246IFZhbGlkYXRpb25UeXBlKSA9PiB2YWxpZGF0aW9uLm5hbWUgPT09ICdwYXNzd29yZCcpO1xyXG4gICAgICAgIGxldCBwYXNzd29yZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkSW5wdXRPYmopIHtcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSBwYXNzd29yZElucHV0T2JqLmVsZW1lbnQhLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXBlYXRQYXNzd29yZE9iajogVmFsaWRhdGlvblR5cGUgfCB1bmRlZmluZWQgPSB0aGlzLnZhbGlkYXRpb25zLmZpbmQoKHZhbGlkYXRpb246IFZhbGlkYXRpb25UeXBlKSA9PiB2YWxpZGF0aW9uLm5hbWUgPT09ICdyZXBlYXQtcGFzc3dvcmQnKTtcclxuICAgICAgICBsZXQgcmVwZWF0UGFzc3dvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGlmIChyZXBlYXRQYXNzd29yZE9iaikge1xyXG4gICAgICAgICAgICByZXBlYXRQYXNzd29yZCA9IHJlcGVhdFBhc3N3b3JkT2JqLmVsZW1lbnQhLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSAmJiBsYXN0TmFtZSAmJiBlbWFpbCAmJiBwYXNzd29yZCAmJiByZXBlYXRQYXNzd29yZCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBSZWdpc3RyYXRpb25SZXNwb25zZVR5cGUgfCBBdXRoRXJyb3JSZXNwb25zZVR5cGUgPSBhd2FpdCBIdHRwVXRpbHMucmVxdWVzdCgnL3NpZ251cCcsICdQT1NUJywge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBsYXN0TmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkUmVwZWF0OiByZXBlYXRQYXNzd29yZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgYXMgUmVnaXN0cmF0aW9uUmVzcG9uc2VUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIEF1dGhVdGlscy5zZXRVc2VySW5mbygocmVzdWx0IGFzIFJlZ2lzdHJhdGlvblJlc3BvbnNlVHlwZSkudXNlcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21tb25FcnJvckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1vbkVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQ6IExvZ2luUmVzcG9uc2VUeXBlIHwgQXV0aEVycm9yUmVzcG9uc2VUeXBlID0gYXdhaXQgSHR0cFV0aWxzLnJlcXVlc3QoJy9sb2dpbicsICdQT1NUJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtZW1iZXJNZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgYXMgTG9naW5SZXNwb25zZVR5cGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhVdGlscy5zZXRBdXRoSW5mbygocmVzdWx0IGFzIExvZ2luUmVzcG9uc2VUeXBlKS50b2tlbnMuYWNjZXNzVG9rZW4sIChyZXN1bHQgYXMgTG9naW5SZXNwb25zZVR5cGUpLnRva2Vucy5yZWZyZXNoVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMvJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNC/0YDQvtGB0LjRgtGMINC00LDQvdC90YvQtScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoXCLQndC1INGD0LTQsNC70L7RgdGMINC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRj1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0h0dHBVdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL2h0dHAtdXRpbHNcIjtcclxuaW1wb3J0IHtDYXRlZ29yaWVzUmVzcG9uc2VUeXBlfSBmcm9tIFwiLi4vLi4vdHlwZXMvaHR0cC1yZXNwb25zZS50eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwZW5zZXNDcmVhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsJyk7XHJcbiAgICAgICAgaWYgKGNhbmNlbEJ1dHRvbikge1xyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMvZXhwZW5zZXMtbWFpbic7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZScpO1xyXG4gICAgICAgIGlmIChjcmVhdGVCdXR0b24pIHtcclxuICAgICAgICAgICAgY3JlYXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUNhdGVnb3J5KCkudGhlbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgY3JlYXRlQ2F0ZWdvcnkoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlJbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeS1uYW1lJyk7XHJcbiAgICAgICAgaWYgKGNhdGVnb3J5SW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghY2F0ZWdvcnlJbnB1dEVsZW1lbnQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQ6IENhdGVnb3JpZXNSZXNwb25zZVR5cGUgPSBhd2FpdCBIdHRwVXRpbHMucmVxdWVzdCgnL2NhdGVnb3JpZXMvZXhwZW5zZScsICdQT1NUJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBjYXRlZ29yeUlucHV0RWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy9leHBlbnNlcy1tYWluJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYWxlcnQoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YHQvtC30LTQsNGC0Ywg0LrQsNGC0LXQs9C+0YDQuNGOJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0h0dHBVdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL2h0dHAtdXRpbHNcIjtcclxuaW1wb3J0IHtVcmxVdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL3VybC11dGlsc1wiO1xyXG5pbXBvcnQge0NhdGVnb3JpZXNSZXNwb25zZVR5cGV9IGZyb20gXCIuLi8uLi90eXBlcy9odHRwLXJlc3BvbnNlLnR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlc0VkaXQge1xyXG4gICAgcmVhZG9ubHkgY2F0ZWdvcnlJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IGNhdGVnb3J5TmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IGNhdGVnb3J5SW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeUlkID0gVXJsVXRpbHMuZ2V0UGFyYW0oJ2lkJyk7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeU5hbWUgPSBVcmxVdGlscy5nZXRQYXJhbSgnbmFtZScpO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlJbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5LW5hbWUnKTtcclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yeUlucHV0RWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYXRlZ29yeU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlJbnB1dEVsZW1lbnQudmFsdWUgPSB0aGlzLmNhdGVnb3J5TmFtZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlJbnB1dEVsZW1lbnQucGxhY2Vob2xkZXIgPSAn0J3QvtCy0L7QtSDQvdCw0LfQstCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuC4uLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbCcpO1xyXG4gICAgICAgIGlmIChjYW5jZWxCdXR0b24pIHtcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjL2V4cGVuc2VzLW1haW4nO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUnKTtcclxuICAgICAgICBpZiAoc2F2ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBzYXZlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhdGVnb3J5KCkudGhlbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlQ2F0ZWdvcnkoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcnlJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhdGVnb3J5SW5wdXRFbGVtZW50LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5SW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQ6IENhdGVnb3JpZXNSZXNwb25zZVR5cGUgPSBhd2FpdCBIdHRwVXRpbHMucmVxdWVzdCgnL2NhdGVnb3JpZXMvZXhwZW5zZS8nICsgdGhpcy5jYXRlZ29yeUlkLCAnUFVUJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmNhdGVnb3J5SW5wdXRFbGVtZW50LnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjL2V4cGVuc2VzLW1haW4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydCgn0J3QtSDRg9C00LDQu9C+0YHRjCDQvtGC0YDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0LrQsNGC0LXQs9C+0YDQuNGOJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0h0dHBVdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL2h0dHAtdXRpbHNcIjtcclxuaW1wb3J0IHtDYXRlZ29yaWVzUmVzcG9uc2VUeXBlfSBmcm9tIFwiLi4vLi4vdHlwZXMvaHR0cC1yZXNwb25zZS50eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwZW5zZXNNYWluIHtcclxuICAgIHByaXZhdGUgY3VycmVudENhdGVnb3J5SWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cGVuc2VzLWNvbGxhcHNlJyk/LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlLWVsZW1lbnQtYWN0aXZlJyk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZScpO1xyXG4gICAgICAgIGlmIChkZWxldGVCdXR0b24pIHtcclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmRlbGV0ZUNhdGVnb3J5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TGliKCk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQ2FyZEVsZW1lbnRzOiBIVE1MQ29sbGVjdGlvbiB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxldGVDYXJkRWxlbWVudCcpO1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBkZWxldGVDYXJkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgKGRlbGV0ZUNhcmRFbGVtZW50c1tpXSBhcyBIVE1MRWxlbWVudCkub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50Q2F0ZWdvcnlJZCA9IE51bWJlcigodGhpcyBhcyBIVE1MRWxlbWVudCkuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdExpYigpOiB2b2lkIHtcclxuICAgICAgICAoJCgnLm9wZW4tcG9wdXAtbGluaycpIGFzIGFueSkubWFnbmlmaWNQb3B1cCh7dHlwZTonaW5saW5lJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZ2V0Q2F0ZWdvcmllcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBDYXRlZ29yaWVzUmVzcG9uc2VUeXBlW10gPSBhd2FpdCBIdHRwVXRpbHMucmVxdWVzdCgnL2NhdGVnb3JpZXMvZXhwZW5zZScsICdHRVQnKTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRzQ29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRzLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBpZiAoY2FyZHNDb250YWluZXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZm9yRWFjaCgoY2F0ZWdvcnk6IENhdGVnb3JpZXNSZXNwb25zZVR5cGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeUNhcmQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDYXJkLmNsYXNzTmFtZSA9ICdjYXRlZ29yeS1jYXJkIHAtMic7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDYXJkLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY2FyZCBwLTMgaC0xMDBcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiaDMgdGV4dC1wcmltYXJ5LWVtcGhhc2lzIG1iLTNcIj4ke2NhdGVnb3J5LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvIy9leHBlbnNlcy1lZGl0P25hbWU9JHtjYXRlZ29yeS50aXRsZX0maWQ9JHtjYXRlZ29yeS5pZH1cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPtCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjb25maXJtYXRpb24tcG9wdXBcIiBjbGFzcz1cIm9wZW4tcG9wdXAtbGluayBidG4gYnRuLWRhbmdlciBkZWxldGVDYXJkRWxlbWVudFwiIGRhdGEtaWQ9XCIke2NhdGVnb3J5LmlkfVwiPtCj0LTQsNC70LjRgtGMPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRzQ29udGFpbmVyRWxlbWVudC5wcmVwZW5kKGNhdGVnb3J5Q2FyZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGRlbGV0ZUNhdGVnb3J5KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRDYXRlZ29yeUlkKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBIdHRwVXRpbHMucmVxdWVzdCgnL2NhdGVnb3JpZXMvZXhwZW5zZS8nICsgdGhpcy5jdXJyZW50Q2F0ZWdvcnlJZCwgJ0RFTEVURScpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pZF0nKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID09PSB0aGlzLmN1cnJlbnRDYXRlZ29yeUlkPy50b1N0cmluZygpICYmIHRoaXMuY3VycmVudENhdGVnb3J5SWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbG9zZXN0KCcuY2F0ZWdvcnktY2FyZCcpPy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZXJ0KCfQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwINC/0YDQuCDRg9C00LDQu9C10L3QuNC4INC60LDRgtC10LPQvtGA0LjQuCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtIdHRwVXRpbHN9IGZyb20gXCIuLi8uLi91dGlscy9odHRwLXV0aWxzXCI7XHJcbmltcG9ydCB7VXJsVXRpbHN9IGZyb20gXCIuLi8uLi91dGlscy91cmwtdXRpbHNcIjtcclxuaW1wb3J0IHtEYXRlVXRpbHN9IGZyb20gXCIuLi8uLi91dGlscy9kYXRlLXV0aWxzXCI7XHJcbmltcG9ydCB7Q2F0ZWdvcmllc1Jlc3BvbnNlVHlwZX0gZnJvbSBcIi4uLy4uL3R5cGVzL2h0dHAtcmVzcG9uc2UudHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluY29tZXNFeHBlbnNlc0NyZWF0ZSB7XHJcbiAgICByZWFkb25seSBjYXRlZ29yeVNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgdHlwZVNlbGVjdEVsZW1lbnQ6IEhUTUxTZWxlY3RFbGVtZW50IHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IGFtb3VudElucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IGRhdGVJbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGw7XHJcbiAgICBwcml2YXRlIGluY29tZUNhdGVnb3JpZXM6IENhdGVnb3JpZXNSZXNwb25zZVR5cGVbXSB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBleHBlbnNlQ2F0ZWdvcmllczogQ2F0ZWdvcmllc1Jlc3BvbnNlVHlwZVtdIHwgbnVsbCA9IG51bGw7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5U2VsZWN0ID0gPEhUTUxTZWxlY3RFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnktc2VsZWN0Jyk7XHJcbiAgICAgICAgdGhpcy50eXBlU2VsZWN0RWxlbWVudCA9IDxIVE1MU2VsZWN0RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUtc2VsZWN0Jyk7XHJcbiAgICAgICAgdGhpcy5hbW91bnRJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW1vdW50Jyk7XHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXQgPSA8SFRNTElucHV0RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0TGliKCk7XHJcbiAgICAgICAgdGhpcy5zZXRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmdldERhdGEoKS50aGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0TGliKCk6IHZvaWQge1xyXG4gICAgICAgIC8vICQuZGF0ZXBpY2tlci5yZWdpb25hbFsncnUnXSA9IHtcclxuICAgICAgICAvLyAgICAgY2xvc2VUZXh0OiAn0JfQsNC60YDRi9GC0YwnLFxyXG4gICAgICAgIC8vICAgICBwcmV2VGV4dDogJ9Cf0YDQtdC00YvQtNGD0YnQuNC5JyxcclxuICAgICAgICAvLyAgICAgbmV4dFRleHQ6ICfQodC70LXQtNGD0Y7RidC40LknLFxyXG4gICAgICAgIC8vICAgICBjdXJyZW50VGV4dDogJ9Ch0LXQs9C+0LTQvdGPJyxcclxuICAgICAgICAvLyAgICAgbW9udGhOYW1lczogWyfQr9C90LLQsNGA0YwnLCfQpNC10LLRgNCw0LvRjCcsJ9Cc0LDRgNGCJywn0JDQv9GA0LXQu9GMJywn0JzQsNC5Jywn0JjRjtC90YwnLCfQmNGO0LvRjCcsJ9CQ0LLQs9GD0YHRgicsJ9Ch0LXQvdGC0Y/QsdGA0YwnLCfQntC60YLRj9Cx0YDRjCcsJ9Cd0L7Rj9Cx0YDRjCcsJ9CU0LXQutCw0LHRgNGMJ10sXHJcbiAgICAgICAgLy8gICAgIG1vbnRoTmFtZXNTaG9ydDogWyfQr9C90LInLCfQpNC10LInLCfQnNCw0YAnLCfQkNC/0YAnLCfQnNCw0LknLCfQmNGO0L0nLCfQmNGO0LsnLCfQkNCy0LMnLCfQodC10L0nLCfQntC60YInLCfQndC+0Y8nLCfQlNC10LonXSxcclxuICAgICAgICAvLyAgICAgZGF5TmFtZXM6IFsn0LLQvtGB0LrRgNC10YHQtdC90YzQtScsJ9C/0L7QvdC10LTQtdC70YzQvdC40LonLCfQstGC0L7RgNC90LjQuicsJ9GB0YDQtdC00LAnLCfRh9C10YLQstC10YDQsycsJ9C/0Y/RgtC90LjRhtCwJywn0YHRg9Cx0LHQvtGC0LAnXSxcclxuICAgICAgICAvLyAgICAgZGF5TmFtZXNTaG9ydDogWyfQstGB0LonLCfQv9C90LQnLCfQstGC0YAnLCfRgdGA0LQnLCfRh9GC0LInLCfQv9GC0L0nLCfRgdCx0YInXSxcclxuICAgICAgICAvLyAgICAgZGF5TmFtZXNNaW46IFsn0JLRgScsJ9Cf0L0nLCfQktGCJywn0KHRgCcsJ9Cn0YInLCfQn9GCJywn0KHQsSddLFxyXG4gICAgICAgIC8vICAgICB3ZWVrSGVhZGVyOiAn0J3QtScsXHJcbiAgICAgICAgLy8gICAgIGRhdGVGb3JtYXQ6ICd5eS1tbS1kZCcsXHJcbiAgICAgICAgLy8gICAgIGZpcnN0RGF5OiAxLFxyXG4gICAgICAgIC8vICAgICBpc1JUTDogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgIHNob3dNb250aEFmdGVyWWVhcjogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgIHllYXJTdWZmaXg6ICcnXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvLyAkLmRhdGVwaWNrZXIuc2V0RGVmYXVsdHMoJC5kYXRlcGlja2VyLnJlZ2lvbmFsWydydSddKTtcclxuICAgICAgICAvLyAkKCcjZGF0ZScpLmRhdGVwaWNrZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0MjogYW55ID0gJCgnLnNlbGVjdDInKVxyXG4gICAgICAgIHNlbGVjdDIuc2VsZWN0MigpO1xyXG4gICAgICAgIHNlbGVjdDIuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIHRoZW1lOiAnYm9vdHN0cmFwNCdcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RXZlbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZScpO1xyXG4gICAgICAgIGlmIChjcmVhdGVCdXR0b24pIHtcclxuICAgICAgICAgICAgY3JlYXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNyZWF0ZU9wZXJhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50eXBlU2VsZWN0RWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVTZWxlY3RFbGVtZW50Lm9uY2hhbmdlID0gKCkgPT4gdGhpcy5wcm9jZXNzU2VsZWN0cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGdldERhdGEoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRJbmNvbWVDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRFeHBlbnNlQ2F0ZWdvcmllcygpO1xyXG4gICAgICAgIGNvbnN0IHR5cGU6IHN0cmluZyB8IG51bGwgPSBVcmxVdGlscy5nZXRQYXJhbSgndHlwZScpO1xyXG4gICAgICAgIGlmICh0eXBlICYmIHRoaXMudHlwZVNlbGVjdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMudHlwZVNlbGVjdEVsZW1lbnQub3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZVNlbGVjdEVsZW1lbnQub3B0aW9uc1tpXS52YWx1ZSA9PT0gdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZVNlbGVjdEVsZW1lbnQub3B0aW9uc1tpXS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzU2VsZWN0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZ2V0SW5jb21lQ2F0ZWdvcmllcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBDYXRlZ29yaWVzUmVzcG9uc2VUeXBlW10gPSBhd2FpdCBIdHRwVXRpbHMucmVxdWVzdCgnL2NhdGVnb3JpZXMvaW5jb21lJywgJ0dFVCcpO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmNvbWVDYXRlZ29yaWVzID0gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGdldEV4cGVuc2VDYXRlZ29yaWVzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IENhdGVnb3JpZXNSZXNwb25zZVR5cGVbXSA9IGF3YWl0IEh0dHBVdGlscy5yZXF1ZXN0KCcvY2F0ZWdvcmllcy9leHBlbnNlJywgJ0dFVCcpO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5leHBlbnNlQ2F0ZWdvcmllcyA9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzU2VsZWN0cygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy50eXBlU2VsZWN0RWxlbWVudCAmJiB0aGlzLmluY29tZUNhdGVnb3JpZXMgJiYgdGhpcy5leHBlbnNlQ2F0ZWdvcmllcyAmJiB0aGlzLmNhdGVnb3J5U2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGVTZWxlY3RFbGVtZW50LnZhbHVlID09PSAnaW5jb21lJykge1xyXG4gICAgICAgICAgICAgICAgZmlsbFNlbGVjdCh0aGlzLmluY29tZUNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZVNlbGVjdEVsZW1lbnQudmFsdWUgPT09ICdleHBlbnNlJykge1xyXG4gICAgICAgICAgICAgICAgZmlsbFNlbGVjdCh0aGlzLmV4cGVuc2VDYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBmaWxsU2VsZWN0KGFycmF5OiBDYXRlZ29yaWVzUmVzcG9uc2VUeXBlW10pOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhhdC5jYXRlZ29yeVNlbGVjdCEuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goKGNhdGVnb3J5OiBDYXRlZ29yaWVzUmVzcG9uc2VUeXBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGNhdGVnb3J5LnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjYXRlZ29yeS5pZC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHRoYXQuY2F0ZWdvcnlTZWxlY3QhLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGNyZWF0ZU9wZXJhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBjb21tZW50SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50Jyk7XHJcblxyXG4gICAgICAgIGxldCBoYXNFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmFtb3VudElucHV0ICYmIHRoaXMuZGF0ZUlucHV0ICYmIHRoaXMuY2F0ZWdvcnlTZWxlY3QgJiYgdGhpcy50eXBlU2VsZWN0RWxlbWVudCAmJiBjb21tZW50SW5wdXQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmFtb3VudElucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFtb3VudElucHV0LmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKTtcclxuICAgICAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW1vdW50SW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52YWxpZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRlSW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKTtcclxuICAgICAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWludmFsaWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2F0ZWdvcnlTZWxlY3QudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlTZWxlY3QuY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFoYXNFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IEh0dHBVdGlscy5yZXF1ZXN0KCcvb3BlcmF0aW9ucycsICdQT1NUJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZVNlbGVjdEVsZW1lbnQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiArdGhpcy5hbW91bnRJbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiB0aGlzLmRhdGVJbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50OiBjb21tZW50SW5wdXQudmFsdWUgPyBjb21tZW50SW5wdXQudmFsdWUgOiAnICcsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6ICt0aGlzLmNhdGVnb3J5U2VsZWN0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy9pbmNvbWVzLWV4cGVuc2VzLW1haW4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydChg0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC+0LfQtNCw0YLRjCAkeyB0aGlzLnR5cGVTZWxlY3RFbGVtZW50ID8gKHRoaXMudHlwZVNlbGVjdEVsZW1lbnQudmFsdWUgPT09ICdpbmNvbWUnID8gJ9C00L7RhdC+0LQnIDogJ9GA0LDRgdGF0L7QtCcpIDogJ9C00L7RhdC+0LQv0YDQsNGB0YXQvtC0JyB9YCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0h0dHBVdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL2h0dHAtdXRpbHNcIjtcclxuaW1wb3J0IHtVcmxVdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL3VybC11dGlsc1wiO1xyXG5pbXBvcnQge0NhdGVnb3JpZXNSZXNwb25zZVR5cGUsIE9wZXJhdGlvblJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uLy4uL3R5cGVzL2h0dHAtcmVzcG9uc2UudHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluY29tZXNFeHBlbnNlc0VkaXQge1xyXG4gICAgcmVhZG9ubHkgY2F0ZWdvcnlTZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50IHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IHR5cGVTZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50IHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IGFtb3VudElucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IGRhdGVJbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGw7XHJcbiAgICByZWFkb25seSBjb21tZW50SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBpbmNvbWVDYXRlZ29yaWVzOiBDYXRlZ29yaWVzUmVzcG9uc2VUeXBlW10gfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgZXhwZW5zZUNhdGVnb3JpZXM6IENhdGVnb3JpZXNSZXNwb25zZVR5cGVbXSB8IG51bGwgPSBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeVNlbGVjdCA9IDxIVE1MU2VsZWN0RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5LXNlbGVjdCcpO1xyXG4gICAgICAgIHRoaXMudHlwZVNlbGVjdCA9IDxIVE1MU2VsZWN0RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUtc2VsZWN0Jyk7XHJcbiAgICAgICAgdGhpcy5hbW91bnRJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW1vdW50Jyk7XHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXQgPSA8SFRNTElucHV0RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudCcpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRMaWIoKTtcclxuICAgICAgICB0aGlzLnNldEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRMaWIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0MjogYW55ID0gJCgnLnNlbGVjdDInKTtcclxuICAgICAgICBzZWxlY3QyLnNlbGVjdDIoKTtcclxuICAgICAgICBzZWxlY3QyLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICB0aGVtZTogJ2Jvb3RzdHJhcDQnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVCdXR0b246IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUnKTtcclxuICAgICAgICBpZiAodXBkYXRlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy51cGRhdGVPcGVyYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZVNlbGVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVTZWxlY3Qub25jaGFuZ2UgPSAoKSA9PiB0aGlzLnByb2Nlc3NTZWxlY3RzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBhd2FpdCB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICBjb25zdCBvcGVyYXRpb25JZDogc3RyaW5nIHwgbnVsbCA9IFVybFV0aWxzLmdldFBhcmFtKCdpZCcpO1xyXG4gICAgICAgIGlmIChvcGVyYXRpb25JZCAmJiB0aGlzLnR5cGVTZWxlY3QgJiYgdGhpcy5hbW91bnRJbnB1dCAmJiB0aGlzLmRhdGVJbnB1dCAmJiB0aGlzLmNvbW1lbnRJbnB1dCAmJiB0aGlzLmNhdGVnb3J5U2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IE9wZXJhdGlvblJlc3BvbnNlVHlwZSA9IGF3YWl0IEh0dHBVdGlscy5yZXF1ZXN0KCcvb3BlcmF0aW9ucy8nICsgb3BlcmF0aW9uSWQsICdHRVQnKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlU2VsZWN0LnZhbHVlID0gcmVzdWx0LnR5cGUgPT09ICdpbmNvbWUnID8gJ2luY29tZScgOiAnZXhwZW5zZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NTZWxlY3RzKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy50eXBlU2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlU2VsZWN0Lm9wdGlvbnNbaV0udmFsdWUgPT09IHJlc3VsdC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZVNlbGVjdC5vcHRpb25zW2ldLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFtb3VudElucHV0LnZhbHVlID0gcmVzdWx0LmFtb3VudC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlSW5wdXQudmFsdWUgPSByZXN1bHQuZGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudElucHV0LnZhbHVlID0gcmVzdWx0LmNvbW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBvcHRpb24gb2YgQXJyYXkuZnJvbSh0aGlzLmNhdGVnb3J5U2VsZWN0Lm9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5pbm5lclRleHQgPT09IHJlc3VsdC5jYXRlZ29yeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUF0dHJpYnV0ZTogc3RyaW5nIHwgbnVsbCA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeVNlbGVjdC52YWx1ZSA9IHZhbHVlQXR0cmlidXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZ2V0RGF0YSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBhd2FpdCB0aGlzLmdldEluY29tZUNhdGVnb3JpZXMoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmdldEV4cGVuc2VDYXRlZ29yaWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRJbmNvbWVDYXRlZ29yaWVzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IENhdGVnb3JpZXNSZXNwb25zZVR5cGVbXSA9IGF3YWl0IEh0dHBVdGlscy5yZXF1ZXN0KCcvY2F0ZWdvcmllcy9pbmNvbWUnLCAnR0VUJyk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmluY29tZUNhdGVnb3JpZXMgPSByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZ2V0RXhwZW5zZUNhdGVnb3JpZXMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogQ2F0ZWdvcmllc1Jlc3BvbnNlVHlwZVtdID0gYXdhaXQgSHR0cFV0aWxzLnJlcXVlc3QoJy9jYXRlZ29yaWVzL2V4cGVuc2UnLCAnR0VUJyk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmV4cGVuc2VDYXRlZ29yaWVzID0gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2Nlc3NTZWxlY3RzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGVTZWxlY3QgJiYgdGhpcy5jYXRlZ29yeVNlbGVjdCAmJiB0aGlzLmluY29tZUNhdGVnb3JpZXMgJiYgdGhpcy5leHBlbnNlQ2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlU2VsZWN0LnZhbHVlID09PSAnaW5jb21lJykge1xyXG4gICAgICAgICAgICAgICAgZmlsbFNlbGVjdCh0aGlzLmluY29tZUNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZVNlbGVjdC52YWx1ZSA9PT0gJ2V4cGVuc2UnKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxsU2VsZWN0KHRoaXMuZXhwZW5zZUNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGZpbGxTZWxlY3QoYXJyYXk6IENhdGVnb3JpZXNSZXNwb25zZVR5cGVbXSkge1xyXG4gICAgICAgICAgICB0aGF0LmNhdGVnb3J5U2VsZWN0IS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaCgoY2F0ZWdvcnk6IENhdGVnb3JpZXNSZXNwb25zZVR5cGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBvcHRpb246IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gY2F0ZWdvcnkudGl0bGU7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNhdGVnb3J5LmlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5jYXRlZ29yeVNlbGVjdCEuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlT3BlcmF0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGVTZWxlY3QgJiYgdGhpcy5hbW91bnRJbnB1dCAmJiB0aGlzLmRhdGVJbnB1dCAmJiB0aGlzLmNvbW1lbnRJbnB1dCAmJiB0aGlzLmNhdGVnb3J5U2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdGlvbklkOiBzdHJpbmcgfCBudWxsID0gVXJsVXRpbHMuZ2V0UGFyYW0oJ2lkJyk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBIdHRwVXRpbHMucmVxdWVzdCgnL29wZXJhdGlvbnMvJyArIG9wZXJhdGlvbklkLCAnUFVUJywge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy50eXBlU2VsZWN0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiArdGhpcy5hbW91bnRJbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IHRoaXMuZGF0ZUlucHV0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgY29tbWVudDogdGhpcy5jb21tZW50SW5wdXQudmFsdWUgPyB0aGlzLmNvbW1lbnRJbnB1dC52YWx1ZSA6ICcgJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiArdGhpcy5jYXRlZ29yeVNlbGVjdC52YWx1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMvaW5jb21lcy1leHBlbnNlcy1tYWluJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydChg0J3QtSDRg9C00LDQu9C+0YHRjCDQvtGC0YDQtdC00LDQutGC0LjRgNC+0LLQsNGC0YwgJHsgdGhpcy50eXBlU2VsZWN0ID8gKHRoaXMudHlwZVNlbGVjdC52YWx1ZSA9PT0gJ2luY29tZScgPyAn0LTQvtGF0L7QtCcgOiAn0YDQsNGB0YXQvtC0JykgOiAn0LTQvtGF0L7QtC/RgNCw0YHRhdC+0LQnIH1gKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7SHR0cFV0aWxzfSBmcm9tIFwiLi4vLi4vdXRpbHMvaHR0cC11dGlsc1wiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcvY29uZmlnXCI7XHJcbmltcG9ydCB7RGF0ZVV0aWxzfSBmcm9tIFwiLi4vLi4vdXRpbHMvZGF0ZS11dGlsc1wiO1xyXG5pbXBvcnQge09wZXJhdGlvbkRlbGV0ZVJlc3BvbnNlVHlwZSwgT3BlcmF0aW9uUmVzcG9uc2VUeXBlfSBmcm9tIFwiLi4vLi4vdHlwZXMvaHR0cC1yZXNwb25zZS50eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5jb21lc0V4cGVuc2VzTWFpbiB7XHJcbiAgICByZWFkb25seSBkYXRlRnJvbUlucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IGRhdGVUb0lucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IGRhdGVCdXR0b25zOiBzdHJpbmdbXVxyXG4gICAgcHJpdmF0ZSBjdXJyZW50RGF0ZU9wdGlvbjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgdG9kYXk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IHRhYmxlQ29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBwcml2YXRlIHJvd0lkRWxlbWVudHM6IEhUTUxDb2xsZWN0aW9uIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRPcGVyYXRpb246IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0TGliKCk7XHJcbiAgICAgICAgdGhpcy5pbml0QnV0dG9ucygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmNvbWVzLWV4cGVuc2VzLWJ1dHRvbicpPy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLnRhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLWNvbnRlbnQnKTtcclxuICAgICAgICB0aGlzLmRhdGVCdXR0b25zID0gW1xyXG4gICAgICAgICAgICBjb25maWcuZGF0ZS50b2RheSxcclxuICAgICAgICAgICAgY29uZmlnLmRhdGUud2VlayxcclxuICAgICAgICAgICAgY29uZmlnLmRhdGUubW9udGgsXHJcbiAgICAgICAgICAgIGNvbmZpZy5kYXRlLnllYXIsXHJcbiAgICAgICAgICAgIGNvbmZpZy5kYXRlLmFsbCxcclxuICAgICAgICAgICAgY29uZmlnLmRhdGUuaW50ZXJ2YWxcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERhdGVPcHRpb24gPSB0aGlzLmRhdGVCdXR0b25zWzBdO1xyXG4gICAgICAgIHRoaXMudG9kYXkgPSAobmV3IERhdGUoKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5kYXRlRnJvbUlucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWZyb20nKTtcclxuICAgICAgICBpZiAodGhpcy5kYXRlRnJvbUlucHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZUZyb21JbnB1dC5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T3BlcmF0aW9ucygpLnRoZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGVUb0lucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLXRvJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0ZVRvSW5wdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRlVG9JbnB1dC5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T3BlcmF0aW9ucygpLnRoZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkZWxldGVPcGVyYXRpb25CdXR0b246IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtb3BlcmF0aW9uJyk7XHJcbiAgICAgICAgaWYgKGRlbGV0ZU9wZXJhdGlvbkJ1dHRvbikge1xyXG4gICAgICAgICAgICBkZWxldGVPcGVyYXRpb25CdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuZGVsZXRlT3BlcmF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdldE9wZXJhdGlvbnMoKS50aGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0TGliKCk6IHZvaWQge1xyXG4gICAgICAgICgkKCcub3Blbi1wb3B1cC1saW5rJykgYXMgYW55KS5tYWduaWZpY1BvcHVwKHt0eXBlOiAnaW5saW5lJ30pO1xyXG5cclxuICAgICAgICAoJCBhcyBhbnkpLmRhdGVwaWNrZXIucmVnaW9uYWxbJ3J1J10gPSB7XHJcbiAgICAgICAgICAgIGNsb3NlVGV4dDogJ9CX0LDQutGA0YvRgtGMJyxcclxuICAgICAgICAgICAgcHJldlRleHQ6ICfQn9GA0LXQtNGL0LTRg9GJ0LjQuScsXHJcbiAgICAgICAgICAgIG5leHRUZXh0OiAn0KHQu9C10LTRg9GO0YnQuNC5JyxcclxuICAgICAgICAgICAgY3VycmVudFRleHQ6ICfQodC10LPQvtC00L3RjycsXHJcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IFsn0K/QvdCy0LDRgNGMJywgJ9Ck0LXQstGA0LDQu9GMJywgJ9Cc0LDRgNGCJywgJ9CQ0L/RgNC10LvRjCcsICfQnNCw0LknLCAn0JjRjtC90YwnLCAn0JjRjtC70YwnLCAn0JDQstCz0YPRgdGCJywgJ9Ch0LXQvdGC0Y/QsdGA0YwnLCAn0J7QutGC0Y/QsdGA0YwnLCAn0J3QvtGP0LHRgNGMJywgJ9CU0LXQutCw0LHRgNGMJ10sXHJcbiAgICAgICAgICAgIG1vbnRoTmFtZXNTaG9ydDogWyfQr9C90LInLCAn0KTQtdCyJywgJ9Cc0LDRgCcsICfQkNC/0YAnLCAn0JzQsNC5JywgJ9CY0Y7QvScsICfQmNGO0LsnLCAn0JDQstCzJywgJ9Ch0LXQvScsICfQntC60YInLCAn0J3QvtGPJywgJ9CU0LXQuiddLFxyXG4gICAgICAgICAgICBkYXlOYW1lczogWyfQstC+0YHQutGA0LXRgdC10L3RjNC1JywgJ9C/0L7QvdC10LTQtdC70YzQvdC40LonLCAn0LLRgtC+0YDQvdC40LonLCAn0YHRgNC10LTQsCcsICfRh9C10YLQstC10YDQsycsICfQv9GP0YLQvdC40YbQsCcsICfRgdGD0LHQsdC+0YLQsCddLFxyXG4gICAgICAgICAgICBkYXlOYW1lc1Nob3J0OiBbJ9Cy0YHQuicsICfQv9C90LQnLCAn0LLRgtGAJywgJ9GB0YDQtCcsICfRh9GC0LInLCAn0L/RgtC9JywgJ9GB0LHRgiddLFxyXG4gICAgICAgICAgICBkYXlOYW1lc01pbjogWyfQktGBJywgJ9Cf0L0nLCAn0JLRgicsICfQodGAJywgJ9Cn0YInLCAn0J/RgicsICfQodCxJ10sXHJcbiAgICAgICAgICAgIHdlZWtIZWFkZXI6ICfQndC1JyxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogJ3l5LW1tLWRkJyxcclxuICAgICAgICAgICAgZmlyc3REYXk6IDEsXHJcbiAgICAgICAgICAgIGlzUlRMOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd01vbnRoQWZ0ZXJZZWFyOiBmYWxzZSxcclxuICAgICAgICAgICAgeWVhclN1ZmZpeDogJydcclxuICAgICAgICB9O1xyXG4gICAgICAgICgkIGFzIGFueSkuZGF0ZXBpY2tlci5zZXREZWZhdWx0cygoJCBhcyBhbnkpLmRhdGVwaWNrZXIucmVnaW9uYWxbJ3J1J10pO1xyXG4gICAgICAgICgkKCcuZGF0ZS1pbnB1dCcpIGFzIGFueSkuZGF0ZXBpY2tlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEJ1dHRvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGRhdGVCdXR0b25zRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlcmlvZC1idXR0b25zJyk7XHJcbiAgICAgICAgaWYgKGRhdGVCdXR0b25zRWxlbWVudCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZGF0ZUJ1dHRvbnNFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZGF0ZUJ1dHRvbnNFbGVtZW50LmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAoZGF0ZUJ1dHRvbnNFbGVtZW50LmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdIGFzIEhUTUxFbGVtZW50KS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBkYXRlQnV0dG9uc0VsZW1lbnQhLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZUJ1dHRvbnNFbGVtZW50IS5jaGlsZHJlbltpXS5jaGlsZHJlblswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1zZWNvbmRhcnknKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUJ1dHRvbnNFbGVtZW50IS5jaGlsZHJlbltpXS5jaGlsZHJlblswXS5jbGFzc0xpc3QucmVtb3ZlKCdidG4tc2Vjb25kYXJ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlQnV0dG9uc0VsZW1lbnQhLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2J0bi1vdXRsaW5lLXNlY29uZGFyeScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVCdXR0b25zRWxlbWVudCEuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnYnRuLXNlY29uZGFyeScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVCdXR0b25zRWxlbWVudCEuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLW91dGxpbmUtc2Vjb25kYXJ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFBlcmlvZDogbnVtYmVyIHwgbnVsbCA9IE51bWJlcihkYXRlQnV0dG9uc0VsZW1lbnQhLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBlcmlvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlT3B0aW9uID0gdGhpcy5kYXRlQnV0dG9uc1tjdXJyZW50UGVyaW9kXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRPcGVyYXRpb25zKCkudGhlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGVGcm9tSW5wdXQgJiYgdGhpcy5kYXRlVG9JbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGRhdGVCdXR0b25zRWxlbWVudCEuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF0gYXMgSFRNTEVsZW1lbnQpLmlubmVyVGV4dCA9PT0gJ9CY0L3RgtC10YDQstCw0LsnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVGcm9tSW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVG9JbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVGcm9tSW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZ2V0T3BlcmF0aW9ucygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgcGVyaW9kOiBzdHJpbmcgPSBgP3BlcmlvZD1gO1xyXG4gICAgICAgIHBlcmlvZCArPSBgJHt0aGlzLmN1cnJlbnREYXRlT3B0aW9ufWA7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmN1cnJlbnREYXRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY29uZmlnLmRhdGUudG9kYXk6XHJcbiAgICAgICAgICAgICAgICBwZXJpb2QgKz0gYCZkYXRlRnJvbT0ke0RhdGVVdGlscy5wYXJzZURhdGUodGhpcy50b2RheSl9JmRhdGVUbz0ke0RhdGVVdGlscy5wYXJzZURhdGUodGhpcy50b2RheSl9YDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNvbmZpZy5kYXRlLmludGVydmFsOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZUZyb21JbnB1dCAmJiB0aGlzLmRhdGVUb0lucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZUZyb21JbnB1dC52YWx1ZS5tYXRjaCgvWzEyXVswLTldWzAtOV1bMC05XS1bMC05XVswLTldLVswLTldWzAtOV0vKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmRhdGVUb0lucHV0LnZhbHVlLm1hdGNoKC9bMTJdWzAtOV1bMC05XVswLTldLVswLTldWzAtOV0tWzAtOV1bMC05XS8pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcmlvZCArPSBgJmRhdGVGcm9tPSR7dGhpcy5kYXRlRnJvbUlucHV0LnZhbHVlfSZkYXRlVG89JHt0aGlzLmRhdGVUb0lucHV0LnZhbHVlfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzdWx0OiBPcGVyYXRpb25SZXNwb25zZVR5cGVbXSA9IGF3YWl0IEh0dHBVdGlscy5yZXF1ZXN0KCcvb3BlcmF0aW9ucycgKyBwZXJpb2QsICdHRVQnKTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRUYWJsZShyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkVGFibGUob3BlcmF0aW9uczogT3BlcmF0aW9uUmVzcG9uc2VUeXBlW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy50YWJsZUNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBvcGVyYXRpb25zLmZvckVhY2goKG9wZXJhdGlvbjogT3BlcmF0aW9uUmVzcG9uc2VUeXBlLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSBvcGVyYXRpb24uZGF0ZS5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZTogc3RyaW5nID0gYCR7eWVhcn0uJHttb250aH0uJHtkYXl9YDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFibGVDb250YWluZXIhLmlubmVySFRNTCArPSBgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiXCI+JHtpbmRleCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIiR7b3BlcmF0aW9uLnR5cGUgPT09ICdpbmNvbWUnID8gJ3RleHQtc3VjY2VzcycgOiAndGV4dC1kYW5nZXInfVwiPiR7b3BlcmF0aW9uLnR5cGUgPT09ICdpbmNvbWUnID8gJ9CU0L7RhdC+0LQnIDogJ9Cg0LDRgdGF0L7QtCd9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIlwiPiR7b3BlcmF0aW9uLmNhdGVnb3J5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJcIj4ke29wZXJhdGlvbi5hbW91bnR9ICQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiXCI+JHtkYXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJcIj4ke29wZXJhdGlvbi5jb21tZW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1pZD1cIiR7b3BlcmF0aW9uLmlkfVwiIGNsYXNzPVwicm93LWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29uZmlybWF0aW9uLXBvcHVwXCIgY2xhc3M9XCJvcGVuLXBvcHVwLWxpbmsgdGV4dC1wcmltYXJ5LWVtcGhhc2lzIHRleHQtZGVjb3JhdGlvbi1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtdHJhc2gtY2FuXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvIy9pbmNvbWVzLWV4cGVuc2VzLWVkaXQ/aWQ9JHtvcGVyYXRpb24uaWR9XCIgY2xhc3M9XCJ0ZXh0LXByaW1hcnktZW1waGFzaXMgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGVuY2lsXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPmA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAoJCgnLm9wZW4tcG9wdXAtbGluaycpIGFzIGFueSkubWFnbmlmaWNQb3B1cCh7dHlwZTogJ2lubGluZSd9KTtcclxuICAgICAgICBpZiAodGhpcy50YWJsZUNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLnJvd0lkRWxlbWVudHMgPSB0aGlzLnRhYmxlQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jvdy1pZCcpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yb3dJZEVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBvcGVyYXRpb24gb2YgQXJyYXkuZnJvbSh0aGlzLnJvd0lkRWxlbWVudHMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKG9wZXJhdGlvbiBhcyBIVE1MRWxlbWVudCkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T3BlcmF0aW9uID0gTnVtYmVyKG9wZXJhdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZGVsZXRlT3BlcmF0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IE9wZXJhdGlvbkRlbGV0ZVJlc3BvbnNlVHlwZSA9IGF3YWl0IEh0dHBVdGlscy5yZXF1ZXN0KCcvb3BlcmF0aW9ucy8nICsgdGhpcy5jdXJyZW50T3BlcmF0aW9uLCAnREVMRVRFJyk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiB0aGlzLnJvd0lkRWxlbWVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMucm93SWRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wZXJhdGlvbiAmJiB0aGlzLnJvd0lkRWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT09IHRoaXMuY3VycmVudE9wZXJhdGlvbi50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dJZEVsZW1lbnRzW2ldLmNsb3Nlc3QoJ3RyJykhLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfQndC1INGD0LTQsNC70L7RgdGMINGD0LTQsNC70LjRgtGMINC+0L/QtdGA0LDRhtC40Y4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0h0dHBVdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL2h0dHAtdXRpbHNcIjtcclxuaW1wb3J0IHtDYXRlZ29yaWVzUmVzcG9uc2VUeXBlfSBmcm9tIFwiLi4vLi4vdHlwZXMvaHR0cC1yZXNwb25zZS50eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5jb21lc0NyZWF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b246IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwnKTtcclxuICAgICAgICBpZiAoY2FuY2VsQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy9pbmNvbWVzLW1haW4nO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjcmVhdGVCdXR0b246IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUnKTtcclxuICAgICAgICBpZiAoY3JlYXRlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDYXRlZ29yeSgpLnRoZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGNyZWF0ZUNhdGVnb3J5KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5SW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IDxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnktbmFtZScpO1xyXG4gICAgICAgIGlmIChjYXRlZ29yeUlucHV0RWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoIWNhdGVnb3J5SW5wdXRFbGVtZW50LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0OiBDYXRlZ29yaWVzUmVzcG9uc2VUeXBlID0gYXdhaXQgSHR0cFV0aWxzLnJlcXVlc3QoJy9jYXRlZ29yaWVzL2luY29tZScsICdQT1NUJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBjYXRlZ29yeUlucHV0RWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy9pbmNvbWVzLW1haW4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydChcItCd0LUg0YPQtNCw0LvQvtGB0Ywg0YHQvtC30LTQsNGC0Ywg0LrQsNGC0LXQs9C+0YDQuNGOXCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtIdHRwVXRpbHN9IGZyb20gXCIuLi8uLi91dGlscy9odHRwLXV0aWxzXCI7XHJcbmltcG9ydCB7VXJsVXRpbHN9IGZyb20gXCIuLi8uLi91dGlscy91cmwtdXRpbHNcIjtcclxuaW1wb3J0IHtDYXRlZ29yaWVzUmVzcG9uc2VUeXBlfSBmcm9tIFwiLi4vLi4vdHlwZXMvaHR0cC1yZXNwb25zZS50eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5jb21lc0VkaXQge1xyXG4gICAgcmVhZG9ubHkgY2F0ZWdvcnlJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IGNhdGVnb3J5TmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IGNhdGVnb3J5SW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeUlkID0gVXJsVXRpbHMuZ2V0UGFyYW0oJ2lkJyk7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeU5hbWUgPSBVcmxVdGlscy5nZXRQYXJhbSgnbmFtZScpO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlJbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5LW5hbWUnKTtcclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yeUlucHV0RWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYXRlZ29yeU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlJbnB1dEVsZW1lbnQudmFsdWUgPSB0aGlzLmNhdGVnb3J5TmFtZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlJbnB1dEVsZW1lbnQucGxhY2Vob2xkZXIgPSAn0J3QvtCy0L7QtSDQvdCw0LfQstCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuC4uLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbCcpO1xyXG4gICAgICAgIGlmIChjYW5jZWxCdXR0b24pIHtcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjL2luY29tZXMtbWFpbic7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzYXZlQnV0dG9uOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZScpO1xyXG4gICAgICAgIGlmIChzYXZlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHNhdmVCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2F0ZWdvcnkoKS50aGVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyB1cGRhdGVDYXRlZ29yeSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yeUlucHV0RWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2F0ZWdvcnlJbnB1dEVsZW1lbnQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlJbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDogQ2F0ZWdvcmllc1Jlc3BvbnNlVHlwZSA9IGF3YWl0IEh0dHBVdGlscy5yZXF1ZXN0KCcvY2F0ZWdvcmllcy9pbmNvbWUvJyArIHRoaXMuY2F0ZWdvcnlJZCwgJ1BVVCcsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5jYXRlZ29yeUlucHV0RWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy9pbmNvbWVzLW1haW4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydCgn0J3QtSDRg9C00LDQu9C+0YHRjCDQvtGC0YDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0LrQsNGC0LXQs9C+0YDQuNGOJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0h0dHBVdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL2h0dHAtdXRpbHNcIjtcclxuaW1wb3J0IHtDYXRlZ29yaWVzUmVzcG9uc2VUeXBlfSBmcm9tIFwiLi4vLi4vdHlwZXMvaHR0cC1yZXNwb25zZS50eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5jb21lc01haW4ge1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50Q2F0ZWdvcnlJZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5jb21lcy1jb2xsYXBzZScpPy5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZS1lbGVtZW50LWFjdGl2ZScpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZScpO1xyXG4gICAgICAgIGlmIChkZWxldGVCdXR0b24pIHtcclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmRlbGV0ZUNhdGVnb3J5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmluaXQoKS50aGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdExpYigpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUNhcmRFbGVtZW50czogSFRNTENvbGxlY3Rpb24gfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVsZXRlQ2FyZEVsZW1lbnQnKTtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZGVsZXRlQ2FyZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIChkZWxldGVDYXJkRWxlbWVudHNbaV0gYXMgSFRNTEVsZW1lbnQpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQuY3VycmVudENhdGVnb3J5SWQgPSBOdW1iZXIoKHRoaXMgYXMgSFRNTEVsZW1lbnQpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0TGliKCkge1xyXG4gICAgICAgICgkKCcub3Blbi1wb3B1cC1saW5rJykgYXMgYW55KS5tYWduaWZpY1BvcHVwKHt0eXBlOidpbmxpbmUnfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRDYXRlZ29yaWVzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IENhdGVnb3JpZXNSZXNwb25zZVR5cGVbXSA9IGF3YWl0IEh0dHBVdGlscy5yZXF1ZXN0KCcvY2F0ZWdvcmllcy9pbmNvbWUnLCAnR0VUJyk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkc0NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkcy1jb250YWluZXInKTtcclxuICAgICAgICAgICAgaWYgKGNhcmRzQ29udGFpbmVyRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmZvckVhY2goKGNhdGVnb3J5OiBDYXRlZ29yaWVzUmVzcG9uc2VUeXBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlDYXJkOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2FyZC5jbGFzc05hbWUgPSAnY2F0ZWdvcnktY2FyZCBwLTInO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2FyZC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImNhcmQgcC0zIGgtMTAwXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImgzIHRleHQtcHJpbWFyeS1lbXBoYXNpcyBtYi0zXCI+JHtjYXRlZ29yeS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXggZmxleC13cmFwIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyMvaW5jb21lcy1lZGl0P25hbWU9JHtjYXRlZ29yeS50aXRsZX0maWQ9JHtjYXRlZ29yeS5pZH1cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPtCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjb25maXJtYXRpb24tcG9wdXBcIiBjbGFzcz1cIm9wZW4tcG9wdXAtbGluayBidG4gYnRuLWRhbmdlciBkZWxldGVDYXJkRWxlbWVudFwiIGRhdGEtaWQ9XCIke2NhdGVnb3J5LmlkfVwiPtCj0LTQsNC70LjRgtGMPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRzQ29udGFpbmVyRWxlbWVudC5wcmVwZW5kKGNhdGVnb3J5Q2FyZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGRlbGV0ZUNhdGVnb3J5KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRDYXRlZ29yeUlkKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBIdHRwVXRpbHMucmVxdWVzdCgnL2NhdGVnb3JpZXMvaW5jb21lLycgKyB0aGlzLmN1cnJlbnRDYXRlZ29yeUlkLCAnREVMRVRFJyk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWlkXScpPy5mb3JFYWNoKChpdGVtOiBFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT09IHRoaXMuY3VycmVudENhdGVnb3J5SWQhLnRvU3RyaW5nKCkgJiYgdGhpcy5jdXJyZW50Q2F0ZWdvcnlJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsb3Nlc3QoJy5jYXRlZ29yeS1jYXJkJyk/LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYWxlcnQoJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAg0L/RgNC4INGD0LTQsNC70LXQvdC40Lgg0LrQsNGC0LXQs9C+0YDQuNC4Jyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0F1dGhVdGlsc30gZnJvbSBcIi4uL3V0aWxzL2F1dGgtdXRpbHNcIjtcclxuaW1wb3J0IHtIdHRwVXRpbHN9IGZyb20gXCIuLi91dGlscy9odHRwLXV0aWxzXCI7XHJcbmltcG9ydCB7QmFsYW5jZVR5cGV9IGZyb20gXCIuLi90eXBlcy9odHRwLXJlc3BvbnNlLnR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXQge1xyXG4gICAgcmVhZG9ubHkgc2lkZWJhcjogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgc2lkZWJhclRvZ2dsZXI6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IGJhbGFuY2VFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICByZWFkb25seSBjaGFuZ2VCYWxhbmNlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJyk7XHJcbiAgICAgICAgdGhpcy5zaWRlYmFyVG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX3RvZ2dsZXInKTtcclxuICAgICAgICB0aGlzLmJhbGFuY2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhbGFuY2UnKTtcclxuICAgICAgICB0aGlzLmNoYW5nZUJhbGFuY2VJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1iYWxhbmNlJyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdExheW91dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdExheW91dCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBsb2dvdXRCdXR0b246IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvdXQnKTtcclxuICAgICAgICBpZiAobG9nb3V0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGxvZ291dEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5sb2dvdXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChBdXRoVXRpbHMuZ2V0QXV0aFVzZXJJbmZvKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZnVsbE5hbWVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbC1uYW1lJyk7XHJcbiAgICAgICAgICAgIGlmIChmdWxsTmFtZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGZ1bGxOYW1lRWxlbWVudC5pbm5lckhUTUwgPSBgJHtBdXRoVXRpbHMuZ2V0QXV0aFVzZXJJbmZvKCkubmFtZX0gJHtBdXRoVXRpbHMuZ2V0QXV0aFVzZXJJbmZvKCkubGFzdE5hbWV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2lkZWJhclRvZ2dsZXIgJiYgdGhpcy5zaWRlYmFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lkZWJhclRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpZGViYXIhLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2lkZWJhclRvZ2dsZXIhLmNsYXNzTGlzdC50b2dnbGUoJ3NpZGViYXItaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVTaWRlYmFyKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICgkKCcjYmFsYW5jZS1lbGVtZW50JykgYXMgYW55KS5tYWduaWZpY1BvcHVwKHt0eXBlOiAnaW5saW5lJ30pO1xyXG5cclxuICAgICAgICB0aGlzLnRvZ2dsZVNpZGViYXIoKTtcclxuICAgICAgICB0aGlzLmdldEJhbGFuY2UoKS50aGVuKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNhdmVCYWxhbmNlQnV0dG9uOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1iYWxhbmNlJyk7XHJcbiAgICAgICAgaWYgKHNhdmVCYWxhbmNlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHNhdmVCYWxhbmNlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNoYW5nZUJhbGFuY2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b2dnbGVTaWRlYmFyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNpZGViYXIgJiYgdGhpcy5zaWRlYmFyVG9nZ2xlcikge1xyXG4gICAgICAgICAgICBjb25zdCBzY3JlZW5XaWR0aDogbnVtYmVyID0gd2luZG93LnNjcmVlbi53aWR0aDtcclxuICAgICAgICAgICAgaWYgKHNjcmVlbldpZHRoIDwgOTkyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaWRlYmFyVG9nZ2xlci5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWlzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2lkZWJhclRvZ2dsZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1pcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGxvZ291dCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgcmVmcmVzaFRva2VuOiBzdHJpbmcgfCBudWxsID0gQXV0aFV0aWxzLmdldEF1dGhUb2tlbnNJbmZvKCkucmVmcmVzaFRva2VuO1xyXG4gICAgICAgIGlmIChyZWZyZXNoVG9rZW4pIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IEh0dHBVdGlscy5yZXF1ZXN0KCcvbG9nb3V0JywgJ1BPU1QnLCB7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIEF1dGhVdGlscy5yZXNldEF1dGhJbmZvKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjL2xvZ2luJztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfQntGI0LjQsdC60LAg0LLRi9GF0L7QtNCwJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgn0J7RiNC40LHQutCwINCy0YvRhdC+0LTQsCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZ2V0QmFsYW5jZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodGhpcy5iYWxhbmNlRWxlbWVudCAmJiB0aGlzLmNoYW5nZUJhbGFuY2VJbnB1dCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBCYWxhbmNlVHlwZSA9IGF3YWl0IEh0dHBVdGlscy5yZXF1ZXN0KCcvYmFsYW5jZScsICdHRVQnKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuaGFzT3duUHJvcGVydHkoJ2JhbGFuY2UnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWxhbmNlRWxlbWVudC5pbm5lclRleHQgPSByZXN1bHQuYmFsYW5jZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VCYWxhbmNlSW5wdXQudmFsdWUgPSByZXN1bHQuYmFsYW5jZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgY2hhbmdlQmFsYW5jZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VCYWxhbmNlSW5wdXQpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogQmFsYW5jZVR5cGUgPSBhd2FpdCBIdHRwVXRpbHMucmVxdWVzdCgnL2JhbGFuY2UnLCAnUFVUJywge1xyXG4gICAgICAgICAgICAgICAgbmV3QmFsYW5jZTogdGhpcy5jaGFuZ2VCYWxhbmNlSW5wdXQudmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgdGhpcy5iYWxhbmNlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWxhbmNlRWxlbWVudC5pbm5lclRleHQgPSByZXN1bHQuYmFsYW5jZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZXJ0KCfQndC1INGD0LTQsNC70L7RgdGMINC40LfQvNC10L3QuNGC0Ywg0LHQsNC70LDQvdGBJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWcvY29uZmlnXCI7XHJcbmltcG9ydCB7RGF0ZVV0aWxzfSBmcm9tIFwiLi4vdXRpbHMvZGF0ZS11dGlsc1wiO1xyXG5pbXBvcnQge0h0dHBVdGlsc30gZnJvbSBcIi4uL3V0aWxzL2h0dHAtdXRpbHNcIjtcclxuaW1wb3J0IHtPcGVyYXRpb25SZXNwb25zZVR5cGV9IGZyb20gXCIuLi90eXBlcy9odHRwLXJlc3BvbnNlLnR5cGVcIjtcclxuaW1wb3J0IHtDaGFydH0gZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9jaGFydC5qcy9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbiB7XHJcbiAgICByZWFkb25seSBpbmNvbWVzQ2hhcnQ6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IGV4cGVuc2VzQ2hhcnQ6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IGRhdGVGcm9tSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgZGF0ZVRvSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgZGF0ZUJ1dHRvbnM6IHN0cmluZ1tdXHJcbiAgICBwcml2YXRlIGN1cnJlbnREYXRlT3B0aW9uOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSB0b2RheTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjaGFydHM6IENoYXJ0W10gPSBbXTtcclxuICAgIHByaXZhdGUgaW5jb21lc0NoYXJ0RGF0YToge30gfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgZXhwZW5zZXNDaGFydERhdGE6IHt9IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbmNvbWVzQ2hhcnQgPSA8SFRNTENhbnZhc0VsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmNvbWVzLWNoYXJ0Jyk7XHJcbiAgICAgICAgdGhpcy5leHBlbnNlc0NoYXJ0ID0gPEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwZW5zZXMtY2hhcnQnKTtcclxuICAgICAgICB0aGlzLmRhdGVGcm9tSW5wdXQgPSA8SFRNTElucHV0RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtZnJvbScpO1xyXG4gICAgICAgIHRoaXMuZGF0ZVRvSW5wdXQgPSA8SFRNTElucHV0RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtdG8nKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRlQnV0dG9ucyA9IFtcclxuICAgICAgICAgICAgY29uZmlnLmRhdGUudG9kYXksXHJcbiAgICAgICAgICAgIGNvbmZpZy5kYXRlLndlZWssXHJcbiAgICAgICAgICAgIGNvbmZpZy5kYXRlLm1vbnRoLFxyXG4gICAgICAgICAgICBjb25maWcuZGF0ZS55ZWFyLFxyXG4gICAgICAgICAgICBjb25maWcuZGF0ZS5hbGwsXHJcbiAgICAgICAgICAgIGNvbmZpZy5kYXRlLmludGVydmFsXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlT3B0aW9uID0gdGhpcy5kYXRlQnV0dG9uc1swXTtcclxuICAgICAgICB0aGlzLnRvZGF5ID0gKG5ldyBEYXRlKCkpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRMaWIoKTtcclxuICAgICAgICB0aGlzLmluaXRCdXR0b25zKCk7XHJcbiAgICAgICAgdGhpcy5pbml0KCkudGhlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1idXR0b24nKT8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGVGcm9tSW5wdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRlRnJvbUlucHV0Lm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFydHMuZm9yRWFjaChjaGFydCA9PiBjaGFydC5kZXN0cm95KCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPcGVyYXRpb25zKCkudGhlbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGVUb0lucHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRvSW5wdXQub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0cy5mb3JFYWNoKGNoYXJ0ID0+IGNoYXJ0LmRlc3Ryb3koKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9wZXJhdGlvbnMoKS50aGVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRPcGVyYXRpb25zKCkudGhlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdExpYigpOiB2b2lkIHtcclxuICAgICAgICAoJCBhcyBhbnkpLmRhdGVwaWNrZXIucmVnaW9uYWxbJ3J1J10gPSB7XHJcbiAgICAgICAgICAgIGNsb3NlVGV4dDogJ9CX0LDQutGA0YvRgtGMJyxcclxuICAgICAgICAgICAgcHJldlRleHQ6ICfQn9GA0LXQtNGL0LTRg9GJ0LjQuScsXHJcbiAgICAgICAgICAgIG5leHRUZXh0OiAn0KHQu9C10LTRg9GO0YnQuNC5JyxcclxuICAgICAgICAgICAgY3VycmVudFRleHQ6ICfQodC10LPQvtC00L3RjycsXHJcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IFsn0K/QvdCy0LDRgNGMJywgJ9Ck0LXQstGA0LDQu9GMJywgJ9Cc0LDRgNGCJywgJ9CQ0L/RgNC10LvRjCcsICfQnNCw0LknLCAn0JjRjtC90YwnLCAn0JjRjtC70YwnLCAn0JDQstCz0YPRgdGCJywgJ9Ch0LXQvdGC0Y/QsdGA0YwnLCAn0J7QutGC0Y/QsdGA0YwnLCAn0J3QvtGP0LHRgNGMJywgJ9CU0LXQutCw0LHRgNGMJ10sXHJcbiAgICAgICAgICAgIG1vbnRoTmFtZXNTaG9ydDogWyfQr9C90LInLCAn0KTQtdCyJywgJ9Cc0LDRgCcsICfQkNC/0YAnLCAn0JzQsNC5JywgJ9CY0Y7QvScsICfQmNGO0LsnLCAn0JDQstCzJywgJ9Ch0LXQvScsICfQntC60YInLCAn0J3QvtGPJywgJ9CU0LXQuiddLFxyXG4gICAgICAgICAgICBkYXlOYW1lczogWyfQstC+0YHQutGA0LXRgdC10L3RjNC1JywgJ9C/0L7QvdC10LTQtdC70YzQvdC40LonLCAn0LLRgtC+0YDQvdC40LonLCAn0YHRgNC10LTQsCcsICfRh9C10YLQstC10YDQsycsICfQv9GP0YLQvdC40YbQsCcsICfRgdGD0LHQsdC+0YLQsCddLFxyXG4gICAgICAgICAgICBkYXlOYW1lc1Nob3J0OiBbJ9Cy0YHQuicsICfQv9C90LQnLCAn0LLRgtGAJywgJ9GB0YDQtCcsICfRh9GC0LInLCAn0L/RgtC9JywgJ9GB0LHRgiddLFxyXG4gICAgICAgICAgICBkYXlOYW1lc01pbjogWyfQktGBJywgJ9Cf0L0nLCAn0JLRgicsICfQodGAJywgJ9Cn0YInLCAn0J/RgicsICfQodCxJ10sXHJcbiAgICAgICAgICAgIHdlZWtIZWFkZXI6ICfQndC1JyxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogJ3l5LW1tLWRkJyxcclxuICAgICAgICAgICAgZmlyc3REYXk6IDEsXHJcbiAgICAgICAgICAgIGlzUlRMOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd01vbnRoQWZ0ZXJZZWFyOiBmYWxzZSxcclxuICAgICAgICAgICAgeWVhclN1ZmZpeDogJydcclxuICAgICAgICB9O1xyXG4gICAgICAgICgkIGFzIGFueSkuZGF0ZXBpY2tlci5zZXREZWZhdWx0cygoJCBhcyBhbnkpLmRhdGVwaWNrZXIucmVnaW9uYWxbJ3J1J10pO1xyXG4gICAgICAgICgkKCcuZGF0ZS1pbnB1dCcpIGFzIGFueSkuZGF0ZXBpY2tlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEJ1dHRvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGRhdGVCdXR0b25zRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlcmlvZC1idXR0b25zJyk7XHJcbiAgICAgICAgaWYgKGRhdGVCdXR0b25zRWxlbWVudCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZGF0ZUJ1dHRvbnNFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZGF0ZUJ1dHRvbnNFbGVtZW50LmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAoZGF0ZUJ1dHRvbnNFbGVtZW50LmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdIGFzIEhUTUxFbGVtZW50KS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnRzLmZvckVhY2goKGNoYXJ0OiBDaGFydCkgPT4gY2hhcnQuZGVzdHJveSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZGF0ZUJ1dHRvbnNFbGVtZW50IS5jaGlsZHJlbi5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGVCdXR0b25zRWxlbWVudCEuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tc2Vjb25kYXJ5JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVCdXR0b25zRWxlbWVudCEuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXNlY29uZGFyeScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUJ1dHRvbnNFbGVtZW50IS5jaGlsZHJlbltpXS5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKCdidG4tb3V0bGluZS1zZWNvbmRhcnknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkYXRlQnV0dG9uc0VsZW1lbnQhLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2J0bi1zZWNvbmRhcnknKTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlQnV0dG9uc0VsZW1lbnQhLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1vdXRsaW5lLXNlY29uZGFyeScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGVPcHRpb24gPSB0aGlzLmRhdGVCdXR0b25zW051bWJlcihkYXRlQnV0dG9uc0VsZW1lbnQhLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRPcGVyYXRpb25zKCkudGhlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGVGcm9tSW5wdXQgJiYgdGhpcy5kYXRlVG9JbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGRhdGVCdXR0b25zRWxlbWVudCEuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF0gYXMgSFRNTEVsZW1lbnQpLmlubmVyVGV4dCA9PT0gJ9CY0L3RgtC10YDQstCw0LsnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVGcm9tSW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVG9JbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVGcm9tSW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZ2V0T3BlcmF0aW9ucygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgcGVyaW9kID0gYD9wZXJpb2Q9YDtcclxuICAgICAgICBwZXJpb2QgKz0gYCR7dGhpcy5jdXJyZW50RGF0ZU9wdGlvbn1gO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJyZW50RGF0ZU9wdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIGNvbmZpZy5kYXRlLnRvZGF5OlxyXG4gICAgICAgICAgICAgICAgcGVyaW9kICs9IGAmZGF0ZUZyb209JHtEYXRlVXRpbHMucGFyc2VEYXRlKHRoaXMudG9kYXkpfSZkYXRlVG89JHtEYXRlVXRpbHMucGFyc2VEYXRlKHRoaXMudG9kYXkpfWA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjb25maWcuZGF0ZS5pbnRlcnZhbDpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGVUb0lucHV0ICYmIHRoaXMuZGF0ZUZyb21JbnB1dCAmJiB0aGlzLmRhdGVGcm9tSW5wdXQudmFsdWUubWF0Y2goL1sxMl1bMC05XVswLTldWzAtOV0tWzAtOV1bMC05XS1bMC05XVswLTldLykgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVUb0lucHV0LnZhbHVlLm1hdGNoKC9bMTJdWzAtOV1bMC05XVswLTldLVswLTldWzAtOV0tWzAtOV1bMC05XS8pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyaW9kICs9IGAmZGF0ZUZyb209JHt0aGlzLmRhdGVGcm9tSW5wdXQudmFsdWV9JmRhdGVUbz0ke3RoaXMuZGF0ZVRvSW5wdXQudmFsdWV9YDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzdWx0OiBPcGVyYXRpb25SZXNwb25zZVR5cGVbXSA9IGF3YWl0IEh0dHBVdGlscy5yZXF1ZXN0KCcvb3BlcmF0aW9ucycgKyBwZXJpb2QsICdHRVQnKTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0NoYXJ0cyhyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2Nlc3NDaGFydHMocmVzdWx0OiBPcGVyYXRpb25SZXNwb25zZVR5cGVbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0Q2hhcnRzRGF0YShyZXN1bHQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pbmNvbWVzQ2hhcnQgJiYgdGhpcy5pbmNvbWVzQ2hhcnREYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ2hhcnQodGhpcy5pbmNvbWVzQ2hhcnQsIHRoaXMuaW5jb21lc0NoYXJ0RGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5leHBlbnNlc0NoYXJ0ICYmIHRoaXMuZXhwZW5zZXNDaGFydERhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDaGFydCh0aGlzLmV4cGVuc2VzQ2hhcnQsIHRoaXMuZXhwZW5zZXNDaGFydERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldENoYXJ0c0RhdGEocmVzdWx0OiBPcGVyYXRpb25SZXNwb25zZVR5cGVbXSk6IHZvaWQge1xyXG4gICAgICAgIHNldEluY29tZUNoYXJ0RGF0YS5jYWxsKHRoaXMsIHJlc3VsdCk7XHJcbiAgICAgICAgc2V0RXhwZW5zZUNoYXJ0RGF0YS5jYWxsKHRoaXMsIHJlc3VsdCk7XHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEluY29tZUNoYXJ0RGF0YShyZXN1bHQ6IE9wZXJhdGlvblJlc3BvbnNlVHlwZVtdKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluY29tZU9wZXJhdGlvbnM6IE9wZXJhdGlvblJlc3BvbnNlVHlwZVtdID0gcmVzdWx0LmZpbHRlcigob3BlcmF0aW9uOiBPcGVyYXRpb25SZXNwb25zZVR5cGUpID0+IG9wZXJhdGlvbi50eXBlID09PSAnaW5jb21lJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXM6IHN0cmluZ1tdID0gaW5jb21lT3BlcmF0aW9ucy5tYXAoKG9wZXJhdGlvbjogT3BlcmF0aW9uUmVzcG9uc2VUeXBlKSA9PiBvcGVyYXRpb24uY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICBsZXQgYW1vdW50czogbnVtYmVyW10gPSBpbmNvbWVPcGVyYXRpb25zLm1hcCgob3BlcmF0aW9uOiBPcGVyYXRpb25SZXNwb25zZVR5cGUpID0+IG9wZXJhdGlvbi5hbW91bnQpO1xyXG4gICAgICAgICAgICBsZXQgY29sb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBpbmNvbWVPcGVyYXRpb25zLmZvckVhY2goKG9wZXJhdGlvbjogT3BlcmF0aW9uUmVzcG9uc2VUeXBlLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMucHVzaChgcmdiKCR7KDEyICogKGluZGV4ICsgMSkpICUgMjU2fSwgJHsoMTAwICogKGluZGV4ICsgMSkpICUgMjU2fSwgJHsoMjAwICogKGluZGV4ICsgMSkpICUgMjU2fSlgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoYXQuaW5jb21lc0NoYXJ0RGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsczogY2F0ZWdvcmllcyxcclxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnINCU0L7RhdC+0LQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGFtb3VudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgaG92ZXJPZmZzZXQ6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEV4cGVuc2VDaGFydERhdGEocmVzdWx0OiBPcGVyYXRpb25SZXNwb25zZVR5cGVbXSk6IHZvaWQge1xyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlT3BlcmF0aW9uczogT3BlcmF0aW9uUmVzcG9uc2VUeXBlW10gPSByZXN1bHQuZmlsdGVyKChvcGVyYXRpb246IE9wZXJhdGlvblJlc3BvbnNlVHlwZSkgPT4gb3BlcmF0aW9uLnR5cGUgPT09ICdleHBlbnNlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXM6IHN0cmluZ1tdID0gZXhwZW5zZU9wZXJhdGlvbnMubWFwKChvcGVyYXRpb246IE9wZXJhdGlvblJlc3BvbnNlVHlwZSkgPT4gb3BlcmF0aW9uLmNhdGVnb3J5KTtcclxuICAgICAgICAgICAgbGV0IGFtb3VudHM6IG51bWJlcltdID0gZXhwZW5zZU9wZXJhdGlvbnMubWFwKChvcGVyYXRpb246IE9wZXJhdGlvblJlc3BvbnNlVHlwZSkgPT4gb3BlcmF0aW9uLmFtb3VudCk7XHJcbiAgICAgICAgICAgIGxldCBjb2xvcnM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGV4cGVuc2VPcGVyYXRpb25zLmZvckVhY2goKG9wZXJhdGlvbjogT3BlcmF0aW9uUmVzcG9uc2VUeXBlLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMucHVzaChgcmdiKCR7KDI0ICogKGluZGV4ICsgMSkpICUgMjU2fSwgJHsoMTIwICogKGluZGV4ICsgMSkpICUgMjU2fSwgJHsoMjMwICogKGluZGV4ICsgMSkpICUgMjU2fSlgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoYXQuZXhwZW5zZXNDaGFydERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IGNhdGVnb3JpZXMsXHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJyDQoNCw0YHRhdC+0LQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGFtb3VudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgaG92ZXJPZmZzZXQ6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVDaGFydChjaGFydEVsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50LCBkYXRhOiB7fSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjaGFydCA9IG5ldyBDaGFydChjaGFydEVsZW1lbnQsIHtcclxuICAgICAgICAgICAgdHlwZTogJ3BpZScsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDQwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGFydHMucHVzaChjaGFydCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbmZpZ1R5cGV9IGZyb20gXCIuLi90eXBlcy9jb25maWcudHlwZVwiO1xyXG5cclxuY29uc3QgY29uZmlnOiBDb25maWdUeXBlID0ge1xyXG4gICAgYXBpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaScsXHJcbiAgICBkYXRlOiB7XHJcbiAgICAgICAgdG9kYXk6ICd0b2RheScsXHJcbiAgICAgICAgd2VlazogJ3dlZWsnLFxyXG4gICAgICAgIG1vbnRoOiAnbW9udGgnLFxyXG4gICAgICAgIHllYXI6ICd5ZWFyJyxcclxuICAgICAgICBhbGw6ICdhbGwnLFxyXG4gICAgICAgIGludGVydmFsOiAnaW50ZXJ2YWwnLFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZzsiLCJpbXBvcnQge0xheW91dH0gZnJvbSBcIi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IHtNYWlufSBmcm9tIFwiLi9jb21wb25lbnRzL21haW5cIjtcclxuaW1wb3J0IHtJbmNvbWVzTWFpbn0gZnJvbSBcIi4vY29tcG9uZW50cy9pbmNvbWVzL2luY29tZXMtbWFpblwiO1xyXG5pbXBvcnQge0V4cGVuc2VzTWFpbn0gZnJvbSBcIi4vY29tcG9uZW50cy9leHBlbnNlcy9leHBlbnNlcy1tYWluXCI7XHJcbmltcG9ydCB7RXhwZW5zZXNDcmVhdGV9IGZyb20gXCIuL2NvbXBvbmVudHMvZXhwZW5zZXMvZXhwZW5zZXMtY3JlYXRlXCI7XHJcbmltcG9ydCB7SW5jb21lc0NyZWF0ZX0gZnJvbSBcIi4vY29tcG9uZW50cy9pbmNvbWVzL2luY29tZXMtY3JlYXRlXCI7XHJcbmltcG9ydCB7RmlsZVV0aWxzfSBmcm9tIFwiLi91dGlscy9maWxlLXV0aWxzXCI7XHJcbmltcG9ydCB7SW5jb21lc0VkaXR9IGZyb20gXCIuL2NvbXBvbmVudHMvaW5jb21lcy9pbmNvbWVzLWVkaXRcIjtcclxuaW1wb3J0IHtFeHBlbnNlc0VkaXR9IGZyb20gXCIuL2NvbXBvbmVudHMvZXhwZW5zZXMvZXhwZW5zZXMtZWRpdFwiO1xyXG5pbXBvcnQge1JlZ2lzdHJhdGlvbn0gZnJvbSBcIi4vY29tcG9uZW50cy9hdXRoL3JlZ2lzdHJhdGlvblwiO1xyXG5pbXBvcnQge0xvZ2lufSBmcm9tIFwiLi9jb21wb25lbnRzL2F1dGgvbG9naW5cIjtcclxuaW1wb3J0IHtBdXRoVXRpbHN9IGZyb20gXCIuL3V0aWxzL2F1dGgtdXRpbHNcIjtcclxuaW1wb3J0IHtJbmNvbWVzRXhwZW5zZXNDcmVhdGV9IGZyb20gXCIuL2NvbXBvbmVudHMvaW5jb21lcy1leHBlbnNlcy9pbmNvbWVzLWV4cGVuc2VzLWNyZWF0ZVwiO1xyXG5pbXBvcnQge0luY29tZXNFeHBlbnNlc01haW59IGZyb20gXCIuL2NvbXBvbmVudHMvaW5jb21lcy1leHBlbnNlcy9pbmNvbWVzLWV4cGVuc2VzLW1haW5cIjtcclxuaW1wb3J0IHtJbmNvbWVzRXhwZW5zZXNFZGl0fSBmcm9tIFwiLi9jb21wb25lbnRzL2luY29tZXMtZXhwZW5zZXMvaW5jb21lcy1leHBlbnNlcy1lZGl0XCI7XHJcbmltcG9ydCB7TWFpblJvdXRlc30gZnJvbSBcIi4vdHlwZXMvbWFpbi1yb3V0ZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3V0ZXIge1xyXG4gICAgcHJpdmF0ZSBwYWdlQ29udGVudEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHRhYlRpdGxlOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByb3V0ZXM6IE1haW5Sb3V0ZXNbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnBhZ2VDb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlJyk7XHJcbiAgICAgICAgdGhpcy50YWJUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItdGl0bGUnKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLm9wZW5OZXdSb3V0ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9wZW5OZXdSb3V0ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlOiAnIy9yZWdpc3RyYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgdGFiVGl0bGU6ICfQoNC10LPQuNGB0YLRgNCw0YbQuNGPJyxcclxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAndGVtcGxhdGVzL2F1dGgvcmVnaXN0cmF0aW9uLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYi9mb250YXdlc29tZS1mcmVlLTYuNi4wLXdlYi9jc3MvYWxsLm1pbi5jc3MnLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHVzZUxheW91dDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzY3JpcHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgb25sb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFJlZ2lzdHJhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5lZWRBdXRob3JpemF0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjL2xvZ2luJyxcclxuICAgICAgICAgICAgICAgIHRhYlRpdGxlOiAn0JLRhdC+0LQg0LIg0YHQuNGB0YLQtdC80YMnLFxyXG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZXMvYXV0aC9sb2dpbi5odG1sJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvZm9udGF3ZXNvbWUtZnJlZS02LjYuMC13ZWIvY3NzL2FsbC5taW4uY3NzJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB1c2VMYXlvdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2NyaXB0czogbnVsbCxcclxuICAgICAgICAgICAgICAgIG9ubG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBMb2dpbigpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5lZWRBdXRob3JpemF0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjLycsXHJcbiAgICAgICAgICAgICAgICB0YWJUaXRsZTogJ9CT0LvQsNCy0L3QsNGPJyxcclxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZTogJ9CT0LvQsNCy0L3QsNGPJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAndGVtcGxhdGVzL21haW4uaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnbGliL2Nzcy9tYWduaWZpYy1wb3B1cC5jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvZm9udGF3ZXNvbWUtZnJlZS02LjYuMC13ZWIvY3NzL2FsbC5taW4uY3NzJyxcclxuICAgICAgICAgICAgICAgICAgICAnY3NzL2xheW91dC5jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvY3NzL2pxdWVyeS11aS5taW4uY3NzJyxcclxuICAgICAgICAgICAgICAgICAgICAnY3NzL2NvbW1vbi5jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjc3MvcGFnZXMvbWFpbi5jc3MnLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHVzZUxheW91dDogJ3RlbXBsYXRlcy9sYXlvdXQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBzY3JpcHRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYi9qcy9qcXVlcnkubWFnbmlmaWMtcG9wdXAubWluLmpzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGliL2pzL2pxdWVyeS11aS5taW4uanMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvanMvY2hhcnQuanMnLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG9ubG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgTWFpbigpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5lZWRBdXRob3JpemF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZTogJyMvZXhwZW5zZXMtY3JlYXRlJyxcclxuICAgICAgICAgICAgICAgIHRhYlRpdGxlOiAn0KHQvtC30LTQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40LgnLFxyXG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlOiAn0KHQvtC30LTQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40Lgg0YDQsNGB0YXQvtC00L7QsicsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ3RlbXBsYXRlcy9jYXRlZ29yeS1tYW5pcHVsYXRpb25zL2NyZWF0ZS1jYXRlZ29yeS5odG1sJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvY3NzL21hZ25pZmljLXBvcHVwLmNzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYi9mb250YXdlc29tZS1mcmVlLTYuNi4wLXdlYi9jc3MvYWxsLm1pbi5jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjc3MvbGF5b3V0LmNzcycsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdXNlTGF5b3V0OiAndGVtcGxhdGVzL2xheW91dC5odG1sJyxcclxuICAgICAgICAgICAgICAgIHNjcmlwdHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnbGliL2pzL2pxdWVyeS5tYWduaWZpYy1wb3B1cC5taW4uanMnLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG9ubG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgRXhwZW5zZXNDcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuZWVkQXV0aG9yaXphdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjL2V4cGVuc2VzLWVkaXQnLFxyXG4gICAgICAgICAgICAgICAgdGFiVGl0bGU6ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuCcsXHJcbiAgICAgICAgICAgICAgICBwYWdlVGl0bGU6ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuCDRgNCw0YHRhdC+0LTQvtCyJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAndGVtcGxhdGVzL2NhdGVnb3J5LW1hbmlwdWxhdGlvbnMvZWRpdC1jYXRlZ29yeS5odG1sJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvY3NzL21hZ25pZmljLXBvcHVwLmNzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYi9mb250YXdlc29tZS1mcmVlLTYuNi4wLXdlYi9jc3MvYWxsLm1pbi5jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjc3MvbGF5b3V0LmNzcycsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdXNlTGF5b3V0OiAndGVtcGxhdGVzL2xheW91dC5odG1sJyxcclxuICAgICAgICAgICAgICAgIHNjcmlwdHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnbGliL2pzL2pxdWVyeS5tYWduaWZpYy1wb3B1cC5taW4uanMnLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG9ubG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgRXhwZW5zZXNFZGl0KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmVlZEF1dGhvcml6YXRpb246IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlOiAnIy9leHBlbnNlcy1tYWluJyxcclxuICAgICAgICAgICAgICAgIHRhYlRpdGxlOiAn0KDQsNGB0YXQvtC00YsnLFxyXG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlOiAn0KDQsNGB0YXQvtC00YsnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZXMvZXhwZW5zZXMvZXhwZW5zZXMtbWFpbi5odG1sJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvY3NzL21hZ25pZmljLXBvcHVwLmNzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYi9mb250YXdlc29tZS1mcmVlLTYuNi4wLXdlYi9jc3MvYWxsLm1pbi5jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjc3MvbGF5b3V0LmNzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Nzcy9jb21tb24uY3NzJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB1c2VMYXlvdXQ6ICd0ZW1wbGF0ZXMvbGF5b3V0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgc2NyaXB0czogW1xyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvanMvanF1ZXJ5Lm1hZ25pZmljLXBvcHVwLm1pbi5qcycsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgb25sb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFeHBlbnNlc01haW4oKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuZWVkQXV0aG9yaXphdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjL2luY29tZXMtY3JlYXRlJyxcclxuICAgICAgICAgICAgICAgIHRhYlRpdGxlOiAn0KHQvtC30LTQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40LgnLFxyXG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlOiAn0KHQvtC30LTQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40Lgg0LTQvtGF0L7QtNC+0LInLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZXMvY2F0ZWdvcnktbWFuaXB1bGF0aW9ucy9jcmVhdGUtY2F0ZWdvcnkuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnbGliL2Nzcy9tYWduaWZpYy1wb3B1cC5jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvZm9udGF3ZXNvbWUtZnJlZS02LjYuMC13ZWIvY3NzL2FsbC5taW4uY3NzJyxcclxuICAgICAgICAgICAgICAgICAgICAnY3NzL2xheW91dC5jc3MnLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHVzZUxheW91dDogJ3RlbXBsYXRlcy9sYXlvdXQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBzY3JpcHRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYi9qcy9qcXVlcnkubWFnbmlmaWMtcG9wdXAubWluLmpzJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBvbmxvYWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEluY29tZXNDcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuZWVkQXV0aG9yaXphdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjL2luY29tZXMtZWRpdCcsXHJcbiAgICAgICAgICAgICAgICB0YWJUaXRsZTogJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0LrQsNGC0LXQs9C+0YDQuNC4JyxcclxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZTogJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0LrQsNGC0LXQs9C+0YDQuNC4INC00L7RhdC+0LTQvtCyJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAndGVtcGxhdGVzL2NhdGVnb3J5LW1hbmlwdWxhdGlvbnMvZWRpdC1jYXRlZ29yeS5odG1sJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvY3NzL21hZ25pZmljLXBvcHVwLmNzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYi9mb250YXdlc29tZS1mcmVlLTYuNi4wLXdlYi9jc3MvYWxsLm1pbi5jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjc3MvbGF5b3V0LmNzcycsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdXNlTGF5b3V0OiAndGVtcGxhdGVzL2xheW91dC5odG1sJyxcclxuICAgICAgICAgICAgICAgIHNjcmlwdHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnbGliL2pzL2pxdWVyeS5tYWduaWZpYy1wb3B1cC5taW4uanMnLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG9ubG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgSW5jb21lc0VkaXQoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuZWVkQXV0aG9yaXphdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjL2luY29tZXMtbWFpbicsXHJcbiAgICAgICAgICAgICAgICB0YWJUaXRsZTogJ9CU0L7RhdC+0LTRiycsXHJcbiAgICAgICAgICAgICAgICBwYWdlVGl0bGU6ICfQlNC+0YXQvtC00YsnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZXMvaW5jb21lcy9pbmNvbWVzLW1haW4uaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnbGliL2Nzcy9tYWduaWZpYy1wb3B1cC5jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvZm9udGF3ZXNvbWUtZnJlZS02LjYuMC13ZWIvY3NzL2FsbC5taW4uY3NzJyxcclxuICAgICAgICAgICAgICAgICAgICAnY3NzL2xheW91dC5jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjc3MvY29tbW9uLmNzcycsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdXNlTGF5b3V0OiAndGVtcGxhdGVzL2xheW91dC5odG1sJyxcclxuICAgICAgICAgICAgICAgIHNjcmlwdHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnbGliL2pzL2pxdWVyeS5tYWduaWZpYy1wb3B1cC5taW4uanMnLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG9ubG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgSW5jb21lc01haW4oKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuZWVkQXV0aG9yaXphdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjL2luY29tZXMtZXhwZW5zZXMtY3JlYXRlJyxcclxuICAgICAgICAgICAgICAgIHRhYlRpdGxlOiAn0KHQvtC30LTQsNC90LjQtSDQtNC+0YXQvtC00LAv0YDQsNGB0YXQvtC00LAnLFxyXG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlOiAn0KHQvtC30LTQsNC90LjQtSDQtNC+0YXQvtC00LAv0YDQsNGB0YXQvtC00LAnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZXMvaW5jb21lcy1leHBlbnNlcy9pbmNvbWVzLWV4cGVuc2VzLWNyZWF0ZS5odG1sJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvY3NzL21hZ25pZmljLXBvcHVwLmNzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYi9mb250YXdlc29tZS1mcmVlLTYuNi4wLXdlYi9jc3MvYWxsLm1pbi5jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjc3MvbGF5b3V0LmNzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYi9jc3MvanF1ZXJ5LXVpLm1pbi5jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvY3NzL3NlbGVjdDIubWluLmNzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYi9jc3Mvc2VsZWN0Mi1ib290c3RyYXA0Lm1pbi5jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjc3MvY29tbW9uLmNzcycsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdXNlTGF5b3V0OiAndGVtcGxhdGVzL2xheW91dC5odG1sJyxcclxuICAgICAgICAgICAgICAgIHNjcmlwdHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnbGliL2pzL2pxdWVyeS5tYWduaWZpYy1wb3B1cC5taW4uanMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvanMvanF1ZXJ5LXVpLm1pbi5qcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYi9qcy9zZWxlY3QyLmZ1bGwubWluLmpzJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBvbmxvYWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEluY29tZXNFeHBlbnNlc0NyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5lZWRBdXRob3JpemF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZTogJyMvaW5jb21lcy1leHBlbnNlcy1lZGl0JyxcclxuICAgICAgICAgICAgICAgIHRhYlRpdGxlOiAn0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQtNC+0YXQvtC00LAv0YDQsNGB0YXQvtC00LAnLFxyXG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlOiAn0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQtNC+0YXQvtC00LAv0YDQsNGB0YXQvtC00LAnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZXMvaW5jb21lcy1leHBlbnNlcy9pbmNvbWVzLWV4cGVuc2VzLWVkaXQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnbGliL2Nzcy9tYWduaWZpYy1wb3B1cC5jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvZm9udGF3ZXNvbWUtZnJlZS02LjYuMC13ZWIvY3NzL2FsbC5taW4uY3NzJyxcclxuICAgICAgICAgICAgICAgICAgICAnY3NzL2xheW91dC5jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvY3NzL2pxdWVyeS11aS5taW4uY3NzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGliL2Nzcy9zZWxlY3QyLm1pbi5jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvY3NzL3NlbGVjdDItYm9vdHN0cmFwNC5taW4uY3NzJyxcclxuICAgICAgICAgICAgICAgICAgICAnY3NzL2NvbW1vbi5jc3MnLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHVzZUxheW91dDogJ3RlbXBsYXRlcy9sYXlvdXQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBzY3JpcHRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYi9qcy9qcXVlcnkubWFnbmlmaWMtcG9wdXAubWluLmpzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGliL2pzL2pxdWVyeS11aS5taW4uanMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvanMvc2VsZWN0Mi5mdWxsLm1pbi5qcycsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgb25sb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IExheW91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBJbmNvbWVzRXhwZW5zZXNFZGl0KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmVlZEF1dGhvcml6YXRpb246IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlOiAnIy9pbmNvbWVzLWV4cGVuc2VzLW1haW4nLFxyXG4gICAgICAgICAgICAgICAgdGFiVGl0bGU6ICfQlNC+0YXQvtC00Ysg0Lgg0YDQsNGB0YXQvtC00YsnLFxyXG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlOiAn0JTQvtGF0L7QtNGLINC4INGA0LDRgdGF0L7QtNGLJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAndGVtcGxhdGVzL2luY29tZXMtZXhwZW5zZXMvaW5jb21lcy1leHBlbnNlcy1tYWluLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYi9jc3MvbWFnbmlmaWMtcG9wdXAuY3NzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGliL2ZvbnRhd2Vzb21lLWZyZWUtNi42LjAtd2ViL2Nzcy9hbGwubWluLmNzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Nzcy9sYXlvdXQuY3NzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGliL2Nzcy9qcXVlcnktdWkubWluLmNzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Nzcy9jb21tb24uY3NzJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB1c2VMYXlvdXQ6ICd0ZW1wbGF0ZXMvbGF5b3V0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgc2NyaXB0czogW1xyXG4gICAgICAgICAgICAgICAgICAgICdsaWIvanMvanF1ZXJ5Lm1hZ25pZmljLXBvcHVwLm1pbi5qcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYi9qcy9qcXVlcnktdWkubWluLmpzJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBvbmxvYWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgTGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEluY29tZXNFeHBlbnNlc01haW4oKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuZWVkQXV0aG9yaXphdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByZXBhcmVOZXdSb3V0ZVN0eWxlcyhuZXdSb3V0ZU9iajogTWFpblJvdXRlcyk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzdHlsZXM6IEhUTUxDb2xsZWN0aW9uID0gZG9jdW1lbnQuaGVhZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGluaycpO1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHN0eWxlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAoIXN0eWxlc1tpXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSEubWF0Y2goLy4qbGliXFwvY3NzXFwvYm9vdHN0cmFwXFwubWluXFwuY3NzLykpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlc1tpXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Um91dGVPYmouc3R5bGVzLmZvckVhY2goKHN0eWxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgRmlsZVV0aWxzLmFkZE5ld1N0eWxlKHN0eWxlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHByZXBhcmVOZXdSb3V0ZVNjcmlwdHMobmV3Um91dGVPYmo6IE1haW5Sb3V0ZXMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgc2NyaXB0czogSFRNTENvbGxlY3Rpb24gPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBzY3JpcHRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmICghc2NyaXB0c1tpXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSEubWF0Y2goLy4qbGliXFwvanNcXC9ib290c3RyYXBcXC4uKm1pblxcLmpzLykgJiZcclxuICAgICAgICAgICAgIXNjcmlwdHNbaV0uZ2V0QXR0cmlidXRlKCdocmVmJykhLm1hdGNoKC8uKmxpYlxcL2pzXFwvanF1ZXJ5LTMuNy4xLm1pbi5qcy8pKSB7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHRzW2ldLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBzY3JpcHQgb2YgbmV3Um91dGVPYmouc2NyaXB0cyEpIHtcclxuICAgICAgICAgICAgYXdhaXQgRmlsZVV0aWxzLmFkZE5ld1NjcmlwdChzY3JpcHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIG9wZW5OZXdSb3V0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBuZXdSb3V0ZU5hbWU6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMF07XHJcbiAgICAgICAgbGV0IG5ld1JvdXRlT2JqOiBNYWluUm91dGVzIHwgdW5kZWZpbmVkID0gdGhpcy5yb3V0ZXMuZmluZChyb3V0ZSA9PiByb3V0ZS5yb3V0ZSA9PT0gbmV3Um91dGVOYW1lKTtcclxuICAgICAgICBpZiAobmV3Um91dGVPYmopIHtcclxuICAgICAgICAgICAgaWYgKG5ld1JvdXRlT2JqLm5lZWRBdXRob3JpemF0aW9uICYmICFBdXRoVXRpbHMudXNlcklzQXV0aG9yaXplZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjL2xvZ2luJztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghbmV3Um91dGVPYmoubmVlZEF1dGhvcml6YXRpb24gJiYgQXV0aFV0aWxzLnVzZXJJc0F1dGhvcml6ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy8nO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdSb3V0ZU9iai51c2VMYXlvdXQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VDb250ZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNvbnRlbnRFbGVtZW50LmlubmVySFRNTCA9IGF3YWl0IGZldGNoKG5ld1JvdXRlT2JqLnVzZUxheW91dCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGU6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLXRpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IDxzdHJpbmc+bmV3Um91dGVPYmoucGFnZVRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCLQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDRgdGC0YDQsNC90LjRhtGDXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGFnZUNvbnRlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDb250ZW50RWxlbWVudC5pbm5lckhUTUwgPSBhd2FpdCBmZXRjaChuZXdSb3V0ZU9iai50ZW1wbGF0ZSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlQ29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFiVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlRpdGxlLmlubmVyVGV4dCA9IG5ld1JvdXRlT2JqLnRhYlRpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZU5ld1JvdXRlU3R5bGVzKG5ld1JvdXRlT2JqKTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdSb3V0ZU9iai5oYXNPd25Qcm9wZXJ0eSgnc2NyaXB0cycpICYmIG5ld1JvdXRlT2JqLnNjcmlwdHMhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnByZXBhcmVOZXdSb3V0ZVNjcmlwdHMobmV3Um91dGVPYmopO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1JvdXRlT2JqLm9ubG9hZCAmJiB0eXBlb2YgbmV3Um91dGVPYmoub25sb2FkID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Um91dGVPYmoub25sb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcItCd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINGB0YLRgNCw0L3QuNGG0YNcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoQXV0aFV0aWxzLnVzZXJJc0F1dGhvcml6ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy8nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy9sb2dpbic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0h0dHBVdGlsc30gZnJvbSBcIi4vaHR0cC11dGlsc1wiO1xyXG5pbXBvcnQge1VzZXJJbmZvVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3VzZXItaW5mby50eXBlXCI7XHJcbmltcG9ydCB7R2V0QXV0aFRva2Vuc1R5cGV9IGZyb20gXCIuLi90eXBlcy9nZXQtYXV0aC10b2tlbnMudHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhVdGlscyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGFjY2Vzc1Rva2VuOiBzdHJpbmcgPSAnYWNjZXNzVG9rZW4nO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWZyZXNoVG9rZW46IHN0cmluZyA9ICdyZWZyZXNoVG9rZW4nO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdXNlckluZm86IHN0cmluZyA9ICd1c2VyJztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEF1dGhJbmZvKGFjY2Vzc1Rva2VuOiBzdHJpbmcsIHJlZnJlc2hUb2tlbjogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiB2b2lkIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmFjY2Vzc1Rva2VuLCBhY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgaWYgKHJlZnJlc2hUb2tlbikge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnJlZnJlc2hUb2tlbiwgcmVmcmVzaFRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRVc2VySW5mbyhpbmZvOiBVc2VySW5mb1R5cGUpOiB2b2lkIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnVzZXJJbmZvLCBKU09OLnN0cmluZ2lmeShpbmZvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRBdXRoVG9rZW5zSW5mbygpOiBHZXRBdXRoVG9rZW5zVHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgW3RoaXMuYWNjZXNzVG9rZW5dOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmFjY2Vzc1Rva2VuKSxcclxuICAgICAgICAgICAgW3RoaXMucmVmcmVzaFRva2VuXTogbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5yZWZyZXNoVG9rZW4pLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRBdXRoVXNlckluZm8oKTogYW55IHtcclxuICAgICAgICBjb25zdCBhdXRoSW5mbzogc3RyaW5nIHwgbnVsbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudXNlckluZm8pO1xyXG4gICAgICAgIGlmIChhdXRoSW5mbykge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShhdXRoSW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVzZXRBdXRoSW5mbygpOiB2b2lkIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHVzZXJJc0F1dGhvcml6ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oQXV0aFV0aWxzLmdldEF1dGhUb2tlbnNJbmZvKCkuYWNjZXNzVG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcHJvY2Vzc1VuYXV0aG9yaXplZFJlcXVlc3QoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgcmVmcmVzaFRva2VuOiBzdHJpbmcgfCBudWxsID0gQXV0aFV0aWxzLmdldEF1dGhUb2tlbnNJbmZvKCkucmVmcmVzaFRva2VuO1xyXG4gICAgICAgIGlmIChyZWZyZXNoVG9rZW4pIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IEh0dHBVdGlscy5yZXF1ZXN0KCcvcmVmcmVzaCcsICdQT1NUJywge1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiByZWZyZXNoVG9rZW4sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBBdXRoVXRpbHMuc2V0QXV0aEluZm8ocmVzdWx0LnRva2Vucy5hY2Nlc3NUb2tlbiwgcmVzdWx0LnRva2Vucy5yZWZyZXNoVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIERhdGVVdGlscyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlRGF0ZShkYXRlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IGRhdGUuc3BsaXQoJy4nKTtcclxuICAgICAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBGaWxlVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBhZGROZXdTY3JpcHQoc2NyaXB0U3JjOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2NyaXB0RWxlbWVudDogSFRNTFNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICAgICAgc2NyaXB0RWxlbWVudC5zcmMgPSBzY3JpcHRTcmM7XHJcbiAgICAgICAgICAgIHNjcmlwdEVsZW1lbnQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgnU2NyaXB0IGxvYWRlZDogJyArIHNjcmlwdFNyYylcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc2NyaXB0RWxlbWVudC5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCdGYWlsZWQgbG9hZCBzY3JpcHQ6ICcgKyBzY3JpcHRTcmMpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0RWxlbWVudCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFkZE5ld1N0eWxlKHN0eWxlU3JjOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3R5bGVFbGVtZW50OiBIVE1MTGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcclxuICAgICAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgc3R5bGVTcmMpO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuICAgIH1cclxufSIsImltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcclxuaW1wb3J0IHtBdXRoVXRpbHN9IGZyb20gXCIuL2F1dGgtdXRpbHNcIjtcclxuaW1wb3J0IHtIdHRwUmVxdWVzdFR5cGV9IGZyb20gXCIuLi90eXBlcy9odHRwLXJlcXVlc3QudHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEh0dHBVdGlscyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHJlcXVlc3QodXJsOiBzdHJpbmcsIG1ldGhvZDogc3RyaW5nID0gJ0dFVCcsIGRhdGE6IGFueSA9IG51bGwpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBwYXJhbXM6IEh0dHBSZXF1ZXN0VHlwZSA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgcGFyYW1zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9rZW46IHN0cmluZyB8IG51bGwgPSBBdXRoVXRpbHMuZ2V0QXV0aFRva2Vuc0luZm8oKS5hY2Nlc3NUb2tlbjtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgcGFyYW1zLmhlYWRlcnNbJ3gtYXV0aC10b2tlbiddID0gdG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjb25maWcuYXBpICsgdXJsLCBwYXJhbXMpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSBhd2FpdCBBdXRoVXRpbHMucHJvY2Vzc1VuYXV0aG9yaXplZFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdCh1cmwsIG1ldGhvZCwgZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBBdXRoVXRpbHMucmVzZXRBdXRoSW5mbygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVXJsVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRQYXJhbShuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgICAgICBjb25zdCB1cmw6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csICdcXFxcJCYnKTtcclxuICAgICAgICBsZXQgcmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoJ1s/Jl0nICsgbmFtZSArICcoPShbXiYjXSopfCZ8I3wkKScpLFxyXG4gICAgICAgICAgICByZXN1bHRzOiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gcmVnZXguZXhlYyh1cmwpO1xyXG4gICAgICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gJyc7XHJcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCIuL3JvdXRlclwiO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIG5ldyBSb3V0ZXIoKTtcclxuICAgIH1cclxufVxyXG4obmV3IEFwcCgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=