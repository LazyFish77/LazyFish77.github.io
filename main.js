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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \r\n.flex {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height: 580px;\r\n    background-color: var(--secondary-color);\r\n    \r\n}\r\n\r\n.filler {\r\n    background-color: var(--primary-component);\r\n    height: 580px;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\nmat-card {\r\n    background-color: var(--component-background);\r\n    width: 20%;\r\n    height: 30%;\r\n}\r\n\r\nmat-card-content {\r\n    height: 60%;\r\n} */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet> "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hack_routing_hack_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hack-routing/hack-routing.module */ "./src/app/hack-routing/hack-routing.module.ts");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/components/test/test.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_take_pic_take_pic_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/take-pic/take-pic.service */ "./src/app/services/take-pic/take-pic.service.ts");
/* harmony import */ var _components_save_image_form_save_image_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/save-image-form/save-image-form.component */ "./src/app/components/save-image-form/save-image-form.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/sandbox/sandbox.component */ "./src/app/components/sandbox/sandbox.component.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/editor/editor.component */ "./src/app/components/editor/editor.component.ts");
/* harmony import */ var _components_view_img_view_img_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/view-img/view-img.component */ "./src/app/components/view-img/view-img.component.ts");
/* harmony import */ var _directives_sticky_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directives/sticky.directive */ "./src/app/directives/sticky.directive.ts");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/confirm/confirm.component */ "./src/app/components/confirm/confirm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























// import { DragAndDropModule } from 'angular-draggable-droppable';
// import { DragulaModule } from 'ng2-dragula';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_test_test_component__WEBPACK_IMPORTED_MODULE_15__["TestComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _components_save_image_form_save_image_form_component__WEBPACK_IMPORTED_MODULE_18__["SaveImageFormComponent"],
                _components_sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_20__["SandboxComponent"],
                _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_22__["EditorComponent"],
                _components_view_img_view_img_component__WEBPACK_IMPORTED_MODULE_23__["ViewImgComponent"],
                _directives_sticky_directive__WEBPACK_IMPORTED_MODULE_24__["StickyDirective"],
                _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
                _hack_routing_hack_routing_module__WEBPACK_IMPORTED_MODULE_14__["HackRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_21__["AngularEditorModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"]
                // DragulaModule
            ],
            entryComponents: [
                _components_save_image_form_save_image_form_component__WEBPACK_IMPORTED_MODULE_18__["SaveImageFormComponent"],
                _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_22__["EditorComponent"],
                _components_view_img_view_img_component__WEBPACK_IMPORTED_MODULE_23__["ViewImgComponent"],
                _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmComponent"]
            ],
            providers: [_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _services_take_pic_take_pic_service__WEBPACK_IMPORTED_MODULE_17__["TakePicService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/confirm/confirm.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/confirm/confirm.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    padding: 0px 0px 15px 0px;\r\n}\r\n\r\nh1 {\r\n    padding: 0px 15px 0px 15px;\r\n}"

/***/ }),

/***/ "./src/app/components/confirm/confirm.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/confirm/confirm.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <h1>are you sure you want to clear the board?</h1>\n  <div class=\"flex\">\n    <button mat-button (click)=\"closeAndClear()\">Yes</button>\n    <button mat-button (click)=\"closeAndCancel()\"> No</button>\n  </div>"

/***/ }),

