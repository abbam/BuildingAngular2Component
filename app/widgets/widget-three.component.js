"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var WidgetThree = (function () {
    /*use the renderer as native element may not work if not running on browser
     so use renderer*/
    function WidgetThree(renderer) {
        this.renderer = renderer;
        this.message = "default";
    }
    WidgetThree.prototype.ngAfterViewInit = function () {
        console.log(this.nameThree);
        //this.input.nativeElement.focus();
        this.renderer.invokeElementMethod(this.nameThree.nativeElement, 'focus', []);
    };
    WidgetThree.prototype.ngAfterContentInit = function () {
    };
    __decorate([
        core_1.ViewChild('nameThree'), 
        __metadata('design:type', Object)
    ], WidgetThree.prototype, "nameThree", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WidgetThree.prototype, "message", void 0);
    WidgetThree = __decorate([
        core_1.Component({
            selector: 'widget-three',
            template: "\n    <input #nameThree type=\"text\" [value] = \"message\">\n\t"
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], WidgetThree);
    return WidgetThree;
}());
exports.WidgetThree = WidgetThree;
//# sourceMappingURL=widget-three.component.js.map