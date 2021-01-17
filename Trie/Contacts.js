function contacts(queries) {
    let results = [];
    let tree = new Tree();
    queries.forEach(line => {
        let [op, val] = line;
        if (op === 'add') {
            tree.addWord(val);
        }
        if (op === 'find') {
            results.push(tree.findWord(val));
        }
    });
    return results;
}

class Tree {
    constructor() {
        this.trie = new Node();
    }

    addWord(word) {
        let root = this.trie;
        word.split('').map((letter, index) => {
            let found = root.children.find(child => letter == child.value);

            if (found) {
                found.wordsContained += 1;
                root = found;
            } else {
                let node = new Node();
                node.value = letter;
                node.wordsContained += 1;
                root.children.push(node);
                root = node;
            }
        })

    };

    findWord(word) {
        let root = this.trie;
        let success = word.split('')
            .every(letter => {
                let found = root.children.find(child => letter == child.value);
                root = found;
                return found;
            });
        if (success) { return root.wordsContained; }
        else { return 0; }
    };
}

class Node {
    constructor() {
        this.value = '';
        this.wordsContained = 0;
        this.children = [];
    }
}