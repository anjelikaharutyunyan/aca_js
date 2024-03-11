//tree1
{
    function buildTree(nodes) {
        const tree = {};

        function buildSubtree(parentId) {
            const subtree = {};
            nodes.forEach(node => {
                if (node.parentId === parentId) {
                    subtree[node.id] = buildSubtree(node.id);
                }
            });
            return Object.keys(subtree).length > 0 ? subtree : {};
        }

        nodes.forEach(node => {
            if (node.parentId === null) {
                tree[node.id] = buildSubtree(node.id);
            }
        });

        return tree;
    }

    const nodes = [
        { id: 1, parentId: null },
        { id: 2, parentId: 1 },
        { id: 3, parentId: 1 },
        { id: 4, parentId: 2 },
        { id: 5, parentId: 2 },
        { id: 6, parentId: 3 },
        { id: 7, parentId: 4 },
        { id: 8, parentId: 7 },
        { id: 9, parentId: 8 },
    ];

    const tree1 = buildTree(nodes);
    console.log(JSON.stringify(tree1, null, 2))
}
//tree 2
{
    function buildTree(nodes) {
        const tree = {};

        function buildSubtree(parentId) {
            const children = [];
            nodes.forEach(node => {
                if (node.parentId === parentId) {
                    children.push({
                        id: node.id,
                        children: buildSubtree(node.id)
                    });
                }
            });
            return children.length > 0 ? children : [];
        }

        nodes.forEach(node => {
            if (node.parentId === null) {
                tree.id = node.id;
                tree.children = buildSubtree(node.id);
            }
        });

        return tree;
    }

    const nodes = [
        { id: 1, parentId: null },
        { id: 2, parentId: 1 },
        { id: 3, parentId: 1 },
        { id: 4, parentId: 2 },
        { id: 5, parentId: 2 },
        { id: 6, parentId: 3 },
        { id: 7, parentId: 4 },
        { id: 8, parentId: 7 },
        { id: 9, parentId: 8 },
    ];

    const tree2 = buildTree(nodes);
    console.log(JSON.stringify(tree2, null, 2));

}