/***/ "./src/app/components/confirm/confirm.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/confirm/confirm.component.ts ***!
  \*********************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
    };
    ConfirmComponent.prototype.closeAndClear = function () {
        this.dialogRef.close(true);
    };
    ConfirmComponent.prototype.closeAndCancel = function () {
        this.dialogRef.close(false);
    };
    ConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(/*! ./confirm.component.html */ "./src/app/components/confirm/confirm.component.html"),
            styles: [__webpack_require__(/*! ./confirm.component.css */ "./src/app/components/confirm/confirm.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/editor.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/editor/editor.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/editor/editor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/editor/editor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<angular-editor  [config]=\"editorConfig\" [(ngModel)]=\"text\"></angular-editor>\n<button (click)=\"save()\">save</button>"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EditorComponent = /** @class */ (function () {
    function EditorComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '100px',
            minHeight: '50px',
            placeholder: 'Enter text here...',
            translate: 'no',
            uploadUrl: 'v1/images',
            width: '100%' // if needed
        };
        if (data !== null) {
            this.text = data.sticky.message || '';
        }
    }
    EditorComponent.prototype.ngOnInit = function () {
    };
    EditorComponent.prototype.save = function () {
        this.dialogRef.close(this.text);
    };
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/components/editor/editor.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    background-color: var(--primary-color);\r\n    color: rgba(255, 255, 255, .75);\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center; \r\n    max-height: 8vh;\r\n}\r\n\r\nimg {\r\n    /* width: auto; */\r\n    height: 8vh;\r\n    width: auto;\r\n}\r\n\r\np {\r\n    font-size: .55em;\r\n    text-align: center;;\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <!-- <div class='filler'></div> -->\n  <img [src]=\"'assets/Lib.jpg'\" alt=\"image\">\n  <div>\n    <p>\n      Liberty mutual intern hackathon 2018\n    </p>\n    <p>\n      Jacob Elias\n      Tyler Fischer\n      Liam Gensel\n      Benjamin Jennings\n      Dylan Wallach\n    </p>\n  </div>\n        <p>\n          Scrum Daddies inc.\n        </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container  {\r\n    height: 5vh;\r\n    background-color: var(--primary-color);\r\n    display: flex;\r\n    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.7);\r\n    z-index: 5;\r\n    color: black;\r\n    /* position: fixed; */\r\n    margin: auto;\r\n\r\n}\r\ni {\r\n    font-size: 2vh;\r\n}\r\n#lib{\r\n    height: 42;\r\n    width:42;\r\n}\r\n.container > div {\r\n    color: white;\r\n    flex-grow: 1;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.container > .title {\r\n    font-size: 1.25em;\r\n    padding-left: 2%;\r\n    justify-content: flex-start;\r\n\r\n}\r\n.container > *:hover {\r\n    cursor: pointer;\r\n    background-color: var(--secondary-color);\r\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div routerlink>\r\n    <img id=\"lib\" src=\"assets/SmLib.png\" height=\"42\" width=\"42\">\r\n  </div>\r\n  <div (click)=\"newStickyClick()\">\r\n    <i class=\"far fa-sticky-note\" matTooltip=\"make new sticky\"></i>\r\n  </div>\r\n  <div (click)=\"newImageUploadClick()\">\r\n    <i class=\"far fa-file-image\" matTooltip=\"upload image\"></i>\r\n  </div>\r\n  <div (click)=\"newImageClick()\">\r\n    <i class=\"far fa-save\" matTooltip=\"Save workspace\"></i>\r\n  </div>\r\n  <div (click)=\"stylePageClick()\">\r\n    <i matTooltip=\"Apply template\" class=\"fas fa-table\"></i>\r\n  </div>\r\n  <div (click)=\"clearAllClick()\">\r\n    <i class=\"fas fa-eraser\" matTooltip=\"Clear workspace\"></i>\r\n  </div>\r\n  <!-- <div routerLink=\"/test\">WIKI</div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.createNew = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stylePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newImageUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.newStickyClick = function () {
        this.createNew.emit();
    };
    HeaderComponent.prototype.newImageUploadClick = function () {
        this.newImageUpload.emit();
    };
    HeaderComponent.prototype.newImageClick = function () {
        this.newImage.emit();
    };
    HeaderComponent.prototype.stylePageClick = function () {
        this.stylePage.emit();
    };
    HeaderComponent.prototype.clearAllClick = function () {
        this.clearAll.emit();
    };
    HeaderComponent.prototype.saveClick = function () {
        this.save.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "createNew", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "newImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "stylePage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "save", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "clearAll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "newImageUpload", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.flex {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height: 580px;\r\n    background-color: var(--secondary-color);\r\n    \r\n}\r\n\r\n.filler {\r\n    background-color: var(--primary-component);\r\n    height: 580px;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\nmat-card {\r\n    background-color: var(--component-background);\r\n    width: 20%;\r\n    height: 30%;\r\n}\r\n\r\nmat-card-content {\r\n    height: 60%;\r\n}\r\n\r\n/* .sand-box {\r\n    margin-top: 10%;\r\n    height: 600px;\r\n    width: 800px;\r\n    border: 1px solid black;\r\n} */\r\n\r\n/* .sand-box-container {\r\n    width: 100%;\r\n    height: 800px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n} */\r\n\r\n.sand-container {\r\n    width: 100%;\r\n    margin: auto;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sand-container\">\r\n    <app-sandbox></app-sandbox>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_take_pic_take_pic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/take-pic/take-pic.service */ "./src/app/services/take-pic/take-pic.service.ts");
/* harmony import */ var _save_image_form_save_image_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../save-image-form/save-image-form.component */ "./src/app/components/save-image-form/save-image-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, picSrv, dialog) {
        this.http = http;
        this.picSrv = picSrv;
        this.dialog = dialog;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getJoke();
    };
    HomeComponent.prototype.getJoke = function () {
    };
    HomeComponent.prototype.dragEnd = function (event) {
    };
    HomeComponent.prototype.saveAsImage = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_save_image_form_save_image_form_component__WEBPACK_IMPORTED_MODULE_3__["SaveImageFormComponent"], {
            width: '350px',
            height: '200px'
            // data: {name: this.name, animal: this.animal}
        });
        dialogRef.afterClosed().subscribe(function (fileName) {
            console.log(fileName);
            // probably should check for malicious names later
            if (fileName !== '' && fileName !== undefined) {
                _this.picSrv.addFileName(fileName);
                _this.picSrv.addElementName('cheese');
                _this.picSrv.takePic();
            }
            else {
                // maybe something to inform them they did not have a valid entry?
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _services_take_pic_take_pic_service__WEBPACK_IMPORTED_MODULE_2__["TakePicService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/sandbox/sandbox-service.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/sandbox/sandbox-service.ts ***!
  \*******************************************************/
/*! exports provided: SandboxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandboxService", function() { return SandboxService; });
var SandboxService = /** @class */ (function () {
    function SandboxService(sandbox) {
        this.mouseDown = 0;
        this.sandboxComponent = sandbox;
    }
    SandboxService.prototype.setComponent = function (component) {
        this.sandboxComponent = component;
        console.log(this);
    };
    /**
     * changes the background color of the selected sticky
     * @param sticky selected sticky
     */
    SandboxService.prototype.changeStickyColor = function (sticky) {
        sticky.backgroundColorEnum = sticky.backgroundColorEnum + 1;
        if (sticky.backgroundColorEnum >= this.sandboxComponent.stickyColors.length) {
            sticky.backgroundColorEnum = 0;
        }
        this.sandboxComponent.sendPayload();
        this.sandboxComponent.sendPayload();
    };
    /**
     * After a user selects a image it will read it as a string and then set it to a
     * sticky image
     * @param event event that contains the file the user selected
     */
    SandboxService.prototype.onFileChanged = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (ev) {
                var sticky = {
                    id: _this.guid(),
                    zIndex: 0,
                    message: ev.target.result,
                    backgroundColorEnum: 0,
                    xIndex: 0,
                    yIndex: 0
                };
                _this.sandboxComponent.whiteboard.uploadedImages.push(sticky);
                _this.sandboxComponent.sendPayload();
                _this.sandboxComponent.sendPayload();
            };
        }
    };
    /**
     * creates a random 16 character string
     */
    SandboxService.prototype.guid = function () {
        var guidMaker = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return guidMaker() + "-" + guidMaker() + "-" + guidMaker() + "-" + guidMaker() + "-" + guidMaker() + "-" + guidMaker();
    };
    /**
     * Uses a hidden html input file to open file explorer in browser
     * @param file hidden html input file
     */
    SandboxService.prototype.imageUpload = function (file) {
        file.click();
    };
    /**
     * removes all stickies from the view
     */
    SandboxService.prototype.clearPage = function () {
        this.sandboxComponent.whiteboard.stickies = [];
        this.sandboxComponent.whiteboard.uploadedImages = [];
        this.sandboxComponent.backgroundTemplateENUM = 0;
        this.sandboxComponent.sendPayload();
        this.sandboxComponent.sendPayload();
    };
    SandboxService.prototype.findZIndex = function (sticky) {
        var zIndexFromStickies = Math.max.apply(null, this.sandboxComponent.whiteboard.stickies.map(function (z) { return z.zIndex; }));
        var zIndexFromImages = Math.max.apply(null, this.sandboxComponent.whiteboard.uploadedImages.map(function (z) { return z.zIndex; }));
        var maxZIndex = Math.max(zIndexFromStickies, zIndexFromImages);
        sticky.zIndex = maxZIndex + 1;
    };
    SandboxService.prototype.trackMouseHold = function () {
        // Interact JS would error out if it recieved socket info while someone was dragging it
        // This was causing a nasty bug where the cursor would get stuck stickying to the sticky
        var mouseDown = this.mouseDown;
        document.body.onmousedown = function () {
            mouseDown = 1;
        };
        document.body.onmouseup = function () {
            mouseDown = 0;
        };
    };
    SandboxService.prototype.deleteSticky = function (sticky) {
        var _this = this;
        var deleted = false;
        this.sandboxComponent.whiteboard.stickies.forEach(function (x, index) {
            if (x === sticky && deleted === false) {
                _this.sandboxComponent.whiteboard.stickies.splice(index, 1);
                deleted = true;
                _this.sandboxComponent.sendPayload();
                _this.sandboxComponent.sendPayload();
            }
        });
    };
    SandboxService.prototype.addNewSticky = function (info) {
        if (info !== undefined) {
            var sticky = {
                id: this.guid(),
                backgroundColorEnum: 0,
                message: info,
                zIndex: 0,
                xIndex: 0,
                yIndex: 0
            };
            this.sandboxComponent.whiteboard.stickies.push(sticky);
            this.sandboxComponent.sendPayload();
            this.sandboxComponent.sendPayload();
        }
    };
    SandboxService.prototype.changeTemplate = function () {
        this.sandboxComponent.backgroundTemplateENUM = this.sandboxComponent.backgroundTemplateENUM + 1;
        if (this.sandboxComponent.backgroundTemplateENUM > 4) {
            this.sandboxComponent.backgroundTemplateENUM = 0;
        }
    };
    return SandboxService;
}());



/***/ }),

