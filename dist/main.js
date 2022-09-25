/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/binaryTree.js":
/*!***************************!*\
  !*** ./src/binaryTree.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const node = __webpack_require__(/*! ./node */ \"./src/node.js\");\n\nclass binaryTree {\n  constructor(array) {\n    this.sortedArray = array.sort((a, b) => {\n      return a - b;\n    });\n    let uniqueValues = [...new Set(this.sortedArray)];\n    this.sortedArray = uniqueValues;\n    this.myHead = this.buildTree(this.sortedArray);\n  }\n  buildTree = (array) => {\n    let arrayA = [];\n    let arrayB = [];\n    let middle = [];\n    if (array.length > 0) {\n      arrayA = array.slice(0, parseInt(array.length / 2));\n      middle = array.slice(\n        parseInt(array.length / 2),\n        parseInt(array.length / 2) + 1\n      );\n      arrayB = array.slice(parseInt(array.length / 2) + 1);\n      let newNode = new node();\n      newNode.data = middle[0];\n      newNode.left = this.buildTree(arrayA);\n      newNode.right = this.buildTree(arrayB);\n      return newNode;\n    } else if (array.length == 0) {\n      return null;\n    }\n  };\n  root = () => {\n    return this.myHead;\n  };\n  insert = (value) => {\n    let newNode = new node();\n    newNode.data = value;\n    let recursiveInsert = (node) => {\n      if (node.data > value) {\n        if (node.left !== null) {\n          recursiveInsert(node.left);\n        } else if (node.left == null) {\n          node.left = newNode;\n        }\n      } else if (node.data < value) {\n        if (node.right !== null) {\n          recursiveInsert(node.right);\n        } else if (node.right == null) {\n          node.right = newNode;\n        }\n      }\n    };\n\n    recursiveInsert(this.myHead);\n  };\n  findLeftmostOnRight=(node) =>{\n    let recFindLeft = (node)=>{\n      if (node.left !=null){\n        return recFindLeft(node.left) \n      } else if (node.left == null){\n        return node;\n      }\n    }\n    if (node.right != null){\n    return recFindLeft(node.right)\n    }\n  }\n  findParent =(node)=>{\n    let nodeQueue =[this.root()]\n    let recFindParent = (possibleParent)=>{\n      if (possibleParent.left !=null) { \n        if (node === possibleParent.left){\n          return [possibleParent,'left'] \n        }else {\n          nodeQueue.push(possibleParent.left)\n        }\n      } \n      if (possibleParent.right !=null){ \n        if (node === possibleParent.right){\n        return [possibleParent,'right']\n      } else {\n        nodeQueue.push(possibleParent.right)\n      }\n    }\n\n      return recFindParent(nodeQueue.pop()) \n  }\n    \n    \n    if (node !=this.myHead){\n      return recFindParent(node)\n    } else {\n      return [null,null];\n\n    }\n  }\n\n  delete = (value) => {\n    let nodeToDelete = this.find(value)\n\n    if ((nodeToDelete.left ==null)&&(nodeToDelete.right == null)){\n      // find parent node, \n      let [parentNode,leftRight] = this.findParent(nodeToDelete)\n      //change pointer to null\n      if (leftRight =='left'){\n        parentNode.left = null;\n      }else if (leftRight=='right'){\n        parentNode.right = null;\n      }\n    } else if (nodeToDelete.left ==null){\n      // find parent node,\n      let [parentNode,leftRight] = this.findParent(nodeToDelete)\n      //change pointer to nodeToDelete.right\n      if (leftRight =='left'){\n        parentNode.left = nodeToDelete.right;\n      }else if (leftRight=='right'){\n        parentNode.right = nodeToDelete.right;\n      }\n    }else if (nodeToDelete.right ==null){\n     // find parent node, \n     let [parentNode,leftRight] = this.findParent(nodeToDelete)\n     //change pointer to nodeToDelete.left\n     if (leftRight =='left'){\n      parentNode.left = nodeToDelete.left;\n    }else if (leftRight=='right'){\n      parentNode.right = nodeToDelete.left;\n    }\n    } else {\n        //node with 2 children\n\n        if (nodeToDelete != this.myHead){\n          let leftmostChild = this.findLeftmostOnRight(nodeToDelete)\n          let [parentNode,leftRight] = this.findParent(nodeToDelete)\n          let [leftmostParentNode,leftmostLeftRight] = this.findParent(leftmostChild)\n          console.log(`deleting ${nodeToDelete.data}`)\n          console.log(`node is ${leftRight} child of ${parentNode.data}`)\n          console.log(`leftmost on right is ${leftmostChild.data} `) \n          console.log(`it is ${leftmostLeftRight} child of ${leftmostParentNode.data}`)\n          if (leftmostChild !== nodeToDelete.right){\n            leftmostChild.right = nodeToDelete.right\n          }\n          if (leftmostChild !== nodeToDelete.left){\n            leftmostChild.left = nodeToDelete.left\n          }\n          if (leftRight =='right') { \n            parentNode.right = leftmostChild\n          }  else  if (leftRight == 'left') { \n            parentNode.left = leftmostChild\n          }\n          if (leftmostLeftRight == 'left') {\n            leftmostParentNode.left = null;\n          } else {\n            leftmostParentNode.right = null;\n          } \n        } else {\n          let leftmostChild = this.findLeftmostOnRight(nodeToDelete)\n          let [leftmostParentNode,leftmostLeftRight] = this.findParent(leftmostChild)\n          console.log(`deleting ${nodeToDelete.data}`)\n          console.log(`leftmost on right is ${leftmostChild.data} `) \n          console.log(`it is ${leftmostLeftRight} child of ${leftmostParentNode.data}`)\n          if (leftmostChild !== nodeToDelete.right){\n            leftmostChild.right = nodeToDelete.right\n          }\n          if (leftmostChild !== nodeToDelete.left){\n            leftmostChild.left = nodeToDelete.left\n          }\n            this.myHead = leftmostChild\n         \n          if (leftmostLeftRight == 'left') {\n            leftmostParentNode.left = null;\n          } else {\n            leftmostParentNode.right = null;\n        } \n        }\n      }\n\n  };\n  find = (value)=>{\n    let recursiveFind = (node)=>{\n      if (node == null)\n        return false;\n      if (node.data > value){\n        return recursiveFind(node.left)\n      } else if (node.data < value){\n        return recursiveFind(node.right)\n      } else if (node.data === value){\n        return node;\n      }\n    }\n    return recursiveFind(this.myHead)\n  }\n  levelOrder = ()=>{\n    let  nodeQueue = [this.myHead]\n    let levelOrderArray = []\n    while (nodeQueue.length >= 1){\n      let node = nodeQueue.shift()\n      levelOrderArray.push(node.data)\n      if (node.left != null){\n        nodeQueue.push(node.left)\n      } \n      if (node.right != null){\n        nodeQueue.push(node.right)\n      }\n    }\n    return levelOrderArray;\n  }\n  preOrder = ()=>{\n    let preOrderArray=[]\n    let recPreOrder = (node) =>{\n      preOrderArray.push(node.data)\n      if (node.left !=null){\n        recPreOrder(node.left)\n      }\n      if (node.right!=null){\n        recPreOrder(node.right)\n      }\n    }\n    recPreOrder(this.myHead)\n    return preOrderArray\n  }\n  inOrder = ()=>{\n    let inOrderArray=[]\n    let recInOrder = (node) =>{\n      if (node.left !=null){\n        recInOrder(node.left)\n      }\n      inOrderArray.push(node.data)\n      if (node.right!=null){\n        recInOrder(node.right)\n      }\n    }\n    recInOrder(this.myHead)\n    return inOrderArray;\n  }\n  postOrder = ()=>{\n    let postOrderArray=[]\n    let recPostOrder = (node) =>{\n      if (node.left !=null){\n        recPostOrder(node.left)\n      }\n      if (node.right!=null){\n        recPostOrder(node.right)\n      }\n      postOrderArray.push(node.data)\n    }\n    recPostOrder(this.myHead)\n    return postOrderArray\n  }\n  isBalanced = ()=>{\n    let recCheckBalance =(node)=>{\n        if ((node.left === null)&&(node.right === null)){\n          return [1,true]; \n        } else if ((node.left != null)&&(node.right === null)){\n          let [noOfNodes,balanced] = recCheckBalance(node.left)\n          return [1 + noOfNodes,(noOfNodes ==1)? true:false]\n        } else if ((node.left === null)&&(node.right != null)){\n          let [noOfNodes,balanced] = recCheckBalance(node.right)\n          return [1 + noOfNodes,(noOfNodes ==1)? true:false]\n        } else if ((node.left != null)&&(node.right != null)) {\n          let [noOfNodesRight,rightBalanced] = recCheckBalance(node.right)\n          let [noOfNodesLeft,leftBalanced] = recCheckBalance(node.left)\n          if ((noOfNodesLeft-noOfNodesRight<=1)&&\n            ((noOfNodesRight-noOfNodesLeft>=-1))){\n              return[noOfNodesLeft+noOfNodesRight +1,(rightBalanced&&leftBalanced)]\n            } else return [noOfNodesLeft+noOfNodesRight +1,false]\n\n        }\n    }\n    let [noOfNodes,balanced] = recCheckBalance(this.myHead)\n    return balanced;\n\n  }\n  reBalance = ()=>{\n    this.myHead = this.buildTree(this.inOrder())\n  }\n  depth =(node)=>{\n    //distance to root\n    let distance = 0;\n    let nodeDepth = 0;\n    let recursiveFind = (nodes)=>{\n      distance++\n      let children = []\n      nodes.forEach((searchNode)=>{\n        if (node === searchNode.data){          \n          nodeDepth = distance;\n          children =[]\n          return  distance;\n        } else {\n          if (searchNode.left != null){\n            children.push(searchNode.left)\n          }\n          if (searchNode.right != null){  \n            children.push(searchNode.right)\n          }\n        }\n\n      })\n      if (children.length >0){\n        return recursiveFind(children)\n      }\n      return nodeDepth;\n      \n    }\n    return recursiveFind([this.myHead])\n  }\n  height = (node) =>{\n    let distance = -1;\n    let recursiveFind = (nodes)=>{\n      distance++\n      let children = []\n      nodes.forEach((searchNode)=>{\n          if (searchNode.left != null){\n            children.push(searchNode.left)\n          }\n          if (searchNode.right != null){  \n            children.push(searchNode.right)\n          }\n        })\n      if (children.length >0){\n        return recursiveFind(children)\n      }\n      return distance;\n    }\n    return recursiveFind([this.find(node)])\n  }\n}\nmodule.exports = binaryTree;\n\n\n//# sourceURL=webpack://odin-binary-tree/./src/binaryTree.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const binaryTree = __webpack_require__(/*! ./binaryTree */ \"./src/binaryTree.js\");\nlet myArray = [];\nfillRandoms=(number)=>{\n  for (let i = 0;i<number; i++){\n  myArray.push(parseInt(Math.random()*1000))\n  }\n}\nfillRandoms(10)\nlet myTree = new binaryTree(myArray);\n\nprettyPrint = (node, prefix = \"\", isLeft = true) => {\n  if (node.right !== null) {\n    prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n  }\n  console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\n  if (node.left !== null) {\n    prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n  }\n};\n\nprettyPrint(myTree.root());\nconsole.log(myTree.isBalanced())\nconsole.log(myTree.levelOrder())\nconsole.log(myTree.preOrder())\nconsole.log(myTree.postOrder())\nconsole.log(myTree.inOrder())\nmyTree.insert(101);\nmyTree.insert(102);\nmyTree.insert(103);\nmyTree.insert(104);\nmyTree.insert(105);\nmyTree.insert(106);\nmyTree.insert(107);\nmyTree.insert(108);\nprettyPrint(myTree.root());\nconsole.log(myTree.isBalanced())\nmyTree.reBalance()\nprettyPrint(myTree.root());\nconsole.log(myTree.levelOrder())\nconsole.log(myTree.preOrder())\nconsole.log(myTree.postOrder())\nconsole.log(myTree.inOrder())\n\n\n//# sourceURL=webpack://odin-binary-tree/./src/index.js?");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((module) => {

eval("class node {\n  constructor() {\n    this.myData = null;\n    this.myLeft = null;\n    this.myRight = null;\n  }\n  get data() {\n    return this.myData;\n  }\n  set data(data) {\n    this.myData = data;\n  }\n  get right() {\n    return this.myRight;\n  }\n  set right(newRight) {\n    this.myRight = newRight;\n  }\n  get left() {\n    return this.myLeft;\n  }\n  set left(newLeft) {\n    this.myLeft = newLeft;\n  }\n}\nmodule.exports = node;\n\n\n//# sourceURL=webpack://odin-binary-tree/./src/node.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;