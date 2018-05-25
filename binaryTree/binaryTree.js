/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var tree;
function setUp (){
  tree = new Tree();
  tree.addValue(5);
  tree.addValue(3);
  tree.addValue(7);
  tree.addValue(12);
  tree.addValue(15);
  tree.addValue(35);
  tree.addValue(2);
  tree.addValue(58);
  console.log(tree);
  tree.traverse();
}

//created a tree
function Tree(){
  this.root = null;
}

//add value    
Tree.prototype.addValue = function(val){
  var n = new Node(val);
  if(this.root == null){
    this.root = n;
  }else {
    this.root.addNode(n);
  }
}

Tree.prototype.traverse = function(){
  this.root.visit();
}
Node.prototype.addNode = function(n){
  if(n.value < this.value){
    if(this.left == null){
      this.left = n;
    }else{
      this.left.addNode(n);
    }
  }else if (n.value > this.value){
    if(this.right == null){
      this.right = n;
    }else{
      this.right.addNode(n); 
    }
  }
}
Node.prototype.visit = function(){
  if(this.left != null){
    this.right.visit();
  }
  console.log(this.value);
  if(this.right != null){
    this.right.visit();
  }
}

  function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }

setUp();
