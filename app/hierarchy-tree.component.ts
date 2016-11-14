import { Component, OnInit, Input } from '@angular/core';
import { HierarchyTreeNode } from './hierarchy-tree.model';
import { HierarchyService } from './hierarchy-tree.service';

@Component({
    selector: 'hierarchy-tree',
    templateUrl: 'app/hierarchy-tree.component.html',
    providers: [HierarchyService]
})
export class HierarchyTreeComponent implements OnInit {
    constructor(private hierarchyService: HierarchyService) { }
    @Input() data: HierarchyTreeNode[];
    newNodeName: string = null;
    inAddNewMode: boolean = false;

    ngOnInit() {
        console.log(this.data);
    }

    onAddNewNodeClick() {
        this.inAddNewMode = true;
    };

    onAddNewNodeSubmitClick(id: number) {
        this.hierarchyService.addNode(id, this.newNodeName);
        this.data = this.hierarchyService.getData();
        this.inAddNewMode = false;
    }

    onRemoveNodeClick(id: number) {
        this.hierarchyService.removeNode(id);
        this.data = this.hierarchyService.getData();
        console.log(this.data);
    };
}