"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hierarchy_tree_service_1 = require('./hierarchy-tree.service');
var HierarchyTreeComponent = (function () {
    function HierarchyTreeComponent(hierarchyService) {
        this.hierarchyService = hierarchyService;
        this.newNodeName = null;
        this.inAddNewMode = false;
    }
    HierarchyTreeComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    HierarchyTreeComponent.prototype.onAddNewNodeClick = function () {
        this.inAddNewMode = true;
    };
    ;
    HierarchyTreeComponent.prototype.onAddNewNodeSubmitClick = function (id) {
        this.hierarchyService.addNode(id, this.newNodeName);
        this.data = this.hierarchyService.getData();
        this.inAddNewMode = false;
    };
    HierarchyTreeComponent.prototype.onRemoveNodeClick = function (id) {
        this.hierarchyService.removeNode(id);
        this.data = this.hierarchyService.getData();
        console.log(this.data);
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], HierarchyTreeComponent.prototype, "data", void 0);
    HierarchyTreeComponent = __decorate([
        core_1.Component({
            selector: 'hierarchy-tree',
            templateUrl: 'app/hierarchy-tree.component.html',
            providers: [hierarchy_tree_service_1.HierarchyService]
        }), 
        __metadata('design:paramtypes', [hierarchy_tree_service_1.HierarchyService])
    ], HierarchyTreeComponent);
    return HierarchyTreeComponent;
}());
exports.HierarchyTreeComponent = HierarchyTreeComponent;
//# sourceMappingURL=hierarchy-tree.component.js.map