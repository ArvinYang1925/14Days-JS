// 🗓️ Day 5 | 綜合練習：資料清洗
// 目標：練習 filter + map 串接與函式組合思維

// ============================
// 題目：找出所有成年人名字
// ============================

// TODO: 使用 filter + map 組合，輸出成年人的名字陣列
// 期望輸出: ["Alice", "Carol"]

const users = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 17 },
  { name: "Carol", age: 25 },
];

// 原始資料 → 篩選 → 轉換 → 輸出結果
const adultUser = users
  .filter((user) => user.age >= 18)
  .map((user) => user.name);

console.log(adultUser);

// *** 輸出成年人的平均年齡

const adultAvgAge = users
  .filter((user) => user.age >= 18)
  .map((user) => user.age)
  .reduce((acc, value, index, arr) => acc + value / arr.length, 0);

console.log(adultAvgAge);

// ============================
// ✅ 今日重點筆記
// ============================
// - filter(): 篩選符合條件的元素
// - map(): 將元素轉換成新格式
// - 串接思維：先篩選、再轉換
// - 結果為新陣列，不改變原始資料