/***/ "./src/app/components/sandbox/sandbox.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sandbox/sandbox.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sticky {\r\n    word-wrap: break-word;\r\n    overflow: auto;\r\n    min-width: 11vh;\r\n    min-height: 15vh;\r\n    max-height: 50vh;\r\n    max-width: 50vh;\r\n    opacity: 1 !important;\r\n    /* background-color: #ffc629 ; */\r\n    color: white;\r\n    /* border-radius: 0.75em; */\r\n    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.494);\r\n    -webkit-transform: translate(0px, 0px);\r\n            transform: translate(0px, 0px);\r\n  }\r\n\r\n .absolute {\r\n    position: absolute; \r\n    left: 0;\r\n    top: 0;\r\n\r\n }\r\n\r\n #drag-me::before {\r\n    content: \"#\" attr(id);\r\n    font-weight: bold;\r\n  }\r\n\r\n .thick {\r\n      width:100%;\r\n      height: calc(100vh - 13vh);\r\n      background-color: #f5f5f5;\r\n      background-size: 100% 100%;\r\n      position: relative;\r\n  }\r\n\r\n img {\r\n    max-width: 100%;\r\n  }\r\n\r\n .sticky-nav {\r\n    display: flex;\r\n    padding: 5px 5px 5px 5px;\r\n    justify-content: space-around;\r\n    flex-direction: row-reverse;\r\n  }\r\n\r\n i:hover {\r\n      cursor: pointer;\r\n  }\r\n\r\n .angular-editor {\r\n    background-color: #fffd93;\r\n  }\r\n\r\n .edit-container {\r\n    display: flex;\r\n    justify-content: space;\r\n\r\n  }\r\n\r\n .white {\r\n    background-color: lightgray;\r\n  }\r\n\r\n .image-sticky{\r\n    overflow: hidden;\r\n    background-color: #f5f5f5;\r\n    border-radius: 0.75em;\r\n    /* min-height: 15vh;\r\n    min-width: 15vh; */\r\n    \r\n  }\r\n\r\n .sticky i {\r\n    font-weight: bold;\r\n  }\r\n\r\n .sticky > p {\r\n    padding: 0vh 3vh 0vh 3vh;\r\n  }"

