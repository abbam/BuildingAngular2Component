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
var WidgetTwo = (function () {
    function WidgetTwo() {
    }
    WidgetTwo = __decorate([
        core_1.Component({
            selector: 'widget-two',
            styles: ["\n\t:host{\n\t\tdisplay:block;\n\t\tborder:3px solid red;\n\t}"
            ],
            template: "\n\t<h2>Above </h2>\n\t <ng-content select=\"[.header]\"></ng-content>\n\t <ng-content select=\"[content]\"></ng-content>\n\t <ng-content select=\"[footer]\"></ng-content>\n\t <ng-content></ng-content>\n\t<h2>Below </h2>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetTwo);
    return WidgetTwo;
}());
exports.WidgetTwo = WidgetTwo;
//# sourceMappingURL=widget-two.component.js.map