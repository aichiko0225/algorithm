/* 常数阶 */
function constant(n) {
  let count = 0;
  let size = 1000000;
  for (let i = 0; i < size; i++) {
    count += 1;
  }
  return count;
}

/* 线性阶 */
function linear(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  return count;
}

/* 线性阶（遍历数组） */
function arrayTraversal(n) {
  let count = 0;
  const arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    count += 1;
  }
  return count;
}

/* 平方阶（冒泡排序） */
/* nums = [2, 1, 3, 5, 77, 23, 12, 99] */
function bubbleSort(nums) {
  let count = 0
  const length = nums.length
  for (let i = length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
        count += 3
      }
    }
  }
  console.log(nums)
  return count;
}

/* 平方阶 */
function quadratic(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count += 1;
    }
  }
  return count;
}

/* 指数阶（循环实现） */
function exponential(n) {
  let count = 0, base = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < base; j++) {
      count++;
    }
    base = base * 2;
  }
  return count;
}

/* 指数阶（递归实现） */
function exponentialRecursive(n) {
  if (n === 1) {
    return 1;
  }
  return exponentialRecursive(n - 1) + exponentialRecursive(n - 1) + 1;
}

/* 对数阶（循环实现） */
function logarithmic(n) {
  let count = 0;
  while (n > 1) {
    n = Math.ceil(n / 2);
    // n = Math.round(n/2);
    count += 1;
    // console.log(n);
  }
  return count;
}

/* 对数阶（递归实现） */
function logarithmicRecursive(n) {
  if (n <= 1) {
    return 0;
  }
  return logarithmicRecursive(n / 2) + 1;
}

/* 线性对数阶 */
function linearLogarithmic(n) {
  if (n <= 1) {
    return 1;
  }
  let count = linearLogarithmic(n / 2) + linearLogarithmic(n / 2);
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  return count;
}

/* 阶乘阶（递归实现） */
function factorialRecur(n) {
  if (n === 0) {
    return 1;
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += factorialRecur(n - 1);
  }
  return count;
}

// invoke functions
bubbleSort([2, 1, 3, 5, 77, 23, 12, 99]);

let count1 = exponential(10);
console.log(count1);

let count2 = exponentialRecursive(10);
console.log(count2);

let count3 = logarithmic(100);
console.log(count3);

let count4 = logarithmicRecursive(100);
console.log(count4);

let count5 = factorialRecur(10);
console.log(count5);