/***/ }),

/***/ "./src/app/components/sandbox/sandbox.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sandbox/sandbox.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header (createNew)=\"newSticky()\" (newImage)=\"newImage()\" (stylePage)=\"changeTemplate()\" (clearAll)=\"clearPage()\" (newImageUpload)=\"imageUpload(fileInput)\"\r\n  (save)=\"save()\">\r\n</app-header>\r\n<input style=\"display: none\" type=\"file\" (change)=\"onFileChanged($event)\" #fileInput>\r\n<div class=\"thick\" id=\"sandbox\" #boxy [ngStyle]=\"{'background-image': 'url('+templates[backgroundTemplateENUM]+')'}\">\r\n  <div \r\n    class=\"draggable sticky absolute\" \r\n    *ngFor=\"let sticky of whiteboard.stickies\"\r\n    [id]=\"sticky.id\"\r\n    (mousedown)=\"findZIndex(sticky)\"\r\n    [ngStyle]=\"{\r\n      'background-color': stickyColors[sticky.backgroundColorEnum],\r\n      'z-index': sticky.zIndex,\r\n      '-webkit-transform': 'translate('+sticky.xIndex+'px, '+sticky.yIndex+'px)',\r\n      'width': sticky.width+'px',\r\n      'height': sticky.height+'px'\r\n    }\">\r\n    <div class=\"sticky-nav\">\r\n      <i class=\"fas fa-times\" (click)=\"deleteSticky(sticky)\"></i>\r\n      <i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\" (click)=\"editSticky(sticky)\"></i>\r\n      <i (click)=\"changeStickyColor(sticky)\">C</i>\r\n    </div>\r\n    <p innerHtml=\"{{sticky.message}}\"> </p>\r\n  </div>\r\n  <div \r\n    *ngFor=\"let image of whiteboard.uploadedImages\"\r\n    class=\"sticky draggable image-sticky absolute\"\r\n    (mousedown)=\"findZIndex(image)\"\r\n    [id]=\"image.id\"\r\n    [ngStyle]=\"{\r\n      'z-index': image.zIndex,\r\n      '-webkit-transform': 'translate('+image.xIndex+'px, '+image.yIndex+'px)',\r\n      'width': image.width+'px',\r\n      'height': image.height+'px'\r\n    }\"\r\n   >\r\n    <div class=\"sticky-nav white\">\r\n      <i class=\"fas fa-times\" (click)=\"deleteImage(image)\"></i>\r\n      <i class=\"fas fa-search-plus\" (click)=\"viewImage(image)\"></i>\r\n    </div>\r\n    <img [src]=\"image.message\" />\r\n  </div>\r\n</div>\r\n<pre>\r\n  {{whiteboard.stickies | json}}\r\n  {{whiteboard.uploadedImages | json}}\r\n</pre>\r\n<!-- [ngStyle]=\"{\r\n  'background-color': stickyColors[sticky.backgroundColorEnum],\r\n  'z-index': sticky.zIndex,\r\n  '-webkit-transform': 'translate('+sticky.xIndex+'px, '+sticky.yIndex+'px)',\r\n  'width': sticky.width+'px',\r\n  'height': sticky.height+'px'\r\n}\" -->"

/***/ }),

/***/ "./src/app/components/sandbox/sandbox.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sandbox/sandbox.component.ts ***!
  \*********************************************************/
