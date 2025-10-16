/*
練習題：

寫一個 sum(a, b) 回傳相加結果

寫一個 isEven(n) 檢查是否為偶數

用箭頭函式重寫上面兩題

重點複習：let / const、函式宣告、箭頭函式
*/

// 屬於「函式表達式」（function expression）
// 不能被 hoisting（在宣告前使用會錯）
const sum = function (a, b) {
  return a + b;
};
console.log(sum(1, 2));

console.log(isEven(0));
console.log(isEven(1));

// 屬於「函式宣告」（function declaration）
// 可以在宣告前使用（因為 hoisting）
function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(2));
console.log(isEven(3));

// const sum2 = (a, b) => {
//   return a + b;
// };

const sum2 = (a, b) => a + b;

console.log(sum2(1, 2));

// const isEven2 = (n) => {
//   return n % 2 === 0;
// };

const isEven2 = (n) => n % 2 === 0;

console.log(isEven2(0));
console.log(isEven2(1));
console.log(isEven2(2));
console.log(isEven2(3));

// Bonus：寫一個 sumRange(start, end)：把 start 到 end 的數字全部加起來
const sumRange = function (start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumRange(1, 10));

// 高效版本（不使用迴圈）
// (首項 + 末項) × 項數 ÷ 2
// 同樣輸出 55，但時間複雜度從 O(n) 降為 O(1)
const sumRangeFormula = (start, end) => ((start + end) * (end - start + 1)) / 2;
console.log(sumRangeFormula(1, 10));
