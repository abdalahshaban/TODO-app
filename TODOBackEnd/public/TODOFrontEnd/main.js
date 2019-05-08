(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _login_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/auth.guard */ "./src/app/login/auth.guard.ts");







var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'tasks',
        component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"],
        canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TODOFrontEnd';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _tasks_token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tasks/token-interceptor.service */ "./src/app/tasks/token-interceptor.service.ts");
/* harmony import */ var _login_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/auth.guard */ "./src/app/login/auth.guard.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_9__["TasksComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _login_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _tasks_token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // private _registerUrl = 'http://localhost:3000/reg';
        // private _loginUrl = 'http://localhost:3000/login';
        this._registerUrl = 'reg';
        this._loginUrl = 'login';
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this._registerUrl, user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this._loginUrl, user);
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/login/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/login/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authservice, _router) {
        this._authservice = _authservice;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authservice.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@use postcss-cssnext;\r\n/* helpers/align.css */\r\n.align {\r\n\talign-items: center;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n/* helpers/grid.css */\r\n:root {\r\n\t--gridMaxWidth: 24em;\r\n\t--gridWidth: 90%;\r\n}\r\n.grid {\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tmax-width: var(--gridMaxWidth);\r\n\twidth: var(--gridWidth);\r\n}\r\n/* helpers/icon.css */\r\n.icon {\r\n\tdisplay: inline-block;\r\n\theight: 1.25em;\r\n\tline-height: 1.25em;\r\n\tmargin-right: 0.625em;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n\twidth: 1.25em;\r\n}\r\n.icon--info {\r\n\tbackground-color: #e5e5e5;\r\n\tborder-radius: 50%;\r\n}\r\n/* layout/base.css */\r\n:root {\r\n\t--bodyBackgroundColor: #eaeaea;\r\n\t--bodyColor: #999;\r\n\t--bodyFontFamily: 'Helvetica', 'Arial';\r\n\t--bodyFontFamilyFallback: sans-serif;\r\n\t--bodyFontSize: 0.875rem;\r\n\t--bodyFontWeight: 400;\r\n\t--bodyLineHeight: 1.5;\r\n}\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: inherit;\r\n}\r\nhtml {\r\n\tbox-sizing: border-box;\r\n\theight: 100%;\r\n}\r\nbody {\r\n\tbackground-color: var(--bodyBackgroundColor);\r\n\tfont-family: var(--bodyFontFamily), var(--bodyFontFamilyFallback);\r\n\tfont-size: var(--bodyFontSize);\r\n\tfont-weight: var(--bodyFontWeight);\r\n\tline-height: var(--bodyLineHeight);\r\n\tmargin: 0;\r\n\tmin-height: 100%;\r\n}\r\n/* modules/anchor.css */\r\n:root {\r\n\t--anchorColor: inherit;\r\n\t--anchorHoverColor: #1dabb8;\r\n}\r\na {\r\n\tcolor: var(--anchorColor);\r\n\ttext-decoration: none;\r\n\ttransition: color 0.3s;\r\n}\r\na:hover {\r\n\tcolor: var(--anchorHoverColor);\r\n}\r\n/* modules/form.css */\r\nfieldset {\r\n\tborder: none;\r\n\tmargin: 0;\r\n}\r\ninput {\r\n\t-webkit-appearance: none;\r\n\t   -moz-appearance: none;\r\n\t        appearance: none;\r\n\tborder: none;\r\n\tfont: inherit;\r\n\tmargin: 0;\r\n\toutline: none;\r\n\tpadding: 0;\r\n}\r\ninput[type='submit'] {\r\n\tcursor: pointer;\r\n}\r\n.form input[type='email'],\r\n.form input[type='password'] {\r\n\twidth: 100%;\r\n}\r\n/* modules/login.css */\r\n:root {\r\n\t--loginBorderRadius: 0.25em;\r\n\t--loginHeaderBackgroundColor: #282830;\r\n\r\n\t--loginInputBorderRadius: 0.25em;\r\n}\r\n.login__header {\r\n\tbackground-color: var(--loginHeaderBackgroundColor);\r\n\tborder-top-left-radius: var(--loginBorderRadius);\r\n\tborder-top-right-radius: var(--loginBorderRadius);\r\n\tcolor: #fff;\r\n\tpadding: 1.5em;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n}\r\n.login__title {\r\n\tfont-size: 1rem;\r\n\tmargin: 0;\r\n}\r\n.login__body {\r\n\tbackground-color: #fff;\r\n\tpadding: 1.5em;\r\n\tposition: relative;\r\n}\r\n.login__body::before {\r\n\tbackground-color: #fff;\r\n\tcontent: '';\r\n\theight: 0.5em;\r\n\tleft: 50%;\r\n\tmargin-left: -0.25em;\r\n\tmargin-top: -0.25em;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\t-webkit-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\twidth: 0.5em;\r\n}\r\n.login input[type='email'],\r\n.login input[type='password'] {\r\n\tborder: 0.0625em solid #e5e5e5;\r\n\tpadding: 1em 1.25em;\r\n}\r\n.login input[type='email'] {\r\n\tborder-top-left-radius: var(--loginInputBorderRadius);\r\n\tborder-top-right-radius: var(--loginInputBorderRadius);\r\n}\r\n.login input[type='password'] {\r\n\tborder-bottom-left-radius: var(--loginInputBorderRadius);\r\n\tborder-bottom-right-radius: var(--loginInputBorderRadius);\r\n\tborder-top: 0;\r\n}\r\n.login input[type='submit'] {\r\n\tbackground-color: #1dabb8;\r\n\tborder-radius: var(--loginInputBorderRadius);\r\n\tcolor: #fff;\r\n\tfont-weight: 700;\r\n\torder: 1;\r\n\tpadding: 0.75em 1.25em;\r\n\ttransition: background-color 0.3s;\r\n}\r\n.login input[type='submit']:focus,\r\n.login input[type='submit']:hover {\r\n\tbackground-color: #198d98;\r\n}\r\n.login__footer {\r\n\talign-items: center;\r\n\tbackground-color: #fff;\r\n\tborder-bottom-left-radius: var(--loginBorderRadius);\r\n\tborder-bottom-right-radius: var(--loginBorderRadius);\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tpadding-bottom: 1.5em;\r\n\tpadding-left: 1.5em;\r\n\tpadding-right: 1.5em;\r\n}\r\n.login__footer p {\r\n\tmargin: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsc0JBQXNCO0FBRXRCO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYix1QkFBdUI7QUFDeEI7QUFFQSxxQkFBcUI7QUFFckI7Q0FDQyxvQkFBb0I7Q0FDcEIsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLDhCQUE4QjtDQUM5Qix1QkFBdUI7QUFDeEI7QUFFQSxxQkFBcUI7QUFFckI7Q0FDQyxxQkFBcUI7Q0FDckIsY0FBYztDQUNkLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QixhQUFhO0FBQ2Q7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixrQkFBa0I7QUFDbkI7QUFFQSxvQkFBb0I7QUFFcEI7Q0FDQyw4QkFBOEI7Q0FDOUIsaUJBQWlCO0NBQ2pCLHNDQUFzQztDQUN0QyxvQ0FBb0M7Q0FDcEMsd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQixxQkFBcUI7QUFDdEI7QUFFQTs7O0NBR0MsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtBQUNiO0FBRUE7Q0FDQyw0Q0FBNEM7Q0FDNUMsaUVBQWlFO0NBQ2pFLDhCQUE4QjtDQUM5QixrQ0FBa0M7Q0FDbEMsa0NBQWtDO0NBQ2xDLFNBQVM7Q0FDVCxnQkFBZ0I7QUFDakI7QUFFQSx1QkFBdUI7QUFFdkI7Q0FDQyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0FBQzVCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIscUJBQXFCO0NBQ3JCLHNCQUFzQjtBQUN2QjtBQUVBO0NBQ0MsOEJBQThCO0FBQy9CO0FBRUEscUJBQXFCO0FBRXJCO0NBQ0MsWUFBWTtDQUNaLFNBQVM7QUFDVjtBQUVBO0NBQ0Msd0JBQWdCO0lBQWhCLHFCQUFnQjtTQUFoQixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixTQUFTO0NBQ1QsYUFBYTtDQUNiLFVBQVU7QUFDWDtBQUVBO0NBQ0MsZUFBZTtBQUNoQjtBQUVBOztDQUVDLFdBQVc7QUFDWjtBQUVBLHNCQUFzQjtBQUV0QjtDQUNDLDJCQUEyQjtDQUMzQixxQ0FBcUM7O0NBRXJDLGdDQUFnQztBQUNqQztBQUVBO0NBQ0MsbURBQW1EO0NBQ25ELGdEQUFnRDtDQUNoRCxpREFBaUQ7Q0FDakQsV0FBVztDQUNYLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsU0FBUztBQUNWO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsY0FBYztDQUNkLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsU0FBUztDQUNULG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixnQ0FBd0I7U0FBeEIsd0JBQXdCO0NBQ3hCLFlBQVk7QUFDYjtBQUVBOztDQUVDLDhCQUE4QjtDQUM5QixtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLHFEQUFxRDtDQUNyRCxzREFBc0Q7QUFDdkQ7QUFFQTtDQUNDLHdEQUF3RDtDQUN4RCx5REFBeUQ7Q0FDekQsYUFBYTtBQUNkO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsNENBQTRDO0NBQzVDLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsUUFBUTtDQUNSLHNCQUFzQjtDQUN0QixpQ0FBaUM7QUFDbEM7QUFFQTs7Q0FFQyx5QkFBeUI7QUFDMUI7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsbURBQW1EO0NBQ25ELG9EQUFvRDtDQUNwRCxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkIsb0JBQW9CO0FBQ3JCO0FBRUE7Q0FDQyxTQUFTO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBwb3N0Y3NzLWNzc25leHQ7XHJcbi8qIGhlbHBlcnMvYWxpZ24uY3NzICovXHJcblxyXG4uYWxpZ24ge1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogaGVscGVycy9ncmlkLmNzcyAqL1xyXG5cclxuOnJvb3Qge1xyXG5cdC0tZ3JpZE1heFdpZHRoOiAyNGVtO1xyXG5cdC0tZ3JpZFdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0bWF4LXdpZHRoOiB2YXIoLS1ncmlkTWF4V2lkdGgpO1xyXG5cdHdpZHRoOiB2YXIoLS1ncmlkV2lkdGgpO1xyXG59XHJcblxyXG4vKiBoZWxwZXJzL2ljb24uY3NzICovXHJcblxyXG4uaWNvbiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGhlaWdodDogMS4yNWVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjI1ZW07XHJcblx0bWFyZ2luLXJpZ2h0OiAwLjYyNWVtO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdHdpZHRoOiAxLjI1ZW07XHJcbn1cclxuXHJcbi5pY29uLS1pbmZvIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLyogbGF5b3V0L2Jhc2UuY3NzICovXHJcblxyXG46cm9vdCB7XHJcblx0LS1ib2R5QmFja2dyb3VuZENvbG9yOiAjZWFlYWVhO1xyXG5cdC0tYm9keUNvbG9yOiAjOTk5O1xyXG5cdC0tYm9keUZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLCAnQXJpYWwnO1xyXG5cdC0tYm9keUZvbnRGYW1pbHlGYWxsYmFjazogc2Fucy1zZXJpZjtcclxuXHQtLWJvZHlGb250U2l6ZTogMC44NzVyZW07XHJcblx0LS1ib2R5Rm9udFdlaWdodDogNDAwO1xyXG5cdC0tYm9keUxpbmVIZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcblx0Ym94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5cclxuaHRtbCB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHlCYWNrZ3JvdW5kQ29sb3IpO1xyXG5cdGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5Rm9udEZhbWlseSksIHZhcigtLWJvZHlGb250RmFtaWx5RmFsbGJhY2spO1xyXG5cdGZvbnQtc2l6ZTogdmFyKC0tYm9keUZvbnRTaXplKTtcclxuXHRmb250LXdlaWdodDogdmFyKC0tYm9keUZvbnRXZWlnaHQpO1xyXG5cdGxpbmUtaGVpZ2h0OiB2YXIoLS1ib2R5TGluZUhlaWdodCk7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIG1vZHVsZXMvYW5jaG9yLmNzcyAqL1xyXG5cclxuOnJvb3Qge1xyXG5cdC0tYW5jaG9yQ29sb3I6IGluaGVyaXQ7XHJcblx0LS1hbmNob3JIb3ZlckNvbG9yOiAjMWRhYmI4O1xyXG59XHJcblxyXG5hIHtcclxuXHRjb2xvcjogdmFyKC0tYW5jaG9yQ29sb3IpO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuXHRjb2xvcjogdmFyKC0tYW5jaG9ySG92ZXJDb2xvcik7XHJcbn1cclxuXHJcbi8qIG1vZHVsZXMvZm9ybS5jc3MgKi9cclxuXHJcbmZpZWxkc2V0IHtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcblx0YXBwZWFyYW5jZTogbm9uZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Zm9udDogaW5oZXJpdDtcclxuXHRtYXJnaW46IDA7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdzdWJtaXQnXSB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybSBpbnB1dFt0eXBlPSdlbWFpbCddLFxyXG4uZm9ybSBpbnB1dFt0eXBlPSdwYXNzd29yZCddIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogbW9kdWxlcy9sb2dpbi5jc3MgKi9cclxuXHJcbjpyb290IHtcclxuXHQtLWxvZ2luQm9yZGVyUmFkaXVzOiAwLjI1ZW07XHJcblx0LS1sb2dpbkhlYWRlckJhY2tncm91bmRDb2xvcjogIzI4MjgzMDtcclxuXHJcblx0LS1sb2dpbklucHV0Qm9yZGVyUmFkaXVzOiAwLjI1ZW07XHJcbn1cclxuXHJcbi5sb2dpbl9faGVhZGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb2dpbkhlYWRlckJhY2tncm91bmRDb2xvcik7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tbG9naW5Cb3JkZXJSYWRpdXMpO1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1sb2dpbkJvcmRlclJhZGl1cyk7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0cGFkZGluZzogMS41ZW07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5sb2dpbl9fdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5sb2dpbl9fYm9keSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRwYWRkaW5nOiAxLjVlbTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5sb2dpbl9fYm9keTo6YmVmb3JlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdGhlaWdodDogMC41ZW07XHJcblx0bGVmdDogNTAlO1xyXG5cdG1hcmdpbi1sZWZ0OiAtMC4yNWVtO1xyXG5cdG1hcmdpbi10b3A6IC0wLjI1ZW07XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0d2lkdGg6IDAuNWVtO1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT0nZW1haWwnXSxcclxuLmxvZ2luIGlucHV0W3R5cGU9J3Bhc3N3b3JkJ10ge1xyXG5cdGJvcmRlcjogMC4wNjI1ZW0gc29saWQgI2U1ZTVlNTtcclxuXHRwYWRkaW5nOiAxZW0gMS4yNWVtO1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT0nZW1haWwnXSB7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tbG9naW5JbnB1dEJvcmRlclJhZGl1cyk7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLWxvZ2luSW5wdXRCb3JkZXJSYWRpdXMpO1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSB7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tbG9naW5JbnB1dEJvcmRlclJhZGl1cyk7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWxvZ2luSW5wdXRCb3JkZXJSYWRpdXMpO1xyXG5cdGJvcmRlci10b3A6IDA7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzFkYWJiODtcclxuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1sb2dpbklucHV0Qm9yZGVyUmFkaXVzKTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdG9yZGVyOiAxO1xyXG5cdHBhZGRpbmc6IDAuNzVlbSAxLjI1ZW07XHJcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT0nc3VibWl0J106Zm9jdXMsXHJcbi5sb2dpbiBpbnB1dFt0eXBlPSdzdWJtaXQnXTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzE5OGQ5ODtcclxufVxyXG5cclxuLmxvZ2luX19mb290ZXIge1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1sb2dpbkJvcmRlclJhZGl1cyk7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWxvZ2luQm9yZGVyUmFkaXVzKTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRwYWRkaW5nLWJvdHRvbTogMS41ZW07XHJcblx0cGFkZGluZy1sZWZ0OiAxLjVlbTtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxLjVlbTtcclxufVxyXG5cclxuLmxvZ2luX19mb290ZXIgcCB7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n  <div class=\"col-md-12 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">login</h3>\n      </div>\n      <div class=\"alert alert-danger\" *ngIf=\"message\">{{message}}</div>\n      <div class=\"card-body\">\n        <form class=\"form\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input class=\"form-control\" [(ngModel)]=\"loginUserData.email\" name=\"email\" type=\"email\" id=\"email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input class=\"form-control\" [(ngModel)]=\"loginUserData.password\" name=\"password\" type=\"password\"\n              id=\"password\">\n          </div>\n          <button (click)=\"loginUser()\" type=\"button\" class=\"btn btn-success mr-3\">Login</button>\n          <button [routerLink]=\"['/register']\" routerLinkActive=\"active\" type=\"button\"\n            class=\"btn btn-primary\">Register</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.loginUserData = {};
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this._auth.loginUser(this.loginUserData).subscribe(function (res) {
            console.log(res);
            if (res.token === 'undefined') {
                _this._router.navigate(['/login']);
            }
            localStorage.setItem('token', res.token);
            _this._router.navigate(['/tasks']);
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                if (err.status == 400) {
                    _this.message = 'login with vaild data OR Register if you New';
                    _this._router.navigate(['/login']);
                }
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@use postcss-cssnext;\r\n/* helpers/align.css */\r\n.align {\r\n\talign-items: center;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n/* helpers/grid.css */\r\n:root {\r\n\t--gridMaxWidth: 24em;\r\n\t--gridWidth: 90%;\r\n}\r\n.grid {\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tmax-width: var(--gridMaxWidth);\r\n\twidth: var(--gridWidth);\r\n}\r\n/* helpers/icon.css */\r\n.icon {\r\n\tdisplay: inline-block;\r\n\theight: 1.25em;\r\n\tline-height: 1.25em;\r\n\tmargin-right: 0.625em;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n\twidth: 1.25em;\r\n}\r\n.icon--info {\r\n\tbackground-color: #e5e5e5;\r\n\tborder-radius: 50%;\r\n}\r\n/* layout/base.css */\r\n:root {\r\n\t--bodyBackgroundColor: #eaeaea;\r\n\t--bodyColor: #999;\r\n\t--bodyFontFamily: 'Helvetica', 'Arial';\r\n\t--bodyFontFamilyFallback: sans-serif;\r\n\t--bodyFontSize: 0.875rem;\r\n\t--bodyFontWeight: 400;\r\n\t--bodyLineHeight: 1.5;\r\n}\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: inherit;\r\n}\r\nhtml {\r\n\tbox-sizing: border-box;\r\n\theight: 100%;\r\n}\r\nbody {\r\n\tbackground-color: var(--bodyBackgroundColor);\r\n\tfont-family: var(--bodyFontFamily), var(--bodyFontFamilyFallback);\r\n\tfont-size: var(--bodyFontSize);\r\n\tfont-weight: var(--bodyFontWeight);\r\n\tline-height: var(--bodyLineHeight);\r\n\tmargin: 0;\r\n\tmin-height: 100%;\r\n}\r\n/* modules/anchor.css */\r\n:root {\r\n\t--anchorColor: inherit;\r\n\t--anchorHoverColor: #1dabb8;\r\n}\r\na {\r\n\tcolor: var(--anchorColor);\r\n\ttext-decoration: none;\r\n\ttransition: color 0.3s;\r\n}\r\na:hover {\r\n\tcolor: var(--anchorHoverColor);\r\n}\r\n/* modules/form.css */\r\nfieldset {\r\n\tborder: none;\r\n\tmargin: 0;\r\n}\r\ninput {\r\n\t-webkit-appearance: none;\r\n\t   -moz-appearance: none;\r\n\t        appearance: none;\r\n\tborder: none;\r\n\tfont: inherit;\r\n\tmargin: 0;\r\n\toutline: none;\r\n\tpadding: 0;\r\n}\r\ninput[type='submit'] {\r\n\tcursor: pointer;\r\n}\r\n.form input[type='email'],\r\n.form input[type='password'] {\r\n\twidth: 100%;\r\n}\r\n/* modules/login.css */\r\n:root {\r\n\t--loginBorderRadius: 0.25em;\r\n\t--loginHeaderBackgroundColor: #282830;\r\n\r\n\t--loginInputBorderRadius: 0.25em;\r\n}\r\n.login__header {\r\n\tbackground-color: var(--loginHeaderBackgroundColor);\r\n\tborder-top-left-radius: var(--loginBorderRadius);\r\n\tborder-top-right-radius: var(--loginBorderRadius);\r\n\tcolor: #fff;\r\n\tpadding: 1.5em;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n}\r\n.login__title {\r\n\tfont-size: 1rem;\r\n\tmargin: 0;\r\n}\r\n.login__body {\r\n\tbackground-color: #fff;\r\n\tpadding: 1.5em;\r\n\tposition: relative;\r\n}\r\n.login__body::before {\r\n\tbackground-color: #fff;\r\n\tcontent: '';\r\n\theight: 0.5em;\r\n\tleft: 50%;\r\n\tmargin-left: -0.25em;\r\n\tmargin-top: -0.25em;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\t-webkit-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\twidth: 0.5em;\r\n}\r\n.login input[type='email'],\r\n.login input[type='password'] {\r\n\tborder: 0.0625em solid #e5e5e5;\r\n\tpadding: 1em 1.25em;\r\n}\r\n.login input[type='email'] {\r\n\tborder-top-left-radius: var(--loginInputBorderRadius);\r\n\tborder-top-right-radius: var(--loginInputBorderRadius);\r\n}\r\n.login input[type='password'] {\r\n\tborder-bottom-left-radius: var(--loginInputBorderRadius);\r\n\tborder-bottom-right-radius: var(--loginInputBorderRadius);\r\n\tborder-top: 0;\r\n}\r\n.login input[type='submit'] {\r\n\tbackground-color: #1dabb8;\r\n\tborder-radius: var(--loginInputBorderRadius);\r\n\tcolor: #fff;\r\n\tfont-weight: 700;\r\n\torder: 1;\r\n\tpadding: 0.75em 1.25em;\r\n\ttransition: background-color 0.3s;\r\n}\r\n.login input[type='submit']:focus,\r\n.login input[type='submit']:hover {\r\n\tbackground-color: #198d98;\r\n}\r\n.login__footer {\r\n\talign-items: center;\r\n\tbackground-color: #fff;\r\n\tborder-bottom-left-radius: var(--loginBorderRadius);\r\n\tborder-bottom-right-radius: var(--loginBorderRadius);\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tpadding-bottom: 1.5em;\r\n\tpadding-left: 1.5em;\r\n\tpadding-right: 1.5em;\r\n}\r\n.login__footer p {\r\n\tmargin: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsc0JBQXNCO0FBRXRCO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYix1QkFBdUI7QUFDeEI7QUFFQSxxQkFBcUI7QUFFckI7Q0FDQyxvQkFBb0I7Q0FDcEIsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLDhCQUE4QjtDQUM5Qix1QkFBdUI7QUFDeEI7QUFFQSxxQkFBcUI7QUFFckI7Q0FDQyxxQkFBcUI7Q0FDckIsY0FBYztDQUNkLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QixhQUFhO0FBQ2Q7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixrQkFBa0I7QUFDbkI7QUFFQSxvQkFBb0I7QUFFcEI7Q0FDQyw4QkFBOEI7Q0FDOUIsaUJBQWlCO0NBQ2pCLHNDQUFzQztDQUN0QyxvQ0FBb0M7Q0FDcEMsd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQixxQkFBcUI7QUFDdEI7QUFFQTs7O0NBR0MsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtBQUNiO0FBRUE7Q0FDQyw0Q0FBNEM7Q0FDNUMsaUVBQWlFO0NBQ2pFLDhCQUE4QjtDQUM5QixrQ0FBa0M7Q0FDbEMsa0NBQWtDO0NBQ2xDLFNBQVM7Q0FDVCxnQkFBZ0I7QUFDakI7QUFFQSx1QkFBdUI7QUFFdkI7Q0FDQyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0FBQzVCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIscUJBQXFCO0NBQ3JCLHNCQUFzQjtBQUN2QjtBQUVBO0NBQ0MsOEJBQThCO0FBQy9CO0FBRUEscUJBQXFCO0FBRXJCO0NBQ0MsWUFBWTtDQUNaLFNBQVM7QUFDVjtBQUVBO0NBQ0Msd0JBQWdCO0lBQWhCLHFCQUFnQjtTQUFoQixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixTQUFTO0NBQ1QsYUFBYTtDQUNiLFVBQVU7QUFDWDtBQUVBO0NBQ0MsZUFBZTtBQUNoQjtBQUVBOztDQUVDLFdBQVc7QUFDWjtBQUVBLHNCQUFzQjtBQUV0QjtDQUNDLDJCQUEyQjtDQUMzQixxQ0FBcUM7O0NBRXJDLGdDQUFnQztBQUNqQztBQUVBO0NBQ0MsbURBQW1EO0NBQ25ELGdEQUFnRDtDQUNoRCxpREFBaUQ7Q0FDakQsV0FBVztDQUNYLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsU0FBUztBQUNWO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsY0FBYztDQUNkLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsU0FBUztDQUNULG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixnQ0FBd0I7U0FBeEIsd0JBQXdCO0NBQ3hCLFlBQVk7QUFDYjtBQUVBOztDQUVDLDhCQUE4QjtDQUM5QixtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLHFEQUFxRDtDQUNyRCxzREFBc0Q7QUFDdkQ7QUFFQTtDQUNDLHdEQUF3RDtDQUN4RCx5REFBeUQ7Q0FDekQsYUFBYTtBQUNkO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsNENBQTRDO0NBQzVDLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsUUFBUTtDQUNSLHNCQUFzQjtDQUN0QixpQ0FBaUM7QUFDbEM7QUFFQTs7Q0FFQyx5QkFBeUI7QUFDMUI7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsbURBQW1EO0NBQ25ELG9EQUFvRDtDQUNwRCxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkIsb0JBQW9CO0FBQ3JCO0FBRUE7Q0FDQyxTQUFTO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBwb3N0Y3NzLWNzc25leHQ7XHJcbi8qIGhlbHBlcnMvYWxpZ24uY3NzICovXHJcblxyXG4uYWxpZ24ge1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogaGVscGVycy9ncmlkLmNzcyAqL1xyXG5cclxuOnJvb3Qge1xyXG5cdC0tZ3JpZE1heFdpZHRoOiAyNGVtO1xyXG5cdC0tZ3JpZFdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0bWF4LXdpZHRoOiB2YXIoLS1ncmlkTWF4V2lkdGgpO1xyXG5cdHdpZHRoOiB2YXIoLS1ncmlkV2lkdGgpO1xyXG59XHJcblxyXG4vKiBoZWxwZXJzL2ljb24uY3NzICovXHJcblxyXG4uaWNvbiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGhlaWdodDogMS4yNWVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjI1ZW07XHJcblx0bWFyZ2luLXJpZ2h0OiAwLjYyNWVtO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdHdpZHRoOiAxLjI1ZW07XHJcbn1cclxuXHJcbi5pY29uLS1pbmZvIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLyogbGF5b3V0L2Jhc2UuY3NzICovXHJcblxyXG46cm9vdCB7XHJcblx0LS1ib2R5QmFja2dyb3VuZENvbG9yOiAjZWFlYWVhO1xyXG5cdC0tYm9keUNvbG9yOiAjOTk5O1xyXG5cdC0tYm9keUZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLCAnQXJpYWwnO1xyXG5cdC0tYm9keUZvbnRGYW1pbHlGYWxsYmFjazogc2Fucy1zZXJpZjtcclxuXHQtLWJvZHlGb250U2l6ZTogMC44NzVyZW07XHJcblx0LS1ib2R5Rm9udFdlaWdodDogNDAwO1xyXG5cdC0tYm9keUxpbmVIZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcblx0Ym94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5cclxuaHRtbCB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHlCYWNrZ3JvdW5kQ29sb3IpO1xyXG5cdGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5Rm9udEZhbWlseSksIHZhcigtLWJvZHlGb250RmFtaWx5RmFsbGJhY2spO1xyXG5cdGZvbnQtc2l6ZTogdmFyKC0tYm9keUZvbnRTaXplKTtcclxuXHRmb250LXdlaWdodDogdmFyKC0tYm9keUZvbnRXZWlnaHQpO1xyXG5cdGxpbmUtaGVpZ2h0OiB2YXIoLS1ib2R5TGluZUhlaWdodCk7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIG1vZHVsZXMvYW5jaG9yLmNzcyAqL1xyXG5cclxuOnJvb3Qge1xyXG5cdC0tYW5jaG9yQ29sb3I6IGluaGVyaXQ7XHJcblx0LS1hbmNob3JIb3ZlckNvbG9yOiAjMWRhYmI4O1xyXG59XHJcblxyXG5hIHtcclxuXHRjb2xvcjogdmFyKC0tYW5jaG9yQ29sb3IpO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuXHRjb2xvcjogdmFyKC0tYW5jaG9ySG92ZXJDb2xvcik7XHJcbn1cclxuXHJcbi8qIG1vZHVsZXMvZm9ybS5jc3MgKi9cclxuXHJcbmZpZWxkc2V0IHtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcblx0YXBwZWFyYW5jZTogbm9uZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Zm9udDogaW5oZXJpdDtcclxuXHRtYXJnaW46IDA7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdzdWJtaXQnXSB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybSBpbnB1dFt0eXBlPSdlbWFpbCddLFxyXG4uZm9ybSBpbnB1dFt0eXBlPSdwYXNzd29yZCddIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogbW9kdWxlcy9sb2dpbi5jc3MgKi9cclxuXHJcbjpyb290IHtcclxuXHQtLWxvZ2luQm9yZGVyUmFkaXVzOiAwLjI1ZW07XHJcblx0LS1sb2dpbkhlYWRlckJhY2tncm91bmRDb2xvcjogIzI4MjgzMDtcclxuXHJcblx0LS1sb2dpbklucHV0Qm9yZGVyUmFkaXVzOiAwLjI1ZW07XHJcbn1cclxuXHJcbi5sb2dpbl9faGVhZGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb2dpbkhlYWRlckJhY2tncm91bmRDb2xvcik7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tbG9naW5Cb3JkZXJSYWRpdXMpO1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1sb2dpbkJvcmRlclJhZGl1cyk7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0cGFkZGluZzogMS41ZW07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5sb2dpbl9fdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5sb2dpbl9fYm9keSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRwYWRkaW5nOiAxLjVlbTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5sb2dpbl9fYm9keTo6YmVmb3JlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdGhlaWdodDogMC41ZW07XHJcblx0bGVmdDogNTAlO1xyXG5cdG1hcmdpbi1sZWZ0OiAtMC4yNWVtO1xyXG5cdG1hcmdpbi10b3A6IC0wLjI1ZW07XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0d2lkdGg6IDAuNWVtO1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT0nZW1haWwnXSxcclxuLmxvZ2luIGlucHV0W3R5cGU9J3Bhc3N3b3JkJ10ge1xyXG5cdGJvcmRlcjogMC4wNjI1ZW0gc29saWQgI2U1ZTVlNTtcclxuXHRwYWRkaW5nOiAxZW0gMS4yNWVtO1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT0nZW1haWwnXSB7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tbG9naW5JbnB1dEJvcmRlclJhZGl1cyk7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLWxvZ2luSW5wdXRCb3JkZXJSYWRpdXMpO1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSB7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tbG9naW5JbnB1dEJvcmRlclJhZGl1cyk7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWxvZ2luSW5wdXRCb3JkZXJSYWRpdXMpO1xyXG5cdGJvcmRlci10b3A6IDA7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzFkYWJiODtcclxuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1sb2dpbklucHV0Qm9yZGVyUmFkaXVzKTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdG9yZGVyOiAxO1xyXG5cdHBhZGRpbmc6IDAuNzVlbSAxLjI1ZW07XHJcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT0nc3VibWl0J106Zm9jdXMsXHJcbi5sb2dpbiBpbnB1dFt0eXBlPSdzdWJtaXQnXTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzE5OGQ5ODtcclxufVxyXG5cclxuLmxvZ2luX19mb290ZXIge1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1sb2dpbkJvcmRlclJhZGl1cyk7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWxvZ2luQm9yZGVyUmFkaXVzKTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRwYWRkaW5nLWJvdHRvbTogMS41ZW07XHJcblx0cGFkZGluZy1sZWZ0OiAxLjVlbTtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxLjVlbTtcclxufVxyXG5cclxuLmxvZ2luX19mb290ZXIgcCB7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n  <div class=\"col-md-12 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Register</h3>\n      </div>\n      <div class=\"alert alert-danger\" *ngIf=\"message\">{{message}}</div>\n      <div class=\"card-body\">\n        <form class=\"form\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input class=\"form-control\" [(ngModel)]=\"registerUserData.email\" name=\"email\" type=\"email\" id=\"email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input class=\"form-control\" [(ngModel)]=\"registerUserData.password\" name=\"password\" type=\"password\"\n              id=\"password\">\n          </div>\n          <button [routerLink]=\"['/register']\" routerLinkActive=\"active\" (click)=\"registerUser()\" type=\"button\"\n            class=\"btn btn-primary mr-3\">Register</button>\n          <button [routerLink]=\"['/login']\" routerLinkActive=\"active\" type=\"button\"\n            class=\"btn btn-primary\">login</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.registerUserData = {};
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        console.log(this.registerUserData);
        this._auth.registerUser(this.registerUserData).subscribe(function (res) {
            console.log(res);
            _this._router.navigate(['/login']);
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                if (err.status == 400) {
                    _this.message = 'email and password required to make new account';
                    _this._router.navigate(['/register']);
                }
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.component.css":
/*!*******************************************!*\
  !*** ./src/app/tasks/tasks.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/tasks/tasks.component.html":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"padding:45px 0px\">\n  <h4 class=\"text-center\">To DO List App</h4>\n</div>\n\n<div class=\"alert alert-danger\" *ngIf=\"message\">{{message}}</div>\n\n<div class=\"input-group\" *ngIf=\"isEdit\">\n  <input type=\"text\" class=\"form-control\" [(ngModel)]='titleupdate'>\n  <div class=\"input-group-addon hover-cursor\" (click)=\"onEditSubmit()\">\n    <button class=\"btn btn-warning\">update</button>\n  </div>\n</div>\n\n\n<div class=\"input-group\" *ngIf=\"!isEdit\">\n  <input type=\"text\" class=\"form-control\" [(ngModel)]='title'>\n  <div class=\"input-group-addon hover-cursor\" (click)=\"onAdd()\">\n    <i class=\"fa fa-plus-circle fa-2x\"></i>\n  </div>\n\n</div>\n\n\n<div style=\"margin:5px 0px\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let item of TODO\">\n      <span class=\"hover-cursor\" (click)=\"Doned(item._id,item.title)\">\n        <i class=\"fa fa-lg\" [ngClass]=\"item.isChecked?'fa-check-circle-o':'fa-circle-thin'\"></i>\n      </span>\n      {{item.title}}\n      <span class=\"hover-cursor text-danger pull-right\">\n        <i class=\"fa fa-trash-o fa-lg\" (click)=\"Delete(item._id)\"></i>\n      </span>\n      <span class=\"hover-cursor text-danger pull-right\">\n        <i class=\"fa fa-done-o fa-lg\">\n          <button class=\"btn btn-primary\" (click)=\"onEditClick(item)\">edit</button>\n\n        </i>\n      </span>\n    </li>\n  </ul>\n</div>\n\n<!-- Button trigger modal -->\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"getTaskDone()\">\n  Task Doned\n</button>\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Doned Task</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" style=\"margin:5px 0px\">\n\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor=\"let item of DoneTODO\">\n            {{item.title}}\n            <span class=\"hover-cursor text-danger pull-right\">\n              <i class=\"fa fa-trash-o fa-lg\" (click)=\"Delete(item._id)\"></i>\n            </span>\n          </li>\n        </ul>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"footer\" style=\"margin:45px 0px\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"logOut()\">Logout</button>\n</div>\n\n\n\n<!-- <div style=\"margin:5px 0px\" >\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let item of DoneTODO\">\n      <span class=\"hover-cursor\" [class.text-success]='item.isChecked' (click)=\"Doned(item._id,item.title)\">\n        <i class=\"fa fa-lg\" [ngClass]=\"item.isChecked?'fa-check-circle-o':'fa-circle-thin'\"></i>\n      </span>\n      {{item.title}}\n      <span class=\"hover-cursor text-danger pull-right\">\n        <i class=\"fa fa-trash-o fa-lg\" (click)=\"Delete(item._id)\"></i>\n      </span>\n      <span class=\"hover-cursor text-danger pull-right\">\n        <i class=\"fa fa-done-o fa-lg\">\n          <button class=\"btn btn-primary\" (click)=\"Edit(item._id,item.titl)\">edit</button>\n\n        </i>\n      </span>\n    </li>\n  </ul>\n</div> -->\n"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todoserv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoserv.service */ "./src/app/tasks/todoserv.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TasksComponent = /** @class */ (function () {
    function TasksComponent(_todoser, _router) {
        this._todoser = _todoser;
        this._router = _router;
        this.TODO = [];
        this.DoneTODO = [];
        this.title = '';
        this.isDone = 1;
    }
    TasksComponent.prototype.ngOnInit = function () {
        this.getTask();
        this.isEdit = false;
    };
    TasksComponent.prototype.onEditClick = function (item) {
        this.isEdit = true;
        this.titleupdate = item.title;
        this.id = item._id;
    };
    TasksComponent.prototype.onEditSubmit = function () {
        var _this = this;
        console.log(this.titleupdate);
        console.log(this.id);
        this._todoser.updateTitle(0, this.id, { title: this.titleupdate }).subscribe(function (res) {
            console.log(res), _this.getTask();
            _this.isEdit = false;
        }, function (err) { return console.log(err); });
    };
    TasksComponent.prototype.getTask = function () {
        var _this = this;
        this._todoser.getTasks().subscribe(function (res) {
            console.log(res);
            _this.TODO = res.task;
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this._router.navigate(['/login']);
                }
            }
        });
    };
    //Done Tasks
    TasksComponent.prototype.getTaskDone = function () {
        var _this = this;
        this._todoser.getTasksDone().subscribe(function (res) {
            console.log(res);
            _this.DoneTODO = res.task;
        }, function (err) { return console.log(err); });
    };
    //
    TasksComponent.prototype.onAdd = function () {
        var _this = this;
        this._todoser.addTitle({ title: this.title }).subscribe(function (res) {
            console.log(res);
            _this.title = '';
            _this.getTask();
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status == 401) {
                    _this.message = 'should register befor make it or login with vaild data';
                    _this._router.navigate(['/login']);
                }
            }
        });
    };
    TasksComponent.prototype.Doned = function (taskId, title) {
        var _this = this;
        this._todoser.Doned(1, taskId, title).subscribe(function (res) {
            console.log(res), _this.getTask();
        }, function (err) { return console.log(err); });
    };
    TasksComponent.prototype.Delete = function (taskId) {
        var _this = this;
        this._todoser.deleteTask(taskId).subscribe(function (res) {
            console.log(res), _this.getTask(), _this.getTaskDone();
        }, function (err) { return console.log(err); });
    };
    TasksComponent.prototype.Edit = function (taskId, title) {
        var _this = this;
        this._todoser.Doned(0, taskId, title).subscribe(function (res) {
            console.log(res), _this.getTask();
        }, function (err) { return console.log(err); });
    };
    TasksComponent.prototype.logOut = function () {
        localStorage.removeItem('token');
        this._router.navigate(['/login']);
    };
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/tasks/tasks.component.html"),
            providers: [_todoserv_service__WEBPACK_IMPORTED_MODULE_2__["TodoservService"]],
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/tasks/tasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todoserv_service__WEBPACK_IMPORTED_MODULE_2__["TodoservService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/tasks/todoserv.service.ts":
/*!*******************************************!*\
  !*** ./src/app/tasks/todoserv.service.ts ***!
  \*******************************************/
/*! exports provided: TodoservService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoservService", function() { return TodoservService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TodoservService = /** @class */ (function () {
    //add delete edit get
    // private _todoUrl = 'http://localhost:3000/';
    // private _todoUrl = '';
    function TodoservService(http) {
        this.http = http;
    }
    TodoservService.prototype.addTitle = function (body) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        console.log(body);
        // return this.http.post<any>(this._todoUrl + 'add', body, { headers: headers });
        return this.http.post('add', body, { headers: headers });
    };
    TodoservService.prototype.getTasks = function () {
        // return this.http.get<any>(this._todoUrl + 'task');
        return this.http.get('task');
    };
    TodoservService.prototype.getTasksDone = function () {
        // return this.http.get<any>(this._todoUrl + 'task/' + 'done');
        return this.http.get('task/' + 'done');
    };
    TodoservService.prototype.getTasksAll = function () {
        // return this.http.get<any>(this._todoUrl + 'taskAll');
        return this.http.get('taskAll');
    };
    // updateTask(){
    //   return this.http.put(this._todoUrl+'taskAll');
    // }
    TodoservService.prototype.deleteTask = function (taskId) {
        // return this.http.delete(this._todoUrl + taskId);
        return this.http.delete(taskId);
    };
    TodoservService.prototype.Doned = function (key, taskId, title) {
        // server.put('/update/:done/:taskId'
        // return this.http.put(this._todoUrl + 'update/' + key + '/' + taskId, title);
        return this.http.put('update/' + key + '/' + taskId, title);
    };
    TodoservService.prototype.updateTitle = function (key, taskId, title) {
        console.log(title);
        // server.put('/update/:done/:taskId'
        // return this.http.put(this._todoUrl + 'update/' + key + '/' + taskId, title);
        return this.http.put('update/' + key + '/' + taskId, title);
    };
    TodoservService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoservService);
    return TodoservService;
}());



/***/ }),

/***/ "./src/app/tasks/token-interceptor.service.ts":
/*!****************************************************!*\
  !*** ./src/app/tasks/token-interceptor.service.ts ***!
  \****************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService() {
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var token = localStorage.getItem('token');
        var tokenizeReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + token
            }
        });
        return next.handle(tokenizeReq);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Abdullah UWK\Desktop\Projects(Examples)\13-TODO\TODO-app\TODOFrontEnd\TODOFrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map