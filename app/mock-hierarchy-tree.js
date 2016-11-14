"use strict";
exports.DATA = [
    {
        id: 1, name: "CEO",
        children: [
            {
                id: 2, name: "Marketing Director",
                children: [
                    {
                        id: 4, name: "Marketing Manager",
                        children: [
                            {
                                id: 7, name: "Marketing Specialist",
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                id: 3, name: "Sales Director",
                children: [
                    {
                        id: 5, name: "Sales Manager - West",
                        children: [
                            {
                                id: 8, name: "Sales Agent - West",
                                children: []
                            }
                        ]
                    },
                    {
                        id: 6, name: "Sales Manager - East",
                        children: [
                            {
                                id: 9, name: "Sales Agent - East",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
//# sourceMappingURL=mock-hierarchy-tree.js.map