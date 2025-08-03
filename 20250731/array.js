// 数组（array）是一种线性数据结构，其将相同类型的元素存储在连续的内存空间中。我们将元素在数组中的
// 位置称为该元素的索引（index）。图 4‑1 展示了数组的主要概念和存储方式

const array = Array(5).fill(0); // 创建一个长度为 5 的数组，初始值为 0

const nums = [1, 3, 2, 4, 5]; // 创建一个包含数字的数组

// 数组的基本操作

// 随机访问数组中的元素
function randomAccess(nums) {
  // 随机访问数组中的元素
  const index = Math.floor(Math.random() * nums.length);
  return nums[index];
}

console.log('randomAccess:', randomAccess(nums));

// 插入元素
function insertElement(nums, element, index) {
  if (index < 0 || index > nums.length) {
    throw new Error('Index out of bounds');
  }

  for (let i = nums.length; i > index; i--) {
    nums[i] = nums[i - 1]; // 向后移动元素
  }
  nums[index] = element; // 插入新元素
  return nums;
  // 另一种方法是使用 splice 方法
  // nums.splice(index, 0, element);
  // return nums;
}

console.log('insertElement:', insertElement(nums, 6, 2));

// 删除元素
function deleteElement(nums, index) {
  if (index < 0 || index >= nums.length) {
    throw new Error('Index out of bounds');
  }

  for (let i = index; i < nums.length - 1; i++) {
    nums[i] = nums[i + 1]; // 向前移动元素
  }
  nums.pop(); // 删除最后一个元素
  return nums;
}

// 查找元素
function findElement(nums, element) {

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === element) {
      return i; // 返回元素的索引
    }
  }
  return -1; // 如果未找到元素
  // 另一种方法是使用 indexOf 方法
  // const index = nums.indexOf(element);
  // return index;
}

// 扩容数组
function extendArray(nums, newSize) {
  if (newSize <= nums.length) {
    throw new Error('New size must be greater than current size');
  }

  const newArray = Array(newSize).fill(0); // 创建一个新的数组
  for (let i = 0; i < nums.length; i++) {
    newArray[i] = nums[i]; // 将旧数组的元素复制到新数组
  }
  return newArray;
}