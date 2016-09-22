import {Component} from "@angular/core";
import {SimpleService}  from "../services/services.module";

@Component({
	selector : 'home',
	template :  `
	 <div> I am a home component</div>
	 <div>{{simpleService.message}}</div>
	 <widget-one [message] = "simpleService.message"></widget-one>
	 <widget-two>
	    some stuff for two ng-content
	 </widget-two>
	`
})

export class HomeComponent{
	constructor(private simpleService:SimpleService){}

}
