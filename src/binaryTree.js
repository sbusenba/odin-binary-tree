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
  findLeftmostOnRight=(node) =>{
    let recFindLeft = (node)=>{
      if (node.left !=null){
        return recFindLeft(node.left) 
      } else if (node.left == null){
        return node;
      }
    }
    if (node.right != null){
    return recFindLeft(node.right)
    }
  }
  findParent =(node)=>{
    let nodeQueue =[this.root()]
    let recFindParent = (possibleParent)=>{
      if (possibleParent.left !=null) { 
        if (node === possibleParent.left){
          return [possibleParent,'left'] 
        }else {
          nodeQueue.push(possibleParent.left)
        }
      } 
      if (possibleParent.right !=null){ 
        if (node === possibleParent.right){
        return [possibleParent,'right']
      } else {
        nodeQueue.push(possibleParent.right)
      }
    }

      return recFindParent(nodeQueue.pop()) 
  }
    
    
    if (node !=this.myHead){
      return recFindParent(node)
    } else {
      return [null,null];

    }
  }

  delete = (value) => {
    let nodeToDelete = this.find(value)

    if ((nodeToDelete.left ==null)&&(nodeToDelete.right == null)){
      // find parent node, 
      let [parentNode,leftRight] = this.findParent(nodeToDelete)
      //change pointer to null
      if (leftRight =='left'){
        parentNode.left = null;
      }else if (leftRight=='right'){
        parentNode.right = null;
      }
    } else if (nodeToDelete.left ==null){
      // find parent node,
      let [parentNode,leftRight] = this.findParent(nodeToDelete)
      //change pointer to nodeToDelete.right
      if (leftRight =='left'){
        parentNode.left = nodeToDelete.right;
      }else if (leftRight=='right'){
        parentNode.right = nodeToDelete.right;
      }
    }else if (nodeToDelete.right ==null){
     // find parent node, 
     let [parentNode,leftRight] = this.findParent(nodeToDelete)
     //change pointer to nodeToDelete.left
     if (leftRight =='left'){
      parentNode.left = nodeToDelete.left;
    }else if (leftRight=='right'){
      parentNode.right = nodeToDelete.left;
    }
    } else {
        //node with 2 children

        if (nodeToDelete != this.myHead){
          let leftmostChild = this.findLeftmostOnRight(nodeToDelete)
          let [parentNode,leftRight] = this.findParent(nodeToDelete)
          let [leftmostParentNode,leftmostLeftRight] = this.findParent(leftmostChild)
          console.log(`deleting ${nodeToDelete.data}`)
          console.log(`node is ${leftRight} child of ${parentNode.data}`)
          console.log(`leftmost on right is ${leftmostChild.data} `) 
          console.log(`it is ${leftmostLeftRight} child of ${leftmostParentNode.data}`)
          if (leftmostChild !== nodeToDelete.right){
            leftmostChild.right = nodeToDelete.right
          }
          if (leftmostChild !== nodeToDelete.left){
            leftmostChild.left = nodeToDelete.left
          }
          if (leftRight =='right') { 
            parentNode.right = leftmostChild
          }  else  if (leftRight == 'left') { 
            parentNode.left = leftmostChild
          }
          if (leftmostLeftRight == 'left') {
            leftmostParentNode.left = null;
          } else {
            leftmostParentNode.right = null;
          } 
        } else {
          let leftmostChild = this.findLeftmostOnRight(nodeToDelete)
          let [leftmostParentNode,leftmostLeftRight] = this.findParent(leftmostChild)
          console.log(`deleting ${nodeToDelete.data}`)
          console.log(`leftmost on right is ${leftmostChild.data} `) 
          console.log(`it is ${leftmostLeftRight} child of ${leftmostParentNode.data}`)
          if (leftmostChild !== nodeToDelete.right){
            leftmostChild.right = nodeToDelete.right
          }
          if (leftmostChild !== nodeToDelete.left){
            leftmostChild.left = nodeToDelete.left
          }
            this.myHead = leftmostChild
         
          if (leftmostLeftRight == 'left') {
            leftmostParentNode.left = null;
          } else {
            leftmostParentNode.right = null;
        } 
        }
      }

  };
  find = (value)=>{
    let recursiveFind = (node)=>{
      if (node == null)
        return false;
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
  isBalanced = ()=>{
    let recCheckBalance =(node)=>{
        if ((node.left === null)&&(node.right === null)){
          return [1,true]; 
        } else if ((node.left != null)&&(node.right === null)){
          let [noOfNodes,balanced] = recCheckBalance(node.left)
          return [1 + noOfNodes,(noOfNodes ==1)? true:false]
        } else if ((node.left === null)&&(node.right != null)){
          let [noOfNodes,balanced] = recCheckBalance(node.right)
          return [1 + noOfNodes,(noOfNodes ==1)? true:false]
        } else if ((node.left != null)&&(node.right != null)) {
          let [noOfNodesRight,rightBalanced] = recCheckBalance(node.right)
          let [noOfNodesLeft,leftBalanced] = recCheckBalance(node.left)
          if ((noOfNodesLeft-noOfNodesRight<=1)&&
            ((noOfNodesRight-noOfNodesLeft>=-1))){
              return[noOfNodesLeft+noOfNodesRight +1,(rightBalanced&&leftBalanced)]
            } else return [noOfNodesLeft+noOfNodesRight +1,false]

        }
    }
    let [noOfNodes,balanced] = recCheckBalance(this.myHead)
    return balanced;

  }
  reBalance = ()=>{
    this.myHead = this.buildTree(this.inOrder())
  }
}
module.exports = binaryTree;
