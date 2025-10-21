/*
練習題：

用 reduce() 求 [1, 2, 3, 4] 的總和
排序 [5, 2, 8, 1] 由小到大
陣列物件排序：依照年齡排序 {name, age}
重點：reduce() accumulator、sort() 比較函式
*/

// reduce()
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, value) => acc + value, 0);
console.log(sum);

// sort()
const nums = [5, 2, 8, 1];
nums.sort((a, b) => a - b);
console.log(nums);

// 依照年齡排序 {name, age}
const people = [
  { name: "Amy", age: 25 },
  { name: "Ben", age: 19 },
  { name: "Carol", age: 30 },
];
people.sort((a, b) => a.age - b.age);
console.log(people);
