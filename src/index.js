const binaryTree = require("./binaryTree");
let myArray = [];
fillRandoms=(number)=>{
  for (let i = 0;i<number; i++){
  myArray.push(parseInt(Math.random()*1000))
  }
}
fillRandoms(100)
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
console.log(myTree.isBalanced())
myTree.insert(69);
myTree.insert(70);
myTree.insert(71);
myTree.insert(55);
myTree.insert(9);
myTree.insert(10);
myTree.insert(11);
myTree.insert(15);
prettyPrint(myTree.root());
console.log(myTree.isBalanced())

prettyPrint(myTree.root());
console.log(myTree.levelOrder())
console.log(myTree.preOrder())
console.log(myTree.inOrder())
console.log(myTree.postOrder())
myTree.reBalance()
prettyPrint(myTree.root())
console.log(myTree.isBalanced())