import {Component, ViewChild,ViewContainerRef,ComponentFactoryResolver} from "@angular/core";
import {SimpleService}  from "../services/services.module";
import {WidgetThree}  from "../widgets/widget-three.component"

@Component({
	selector : 'home',
	template :  `
	 <div> I am a home component</div>
	 <div>{{simpleService.message}}</div>
	 <widget-one [message] = "simpleService.message"></widget-one>
	 <widget-two>
	 	   <widget-one message = "hello world"></widget-one>
	 	   <h2 class="header">Title</h2>
	 	   <div content>Some content</div>
	 	   <h3 footer>Footer</h3>	 
	 </widget-two>
	 <widget-three></widget-three>

	 <button (click)="onClick()"> Add Component</button>
	 <button (click)="onMove()"> Move Component</button>
	 <button (click)="onDetach()">Detach Component </button>
	 <button (click)="ontemplate()">Template Example </button>
	 <div #container></div>

	 <template #template let-description="description">
        <h3> My {{description}} template</h3>
        <button>My {{description}} Button </button>
	 </template>
	`
})

export class HomeComponent{
	@ViewChild('container', {read:ViewContainerRef}) container;

	@ViewChild('template') template;

	widgetRef;
	constructor(private simpleService:SimpleService, 
		private resolver:ComponentFactoryResolver){}

	//read it as viewContainerReg
	
	ngAfterContentInit(){
		console.log(this.container);
		const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
		this.container.createComponent(widgetFactory);
		this.widgetRef = this.container
			.createComponent(widgetFactory);
		this.widgetRef.instance.message = "here i "
	}

	onClick(){

	const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
		const widgetRef = this.container
			.createComponent(widgetFactory,2);
		widgetRef.instance.message = "here i first "

	}

	onMove(){

		const randomIndex = Math.floor(Math.random()*this.container.length);
		this.container.move(this.widgetRef.hostView,randomIndex);
	}
	onDetach(){

		this.container.detach(2);
	}

	ontemplate(){
		 this.container.createEmbeddedView(this.template,{
		 	description:'sweet'
		 })
	}
}
