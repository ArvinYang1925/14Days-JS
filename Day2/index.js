/*
練習題：

建立一個物件 user，含 name, age，寫函式輸出 "Hello, I'm Arvin, 25."
陣列 [1, 2, 3] → 每個元素加 1
陣列 [3, 5, 2] → 找出最大值
重點：解構賦值、for / for...of、Math.max(...arr)
*/
/*
提示區

模板字串： `Hello, I'm ${name}, ${age}.`

解構改名：const { name: username, age: years } = user

安全取值：obj?.a?.b ?? "N/A"

複製陣列：const copy = arr.slice() 或 [...arr]

排序：arr.slice().sort((a, b) => a.key - b.key)

加總：arr.reduce((s, x) => s + x, 0)
*/

// 題目 A： 建立 user 物件並輸出一句介紹
// 建立一個物件 user，含 name, age，寫函式輸出 "Hello, I'm Arvin, 25."
const user1 = {
  name: "Arvin",
  age: 25,
};

function intro(user) {
  return `Hello, I'm ${user.name}, ${user.age}.`;
}

console.log(intro(user1));

// 題目 B： 物件解構與改名
// 請用解構把 user.name 取成變數 username、user.age 取成變數 years
const { name: username, age: year } = user1;
console.log(username, year);

// *** 題目 C： 安全取值（Optional Chaining）
// 請安全取得 email 與 phone（phone 可能不存在），若不存在回傳 "N/A"
// ??（Nullish Coalescing Operator，空值合併運算子）
const profile = {
  account: {
    email: "a@example.com",
  },
};

const email = profile?.account?.email ?? "N/A";
const phone = profile?.account?.phone ?? "N/A";

console.log(email, phone);

// 題目 D： 將 [1,2,3] 每個元素 +1
// 方法 1
const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   arr[i]++;
// }
// console.log(arr);

// 方法 2 使用 map (最常用且推薦的做法)
const newArr = arr.map((x) => x + 1);

console.log(newArr);

// 方法3 使用 forEach (修改原陣列)
arr.forEach((element, index) => {
  arr[index] = element + 1;
});

console.log(arr);

// ** 題目 E： 找最大值與平均值
// max = 100, avg = 85
const scores = [90, 80, 100, 70, 85];

// 1. 找出最大值
const max = Math.max(...scores);

// 2. 使用 reduce 求和
const sum = scores.reduce((acc, current) => acc + current, 0);

// 3. 計算平均值並四捨五入
const avg = Math.round(sum / scores.length);

console.log(`最大值 (max) = ${max}`); // 輸出: 最大值 (max) = 100
console.log(`總和 (sum) = ${sum}`); // 輸出: 總和 (sum) = 425
console.log(`平均值 (avg) = ${avg}`); // 輸出: 平均值 (avg) = 85
