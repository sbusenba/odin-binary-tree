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
          node.left = newNode;
        }
      } else if (node.data < value) {
        if (node.right !== null) {
          recursiveInsert(node.right);
        } else if (node.right == null) {
          node.right = newNode;
        }
      }
    };

    recursiveInsert(this.myHead);
  };
  delete = (value) => {
    let nodeToDelete = this.find(value)

    if ((nodeToDelete.left ==null)&&(nodeToDelete.right == null)){
      nodeToDelete = null;
    } else if (nodeToDelete.left ==null){
      //correct this

    }else if (nodeToDelete.right ==null){
      
    } else {
        //find furthest left node
    }

  };
  find = (value)=>{
    let recursiveFind = (node)=>{
      if (node.data > value){
        return recursiveFind(node.left)
      } else if (node.data < value){
        return recursiveFind(node.right)
      } else if (node.data === value){
        return node;
      }
    }
    return recursiveFind(this.myHead)
  }
  levelOrder = ()=>{
    let  nodeQueue = [this.myHead]
    let levelOrderArray = []
    while (nodeQueue.length >= 1){
      let node = nodeQueue.shift()
      levelOrderArray.push(node.data)
      if (node.left != null){
        nodeQueue.push(node.left)
      } 
      if (node.right != null){
        nodeQueue.push(node.right)
      }
    }
    return levelOrderArray;
  }
  preOrder = ()=>{
    let preOrderArray=[]
    let recPreOrder = (node) =>{
      preOrderArray.push(node.data)
      if (node.left !=null){
        recPreOrder(node.left)
      }
      if (node.right!=null){
        recPreOrder(node.right)
      }
    }
    recPreOrder(this.myHead)
    return preOrderArray
  }
  inOrder = ()=>{
    let inOrderArray=[]
    let recInOrder = (node) =>{
      if (node.left !=null){
        recInOrder(node.left)
      }
      inOrderArray.push(node.data)
      if (node.right!=null){
        recInOrder(node.right)
      }
    }
    recInOrder(this.myHead)
    return inOrderArray;
  }
  postOrder = ()=>{
    let postOrderArray=[]
    let recPostOrder = (node) =>{
      if (node.left !=null){
        recPostOrder(node.left)
      }
      if (node.right!=null){
        recPostOrder(node.right)
      }
      postOrderArray.push(node.data)
    }
    recPostOrder(this.myHead)
    return postOrderArray
  }
  isBalanced = ()=>{}
  reBalance = ()=>{
    this.myHead = this.buildTree(this.inOrder())

  }
}
module.exports = binaryTree;
