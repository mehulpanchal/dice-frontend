(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-3\">\n            <h1>\n                <span class=\"badge badge-secondary badge-warning\"></span>\n            </h1>\n        </div>\n        <div class=\"col-6\">\n            <h1>\n                <span class=\"badge badge-secondary badge-info\">User Information Screen</span>\n            </h1>\n        </div>\n        <div class=\"col-3\">\n            <h5>Export</h5>\n            <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"getExcelFile()\">Excel</button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"getPDFFile()\">PDF</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <table class=\"table table-hover\">\n        <thead>\n            <tr>\n                <th>Nickname</th>\n                <th>Score</th>\n                <th>Time Taken</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let row of data.result\">\n                <td>{{row.user.nickname}}</td>\n                <td>{{row.score}}</td>\n                <td>{{row.time_taken}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- nav -->\n<nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n    <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/admin\" *ngIf=\"isAdmin\">Admin</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n</nav>\n\n<!-- main app container -->\n<div class=\"jumbotron jumbotron-fluid\">\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <ng-container *ngIf=\"isAdmin\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n                <h1>Home</h1>\n                <p>You're logged in</p>\n                <p>Your role is: <strong>{{currentUser.role}}</strong>.</p>\n                <p>This page can be accessed by all authenticated users.</p>\n            </div>\n        </div>\n    </ng-container>\n    <ng-container *ngIf=\"!isAdmin\">\n        <div class=\"jumbotron text-center\">\n            <div *ngIf=\"hidePlay()\" class=\"container\">\n                <div class=\"row\" style=\"color: white;\">\n                    <div class=\"col-3  bg-warning\">\n                        <h1 *ngIf=\"hidePlay()\">\n                            <span class=\"badge badge-secondary badge-warning\">Round {{played}}/{{round}}</span>\n                        </h1>\n                    </div>\n                    <div class=\"col-6 bg-info\">\n                        <h1 *ngIf=\"hidePlay()\">\n                            <span class=\"badge badge-secondary badge-info\">{{gameName}}</span>\n                        </h1>\n                    </div>\n                    <div class=\"col-3  bg-warning\">\n                        <h1 *ngIf=\"hidePlay()\">\n                            <span class=\"badge badge-secondary badge-warning\">{{transform(timeTaken)}}</span>\n                        </h1>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 offset-md-3\" *ngIf=\"!gameloading\">\n                    <h1 *ngIf=\"!hidePlay()\">\n                        <span class=\"badge badge-secondary badge-info\">Thank you</span>\n                    </h1>\n                    <ng-container *ngIf=\"hidePlay()\">\n                        <div class=\"dice\">\n                            <ol class=\"die-list even-roll\" data-roll=\"1\" id=\"die-1\">\n                                <li class=\"die-item\" data-side=\"1\" style=\"background-image: url('../../assets/1.png');\">                                    \n                                </li>\n                                <li class=\"die-item\" data-side=\"2\" style=\"background-image: url('../../assets/2.png');\">                                    \n                                </li>\n                                <li class=\"die-item\" data-side=\"3\" style=\"background-image: url('../../assets/3.png');\">                                    \n                                </li>\n                                <li class=\"die-item\" data-side=\"4\" style=\"background-image: url('../../assets/4.png');\">                                    \n                                </li>\n                                <li class=\"die-item\" data-side=\"5\" style=\"background-image: url('../../assets/5.png');\">                                    \n                                </li>\n                                <li class=\"die-item\" data-side=\"6\" style=\"background-image: url('../../assets/6.png');\">                                    \n                                </li>\n                            </ol>\n                        </div>\n                    </ng-container>\n                    <button *ngIf=\"hidePlay()\" [disabled]=\"isProsess\" type=\"button\" (click)=\"rollDice()\"\n                        class=\"btn btn-warning\">Random</button>\n                    <h1 *ngIf=\"!hidePlay()\">\n                        <span class=\"badge badge-secondary badge-success\">Your score is\n                            {{score}}</span>\n                    </h1>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 offset-md-3\">\n            <h2>Login</h2>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"nickname\">Nickname</label>\n                    <input type=\"text\" formControlName=\"nickname\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.nickname.errors }\" />\n                    <div *ngIf=\"submitted && f.nickname.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.nickname.errors.required\">Nickname is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n                    <img *ngIf=\"loading\" class=\"pl-2\"\n                        src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                </div>\n                <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/_interceptors/error.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/_interceptors/error.interceptor.ts ***!
  \****************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/_interceptors/jwt.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/_interceptors/jwt.interceptor.ts ***!
  \**************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");




let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.token;
        const isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/_models/role.ts":
/*!*********************************!*\
  !*** ./src/app/_models/role.ts ***!
  \*********************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Role;
(function (Role) {
    Role["User"] = "User";
    Role["Admin"] = "administrator";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(email, password, nickname) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL}/authenticate`, { email, password, nickname })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                user.user.token = user.token;
                localStorage.setItem('currentUser', JSON.stringify(user.user));
                this.currentUserSubject.next(user.user);
            }
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/_services/score.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/score.service.ts ***!
  \********************************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let ScoreService = class ScoreService {
    constructor(http) {
        this.http = http;
    }
    getRandomGame() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/get_game');
    }
    getScore() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/get_score');
    }
    saveScore(param) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/save_score', param);
    }
    getPDF() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/exporttopdf', { responseType: 'blob' });
    }
    getExcel() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/exporttoexcel', { responseType: 'blob' });
    }
};
ScoreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ScoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ScoreService);



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL}/get_game`);
    }
    getById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL}/users/${id}`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_score_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/score.service */ "./src/app/_services/score.service.ts");



