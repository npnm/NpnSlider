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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>What is Multi Range slider?</h4>\n<p>It is a range slider with two handler. You can select a range of values at a time.\n</p>\n<h4 style=\"margin-top:15px;\">Example1</h4>\n<div class=\"well\">\n  <div class=\"demo\">\n    <form class=\"form-horizontal\">\n      <div class=\"form-group\">\n        <label class=\"col-sm-4 control-label\">Release Year:</label>\n        <div class=\"col-sm-8\">\n          <npn-slider [minMaxValues]=\"[2006,2020]\" [selectedRangeValues]=\"currentValues\" (onSliderValueChange)=\"onSliderChange1($event)\">\n          </npn-slider>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-12\">\n           <p>SelectedRange: [{{currentValues[0]}} - {{currentValues[1]}}]</p>\n           <p>Step: 1</p>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<h4 style=\"margin-top:15px;\">Example2</h4>\n<div class=\"well\">\n  <div class=\"demo\">\n    <form class=\"form-horizontal\">\n      <div class=\"form-group\">\n        <label class=\"col-sm-4 control-label\">Price Range(Rs.):</label>\n        <div class=\"col-sm-8\">\n          <npn-slider [minMaxValues]=\"[1000,5000]\" [selectedRangeValues]=\"currentValues2\" step=\"500\" (onSliderValueChange)=\"onSliderChange2($event)\">\n          </npn-slider>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-12\">\n           <p>SelectedRange: [{{currentValues2[0]}} - {{currentValues2[1]}}]</p>\n           <p>Step: 500</p>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.currentValues = [0, 0];
        this.currentValues2 = [2000, 3500];
    }
    AppComponent.prototype.onSliderChange1 = function (selectedValues) {
        this.currentValues = selectedValues;
    };
    AppComponent.prototype.onSliderChange2 = function (selectedValues) {
        this.currentValues2 = selectedValues;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _npn_slider_npn_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./npn-slider/npn-slider.component */ "./src/app/npn-slider/npn-slider.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _npn_slider_npn_slider_component__WEBPACK_IMPORTED_MODULE_3__["NpnSliderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/npn-slider/npn-slider.component.css":
/*!*****************************************************!*\
  !*** ./src/app/npn-slider/npn-slider.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Colors*/\r\n\r\n.slider {\r\n  display: block;\r\n  width: 100%;\r\n  height: 30px;\r\n  padding: 4px 10px;\r\n  font-size: 12px;\r\n  cursor: default;\r\n}\r\n\r\n.slider .bar {\r\n  width: 100%;\r\n  background: #e8e8e8;\r\n  height: 10px;\r\n  position: relative;\r\n  border-radius: 5px;\r\n  box-shadow: inset 1px 1px 5px #bbb;\r\n}\r\n\r\n.slider .bar>span.left-handle,\r\n.slider .bar>span.right-handle {\r\n  display: inline-block;\r\n  width: 18px;\r\n  height: 18px;\r\n  border: 5px solid #5ea542;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: -4px;\r\n  cursor: pointer;\r\n  z-index: 1;\r\n  margin-left: -8px;\r\n  transition: left 0.2s ease;\r\n}\r\n\r\n.slider .bar>span.left-handle.last-active,\r\n.slider .bar>span.right-handle.last-active {\r\n  z-index: 2;\r\n}\r\n\r\n.slider .bar>span.filler {\r\n  display: inline-block;\r\n  position: absolute;\r\n  background: #c3e0b8;\r\n  height: 100%;\r\n  margin-left: -4px;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.slider .bar>span>.handle-tooltip {\r\n  display: block;\r\n  position: absolute;\r\n  top: -32px;\r\n  left: -15px;\r\n  border: 1px solid #8cca74;\r\n  border-radius: 4px;\r\n  padding: 1px 4px;\r\n  min-width: 20px;\r\n  text-align: center;\r\n  background: #dbe8d6;\r\n  color: #5ea542;\r\n  font-weight: bold;\r\n  transition: opacity 0.2s ease;\r\n  opacity: 0;\r\n}\r\n\r\n.slider .bar>span>.handle-tooltip:before {\r\n  content: \"\";\r\n  border: 5px solid transparent;\r\n  border-top-color: #8cca74;\r\n  position: absolute;\r\n  top: 104%;\r\n  left: 33%;\r\n}\r\n\r\n.slider .bar>span>.handle-tooltip:after {\r\n  content: \"\";\r\n  border: 5px solid transparent;\r\n  border-top-color: #dbe8d6;\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 33%;\r\n}\r\n\r\n.slider .bar>span:hover>.handle-tooltip,\r\n.slider .bar>span.active>.handle-tooltip {\r\n  opacity: 1;\r\n}\r\n\r\n.slider .values {\r\n  display: block;\r\n  font-weight: bold;\r\n  margin-top: 4px;\r\n  width: 104%;\r\n  margin-left: -2%;\r\n  color: #908f90;\r\n}\r\n\r\n.slider .values span:first-child {\r\n  float: left;\r\n}\r\n\r\n.slider .values span:last-child {\r\n  float: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/npn-slider/npn-slider.component.html":
/*!******************************************************!*\
  !*** ./src/app/npn-slider/npn-slider.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider\" (mousemove)=\"mouseSliding($event)\">\n  <div class=\"bar\">\n    <span class=\"left-handle\"\n          [ngClass]=\"{'active':isMouseDown&&currentHandlerIndex==0,'last-active':currentHandlerIndex==0}\"\n          [style.left]=\"handlerX[0]+'%'\"\n          (mousedown)=\"mouseDownSlider($event,0)\">\n      <span class=\"handle-tooltip\">{{currentValues[0]}}</span>\n    </span>\n    <span class=\"filler\" [style.left]=\"handlerX[0] + '%'\" [style.width]=\"getFillerWidth()\"></span>\n    <span class=\"right-handle\"\n          [ngClass]=\"{'active':isMouseDown&&currentHandlerIndex==1, 'last-active':currentHandlerIndex==1}\"\n          [style.left]=\"handlerX[1]+'%'\"\n          (mousedown)=\"mouseDownSlider($event,1)\">\n      <span class=\"handle-tooltip\">{{currentValues[1]}}</span>\n    </span>\n  </div>\n  <div class=\"values\">\n    <span>{{initValues[0]}}</span>\n    <span>{{initValues[1]}}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/npn-slider/npn-slider.component.ts":
/*!****************************************************!*\
  !*** ./src/app/npn-slider/npn-slider.component.ts ***!
  \****************************************************/
/*! exports provided: NpnSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpnSliderComponent", function() { return NpnSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NpnSliderComponent = /** @class */ (function () {
    function NpnSliderComponent(el, _sanitizer) {
        this.el = el;
        this._sanitizer = _sanitizer;
        this.sliderModel = [0, 0, 0];
        this.initValues = [0, 0];
        this.currentValues = [0, 0];
        this.handlerX = [0, 0];
        this.sliderWidth = 0;
        this.sliderHandlerWidth = 0;
        this.totalDiff = 0;
        this.startClientX = 0;
        this.isMouseDown = false;
        this.currentHandlerIndex = 0;
        this.startPleft = 0;
        this.startPRight = 0;
        this.onSliderValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.step = 1;
    }
    Object.defineProperty(NpnSliderComponent.prototype, "setInitValues", {
        set: function (value) {
            if (value.length == 2) {
                this.initValues = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NpnSliderComponent.prototype, "setSelectedValues", {
        set: function (value) {
            if (value.length == 2) {
                this.currentValues = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    NpnSliderComponent.prototype.ngOnInit = function () {
        this.resetSlider();
    };
    /*Method to reset entire Slider*/
    NpnSliderComponent.prototype.resetSlider = function () {
        try {
            // Taking width of slider bar element.
            this.sliderWidth = this.el.nativeElement.children[0].children[0].offsetWidth;
            this.sliderHandlerWidth = this.el.nativeElement.children[0].children[0].children[0].offsetWidth;
            this.initializeModel();
        }
        catch (e) {
            console.error(e);
        }
    };
    /*Method to set current selected values */
    NpnSliderComponent.prototype.updateCurrentValue = function (arrayValue) {
        this.currentValues[0] = arrayValue[0];
        this.currentValues[1] = arrayValue[1];
        this.onSliderValueChange.emit(this.currentValues);
    };
    /*Method to initialize variables and model values for first time  */
    NpnSliderComponent.prototype.initializeModel = function () {
        if (this.initValues[0] > this.initValues[1]) {
            // Validation for initValues: MinMaxValues
            this.initValues = [0, 0];
            this.updateCurrentValue([0, 0]);
        }
        else if (this.currentValues[0] < this.initValues[0] || this.currentValues[1] > this.initValues[1]) {
            // Validation for currentValues: SelectedRangeValues
            this.updateCurrentValue(this.initValues);
        }
        // Setting the model values
        this.sliderModel = [
            this.currentValues[0] - this.initValues[0],
            this.currentValues[1] - this.currentValues[0],
            this.initValues[1] - this.currentValues[1]
        ];
        this.totalDiff = this.sliderModel.reduce(function (prevValue, curValue) { return prevValue + curValue; }, 0);
        if (this.totalDiff % this.step != 0) {
            // Validation for slider step
            console.warn('Ignored given step value "' + this.step + '" : and taken "1" as default step');
            this.step = 1;
        }
        this.setHandlerPosition();
    };
    /*Method to set handler position */
    NpnSliderComponent.prototype.setHandlerPosition = function () {
        var runningTotal = 0;
        console.log('model value on move: ' + this.sliderModel);
        // Updating selected values : current values
        this.updateCurrentValue([
            this.initValues[0] + this.sliderModel[0],
            this.initValues[1] - this.sliderModel[2]
        ]);
        /*Setting handler position */
        for (var i = 0, len = this.sliderModel.length - 1; i < len; i++) {
            runningTotal += this.sliderModel[i];
            this.handlerX[i] = (runningTotal / this.totalDiff) * 100;
        }
    };
    /*Method to set model array values - will try to refine the values using step */
    NpnSliderComponent.prototype.setModelValue = function (index, value) {
        if (this.step > 1) {
            value = Math.round(value / this.step) * this.step;
        }
        this.sliderModel[index] = value;
    };
    /*Method to disable handler movement on mouse up*/
    NpnSliderComponent.prototype.mouseUpSlider = function () {
        this.isMouseDown = false;
    };
    /*Method to detect mouse down event on handler*/
    NpnSliderComponent.prototype.mouseDownSlider = function (event, handlerIndex) {
        event.preventDefault();
        this.startClientX = event.clientX;
        this.currentHandlerIndex = handlerIndex;
        this.startPleft = this.sliderModel[handlerIndex];
        this.startPRight = this.sliderModel[handlerIndex + 1];
        this.isMouseDown = true;
    };
    /*Method to calculate silder handler movement */
    NpnSliderComponent.prototype.mouseSliding = function (event) {
        if (this.isMouseDown) {
            var movedX = Math.round((event.clientX - this.startClientX) / this.sliderWidth * this.totalDiff);
            var nextPLeft = this.startPleft + movedX;
            var nextPRight = this.startPRight - movedX;
            if (nextPLeft >= 0 && nextPRight >= 0) {
                this.setModelValue(this.currentHandlerIndex, nextPLeft);
                this.setModelValue(this.currentHandlerIndex + 1, nextPRight);
                this.setHandlerPosition();
            }
        }
    };
    NpnSliderComponent.prototype.getFillerWidth = function () {
        return this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].STYLE, "calc(" + (this.handlerX[1] - this.handlerX[0]) + "% - -" + (this.sliderHandlerWidth / 2) + "px)");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('minMaxValues'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], NpnSliderComponent.prototype, "setInitValues", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NpnSliderComponent.prototype, "onSliderValueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('selectedRangeValues'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], NpnSliderComponent.prototype, "setSelectedValues", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('step'),
        __metadata("design:type", Number)
    ], NpnSliderComponent.prototype, "step", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:mouseup'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NpnSliderComponent.prototype, "mouseUpSlider", null);
    NpnSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'npn-slider',
            template: __webpack_require__(/*! ./npn-slider.component.html */ "./src/app/npn-slider/npn-slider.component.html"),
            styles: [__webpack_require__(/*! ./npn-slider.component.css */ "./src/app/npn-slider/npn-slider.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], NpnSliderComponent);
    return NpnSliderComponent;
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

module.exports = __webpack_require__(/*! E:\Notes\Project Experiments\angularjs2\AngularSlider\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map