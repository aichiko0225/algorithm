// 哈希表（hash table），又称散列表，它通过建立键 key 与值 value 之间的映射，实现高效的元素查询。
// 具体而言，我们向哈希表中输入一个键 key ，则可以在 𝑂(1) 时间内获取对应的值 value 。

const hashMap = new Map(); // 使用 Map 实现哈希表

// 添加键值对
hashMap.set(12836, '小哈');
hashMap.set(15937, '小啰');
hashMap.set(16750, '小算');
hashMap.set(13276, '小法');
hashMap.set(10583, '小鸭');

const name = hashMap.get(15937); // 根据键获取值
console.log('name:', name);

hashMap.delete(15937); // 删除键值对

/* 遍历哈希表 */
for (const [key, value] of hashMap.entries()) {
  console.log(`key: ${key}, value: ${value}`);
}

for (const key of hashMap.keys()) {
  console.log('key:', key);
}

for (const value of hashMap.values()) {
  console.log('value:', value);
}



