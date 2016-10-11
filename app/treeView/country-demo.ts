import {Component} from '@angular/core';
import {TreeNode} from './tree-node';
import {Store} from './redux/store';
import {TreeNodeService} from './tree-node-service';
import {LazyTreeView} from "./tree-view";

@Component({
  selector:'country-demo',
  template:`<h1>Lazy loaded TreeView using Redux and RxJs</h1>
            <treeView [root]="node"></treeView>`,            
  providers:[Store,TreeNodeService]
})

export class CountryDemo{
  node:TreeNode = null;
  ngOnInit(){
    this.node = new TreeNode('root','app/treeView/tree-view-data/countries.json', '');
  }
}