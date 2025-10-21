// 🗓️ Day 4 | reduce & sort 延伸挑戰題

// ============================
// 題目 1️⃣ reduce：統計字元出現次數
// ============================
const str = "hello world";
// TODO: 使用 reduce 統計字元次數
// console.log(...); // 期望: { h:1, e:1, l:3, o:2, w:1, r:1, d:1 }

// 方法 1
// const result = str.split("").reduce((acc, char) => {
//   if (acc[char]) {
//     acc[char]++;
//   } else {
//     acc[char] = 1;
//   }
//   return acc;
// }, {});

// 方法 2
const result = str
  .split("")
  .filter((char) => char !== " ")
  .reduce((acc, char) => {
    // acc[char] || 0 會判斷 acc[char] 是否存在。
    // 如果存在，則取該值；如果不存在（即 undefined），則取 0。
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
console.log(result);

// ============================
// 題目 2️⃣ reduce：分組統計
// ============================
const students = [
  { name: "Amy", grade: "A" },
  { name: "Ben", grade: "B" },
  { name: "Carol", grade: "A" },
  { name: "Dan", grade: "C" },
  { name: "Eve", grade: "B" },
];
// TODO: 使用 reduce 統計每個等級的人數
const re = students.reduce((acc, std) => {
  //   if (acc[std.grade]) {
  //     acc[std.grade]++;
  //   } else {
  //     acc[std.grade] = 1;
  //   }

  // 簡潔寫法 (使用邏輯 OR)
  const gradeKey = std.grade;
  // 如果 acc[gradeKey] 不存在（即 undefined），則使用 0，然後加 1
  acc[gradeKey] = (acc[gradeKey] || 0) + 1;

  // *** 修正點：必須返回累加器 ***
  return acc;
}, {});
console.log(re);

// 期望: { A:2, B:2, C:1 }

// ============================
// 題目 3️⃣ reduce：計算平均年齡
// ============================
const users = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 25 },
];
// TODO: 使用 reduce 計算平均年齡
const sumAge = users.reduce((acc, user) => acc + user.age, 0);
const avgAge = Math.round(sumAge / users.length);
console.log(avgAge);
// 期望: 25

// ============================
// 題目 4️⃣ 一行程式挑戰（One-liner）
// ============================
const arr = [1, 2, 3, 4];
// TODO:
// 1️⃣ 總和: reduce(...)
const sum = arr.reduce((acc, value) => acc + value, 0);
console.log(sum);
// 2️⃣ 乘積: reduce(...)
const product = arr.reduce((acc, value) => acc * value, 1);
console.log(product);
// ＊＊＊ 3️⃣ 最大值: reduce(...)

// const max = arr.reduce((acc, value) => {
//   if (value > acc) {
//     acc = value;
//   }
//   return acc;
// }, 0);

// 初始值可以省略，reduce 會使用陣列的第一個元素 (1) 作為初始值
// 或者明確寫出：
// const max = arr.reduce((acc, value) => (value > acc ? value : acc), arr[0]);
const max = arr.reduce((acc, value) => (acc > value ? acc : value));
// 最大值: reduce(...) - 使用 Math.max()
// const max = arr.reduce((acc, value) => Math.max(acc, value));
console.log(max);

console.log("Day 4 延伸挑戰題完成 ✅");