/*! exports provided: SandboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandboxComponent", function() { return SandboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _white_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./white-board */ "./src/app/components/sandbox/white-board.ts");
/* harmony import */ var _services_take_pic_take_pic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/take-pic/take-pic.service */ "./src/app/services/take-pic/take-pic.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _save_image_form_save_image_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../save-image-form/save-image-form.component */ "./src/app/components/save-image-form/save-image-form.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editor/editor.component */ "./src/app/components/editor/editor.component.ts");
/* harmony import */ var _view_img_view_img_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view-img/view-img.component */ "./src/app/components/view-img/view-img.component.ts");
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/web-socket.service */ "./src/app/services/web-socket.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_interact_interact_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/interact/interact.service */ "./src/app/services/interact/interact.service.ts");
/* harmony import */ var _sandbox_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sandbox-service */ "./src/app/components/sandbox/sandbox-service.ts");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../confirm/confirm.component */ "./src/app/components/confirm/confirm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var sandbox;
var SandboxComponent = /** @class */ (function () {
    function SandboxComponent(picSrv, dialog, socketService, http, changeRef, interactSrv) {
        this.picSrv = picSrv;
        this.dialog = dialog;
        this.socketService = socketService;
        this.http = http;
        this.changeRef = changeRef;
        this.interactSrv = interactSrv;
        this.whiteboard = new _white_board__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardModel"]();
        this.sandboxService = new _sandbox_service__WEBPACK_IMPORTED_MODULE_10__["SandboxService"](this);
        this.backgroundTemplateENUM = _white_board__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardModel"].TemplateStartingENUM;
        this.templates = _white_board__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardModel"].templates;
        this.stickyColors = _white_board__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardModel"].stickyColors;
        this.editorConfig = _white_board__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardModel"].editorConfig;
        this.clientId = this.sandboxService.guid();
        this.mouseDown = 0;
        sandbox = this;
        // this.
        // sandboxService.setComponent(this);
    }
    SandboxComponent.prototype.ngOnInit = function () {
        this.interactSrv.interactInIt(sandbox);
        // this.getBoard();
        this.initIoConnection();
        this.trackMouseHold();
    };
    SandboxComponent.prototype.trackMouseHold = function () {
        this.sandboxService.trackMouseHold();
    };
    SandboxComponent.prototype.initIoConnection = function () {
        var _this = this;
        this.socketService.initSocket();
        this.ioConnection = this.socketService.onMessage()
            .subscribe(function (payload) {
            if (payload && payload.message.clientId !== _this.clientId && _this.mouseDown === 0) {
                _this.whiteboard.stickies = payload.message.stickies;
                _this.whiteboard.uploadedImages = payload.message.stickyPics;
                _this.changeRef.detectChanges();
            }
        });
        this.socketService.join(this.clientId);
        this.socketService.onJoin().subscribe(function (payload) {
            if (payload.clientId === _this.clientId) {
                _this.whiteboard.stickies = payload.stickies;
                _this.whiteboard.uploadedImages = payload.stickyPics;
            }
            console.log('connection made');
        });
        this.socketService.onEvent('connected').subscribe(function () { return console.log('connected'); });
        this.socketService.onEvent('disconnected').subscribe(function () { return console.log('disconnected'); });
    };
    SandboxComponent.prototype.sendMessage = function (message) {
        this.socketService.send({ message: message });
    };
    SandboxComponent.prototype.viewImage = function (img) {
        this.dialog.open(_view_img_view_img_component__WEBPACK_IMPORTED_MODULE_6__["ViewImgComponent"], {
            data: img.message
        });
    };
    SandboxComponent.prototype.deleteImage = function (img) {
        var _this = this;
        this.whiteboard.uploadedImages.forEach(function (x, index) {
            if (x === img) {
                _this.whiteboard.uploadedImages.splice(index, 1);
                _this.sendPayload();
                _this.sendPayload();
            }
        });
    };
    SandboxComponent.prototype.sendPayload = function () {
        var payload = {
            clientId: this.clientId,
            stickies: this.whiteboard.stickies,
            stickyPics: this.whiteboard.uploadedImages
        };
        this.sendMessage(payload);
    };
    SandboxComponent.prototype.deleteSticky = function (sticky) {
        this.sandboxService.deleteSticky(sticky);
    };
    SandboxComponent.prototype.newSticky = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_editor_editor_component__WEBPACK_IMPORTED_MODULE_5__["EditorComponent"], {});
        dialogRef.afterClosed().subscribe(function (info) {
            _this.sandboxService.addNewSticky(info);
        });
    };
    SandboxComponent.prototype.findZIndex = function (sticky) {
        this.sandboxService.findZIndex(sticky);
    };
    SandboxComponent.prototype.newImage = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_save_image_form_save_image_form_component__WEBPACK_IMPORTED_MODULE_4__["SaveImageFormComponent"], {
            width: '350px',
            height: '200px'
        });
        dialogRef.afterClosed().subscribe(function (fileName) {
            // probably should check for malicious names later
            if (fileName !== '' && fileName !== undefined) {
                _this.picSrv.addFileName(fileName);
                _this.picSrv.addElementName('sandbox');
                _this.picSrv.takePic();
            }
            else {
                // maybe something to inform them they did not have a valid entry?
            }
        });
    };
    SandboxComponent.prototype.editSticky = function (sticky) {
        var _this = this;
        var dialogRef = this.dialog.open(_editor_editor_component__WEBPACK_IMPORTED_MODULE_5__["EditorComponent"], { data: { sticky: sticky } });
        dialogRef.afterClosed().subscribe(function (info) {
            if (info) {
                _this.whiteboard.stickies.forEach(function (x, index) {
                    if (x === sticky) {
                        _this.whiteboard.stickies[index].message = info;
                    }
                });
            }
            _this.sendPayload();
            _this.sendPayload();
        });
    };
    SandboxComponent.prototype.changeTemplate = function () {
        this.sandboxService.changeTemplate();
    };
    SandboxComponent.prototype.clearPage = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], {});
        dialogRef.afterClosed().subscribe(function (closeIt) {
            if (closeIt) {
                _this.sandboxService.clearPage();
            }
        });
    };
    SandboxComponent.prototype.imageUpload = function (file) {
        this.sandboxService.imageUpload(file);
    };
    SandboxComponent.prototype.onFileChanged = function (event) {
        this.sandboxService.onFileChanged(event);
    };
    SandboxComponent.prototype.changeStickyColor = function (sticky) {
        this.sandboxService.changeStickyColor(sticky);
    };
    SandboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sandbox',
            template: __webpack_require__(/*! ./sandbox.component.html */ "./src/app/components/sandbox/sandbox.component.html"),
            styles: [__webpack_require__(/*! ./sandbox.component.css */ "./src/app/components/sandbox/sandbox.component.css")]
        }),
        __metadata("design:paramtypes", [_services_take_pic_take_pic_service__WEBPACK_IMPORTED_MODULE_2__["TakePicService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services_web_socket_service__WEBPACK_IMPORTED_MODULE_7__["WebSocketService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_interact_interact_service__WEBPACK_IMPORTED_MODULE_9__["InteractService"]])
    ], SandboxComponent);
    return SandboxComponent;
}());



