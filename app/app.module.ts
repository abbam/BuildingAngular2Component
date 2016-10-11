import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
//import {LazyTreeView} from "./treeView/tree-view";
import {NgModule}  from "@angular/core";
import {HomeModule} from "./home/home.module";
import {ServicesModule} from "./services/services.module";
import {HttpModule} from '@angular/http';
//import {CountryDemo} from './treeView/country-demo';
//import {TreeViewModule} from '../treeView/treeview.module';


@NgModule({
    imports:[BrowserModule, HomeModule, ServicesModule.forRoot() ,HttpModule],
    declarations:[AppComponent],
    exports:[],
    bootstrap:[AppComponent]
})
export class AppModule{}

