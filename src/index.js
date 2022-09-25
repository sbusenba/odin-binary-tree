const binaryTree = require("./binaryTree");
let myArray = [];
fillRandoms = (number) => {
  for (let i = 0; i < number; i++) {
    myArray.push(parseInt(Math.random() * 1000));
  }
};
fillRandoms(10);
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
console.log(myTree.isBalanced());
console.log(myTree.levelOrder());
console.log(myTree.preOrder());
console.log(myTree.postOrder());
console.log(myTree.inOrder());
myTree.insert(101);
myTree.insert(102);
myTree.insert(103);
myTree.insert(104);
myTree.insert(105);
myTree.insert(106);
myTree.insert(107);
myTree.insert(108);
prettyPrint(myTree.root());
console.log(myTree.isBalanced());
myTree.reBalance();
prettyPrint(myTree.root());
console.log(myTree.levelOrder());
console.log(myTree.preOrder());
console.log(myTree.postOrder());
console.log(myTree.inOrder());
