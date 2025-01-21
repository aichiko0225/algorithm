/* 类 */
class Node {
  val;
  next;
  constructor(val) {
      this.val = val === undefined ? 0 : val; // 节点值
      this.next = null;                       // 指向下一节点的引用
  }
}

/* 函数 */
function constFunc() {
  // 执行某些操作
  return 0;
}

function algorithm(n) {       // 输入数据
  const a = 0;              // 暂存数据（常量）
  let b = 0;                // 暂存数据（变量）
  const node = new Node(0); // 暂存数据（对象）
  const c = constFunc();    // 栈帧空间（调用函数）
  return a + b + c;         // 输出数据
}

/* 函数 */
function constFunc() {
  // 执行某些操作
  return 0;
}

/* 常数阶 */
function constant(n) {
  // 常量、变量、对象占用 O(1) 空间
  const a = 0;
  const b = 0;
  const nums = new Array(10000);
  const node = new ListNode(0);
  // 循环中的变量占用 O(1) 空间
  for (let i = 0; i < n; i++) {
      const c = 0;
  }
  // 循环中的函数占用 O(1) 空间
  for (let i = 0; i < n; i++) {
      constFunc();
  }
}

/* 线性阶 */
function linear(n) {
  // 长度为 n 的数组占用 O(n) 空间
  const nums = new Array(n);
  // 长度为 n 的列表占用 O(n) 空间
  const nodes = [];
  for (let i = 0; i < n; i++) {
      nodes.push(new ListNode(i));
  }
  // 长度为 n 的哈希表占用 O(n) 空间
  const map = new Map();
  for (let i = 0; i < n; i++) {
      map.set(i, i.toString());
  }
}

/* 线性阶（递归实现） */
function linearRecur(n) {
  console.log(`递归 n = ${n}`);
  if (n === 1) return;
  linearRecur(n - 1);
}

/* 平方阶 */
function quadratic(n) {
  // 矩阵占用 O(n^2) 空间
  const numMatrix = Array(n)
      .fill(null)
      .map(() => Array(n).fill(null));
  // 二维列表占用 O(n^2) 空间
  const numList = [];
  for (let i = 0; i < n; i++) {
      const tmp = [];
      for (let j = 0; j < n; j++) {
          tmp.push(0);
      }
      numList.push(tmp);
  }
}

/* 平方阶（递归实现） */
function quadraticRecur(n) {
  if (n <= 0) return 0;
  const nums = new Array(n);
  console.log(`递归 n = ${n} 中的 nums 长度 = ${nums.length}`);
  return quadraticRecur(n - 1);
}

/* 指数阶（建立满二叉树） */
function buildTree(n) {
  if (n === 0) return null;
  const root = new TreeNode(0);
  root.left = buildTree(n - 1);
  root.right = buildTree(n - 1);
  return root;
}



