//  task is to find a node with the value 21.


let tree = {
    name: 'A',
    value: 4,
    children: [
        {
            name: 'B', value: 7,
            children: [{name: 'C', value: 9, children: []}]
        },
        {
            name: 'D', value: 11,
            children: [{name: 'E', value: 9, children: []}]
        },
        {name: 'F', value: 55, children: []},
        {
            name: 'G', value: 65,
            children: [
                {name: 'H', value: 21, children: []},
                {name: 'I', value: 33, children: []}
            ]
        }
    ]
};

function find(node, value) {
    if (node.value === value) {
        return node;
    } else {
        for (let i = 0; i < node.children.length; i++) {
            let found = find(node.children[i], value);
            if (found !== null) {
                return found;
            }
        }
        return null;
    }
}

console.log(find(tree,21));