/***/ }),

/***/ "./src/app/components/sandbox/white-board.ts":
/*!***************************************************!*\
  !*** ./src/app/components/sandbox/white-board.ts ***!
  \***************************************************/
/*! exports provided: WhiteBoardModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardModel", function() { return WhiteBoardModel; });
var WhiteBoardModel = /** @class */ (function () {
    function WhiteBoardModel() {
        this.uploadedImages = [];
        this.stickies = [];
    }
    WhiteBoardModel.stickyColors = [
        '#ffc629',
        'red',
        'orange',
        'green',
        'blue'
    ];
    WhiteBoardModel.editorConfig = {
        editable: true,
        spellcheck: true,
        height: '100px',
        minHeight: '50px',
        placeholder: 'Enter text here...',
        translate: 'no',
        uploadUrl: 'v1/images',
        width: '100%' // if needed
    };
    WhiteBoardModel.templates = [
        '',
        '/assets/VennDiagram.png',
        '/assets/FourSquare.jpg',
        '/assets/TChart.jpg',
        '/assets/KanBanBoard.jpg'
    ];
    WhiteBoardModel.TemplateStartingENUM = 0;
    return WhiteBoardModel;
}());



/***/ }),

/***/ "./src/app/components/save-image-form/save-image-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/save-image-form/save-image-form.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/save-image-form/save-image-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/save-image-form/save-image-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <label>What would you like to name your file?</label>\n <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"File Name\" [(ngModel)]=\"fileName\" />\n </mat-form-field>\n <button mat-button (click)=\"save()\">save file</button>"

/***/ }),

/***/ "./src/app/components/save-image-form/save-image-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/save-image-form/save-image-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: SaveImageFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveImageFormComponent", function() { return SaveImageFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaveImageFormComponent = /** @class */ (function () {
    function SaveImageFormComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.fileName = '';
    }
    SaveImageFormComponent.prototype.ngOnInit = function () {
    };
    SaveImageFormComponent.prototype.save = function () {
        this.dialogRef.close(this.fileName);
    };
    SaveImageFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-save-image-form',
            template: __webpack_require__(/*! ./save-image-form.component.html */ "./src/app/components/save-image-form/save-image-form.component.html"),
            styles: [__webpack_require__(/*! ./save-image-form.component.css */ "./src/app/components/save-image-form/save-image-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], SaveImageFormComponent);
    return SaveImageFormComponent;
}());



/***/ }),

/***/ "./src/app/components/test/test.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/test/test.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".some-div {\r\n    min-height: 580px;\r\n    background-color: darkcyan;\r\n}\r\n\r\n.some-other-div {\r\n    min-height: 580px;\r\n}\r\n\r\n#frame {\r\n    background-color: orange;\r\n}"

/***/ }),