let AdminComponent = class AdminComponent {
    constructor(scoreService) {
        this.scoreService = scoreService;
        this.data = [];
    }
    ngOnInit() {
        this.scoreService.getScore().subscribe(res => {
            this.data = res;
        });
    }
    getPDFFile() {
        this.scoreService.getPDF()
            .subscribe(x => {
            // It is necessary to create a new blob object with mime-type explicitly set
            // otherwise only Chrome works like it should
            var newBlob = new Blob([x], { type: "application/pdf" });
            // IE doesn't allow using a blob object directly as link href
            // instead it is necessary to use msSaveOrOpenBlob
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(newBlob, "score_list.pdf");
                return;
            }
            // For other browsers: 
            // Create a link pointing to the ObjectURL containing the blob.
            const data = window.URL.createObjectURL(newBlob);
            var link = document.createElement('a');
            link.href = data;
            link.download = "score_list.pdf";
            // this is necessary as link.click() does not work on the latest firefox
            link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
            setTimeout(function () {
                // For Firefox it is necessary to delay revoking the ObjectURL
                window.URL.revokeObjectURL(data);
                link.remove();
            }, 100);
        });
    }
    getExcelFile() {
        this.scoreService.getExcel()
            .subscribe(x => {
            // It is necessary to create a new blob object with mime-type explicitly set
            // otherwise only Chrome works like it should
            var newBlob = new Blob([x], { type: "application/xlsx" });
            // IE doesn't allow using a blob object directly as link href
            // instead it is necessary to use msSaveOrOpenBlob
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(newBlob, "score_list.xlsx");
                return;
            }
            // For other browsers: 
            // Create a link pointing to the ObjectURL containing the blob.
            const data = window.URL.createObjectURL(newBlob);
            var link = document.createElement('a');
            link.href = data;
            link.download = "score_list.xlsx";
            // this is necessary as link.click() does not work on the latest firefox
            link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
            setTimeout(function () {
                // For Firefox it is necessary to delay revoking the ObjectURL
                window.URL.revokeObjectURL(data);
                link.remove();
            }, 100);
        });
    }
};
AdminComponent.ctorParameters = () => [
    { type: _services_score_service__WEBPACK_IMPORTED_MODULE_2__["ScoreService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_models/role */ "./src/app/_models/role.ts");


 // CLI imports router





const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        data: { roles: [_models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].Admin] }
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
// configures NgModule imports and exports
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_models/role */ "./src/app/_models/role.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/_services/authentication.service.ts");





let AppComponent = class AppComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'my-app';
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    get isAdmin() {
        return this.currentUser && this.currentUser.role === _models_role__WEBPACK_IMPORTED_MODULE_3__["Role"].Admin;
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_interceptors/jwt.interceptor */ "./src/app/_interceptors/jwt.interceptor.ts");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_interceptors/error.interceptor */ "./src/app/_interceptors/error.interceptor.ts");



 // CLI imports AppRoutingModule








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_10__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_11__["ErrorInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.dice {\r\n    align-items: center;\r\n    display: grid;\r\n    grid-gap: 2rem;\r\n    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));\r\n    grid-template-rows: auto;\r\n    justify-items: center;\r\n    padding: 2rem;\r\n    perspective: 600px;\r\n}\r\n\r\n.die-list {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n    height: 6rem;\r\n    list-style-type: none;\r\n    transform-style: preserve-3d;\r\n    width: 6rem;\r\n}\r\n\r\n.even-roll {\r\n    transition: transform 1.5s ease-out;\r\n}\r\n\r\n.odd-roll {\r\n    transition: transform 1.25s ease-out;\r\n}\r\n\r\n.die-item {\r\n    background-color: white;\r\n    box-shadow: inset -0.35rem 0.35rem 0.75rem rgba(0, 0, 0, 0.3),\r\n        inset 0.5rem -0.25rem 0.5rem rgba(0, 0, 0, 0.15);\r\n    display: grid;\r\n    grid-column: 1;\r\n    grid-row: 1;\r\n    grid-template-areas:\r\n        \"one two three\"\r\n        \"four five six\"\r\n        \"seven eight nine\";\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-rows: repeat(3, 1fr);\r\n    padding: 1rem;\r\n    width: 100px;\r\n    height: 100px;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    border-radius: 15%;\r\n     -o-object-fit: contain;\r\n        object-fit: contain;\r\n}\r\n\r\n.dot {\r\n    align-self: center;\r\n    background-color: #676767;\r\n    border-radius: 50%;\r\n    box-shadow: inset -0.15rem 0.15rem 0.25rem rgba(0, 0, 0, 0.5);\r\n    display: block;\r\n    height: 1.25rem;\r\n    justify-self: center;\r\n    width: 1.25rem;\r\n}\r\n\r\n.even-roll[data-roll=\"1\"] {\r\n    transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);\r\n}\r\n\r\n.even-roll[data-roll=\"2\"] {\r\n    transform: rotateX(450deg) rotateY(720deg) rotateZ(360deg);\r\n}\r\n\r\n.even-roll[data-roll=\"3\"] {\r\n    transform: rotateX(360deg) rotateY(630deg) rotateZ(360deg);\r\n}\r\n\r\n.even-roll[data-roll=\"4\"] {\r\n    transform: rotateX(360deg) rotateY(810deg) rotateZ(360deg);\r\n}\r\n\r\n.even-roll[data-roll=\"5\"] {\r\n    transform: rotateX(270deg) rotateY(720deg) rotateZ(360deg);\r\n}\r\n\r\n.even-roll[data-roll=\"6\"] {\r\n    transform: rotateX(360deg) rotateY(900deg) rotateZ(360deg);\r\n}\r\n\r\n.odd-roll[data-roll=\"1\"] {\r\n    transform: rotateX(-360deg) rotateY(-720deg) rotateZ(-360deg);\r\n}\r\n\r\n.odd-roll[data-roll=\"2\"] {\r\n    transform: rotateX(-270deg) rotateY(-720deg) rotateZ(-360deg);\r\n}\r\n\r\n.odd-roll[data-roll=\"3\"] {\r\n    transform: rotateX(-360deg) rotateY(-810deg) rotateZ(-360deg);\r\n}\r\n\r\n.odd-roll[data-roll=\"4\"] {\r\n    transform: rotateX(-360deg) rotateY(-630deg) rotateZ(-360deg);\r\n}\r\n\r\n.odd-roll[data-roll=\"5\"] {\r\n    transform: rotateX(-450deg) rotateY(-720deg) rotateZ(-360deg);\r\n}\r\n\r\n.odd-roll[data-roll=\"6\"] {\r\n    transform: rotateX(-360deg) rotateY(-900deg) rotateZ(-360deg);\r\n}\r\n\r\n[data-side=\"1\"] {\r\n    transform: rotate3d(0, 0, 0, 90deg) translateZ(4rem);\r\n}\r\n\r\n[data-side=\"2\"] {\r\n    transform: rotate3d(-1, 0, 0, 90deg) translateZ(4rem);\r\n}\r\n\r\n[data-side=\"3\"] {\r\n    transform: rotate3d(0, 1, 0, 90deg) translateZ(4rem);\r\n}\r\n\r\n[data-side=\"4\"] {\r\n    transform: rotate3d(0, -1, 0, 90deg) translateZ(4rem);\r\n}\r\n\r\n[data-side=\"5\"] {\r\n    transform: rotate3d(1, 0, 0, 90deg) translateZ(4rem);\r\n}\r\n\r\n[data-side=\"6\"] {\r\n    transform: rotate3d(1, 0, 0, 180deg) translateZ(4rem);\r\n}\r\n\r\n[data-side=\"1\"] .dot:nth-of-type(1) {\r\n    grid-area: five;\r\n}\r\n\r\n[data-side=\"2\"] .dot:nth-of-type(1) {\r\n    grid-area: one;\r\n}\r\n\r\n[data-side=\"2\"] .dot:nth-of-type(2) {\r\n    grid-area: nine;\r\n}\r\n\r\n[data-side=\"3\"] .dot:nth-of-type(1) {\r\n    grid-area: one;\r\n}\r\n\r\n[data-side=\"3\"] .dot:nth-of-type(2) {\r\n    grid-area: five;\r\n}\r\n\r\n[data-side=\"3\"] .dot:nth-of-type(3) {\r\n    grid-area: nine;\r\n}\r\n\r\n[data-side=\"4\"] .dot:nth-of-type(1) {\r\n    grid-area: one;\r\n}\r\n\r\n[data-side=\"4\"] .dot:nth-of-type(2) {\r\n    grid-area: three;\r\n}\r\n\r\n[data-side=\"4\"] .dot:nth-of-type(3) {\r\n    grid-area: seven;\r\n}\r\n\r\n[data-side=\"4\"] .dot:nth-of-type(4) {\r\n    grid-area: nine;\r\n}\r\n\r\n[data-side=\"5\"] .dot:nth-of-type(1) {\r\n    grid-area: one;\r\n}\r\n\r\n[data-side=\"5\"] .dot:nth-of-type(2) {\r\n    grid-area: three;\r\n}\r\n\r\n[data-side=\"5\"] .dot:nth-of-type(3) {\r\n    grid-area: five;\r\n}\r\n\r\n[data-side=\"5\"] .dot:nth-of-type(4) {\r\n    grid-area: seven;\r\n}\r\n\r\n[data-side=\"5\"] .dot:nth-of-type(5) {\r\n    grid-area: nine;\r\n}\r\n\r\n[data-side=\"6\"] .dot:nth-of-type(1) {\r\n    grid-area: one;\r\n}\r\n\r\n[data-side=\"6\"] .dot:nth-of-type(2) {\r\n    grid-area: three;\r\n}\r\n\r\n[data-side=\"6\"] .dot:nth-of-type(3) {\r\n    grid-area: four;\r\n}\r\n\r\n[data-side=\"6\"] .dot:nth-of-type(4) {\r\n    grid-area: six;\r\n}\r\n\r\n[data-side=\"6\"] .dot:nth-of-type(5) {\r\n    grid-area: seven;\r\n}\r\n\r\n[data-side=\"6\"] .dot:nth-of-type(6) {\r\n    grid-area: nine;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0lBQ2QsMERBQTBEO0lBQzFELHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qjt3REFDb0Q7SUFDcEQsYUFBYTtJQUNiLGNBQWM7SUFDZCxXQUFXO0lBQ1g7OzswQkFHc0I7SUFDdEIscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixrQkFBa0I7S0FDakIsc0JBQW1CO1FBQW5CLG1CQUFtQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDZEQUE2RDtJQUM3RCxjQUFjO0lBQ2QsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0kscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0kscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0kscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmRpY2Uge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWdhcDogMnJlbTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoOHJlbSwgMWZyKSk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG59XHJcblxyXG4uZGllLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBoZWlnaHQ6IDZyZW07XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgd2lkdGg6IDZyZW07XHJcbn1cclxuXHJcbi5ldmVuLXJvbGwge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5vZGQtcm9sbCB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4yNXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5kaWUtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IC0wLjM1cmVtIDAuMzVyZW0gMC43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMyksXHJcbiAgICAgICAgaW5zZXQgMC41cmVtIC0wLjI1cmVtIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgIFwib25lIHR3byB0aHJlZVwiXHJcbiAgICAgICAgXCJmb3VyIGZpdmUgc2l4XCJcclxuICAgICAgICBcInNldmVuIGVpZ2h0IG5pbmVcIjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4uZG90IHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzY3Njc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMC4xNXJlbSAwLjE1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxLjI1cmVtO1xyXG59XHJcblxyXG4uZXZlbi1yb2xsW2RhdGEtcm9sbD1cIjFcIl0ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZykgcm90YXRlWSg3MjBkZWcpIHJvdGF0ZVooMzYwZGVnKTtcclxufVxyXG5cclxuLmV2ZW4tcm9sbFtkYXRhLXJvbGw9XCIyXCJdIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCg0NTBkZWcpIHJvdGF0ZVkoNzIwZGVnKSByb3RhdGVaKDM2MGRlZyk7XHJcbn1cclxuXHJcbi5ldmVuLXJvbGxbZGF0YS1yb2xsPVwiM1wiXSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVZKDYzMGRlZykgcm90YXRlWigzNjBkZWcpO1xyXG59XHJcblxyXG4uZXZlbi1yb2xsW2RhdGEtcm9sbD1cIjRcIl0ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZykgcm90YXRlWSg4MTBkZWcpIHJvdGF0ZVooMzYwZGVnKTtcclxufVxyXG5cclxuLmV2ZW4tcm9sbFtkYXRhLXJvbGw9XCI1XCJdIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgyNzBkZWcpIHJvdGF0ZVkoNzIwZGVnKSByb3RhdGVaKDM2MGRlZyk7XHJcbn1cclxuXHJcbi5ldmVuLXJvbGxbZGF0YS1yb2xsPVwiNlwiXSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVZKDkwMGRlZykgcm90YXRlWigzNjBkZWcpO1xyXG59XHJcblxyXG4ub2RkLXJvbGxbZGF0YS1yb2xsPVwiMVwiXSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTM2MGRlZykgcm90YXRlWSgtNzIwZGVnKSByb3RhdGVaKC0zNjBkZWcpO1xyXG59XHJcblxyXG4ub2RkLXJvbGxbZGF0YS1yb2xsPVwiMlwiXSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTI3MGRlZykgcm90YXRlWSgtNzIwZGVnKSByb3RhdGVaKC0zNjBkZWcpO1xyXG59XHJcblxyXG4ub2RkLXJvbGxbZGF0YS1yb2xsPVwiM1wiXSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTM2MGRlZykgcm90YXRlWSgtODEwZGVnKSByb3RhdGVaKC0zNjBkZWcpO1xyXG59XHJcblxyXG4ub2RkLXJvbGxbZGF0YS1yb2xsPVwiNFwiXSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTM2MGRlZykgcm90YXRlWSgtNjMwZGVnKSByb3RhdGVaKC0zNjBkZWcpO1xyXG59XHJcblxyXG4ub2RkLXJvbGxbZGF0YS1yb2xsPVwiNVwiXSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTQ1MGRlZykgcm90YXRlWSgtNzIwZGVnKSByb3RhdGVaKC0zNjBkZWcpO1xyXG59XHJcblxyXG4ub2RkLXJvbGxbZGF0YS1yb2xsPVwiNlwiXSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTM2MGRlZykgcm90YXRlWSgtOTAwZGVnKSByb3RhdGVaKC0zNjBkZWcpO1xyXG59XHJcblxyXG5bZGF0YS1zaWRlPVwiMVwiXSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDAsIDkwZGVnKSB0cmFuc2xhdGVaKDRyZW0pO1xyXG59XHJcblxyXG5bZGF0YS1zaWRlPVwiMlwiXSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKC0xLCAwLCAwLCA5MGRlZykgdHJhbnNsYXRlWig0cmVtKTtcclxufVxyXG5cclxuW2RhdGEtc2lkZT1cIjNcIl0ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZykgdHJhbnNsYXRlWig0cmVtKTtcclxufVxyXG5cclxuW2RhdGEtc2lkZT1cIjRcIl0ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAtMSwgMCwgOTBkZWcpIHRyYW5zbGF0ZVooNHJlbSk7XHJcbn1cclxuXHJcbltkYXRhLXNpZGU9XCI1XCJdIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpIHRyYW5zbGF0ZVooNHJlbSk7XHJcbn1cclxuXHJcbltkYXRhLXNpZGU9XCI2XCJdIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMSwgMCwgMCwgMTgwZGVnKSB0cmFuc2xhdGVaKDRyZW0pO1xyXG59XHJcblxyXG5bZGF0YS1zaWRlPVwiMVwiXSAuZG90Om50aC1vZi10eXBlKDEpIHtcclxuICAgIGdyaWQtYXJlYTogZml2ZTtcclxufVxyXG5cclxuW2RhdGEtc2lkZT1cIjJcIl0gLmRvdDpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICBncmlkLWFyZWE6IG9uZTtcclxufVxyXG5cclxuW2RhdGEtc2lkZT1cIjJcIl0gLmRvdDpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICBncmlkLWFyZWE6IG5pbmU7XHJcbn1cclxuXHJcbltkYXRhLXNpZGU9XCIzXCJdIC5kb3Q6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgZ3JpZC1hcmVhOiBvbmU7XHJcbn1cclxuXHJcbltkYXRhLXNpZGU9XCIzXCJdIC5kb3Q6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgZ3JpZC1hcmVhOiBmaXZlO1xyXG59XHJcblxyXG5bZGF0YS1zaWRlPVwiM1wiXSAuZG90Om50aC1vZi10eXBlKDMpIHtcclxuICAgIGdyaWQtYXJlYTogbmluZTtcclxufVxyXG5cclxuW2RhdGEtc2lkZT1cIjRcIl0gLmRvdDpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICBncmlkLWFyZWE6IG9uZTtcclxufVxyXG5cclxuW2RhdGEtc2lkZT1cIjRcIl0gLmRvdDpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICBncmlkLWFyZWE6IHRocmVlO1xyXG59XHJcblxyXG5bZGF0YS1zaWRlPVwiNFwiXSAuZG90Om50aC1vZi10eXBlKDMpIHtcclxuICAgIGdyaWQtYXJlYTogc2V2ZW47XHJcbn1cclxuXHJcbltkYXRhLXNpZGU9XCI0XCJdIC5kb3Q6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgZ3JpZC1hcmVhOiBuaW5lO1xyXG59XHJcblxyXG5bZGF0YS1zaWRlPVwiNVwiXSAuZG90Om50aC1vZi10eXBlKDEpIHtcclxuICAgIGdyaWQtYXJlYTogb25lO1xyXG59XHJcblxyXG5bZGF0YS1zaWRlPVwiNVwiXSAuZG90Om50aC1vZi10eXBlKDIpIHtcclxuICAgIGdyaWQtYXJlYTogdGhyZWU7XHJcbn1cclxuXHJcbltkYXRhLXNpZGU9XCI1XCJdIC5kb3Q6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgZ3JpZC1hcmVhOiBmaXZlO1xyXG59XHJcblxyXG5bZGF0YS1zaWRlPVwiNVwiXSAuZG90Om50aC1vZi10eXBlKDQpIHtcclxuICAgIGdyaWQtYXJlYTogc2V2ZW47XHJcbn1cclxuXHJcbltkYXRhLXNpZGU9XCI1XCJdIC5kb3Q6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgZ3JpZC1hcmVhOiBuaW5lO1xyXG59XHJcblxyXG5bZGF0YS1zaWRlPVwiNlwiXSAuZG90Om50aC1vZi10eXBlKDEpIHtcclxuICAgIGdyaWQtYXJlYTogb25lO1xyXG59XHJcblxyXG5bZGF0YS1zaWRlPVwiNlwiXSAuZG90Om50aC1vZi10eXBlKDIpIHtcclxuICAgIGdyaWQtYXJlYTogdGhyZWU7XHJcbn1cclxuXHJcbltkYXRhLXNpZGU9XCI2XCJdIC5kb3Q6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgZ3JpZC1hcmVhOiBmb3VyO1xyXG59XHJcblxyXG5bZGF0YS1zaWRlPVwiNlwiXSAuZG90Om50aC1vZi10eXBlKDQpIHtcclxuICAgIGdyaWQtYXJlYTogc2l4O1xyXG59XHJcblxyXG5bZGF0YS1zaWRlPVwiNlwiXSAuZG90Om50aC1vZi10eXBlKDUpIHtcclxuICAgIGdyaWQtYXJlYTogc2V2ZW47XHJcbn1cclxuXHJcbltkYXRhLXNpZGU9XCI2XCJdIC5kb3Q6bnRoLW9mLXR5cGUoNikge1xyXG4gICAgZ3JpZC1hcmVhOiBuaW5lO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_score_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/score.service */ "./src/app/_services/score.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_models/role */ "./src/app/_models/role.ts");








