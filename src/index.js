const binaryTree = require("./binaryTree");
let myArray = [0, 1, 2, 8, 4, 5, 7, 6, 3, 3, 3];
let myTree = new binaryTree(myArray);

prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(myTree.root());
myTree.insert(69);
prettyPrint(myTree.root());
