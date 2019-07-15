(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
const i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
const i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var RouterModuleNgFactory = i0.ɵcmf(i1.RouterModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ɵangular_packages_router_router_lNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i1.RouterModule, i1.RouterModule, [[2, i1.ɵangular_packages_router_router_a], [2, i1.Router]])]); });
exports.RouterModuleNgFactory = RouterModuleNgFactory;
var styles_ɵangular_packages_router_router_l = [];
var RenderType_ɵangular_packages_router_router_l = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵangular_packages_router_router_l, data: {} });
exports.RenderType_ɵangular_packages_router_router_l = RenderType_ɵangular_packages_router_router_l;
function View_ɵangular_packages_router_router_l_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(1, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ɵangular_packages_router_router_l_0 = View_ɵangular_packages_router_router_l_0;
function View_ɵangular_packages_router_router_l_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵangular_packages_router_router_l_0, RenderType_ɵangular_packages_router_router_l)), i0.ɵdid(1, 49152, null, 0, i1.ɵangular_packages_router_router_l, [], null, null)], null, null); }
exports.View_ɵangular_packages_router_router_l_Host_0 = View_ɵangular_packages_router_router_l_Host_0;
var ɵangular_packages_router_router_lNgFactory = i0.ɵccf("ng-component", i1.ɵangular_packages_router_router_l, View_ɵangular_packages_router_router_l_Host_0, {}, {}, []);
exports.ɵangular_packages_router_router_lNgFactory = ɵangular_packages_router_router_lNgFactory;


/***/ }),

/***/ "./src/app/admin.component.ngfactory.js":
/*!**********************************************!*\
  !*** ./src/app/admin.component.ngfactory.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
const i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
const i1 = __webpack_require__(/*! ./admin.component */ "./src/app/admin.component.ts");
var styles_AdminComponent = [];
var RenderType_AdminComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_AdminComponent, data: {} });
exports.RenderType_AdminComponent = RenderType_AdminComponent;
function View_AdminComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["Admin"]))], null, null); }
exports.View_AdminComponent_0 = View_AdminComponent_0;
function View_AdminComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-admin", [], null, null, null, View_AdminComponent_0, RenderType_AdminComponent)), i0.ɵdid(1, 49152, null, 0, i1.AdminComponent, [], null, null)], null, null); }
exports.View_AdminComponent_Host_0 = View_AdminComponent_Host_0;
var AdminComponentNgFactory = i0.ɵccf("app-admin", i1.AdminComponent, View_AdminComponent_Host_0, {}, {}, []);
exports.AdminComponentNgFactory = AdminComponentNgFactory;


/***/ }),