/***/ "./src/app/components/test/test.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/test/test.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <body style=\"font-family: Arial\">\r\n    <pre>\r\n   ____                     ___          __   ___\r\n  / __/_________ ____ _    / _ \\___ ____/ /__/ (_)__ ___\r\n _\\ \\/ __/ __/ // /  ' \\  / // / _ `/ _  / _  / / -_|_-<\r\n/___/\\__/_/  \\_,_/_/_/_/ /____/\\_,_/\\_,_/\\_,_/_/\\__/___/\r\n    </pre>\r\n    <h3 style=\"font-family: Georgia\">\r\n      Project Statement\r\n    </h3>\r\n    <p style=\"white-space:pre-line; display: inline; padding: 0;\">\r\n      We have created a web-hosted collaborative tool that encourages you, as members of\r\nco-located and virtual teams, to work together in a shared workspace, helping maintain steady\r\nworkflow and productivity. This tool will prove most useful for Scrum Masters, but should\r\nbe utilized by all members of your team.\r\n    </p>\r\n    <p>\r\n      <h3 style=\"font-family: Georgia\">\r\n        Tool Functionality\r\n      </h3>\r\n      <p>Our tool provides you with the ability to share, edit, and organize pieces\r\nof information in sticky note form. Stickies can be created, edited, and\r\ncategorized by:\r\n    </p>\r\n      <ul>\r\n        <li>Abstract boundaries that you set yourself (put x in y corner if you agree, put p in q corner if you don't)</li>\r\n        <li>Logical boundaries uing the Style Page button, which provides multiple layouts from which to choose.</li>\r\n      </ul>\r\n      <p>You can also add images into the workspace from your desktop, or the Camera button allows\r\n        you to insert a picture into the workspace using your device's camera.\r\n      </p>\r\n      <p>\r\nList of current functionality:\r\n      </p>\r\n      <ol>\r\n        <li>\r\nsticky note creation, deletion, and movement\r\n        </li>\r\n        <li>\r\nimage element creation, deletion, and movement\r\n        </li>\r\n        <li>\r\npage styles\r\n        </li>\r\n        <li>\r\nsession save\r\n        </li>\r\n        <li>\r\nclear page elements\r\n        </li>\r\n        <li>\r\nrealtime collaboration\r\n        </li>\r\n        <li>\r\npersistent workspace\r\n        </li>\r\n      </ol>\r\n"

/***/ }),

/***/ "./src/app/components/test/test.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_take_pic_take_pic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/take-pic/take-pic.service */ "./src/app/services/take-pic/take-pic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = /** @class */ (function () {
    function TestComponent(picSrv) {
        this.picSrv = picSrv;
    }
    TestComponent.prototype.ngOnInit = function () {
        //   navigator.mediaDevices.getUserMedia({audio: true, video: true})
        // .then(stream => console.log('working'))
        // .catch(e => console.log(e));
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/components/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/components/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [_services_take_pic_take_pic_service__WEBPACK_IMPORTED_MODULE_1__["TakePicService"]])
    ], TestComponent);
    return TestComponent;
}());

function stuff() {
}


/***/ }),

/***/ "./src/app/components/view-img/view-img.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/view-img/view-img.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-container {\r\n    max-width: 500px;\r\n    max-height: 500px;\r\n    overflow: hidden;\r\n}\r\nimg {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/view-img/view-img.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/view-img/view-img.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-container\">\r\n    <img [src]=\"data\"/>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/view-img/view-img.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/view-img/view-img.component.ts ***!
  \***********************************************************/
/*! exports provided: ViewImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewImgComponent", function() { return ViewImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ViewImgComponent = /** @class */ (function () {
    function ViewImgComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ViewImgComponent.prototype.ngOnInit = function () {
    };
    ViewImgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-img',
            template: __webpack_require__(/*! ./view-img.component.html */ "./src/app/components/view-img/view-img.component.html"),
            styles: [__webpack_require__(/*! ./view-img.component.css */ "./src/app/components/view-img/view-img.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ViewImgComponent);
    return ViewImgComponent;
}());



/***/ }),

/***/ "./src/app/directives/sticky.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directives/sticky.directive.ts ***!
  \************************************************/
/*! exports provided: StickyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyDirective", function() { return StickyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StickyDirective = /** @class */ (function () {
    function StickyDirective(element) {
        // console.log(element);
    }
    StickyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSticky]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], StickyDirective);
    return StickyDirective;
}());



/***/ }),

/***/ "./src/app/hack-routing/hack-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/hack-routing/hack-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackRoutingModule", function() { return HackRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/test/test.component */ "./src/app/components/test/test.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'test', component: _components_test_test_component__WEBPACK_IMPORTED_MODULE_2__["TestComponent"] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var HackRoutingModule = /** @class */ (function () {
    function HackRoutingModule() {
    }
    HackRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], HackRoutingModule);
    return HackRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HttpService = /** @class */ (function (_super) {
    __extends(HttpService, _super);
    function HttpService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor() { }
    HttpService.prototype.getWhiteBoard = function () {
        // return this.get('http://localhost:8080/whiteboard');
        return this.get('https://scrum-daddies-backend-development.us-east-1.np.paas.lmig.com/whiteboard');
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HttpService);
    return HttpService;
}(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));



