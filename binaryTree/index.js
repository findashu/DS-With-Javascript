var express  = require('express'),
	app = express();

var tree;
function start(){
	tree = new Tree();
	tree.addValue(5);
	tree.addValue(3);
	tree.addValue(7);
	console.log(JSON.stringify(tree));
}

function Tree(){
	this.root = null;
}

Tree.prototype.addValue = function(val){
	var n = new Node(val);
	if(this.root == null){
		this.root = n;//created root object
	}else {
		this.root.addNode(n);//
	}
}

function Node(val){
	this.value = val;
	this.left = null;
	this.right = null;
}

Node.prototype.addNode = function(n){
	if(n.value < this.value){
		if(this.left == null){
			this.left = n;
		}else{
			this.left.addNode(n)
		}
		
	}else if(n.value > this.value) {
		if(this.right == null){
			this.right = n;
		}else {
			this.right.addNode(n);
		}
	}
}

/*app.get('/',function(req,res){
	 res.sendFile('index.html', {
     root: './'
   });
	
});*/


app.listen('3000',start);