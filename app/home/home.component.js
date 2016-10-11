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
var services_module_1 = require("../services/services.module");
var widget_three_component_1 = require("../widgets/widget-three.component");
var HomeComponent = (function () {
    function HomeComponent(simpleService, resolver) {
        this.simpleService = simpleService;
        this.resolver = resolver;
    }
    //read it as viewContainerReg
    HomeComponent.prototype.ngAfterContentInit = function () {
        console.log(this.container);
        var widgetFactory = this.resolver.resolveComponentFactory(widget_three_component_1.WidgetThree);
        this.container.createComponent(widgetFactory);
        this.widgetRef = this.container
            .createComponent(widgetFactory);
        this.widgetRef.instance.message = "here i ";
    };
    HomeComponent.prototype.onClick = function () {
        var widgetFactory = this.resolver.resolveComponentFactory(widget_three_component_1.WidgetThree);
        var widgetRef = this.container
            .createComponent(widgetFactory, 2);
        widgetRef.instance.message = "here i first ";
    };
    HomeComponent.prototype.onMove = function () {
        var randomIndex = Math.floor(Math.random() * this.container.length);
        this.container.move(this.widgetRef.hostView, randomIndex);
    };
    HomeComponent.prototype.onDetach = function () {
        this.container.detach(2);
    };
    HomeComponent.prototype.ontemplate = function () {
        this.container.createEmbeddedView(this.template, {
            description: 'sweet'
        });
    };
    __decorate([
        core_1.ViewChild('container', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', Object)
    ], HomeComponent.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild('template'), 
        __metadata('design:type', Object)
    ], HomeComponent.prototype, "template", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: "\n\t <div> I am a home component</div>\n\t <div>{{simpleService.message}}</div>\n\t <widget-one [message] = \"simpleService.message\"></widget-one>\n\t <widget-two>\n\t \t   <widget-one message = \"hello world\"></widget-one>\n\t \t   <h2 class=\"header\">Title</h2>\n\t \t   <div content>Some content</div>\n\t \t   <h3 footer>Footer</h3>\t \n\t </widget-two>\n\t <widget-three></widget-three>\n\n\t <button (click)=\"onClick()\"> Add Component</button>\n\t <button (click)=\"onMove()\"> Move Component</button>\n\t <button (click)=\"onDetach()\">Detach Component </button>\n\t <button (click)=\"ontemplate()\">Template Example </button>\n\t <div #container></div>\n\n\t <template #template let-description=\"description\">\n        <h3> My {{description}} template</h3>\n        <button>My {{description}} Button </button>\n\t </template>\n\t"
        }), 
        __metadata('design:paramtypes', [services_module_1.SimpleService, core_1.ComponentFactoryResolver])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map