/***/ }),

/***/ "./src/app/services/interact/interact.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/interact/interact.service.ts ***!
  \*******************************************************/
/*! exports provided: InteractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractService", function() { return InteractService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! interactjs */ "./node_modules/interactjs/dist/interact.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InteractService = /** @class */ (function () {
    function InteractService() {
    }
    /**
     * injects the drag and drop abilities into the given component
     * @param sandbox The component that interactjs will attach to
     */
    InteractService.prototype.interactInIt = function (sandbox) {
        interactjs__WEBPACK_IMPORTED_MODULE_1__('.draggable')
            .draggable({
            inertia: false,
            restrict: {
                restriction: 'parent',
                endOnly: true,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            autoScroll: true,
            onmove: function (event) {
                // sandbox.sendPayload();
                var target = event.target;
                sandbox.whiteboard.stickies
                    .filter(function (sticky) { return sticky.id === target.id; })
                    .map(function (sticky) {
                    var x = (parseFloat(sticky.xIndex.toString()) || 0) + event.dx;
                    var y = (parseFloat(sticky.yIndex.toString()) || 0) + event.dy;
                    sticky.xIndex = x;
                    sticky.yIndex = y;
                    return sticky;
                });
                sandbox.whiteboard.uploadedImages
                    .filter(function (sticky) { return sticky.id === target.id; })
                    .map(function (sticky) {
                    var x = (parseFloat(sticky.xIndex.toString()) || 0) + event.dx;
                    var y = (parseFloat(sticky.yIndex.toString()) || 0) + event.dy;
                    sticky.xIndex = x;
                    sticky.yIndex = y;
                    return sticky;
                });
                sandbox.sendPayload();
            },
            onend: function (event) {
            }
        }).resizable({
            edges: { left: false, right: true, bottom: true, top: false },
            onend: function (event) {
            }
        }).on('resizemove', function (event) {
            var target = event.target;
            sandbox.whiteboard.stickies
                .filter(function (sticky) { return sticky.id === target.id; })
                .map(function (sticky) {
                sticky.width = event.rect.width;
                sticky.height = event.rect.height;
                sandbox.changeRef.detectChanges();
            });
            sandbox.whiteboard.uploadedImages
                .filter(function (sticky) { return sticky.id === target.id; })
                .map(function (sticky) {
                sticky.width = event.rect.width;
                sticky.height = event.rect.height;
                sandbox.changeRef.detectChanges();
            });
            sandbox.sendPayload();
        });
    };
    InteractService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], InteractService);
    return InteractService;
}());



/***/ }),

/***/ "./src/app/services/take-pic/take-pic.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/take-pic/take-pic.service.ts ***!
  \*******************************************************/
/*! exports provided: TakePicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakePicService", function() { return TakePicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TakePicService = /** @class */ (function () {
    function TakePicService() {
        this.idOfElement = '';
        this.nameOfFile = '';
    }
    /**
     *
     * @param elementIdName the ID of the html element you want screenshotted
     */
    TakePicService.prototype.addElementName = function (elementIdName) {
        this.idOfElement = elementIdName;
    };
    /**
     *
     * @param fileName is what the user will be asked to enter when naming their download file
     */
    TakePicService.prototype.addFileName = function (fileName) {
        this.nameOfFile = fileName;
    };
    /**
     * Will make sure that a ID has been selected and a file name has been provided.
     * After that it turn our html element into a canvas, where it is then converted and saved as a jpeg.
     */
    TakePicService.prototype.takePic = function () {
        var _this = this;
        if (this.idOfElement !== '' && this.nameOfFile !== '') {
            html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(document.getElementById(this.idOfElement)).then(function (canvas) {
                var link = document.createElement('a');
                link.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
                link.download = _this.nameOfFile + ".jpg";
                link.click();
            });
        }
        else {
            alert('you did not enter valid info');
        }
    };
    TakePicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TakePicService);
    return TakePicService;
}());



/***/ }),

/***/ "./src/app/services/web-socket.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/web-socket.service.ts ***!
  \************************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// const SERVER_URL = 'http://localhost:8080';
var SERVER_URL = 'https://scrum-daddies-backend-development.us-east-1.np.paas.lmig.com';
var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.initSocket = function () {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(SERVER_URL);
    };
    WebSocketService.prototype.send = function (message) {
        this.socket.emit('message', message);
    };
    WebSocketService.prototype.onMessage = function () {
        var _this = this;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('message', function (data) { return observer.next(data); });
        });
    };
    WebSocketService.prototype.join = function (clientId) {
        this.socket.emit('join', clientId);
    };
    WebSocketService.prototype.onJoin = function () {
        var _this = this;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('join', function (data) { return observer.next(data); });
        });
    };
    WebSocketService.prototype.onEvent = function (event) {
        var _this = this;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on(event, function () { return observer.next(); });
        });
    };
    WebSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], WebSocketService);
    return WebSocketService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tyler.fischer\Desktop\scrum\scrum-daddies-frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map