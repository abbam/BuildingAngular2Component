import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component"
import {WidgetModule} from "../widgets/widgets.module"
import {TreeViewModule} from "../treeView/treeview.module";

 
@NgModule({
	imports:[WidgetModule,TreeViewModule], //,TreeViewModule
	declarations:[HomeComponent],
	exports:[HomeComponent]

})

export class HomeModule{}