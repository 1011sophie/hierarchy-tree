import { Injectable } from '@angular/core';

import { HierarchyTreeNode } from './hierarchy-tree.model';
import { DATA } from './mock-hierarchy-tree';

@Injectable()
export class HierarchyService {
    data = DATA;

    getData(): HierarchyTreeNode[] {
        //TODO: get real data from server.
        return this.data;
    };

    removeNode(id: number): void {
        var node = this.findNodeById(this.data, id);
        let parentNode = this.findParentNode(this.data, id);
        if (parentNode)
            parentNode.children = null;
        else this.data = null;
    };

    addNode(id: number, name: string): void {
        let newId = this.getNewNodeId();
        let newNode = <HierarchyTreeNode>{
            id: newId,
            name: name,
            children: null,
            isRoot: false
        };
        var node = this.findNodeById(this.data, id);
        node.children.push(newNode);
    };

    private findParentNode(collection: HierarchyTreeNode[], id: number): HierarchyTreeNode {
        for (var item of collection) {
            for (var child of item.children) {
                if (id == child.id) return item;
                if (child.children != null && item.children.length != 0)
                    var subResult = this.findParentNode(item.children, id);
                if (subResult) return subResult
            }
        }
        return null;
    };

    private findNodeById(collection: HierarchyTreeNode[], id: number): HierarchyTreeNode {
        for (var item of collection) {
            if (item.id == id)
                return item;

            if (item.children != null && item.children.length != 0) {
                var subresult = this.findNodeById(item.children, id);
                if (subresult)
                    return subresult;
            }
        }
        return null;
    };

    private findGreatestId(collection: HierarchyTreeNode[]): number {
        var result = -1;
        for (var item of collection) {
            if (item.id > result) result = item.id;

            if (item.children != null || item.children.length != 0) {
                var subresult = this.findGreatestId(item.children);
                if (result < subresult) result = subresult;
            }
        }
        return result;
    };

    private getNewNodeId(): number {
        return this.findGreatestId(this.data) + 1;
    };
}