/***/ "./src/app/admin.component.ts":
/*!************************************!*\
  !*** ./src/app/admin.component.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AdminComponent {
}
exports.AdminComponent = AdminComponent;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
const i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
const i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
const i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
const i3 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
const i4 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
const i5 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_AppComponent = [];
var RenderType_AppComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 9, "nav", [], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 2, "a", [["routerLink", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(2, 671744, null, 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(-1, null, ["Home"])), (_l()(), i0.ɵeld(4, 0, null, null, 2, "a", [["routerLink", "/admin"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 5).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(5, 671744, null, 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(-1, null, ["Admin"])), (_l()(), i0.ɵeld(7, 0, null, null, 2, "a", [["routerLink", "/lazy"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 8).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(8, 671744, null, 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(-1, null, ["Lazy"])), (_l()(), i0.ɵeld(10, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(11, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null), (_l()(), i0.ɵeld(12, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i0.ɵeld(13, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i0.ɵted(14, null, ["", ""]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 2, 0, currVal_2); var currVal_5 = "/admin"; _ck(_v, 5, 0, currVal_5); var currVal_8 = "/lazy"; _ck(_v, 8, 0, currVal_8); _ck(_v, 11, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵnov(_v, 2).target; var currVal_1 = i0.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = i0.ɵnov(_v, 5).target; var currVal_4 = i0.ɵnov(_v, 5).href; _ck(_v, 4, 0, currVal_3, currVal_4); var currVal_6 = i0.ɵnov(_v, 8).target; var currVal_7 = i0.ɵnov(_v, 8).href; _ck(_v, 7, 0, currVal_6, currVal_7); var currVal_9 = _co.data.total_count; _ck(_v, 14, 0, currVal_9); }); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i0.ɵdid(1, 114688, null, 0, i3.AppComponent, [i0.PLATFORM_ID, i4.HttpClient, i5.TransferState], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i0.ɵccf("app-root", i3.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
const http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
const TOTAL_COUNT = platform_browser_1.makeStateKey("total_count");
class AppComponent {
    constructor(platformId, http, state) {
        this.platformId = platformId;
        this.http = http;
        this.state = state;
        this.data = { total_count: 0 };
        console.log(platformId);
    }
    ngOnInit() {
        //if (isPlatformServer(this.platformId)) {
        this.http
            .get("https://api.github.com/search/users?q=angular")
            .subscribe((data) => {
            this.data = data;
            this.state.set(TOTAL_COUNT, data);
        });
        //}
        this.data = this.state.get(TOTAL_COUNT, { total_count: 0 });
        // if (!this.state.hasKey(TOTAL_COUNT)) {
        //   this.data = this.state.get(TOTAL_COUNT, { total_count: 0 });
        // }
    }
}
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const home_component_1 = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
const admin_component_1 = __webpack_require__(/*! ./admin.component */ "./src/app/admin.component.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
const ɵ0 = () => Promise.resolve().then(() => __webpack_require__(/*! ./lazy.module.ngfactory */ "./src/app/lazy.module.ngfactory.js")).then(m => m.LazyModuleNgFactory);
exports.ɵ0 = ɵ0;
const routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'admin', component: admin_component_1.AdminComponent },
    // { path: 'lazy', loadChildren: './lazy.module#LazyModule' },
    { path: 'lazy', loadChildren: ɵ0 },
];
class AppModule {
}
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
const i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
const i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
const i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
const i3 = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
const i4 = __webpack_require__(/*! ./home.component.ngfactory */ "./src/app/home.component.ngfactory.js");
const i5 = __webpack_require__(/*! ./admin.component.ngfactory */ "./src/app/admin.component.ngfactory.js");
const i6 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
const i7 = __webpack_require__(/*! @angular/common */ "@angular/common");
const i8 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
const i9 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
const i10 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
const i11 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
const i12 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
const i13 = __webpack_require__(/*! @nguniversal/common */ "@nguniversal/common");
const i14 = __webpack_require__(/*! @angular/router */ "@angular/router");
const i15 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
const i16 = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
const i17 = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
const i18 = __webpack_require__(/*! ./admin.component */ "./src/app/admin.component.ts");
const i19 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ɵangular_packages_router_router_lNgFactory, i4.HomeComponentNgFactory, i5.AdminComponentNgFactory, i6.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_q, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i7.NgLocalization, i7.NgLocaleLocalization, [i0.LOCALE_ID, [2, i7.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.ɵangular_packages_core_core_bb, i0.ɵangular_packages_core_core_s, [i0.NgZone]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_o, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_p, []), i0.ɵmpd(4608, i8.DomSanitizer, i8.ɵDomSanitizerImpl, [i7.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i8.DomSanitizer]), i0.ɵmpd(4608, i8.HAMMER_GESTURE_CONFIG, i8.HammerGestureConfig, []), i0.ɵmpd(5120, i8.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new i8.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i8.ɵKeyEventsPlugin(p1_0), new i8.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3), new i9.ɵangular_packages_platform_server_platform_server_d(p3_0)]; }, [i7.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i7.DOCUMENT, i7.DOCUMENT, i8.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i8.HAMMER_LOADER], i7.DOCUMENT]), i0.ɵmpd(4608, i8.EventManager, i8.EventManager, [i8.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i8.ɵDomSharedStylesHost, i8.ɵDomSharedStylesHost, [i7.DOCUMENT]), i0.ɵmpd(4608, i8.ɵDomRendererFactory2, i8.ɵDomRendererFactory2, [i8.EventManager, i8.ɵDomSharedStylesHost, i0.APP_ID]), i0.ɵmpd(4608, i9.ɵangular_packages_platform_server_platform_server_c, i9.ɵangular_packages_platform_server_platform_server_c, [i7.DOCUMENT, [2, i8.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i8.ɵSharedStylesHost, null, [i9.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i9.ɵServerRendererFactory2, i9.ɵServerRendererFactory2, [i8.EventManager, i0.NgZone, i7.DOCUMENT, i8.ɵSharedStylesHost]), i0.ɵmpd(4608, i10.AnimationDriver, i10.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i10.ɵAnimationStyleNormalizer, i11.ɵangular_packages_platform_browser_animations_animations_b, []), i0.ɵmpd(4608, i10.ɵAnimationEngine, i11.ɵInjectableAnimationEngine, [i7.DOCUMENT, i10.AnimationDriver, i10.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i9.ɵangular_packages_platform_server_platform_server_a, [i9.ɵServerRendererFactory2, i10.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i12.HttpXsrfTokenExtractor, i12.ɵangular_packages_common_http_http_g, [i7.DOCUMENT, i0.PLATFORM_ID, i12.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i12.ɵangular_packages_common_http_http_h, i12.ɵangular_packages_common_http_http_h, [i12.HttpXsrfTokenExtractor, i12.ɵangular_packages_common_http_http_f]), i0.ɵmpd(4608, i8.TransferState, i8.TransferState, []), i0.ɵmpd(4608, i13.ɵTransferHttpCacheInterceptor, i13.ɵTransferHttpCacheInterceptor, [i0.ApplicationRef, i8.TransferState]), i0.ɵmpd(5120, i12.HTTP_INTERCEPTORS, function (p0_0, p1_0) { return [p0_0, p1_0]; }, [i12.ɵangular_packages_common_http_http_h, i13.ɵTransferHttpCacheInterceptor]), i0.ɵmpd(4608, i12.XhrFactory, i9.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i12.HttpXhrBackend, i12.HttpXhrBackend, [i12.XhrFactory]), i0.ɵmpd(6144, i12.HttpBackend, null, [i12.HttpXhrBackend]), i0.ɵmpd(5120, i12.HttpHandler, i9.ɵangular_packages_platform_server_platform_server_f, [i12.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i12.HttpClient, i12.HttpClient, [i12.HttpHandler]), i0.ɵmpd(4608, i12.ɵangular_packages_common_http_http_d, i12.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(5120, i14.ActivatedRoute, i14.ɵangular_packages_router_router_g, [i14.Router]), i0.ɵmpd(4608, i14.NoPreloading, i14.NoPreloading, []), i0.ɵmpd(6144, i14.PreloadingStrategy, null, [i14.NoPreloading]), i0.ɵmpd(135680, i14.RouterPreloader, i14.RouterPreloader, [i14.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i14.PreloadingStrategy]), i0.ɵmpd(4608, i14.PreloadAllModules, i14.PreloadAllModules, []), i0.ɵmpd(4608, i7.ViewportScroller, i7.ɵNullViewportScroller, []), i0.ɵmpd(5120, i14.ɵangular_packages_router_router_o, i14.ɵangular_packages_router_router_c, [i14.Router, i7.ViewportScroller, i14.ROUTER_CONFIGURATION]), i0.ɵmpd(5120, i14.ROUTER_INITIALIZER, i14.ɵangular_packages_router_router_j, [i14.ɵangular_packages_router_router_h]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i14.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i15.AnimationBuilder, i11.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i7.DOCUMENT]), i0.ɵmpd(5120, i9.BEFORE_APP_SERIALIZED, function (p0_0, p0_1, p0_2) { return [i9.ɵangular_packages_platform_server_platform_server_b(p0_0, p0_1, p0_2)]; }, [i7.DOCUMENT, i0.APP_ID, i8.TransferState]), i0.ɵmpd(1073742336, i7.CommonModule, i7.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i8.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i14.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(256, i0.APP_ID, "ssr-app", []), i0.ɵmpd(2048, i8.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(512, i14.ɵangular_packages_router_router_h, i14.ɵangular_packages_router_router_h, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p1_1, p1_2, p2_0) { return [i8.ɵangular_packages_platform_browser_platform_browser_j(p0_0), i8.ɵangular_packages_platform_browser_platform_browser_h(p1_0, p1_1, p1_2), i14.ɵangular_packages_router_router_i(p2_0)]; }, [[2, i0.NgProbeToken], i8.ɵTRANSITION_ID, i7.DOCUMENT, i0.Injector, i14.ɵangular_packages_router_router_h]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i8.BrowserModule, i8.BrowserModule, [[3, i8.BrowserModule]]), i0.ɵmpd(1024, i14.ɵangular_packages_router_router_a, i14.ɵangular_packages_router_router_e, [[3, i14.Router]]), i0.ɵmpd(512, i14.UrlSerializer, i14.DefaultUrlSerializer, []), i0.ɵmpd(512, i14.ChildrenOutletContexts, i14.ChildrenOutletContexts, []), i0.ɵmpd(256, i14.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i7.LocationStrategy, i14.ɵangular_packages_router_router_d, [i7.PlatformLocation, [2, i7.APP_BASE_HREF], i14.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i7.Location, i7.Location, [i7.LocationStrategy, i7.PlatformLocation]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i16.ModuleMapNgFactoryLoader, [i0.Compiler, i16.MODULE_MAP]), i0.ɵmpd(1024, i14.ROUTES, function () { return [[{ path: "", component: i17.HomeComponent }, { path: "admin", component: i18.AdminComponent }, { path: "lazy", loadChildren: i19.ɵ0 }]]; }, []), i0.ɵmpd(1024, i14.Router, i14.ɵangular_packages_router_router_f, [i0.ApplicationRef, i14.UrlSerializer, i14.ChildrenOutletContexts, i7.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i14.ROUTES, i14.ROUTER_CONFIGURATION, [2, i14.UrlHandlingStrategy], [2, i14.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i14.RouterModule, i14.RouterModule, [[2, i14.ɵangular_packages_router_router_a], [2, i14.Router]]), i0.ɵmpd(1073742336, i12.HttpClientXsrfModule, i12.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i12.HttpClientModule, i12.HttpClientModule, []), i0.ɵmpd(1073742336, i8.BrowserTransferStateModule, i8.BrowserTransferStateModule, []), i0.ɵmpd(1073742336, i13.TransferHttpCacheModule, i13.TransferHttpCacheModule, []), i0.ɵmpd(1073742336, i19.AppModule, i19.AppModule, []), i0.ɵmpd(1073742336, i11.NoopAnimationsModule, i11.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i9.ServerModule, i9.ServerModule, []), i0.ɵmpd(1073742336, i16.ModuleMapLoaderModule, i16.ModuleMapLoaderModule, []), i0.ɵmpd(1073742336, i9.ServerTransferStateModule, i9.ServerTransferStateModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i12.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i12.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i11.ANIMATION_MODULE_TYPE, "NoopAnimations", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AppServerModule {
}
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/home.component.ngfactory.js":
/*!*********************************************!*\
  !*** ./src/app/home.component.ngfactory.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
const i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
const i1 = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
var styles_HomeComponent = [];
var RenderType_HomeComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_HomeComponent, data: {} });
exports.RenderType_HomeComponent = RenderType_HomeComponent;
function View_HomeComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["Home"]))], null, null); }
exports.View_HomeComponent_0 = View_HomeComponent_0;
function View_HomeComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), i0.ɵdid(1, 49152, null, 0, i1.HomeComponent, [], null, null)], null, null); }
exports.View_HomeComponent_Host_0 = View_HomeComponent_Host_0;
var HomeComponentNgFactory = i0.ɵccf("app-home", i1.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
exports.HomeComponentNgFactory = HomeComponentNgFactory;


/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class HomeComponent {
}
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/lazy.component.ngfactory.js":
/*!*********************************************!*\
  !*** ./src/app/lazy.component.ngfactory.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
const i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
const i1 = __webpack_require__(/*! ./lazy.component */ "./src/app/lazy.component.ts");
var styles_LazyComponent = [];
var RenderType_LazyComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_LazyComponent, data: {} });
exports.RenderType_LazyComponent = RenderType_LazyComponent;
function View_LazyComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["Lazy"]))], null, null); }
exports.View_LazyComponent_0 = View_LazyComponent_0;
function View_LazyComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-lazy", [], null, null, null, View_LazyComponent_0, RenderType_LazyComponent)), i0.ɵdid(1, 49152, null, 0, i1.LazyComponent, [], null, null)], null, null); }
exports.View_LazyComponent_Host_0 = View_LazyComponent_Host_0;
var LazyComponentNgFactory = i0.ɵccf("app-lazy", i1.LazyComponent, View_LazyComponent_Host_0, {}, {}, []);
exports.LazyComponentNgFactory = LazyComponentNgFactory;


/***/ }),

/***/ "./src/app/lazy.component.ts":
/*!***********************************!*\
  !*** ./src/app/lazy.component.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LazyComponent {
}
exports.LazyComponent = LazyComponent;


/***/ }),

/***/ "./src/app/lazy.module.ngfactory.js":
/*!******************************************!*\
  !*** ./src/app/lazy.module.ngfactory.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
const i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
const i1 = __webpack_require__(/*! ./lazy.module */ "./src/app/lazy.module.ts");
const i2 = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
const i3 = __webpack_require__(/*! ./lazy.component.ngfactory */ "./src/app/lazy.component.ngfactory.js");
const i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
const i5 = __webpack_require__(/*! ./lazy.component */ "./src/app/lazy.component.ts");
var LazyModuleNgFactory = i0.ɵcmf(i1.LazyModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵangular_packages_router_router_lNgFactory, i3.LazyComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i4.RouterModule, i4.RouterModule, [[2, i4.ɵangular_packages_router_router_a], [2, i4.Router]]), i0.ɵmpd(1073742336, i1.LazyModule, i1.LazyModule, []), i0.ɵmpd(1024, i4.ROUTES, function () { return [[{ path: "", component: i5.LazyComponent }]]; }, [])]); });
exports.LazyModuleNgFactory = LazyModuleNgFactory;


/***/ }),

/***/ "./src/app/lazy.module.ts":
/*!********************************!*\
  !*** ./src/app/lazy.module.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
const lazy_component_1 = __webpack_require__(/*! ./lazy.component */ "./src/app/lazy.component.ts");
const routes = [
    { path: '', component: lazy_component_1.LazyComponent },
];
class LazyModule {
}
exports.LazyModule = LazyModule;


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stevermeister/workspace/learn/angularpro-20190622/6-ssr/ssr/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nguniversal/common":
/*!**************************************!*\
  !*** external "@nguniversal/common" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/common");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map