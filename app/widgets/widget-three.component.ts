import{Component, ViewChild, Renderer, Input} from "@angular/core";
@Component({
	selector:'widget-three',
	template:`
    <input #nameThree type="text" [value] = "message">
	`

})

export class WidgetThree{
  @ViewChild('nameThree')  nameThree;
  @Input() message = "default"

  /*use the renderer as native element may not work if not running on browser
   so use renderer*/
  constructor(private renderer:Renderer){}

  ngAfterViewInit(){
  	console.log(this.nameThree);
  	//this.input.nativeElement.focus();
  	this.renderer.invokeElementMethod(
  		this.nameThree.nativeElement,
  		'focus',
  		[]  		
  	)
  }
   ngAfterContentInit(){

   }

}