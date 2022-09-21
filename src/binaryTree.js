const node = require("./node");

class binaryTree {
  constructor(array) {
    this.sortedArray = array.sort((a, b) => {
      return a - b;
    });
    let uniqueValues = [...new Set(this.sortedArray)];
    this.sortedArray = uniqueValues;
    this.myHead = this.buildTree(this.sortedArray);
  }
  buildTree = (array) => {
    let arrayA = [];
    let arrayB = [];
    let middle = [];
    if (array.length > 0) {
      arrayA = array.slice(0, parseInt(array.length / 2));
      middle = array.slice(
        parseInt(array.length / 2),
        parseInt(array.length / 2) + 1
      );
      arrayB = array.slice(parseInt(array.length / 2) + 1);
      let newNode = new node();
      newNode.data = middle[0];
      newNode.left = this.buildTree(arrayA);
      newNode.right = this.buildTree(arrayB);
      return newNode;
    } else if (array.length == 0) {
      return null;
    }
  };
  root = () => {
    return this.myHead;
  };
  insert = (value) => {
    let newNode = new node();
    newNode.data = value;
    let recursiveInsert = (node) => {
      if (node.data > value) {
        if (node.left !== null) {
          recursiveInsert(node.left);
        } else if (node.left == null) {
          console.log("inserting");
          node.left = newNode;
        }
      } else if (node.data < value) {
        if (node.right !== null) {
          recursiveInsert(node.right);
        } else if (node.right == null) {
          console.log("inserting");
          node.right = newNode;
        }
      }
    };

    recursiveInsert(this.myHead);
  };
  delete = (value) => {};
}
module.exports = binaryTree;
