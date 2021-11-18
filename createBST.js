// 二叉查找树
// Node构造函数
function Node(data, left, right){
  this.data = data;
  this.count = 1;
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
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
  this.preOrder = preOrder;
  this.inOrder = inOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
  this.removeNode = removeNode;
  this.update = update;

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

// 前序遍历
function preOrder (node) {
  if (!node) return [];
  const resArr = [];
  resArr.push(node.show());
  resArr.push(...preOrder(node.left))
  resArr.push(...preOrder(node.right))
  return resArr;
}
// 中序遍历
function inOrder (node) {
  if (!node) return []
  const resArr = []
  resArr.push(...inOrder(node.left))
  resArr.push(node.show());
  resArr.push(...inOrder(node.right))
  return resArr
}

// 后序遍历
function postOrder (node) {
  if (!node) return [];
  const resArr = [];
  resArr.push(...postOrder(node.left));
  resArr.push(...postOrder(node.right));
  resArr.push(node.show());
  return resArr;
}

// 查找最小值
function getMin (node) { 
  let current = node || this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
}


// 查找最大值
function getMax (node) { 
  let current = node || this.root;
  while (current.right !== null) {
    current = current.right;
  }
  return current.data
}

// 查找给定值
function find (val) {
  let current = this.root;
  while (current !== null) {
    if (current.data === val) {
      return current;
    } else if (val < current.data) {
      current = current.left
    } else {
      current = current.right;
    }
  }
  return null;
 }
 

 // 移除节点 只是简单的接收带删除数据，调用removeNode删除它
function remove (data) {
  let root = removeNode(this.root, data);
}

// 删除
function removeNode (node, data) {
  if (node === null) return null;
  // 待删除节点就是当前节点
  if (data === node.data) {
    // 没有子节点的节点
    if (!node.left && !node.right) {
      return null;
    }
    // 没有左子节点的节点
    if (!node.left) {
      return node.right;
    }
    // 没有右子节点的节点
    if (!node.right) {
      return node.left;
    }
    // 有两个子节点的节点
    // 找到右子树上的最小值
    let tempNode = getMin(node.right);
    console.log('tempNode', tempNode);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
    
  }
  else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node
  }
  else {
    node.right = removeNode(node.right, data);
    return node;
  }
}



const bst = new BST();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);

console.log(nums.preOrder(nums.root));
// 删除前打印： [ 23, 16, 3, 22, 45, 37, 99 ]
nums.remove(16);
console.log('remove', nums.preOrder(nums.root))
// 删除后打印： [ 23, 22, 3, 45, 37, 99 ]


