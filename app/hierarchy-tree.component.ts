import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    @Output() dataChange = new EventEmitter();

    newNodeName: string = null;
    inAddNewMode: boolean = false;

    ngOnInit() {
        console.log(this.data);
    };

    onAddNewNodeClick() {
        this.inAddNewMode = true;
    };

    onAddNewNodeSubmitClick(id: number) {
        this.hierarchyService.addNode(id, this.newNodeName);
        this.dataChange.emit(id);
        this.inAddNewMode = false;
    }

    onRemoveNodeClick(id: number) {
        this.hierarchyService.removeNode(id);
        this.dataChange.emit(id);
    };

    dataChanged() {
    };
}