let HomeComponent = class HomeComponent {
    constructor(userService, scoreService, authenticationService, el) {
        this.userService = userService;
        this.scoreService = scoreService;
        this.authenticationService = authenticationService;
        this.el = el;
        this.round = 0;
        this.score = 0;
        this.played = 0;
        this.hide_play = false;
        this.gameloading = false;
        this.isProsess = false;
        this.timeTaken = 1;
        this.currentUser = this.authenticationService.currentUserValue;
    }
    ngOnInit() {
        this.gameloading = true;
        this.scoreService.getRandomGame().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(res => {
            this.gameId = res.result._id;
            this.gameName = res.result.name;
            this.round = res.result.round_of_play;
            this.gameloading = false;
            this.startTimer();
        });
    }
    get isAdmin() {
        return this.currentUser && this.currentUser.role === _models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].Admin;
    }
    hidePlay() {
        return this.played != this.round;
    }
    rollDice() {
        this.isProsess = true;
        if (this.played < this.round) {
            let random;
            random = this.getRandomNumber(1, 6);
            const dice = [this.el.nativeElement.querySelectorAll('.die-list')];
            dice.forEach(die => {
                this.toggleClasses(die);
                this.el.nativeElement.querySelector('.die-list').dataset.roll = random;
            });
            setTimeout(() => {
                this.played++;
                this.isProsess = false;
                this.score = this.score + random;
                if (this.played == this.round) {
                    this.scoreService.saveScore({
                        "game_id": this.gameId,
                        "user_id": this.currentUser.id,
                        "score": this.score,
                        "time_taken": this.transform(this.timeTaken)
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(res => {
                        console.log(res);
                    });
                }
            }, this.played < (this.round - 1) ? 5000 : 5000);
        }
        else {
            this.isProsess = true;
        }
    }
    toggleClasses(die) {
        // this.el.nativeElement.toggle("odd-roll");
        // this.el.nativeElement.toggle("even-roll");
        this.el.nativeElement.querySelector('.die-list').classList.toggle('odd-roll');
        this.el.nativeElement.querySelector('.die-list').classList.toggle('even-roll');
        // die.classList.toggle("odd-roll");
        // die.classList.toggle("even-roll");
    }
    getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    oberserableTimer() {
        const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1000, 2000);
        const abc = source.subscribe(val => {
            this.subscribeTimer = this.timeTaken - val;
        });
    }
    startTimer() {
        this.interval = setInterval(() => {
            if (this.timeTaken > 0) {
                this.timeTaken++;
            }
            else {
                this.timeTaken = 1;
            }
        }, 1000);
    }
    pauseTimer() {
        clearInterval(this.interval);
    }
    transform(value) {
        const minutes = Math.floor(value / 60);
        return minutes.toString().padStart(2, '0') + ':' + (value - minutes * 60).toString().padStart(2, '0');
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_score_service__WEBPACK_IMPORTED_MODULE_5__["ScoreService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");






let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nickname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value, this.f.nickname.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
let baseURL = 'http://127.0.0.1:8000';
const environment = {
    production: false,
    baseURL: baseURL,
    apiURL: baseURL + '/api',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\myapp\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map