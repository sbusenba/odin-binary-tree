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

eval("const node = __webpack_require__(/*! ./node */ \"./src/node.js\");\n\nclass binaryTree {\n  constructor(array) {\n    this.sortedArray = array.sort((a, b) => {\n      return a - b;\n    });\n    let uniqueValues = [...new Set(this.sortedArray)];\n    this.sortedArray = uniqueValues;\n    this.myHead = this.buildTree(this.sortedArray);\n  }\n  buildTree = (array) => {\n    let arrayA = [];\n    let arrayB = [];\n    let middle = [];\n    if (array.length > 0) {\n      arrayA = array.slice(0, parseInt(array.length / 2));\n      middle = array.slice(\n        parseInt(array.length / 2),\n        parseInt(array.length / 2) + 1\n      );\n      arrayB = array.slice(parseInt(array.length / 2) + 1);\n      let newNode = new node();\n      newNode.data = middle[0];\n      newNode.left = this.buildTree(arrayA);\n      newNode.right = this.buildTree(arrayB);\n      return newNode;\n    } else if (array.length == 0) {\n      return null;\n    }\n  };\n  root = () => {\n    return this.myHead;\n  };\n  insert = (value) => {\n    let newNode = new node();\n    newNode.data = value;\n    let recursiveInsert = (node) => {\n      if (node.data > value) {\n        if (node.left !== null) {\n          recursiveInsert(node.left);\n        } else if (node.left == null) {\n          node.left = newNode;\n        }\n      } else if (node.data < value) {\n        if (node.right !== null) {\n          recursiveInsert(node.right);\n        } else if (node.right == null) {\n          node.right = newNode;\n        }\n      }\n    };\n\n    recursiveInsert(this.myHead);\n  };\n  delete = (value) => {\n    let nodeToDelete = this.find(value)\n\n    if ((nodeToDelete.left ==null)&&(nodeToDelete.right == null)){\n      nodeToDelete = null;\n    } else if (nodeToDelete.left ==null){\n      //correct this\n\n    }else if (nodeToDelete.right ==null){\n      \n    } else {\n        //find furthest left node\n    }\n\n  };\n  find = (value)=>{\n    let recursiveFind = (node)=>{\n      if (node.data > value){\n        return recursiveFind(node.left)\n      } else if (node.data < value){\n        return recursiveFind(node.right)\n      } else if (node.data === value){\n        return node;\n      }\n    }\n    return recursiveFind(this.myHead)\n  }\n  levelOrder = ()=>{\n    let  nodeQueue = [this.myHead]\n    let levelOrderArray = []\n    while (nodeQueue.length >= 1){\n      let node = nodeQueue.shift()\n      levelOrderArray.push(node.data)\n      if (node.left != null){\n        nodeQueue.push(node.left)\n      } \n      if (node.right != null){\n        nodeQueue.push(node.right)\n      }\n    }\n    return levelOrderArray;\n  }\n  preOrder = ()=>{\n    let preOrderArray=[]\n    let recPreOrder = (node) =>{\n      preOrderArray.push(node.data)\n      if (node.left !=null){\n        recPreOrder(node.left)\n      }\n      if (node.right!=null){\n        recPreOrder(node.right)\n      }\n    }\n    recPreOrder(this.myHead)\n    return preOrderArray\n  }\n  inOrder = ()=>{\n    let inOrderArray=[]\n    let recInOrder = (node) =>{\n      if (node.left !=null){\n        recInOrder(node.left)\n      }\n      inOrderArray.push(node.data)\n      if (node.right!=null){\n        recInOrder(node.right)\n      }\n    }\n    recInOrder(this.myHead)\n    return inOrderArray;\n  }\n  postOrder = ()=>{\n    let postOrderArray=[]\n    let recPostOrder = (node) =>{\n      if (node.left !=null){\n        recPostOrder(node.left)\n      }\n      if (node.right!=null){\n        recPostOrder(node.right)\n      }\n      postOrderArray.push(node.data)\n    }\n    recPostOrder(this.myHead)\n    return postOrderArray\n  }\n  isBalanced = ()=>{}\n  reBalance = ()=>{\n    this.myHead = this.buildTree(this.inOrder())\n\n  }\n}\nmodule.exports = binaryTree;\n\n\n//# sourceURL=webpack://odin-binary-tree/./src/binaryTree.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const binaryTree = __webpack_require__(/*! ./binaryTree */ \"./src/binaryTree.js\");\nlet myArray = [0, 1, 2, 8, 4, 5, 7, 6, 3, 3, 3];\nlet myTree = new binaryTree(myArray);\n\nprettyPrint = (node, prefix = \"\", isLeft = true) => {\n  if (node.right !== null) {\n    prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n  }\n  console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\n  if (node.left !== null) {\n    prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n  }\n};\n\nprettyPrint(myTree.root());\nmyTree.insert(69);\nmyTree.insert(70);\nmyTree.insert(71);\nmyTree.insert(55);\n\nprettyPrint(myTree.root());\n\nmyTree.delete(70)\nprettyPrint(myTree.root());\nconsole.log(myTree.levelOrder())\nconsole.log(myTree.preOrder())\nconsole.log(myTree.inOrder())\nconsole.log(myTree.postOrder())\nmyTree.reBalance()\nprettyPrint(myTree.root())\n\n//# sourceURL=webpack://odin-binary-tree/./src/index.js?");

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