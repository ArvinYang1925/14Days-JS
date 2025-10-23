// 🗓️ Day 6 | 物件與陣列結構拆解
// 重點：?.、??、ES6 解構語法（destructuring）
// 題目僅提供結構，不含答案

// ============================
// *** 題目 1️⃣ 陣列解構 + 預設值
// ============================
// TODO: 透過解構方式，取得前兩個元素，並設定第三個元素的預設值為 0。
const numbers = [10, 20];
const [first, second, third = 0] = numbers;
console.log(first, second, third); // 期望: 10, 20, 0

// ============================
// 題目 2️⃣ 物件解構 + rename
// ============================
// TODO: 使用物件解構並重新命名 key。
// 提示：name -> userName, age -> userAge
const user = { name: "Alice", age: 25, city: "Taipei" };
const { name: userName, age: userAge } = user;
console.log(userName, userAge); // 期望: Alice, 25

// ============================
// 題目 3️⃣ 巢狀物件取值（安全取值）
// ============================
// TODO: 透過 ?. 與 ?? 取得 email，如果不存在則回傳 'N/A'
// 使用可選串連 (?.) 來安全地訪問巢狀屬性。
// 使用空值合併運算子 (??) 在最終取值為 null 或 undefined 時，回傳 'N/A'。
const userProfile = {
  name: "Bob",
  profile: {
    contact: {
      email: "bob@mail.com",
    },
  },
};
console.log(userProfile?.profile?.contact?.email ?? "N/A"); // 期望: "bob@mail.com"
// ⚠️ 若 email 被移除或 profile 為 null，結果應為 'N/A'

// ============================
// *** 題目 4️⃣ 巢狀結構取值 + 預設值
// ============================
// TODO: 透過巢狀解構一次取得 name 與 city，若 city 不存在則預設為 'Unknown'
const person = {
  name: "Carol",
  address: {
    city: "Kaohsiung",
  },
};

const {
  name,
  address,
  address: { city = "Unknown" },
} = person;
console.log(name, address, city);
// ⚠️ 若 address 被刪除，則 city 預設為 'Unknown'

// ============================
// 題目 5️⃣ 函式參數解構
// ============================
// TODO: 透過函式參數解構直接取得 name 與 age
// 若 age 不存在，預設為 18
function greetUser(user) {
  // 在這裡用解構取得 name、age
  const { name, age = 18 } = user;
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

greetUser({ name: "Amy", age: 22 }); // Hello, Amy. You are 22 years old.
greetUser({ name: "Ben" }); // Hello, Ben. You are 18 years old.

// ============================
// 題目 6️⃣ 陣列中的物件解構
// ============================
// TODO: 從陣列中取出第二個使用者的 email（安全取值）
// 若不存在，回傳 'N/A'
const users = [
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
  { name: "Carol" }, // 沒有 email
];
console.log(users[1]?.email ?? "N/A");
// ⚠️ 若第二個元素不存在或沒有 email，結果應為 'N/A'
