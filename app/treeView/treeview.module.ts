import {NgModule}  from "@angular/core";
import {CommonModule} from "@angular/common";
import {LazyTreeView} from "./tree-view";
import {CountryDemo} from "./country-demo";
@NgModule({
	imports:[CommonModule],
	declarations :[LazyTreeView,CountryDemo],
	entryComponents:[LazyTreeView,CountryDemo],
	exports:[LazyTreeView,CountryDemo, CommonModule]
})

export class TreeViewModule{

}