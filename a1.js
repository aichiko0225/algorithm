// 排序

function bubbleSort1() {
  const arr = [9, 1, 5, 8, 3, 7, 4, 6, 2]
  const length = arr.length
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    for (let j = length - 1; j >= i; j--) {
      const num1 = arr[j];
      const num2 = arr[j + 1];
      if (num1 > num2) {
        arr[j] = num2
        arr[j + 1] = num1
      }
    }
  }

  console.log(arr)
}

function bubbleSort2() {
  const arr = [9, 1, 5, 8, 3, 7, 4, 6, 2]
  const length = arr.length
  let flag = true;
  for (let i = 0; i < arr.length && flag; i++) {
    flag = false
    const num = arr[i];
    for (let j = length - 1; j >= i; j--) {
      const num1 = arr[j];
      const num2 = arr[j + 1];
      if (num1 > num2) {
        arr[j] = num2
        arr[j + 1] = num1
        flag = true
      }
    }
  }

  console.log(arr)
}

function selectSort() {
  const arr = [9, 1, 5, 8, 3, 7, 4, 6, 2]
  const length = arr.length
  let min = 0
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    min = i
    for (let j = i + 1; j < length; j++) {
      const num1 = arr[j];
      const num2 = arr[min];
      if (num1 < num2) {
        min = j
      }
    }
    if (min != i) {
      arr[i] = arr[min]
      arr[min] = num;
    }
  }

  console.log(arr)
}

function insertSort() {
  const arr = [9, 1, 5, 8, 3, 7, 4, 6, 2]
  const length = arr.length
  // 设置哨兵
  let sentry = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      sentry = arr[i];
      let j = i - 1;
      for (j = i - 1; arr[j] > sentry; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = sentry
    }
  }
  console.log(arr)
}

function shellSort() {

  const arr = [9, 1, 5, 8, 3, 7, 4, 6, 2]

  let i, j = 0;
  let increment = arr.length
  const length = arr.length

  while (increment > 1) {
    increment = parseInt(increment / 3) + 1;
    console.log(increment)
    for (i = increment; i < length; i++) {
      if (arr[i] < arr[i - increment]) {
        const num = arr[i]
        for (j = i - increment; j >= 0 && num < arr[j]; j -= increment) {
          arr[j + increment] = arr[j]
        }
        arr[j + increment] = num
      }
    }
    console.log(arr)
  }
  console.log(arr)
}


selectSort()
insertSort()
shellSort()