/*
Day 3 — 陣列方法入門
練習題：

map()：將 [1, 2, 3] 轉成平方 [1, 4, 9]
filter()：從 [1, 2, 3, 4, 5] 過濾出偶數
find()：找出第一個大於 3 的數字
重點：回呼函式 (callback)、箭頭函式搭配 array methods
*/

const arr = [1, 2, 3];
const newArr = arr.map((x) => x * x);
console.log(newArr);

const arr2 = [1, 2, 3, 4, 5];
const newArr2 = arr2.filter((x) => x % 2 === 0);
console.log(newArr2);

console.log(arr2.find((x) => x > 3));

// Bonus
// 1. 把 [1, 2, 3, 4, 5] 先轉成平方，再取出偶數結果：
const result = [1, 2, 3, 4, 5].map((x) => x * x).filter((x) => x % 2 === 0);
console.log(result);

// 2.用 find() 找出物件 { id: 3, name: "Carol" }
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Carol" },
];

const target = users.filter((user) => user.id === 3);
console.log(target.name);

// 陣列方法 includes : 用於檢查陣列中是否包含某個特定的元素
const fruits = ["apple", "banana", "cherry"];

console.log(fruits.includes("banana")); // 輸出: true
console.log(fruits.includes("grape")); // 輸出: false

// *** 3.filter + includes
const allowed = ["Alice", "Carol"];
const all = ["Alice", "Bob", "Carol", "Dan"];
const filtered = all.filter((name) => allowed.includes(name));
console.log(filtered);
