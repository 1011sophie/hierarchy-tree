import { Component, OnInit, Input } from '@angular/core';
import { HierarchyTreeNode } from './hierarchy-tree.model';
import { HierarchyService } from './hierarchy-tree.service';

@Component({
  selector: 'app',
  template: '<hierarchy-tree [data]="data"></hierarchy-tree>',
  providers: [HierarchyService],
})
export class AppComponent implements OnInit {
  constructor(private hierarchyService: HierarchyService) {
  }
  data: HierarchyTreeNode[] = this.hierarchyService.getData();

  ngOnInit() {
    console.log(this.data);
  };
}
