// 二叉查找树
// Node构造函数
function Node(data, left, right){
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}
// show 函数用来返回当前节点的值
function show(){
  return this.data;
}

// 构造BST类
function BST(){
  this.root = null;
  this.insert = inset;
}

// 向树中插入节点
function inset(data){
  let n = new Node(data, null, null);
  if(this.root === null){
    this.root = n;
  }else{
    let current = this.root;
    let parent;
    while(true){
      parent = current;
      if(data < current.left){
        current = current.left;
        if(current === null){
          parent.left = n;
          break;
        }
      }else{
        current = current.right;
        if(current === null){
          parent.right = n;
          break;
        }
      }
    }
  }
}