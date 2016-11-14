import { Component, OnInit, Input } from '@angular/core';
import { HierarchyTreeNode } from './hierarchy-tree.model';
import { HierarchyService } from './hierarchy-tree.service';

@Component({
  selector: 'app',
  template: '<hierarchy-tree [tree]="data"></hierarchy-tree>',
  providers: [HierarchyService],
})
export class AppComponent implements OnInit {
  constructor(private hierarchyService: HierarchyService) {
  }
  data: HierarchyTreeNode[];

  ngOnInit() {
    this.data = this.hierarchyService.getData();
  };
}
