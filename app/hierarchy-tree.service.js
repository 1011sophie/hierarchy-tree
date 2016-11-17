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
var mock_hierarchy_tree_1 = require('./mock-hierarchy-tree');
var HierarchyService = (function () {
    function HierarchyService() {
        this.data = mock_hierarchy_tree_1.DATA;
    }
    HierarchyService.prototype.getData = function () {
        //TODO: get real data from server.
        return this.data;
    };
    ;
    HierarchyService.prototype.removeNode = function (id) {
        var node = this.findNodeById(this.data, id);
        var parentNode = this.findParentNode(this.data, id);
        if (parentNode)
            for (var _i = 0, _a = parentNode.children; _i < _a.length; _i++) {
                var item = _a[_i];
                if (id == item.id) {
                    var index = parentNode.children.indexOf(item);
                    parentNode.children.splice(index, 1);
                }
            }
        else
            this.data = [];
        console.log(this.data);
    };
    ;
    HierarchyService.prototype.addNode = function (id, name) {
        var newId = this.getNewNodeId();
        var newNode = {
            id: newId,
            name: name,
            children: null
        };
        var node = this.findNodeById(this.data, id);
        node.children.push(newNode);
    };
    ;
    HierarchyService.prototype.findParentNode = function (collection, id) {
        for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
            var item = collection_1[_i];
            for (var _a = 0, _b = item.children; _a < _b.length; _a++) {
                var child = _b[_a];
                if (id == child.id)
                    return item;
                if (child.children != null && item.children.length != 0)
                    var subResult = this.findParentNode(item.children, id);
                if (subResult)
                    return subResult;
            }
        }
        return null;
    };
    ;
    HierarchyService.prototype.findNodeById = function (collection, id) {
        for (var _i = 0, collection_2 = collection; _i < collection_2.length; _i++) {
            var item = collection_2[_i];
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
    ;
    HierarchyService.prototype.findGreatestId = function (collection) {
        var result = -1;
        for (var _i = 0, collection_3 = collection; _i < collection_3.length; _i++) {
            var item = collection_3[_i];
            if (item.id > result)
                result = item.id;
            if (item.children != null || item.children.length != 0) {
                var subresult = this.findGreatestId(item.children);
                if (result < subresult)
                    result = subresult;
            }
        }
        return result;
    };
    ;
    HierarchyService.prototype.getNewNodeId = function () {
        return this.findGreatestId(this.data) + 1;
    };
    ;
    HierarchyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HierarchyService);
    return HierarchyService;
}());
exports.HierarchyService = HierarchyService;
//# sourceMappingURL=hierarchy-tree.service.js.map