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
myTree.insert(70);
myTree.insert(71);
myTree.insert(55);

prettyPrint(myTree.root());

myTree.delete(70)
prettyPrint(myTree.root());
console.log(myTree.levelOrder())
console.log(myTree.preOrder())
console.log(myTree.inOrder())
console.log(myTree.postOrder())
myTree.reBalance()
prettyPrint(myTree.root())