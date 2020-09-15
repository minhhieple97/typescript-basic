// == Union-type
function combineUnionType(input1: number | string, input2: number | string) {
  //Khi chúng ta muốn giá trị đầu vào có thể có nhiều kiểu giá trị đầu vào.
  let result: number | string;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  }
  if (typeof input1 === "string" && typeof input2 === "string") {
    result = input1.concat(input2);
  }
  return result;
}

// == LiteralType
function combineLiteralType(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" // Cái này gọi là LiteralType => resultConversion bắt buộc phải có giá trị là một trong những giá trị được define ở literalType
) {
  let result: number | string;
  if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    resultConversion === "as-number"
  ) {
    result = input1 + input2;
  }
  if (
    typeof input1 === "string" &&
    typeof input2 === "string" &&
    resultConversion === "as-text"
  ) {
    result = input1.concat(input2);
  }
  return result;
}

// == AliasType
type CombineType = number | string; //AliasType
type CombineTypeResultConversion = "as-number" | "as-text"; //AliasType
function combineAliasType(
  input1: CombineType,
  input2: CombineType,
  resultConversion: CombineTypeResultConversion
) {
  let result: number | string;
  if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    resultConversion === "as-number"
  ) {
    result = input1 + input2;
  }
  if (
    typeof input1 === "string" &&
    typeof input2 === "string" &&
    resultConversion === "as-text"
  ) {
    result = input1.concat(input2);
  }
  return result;
}
// Chúng ta có thể sử dụng AliasType để required kiểu giá trị của một biến
type User = { name: string; age: number }; //Chúng ta cũng có thể sử dụng AliasType như thế này.
const user: User = { name: "hiep", age: 23 };
// AliasType mục đích chính của nó chính là tránh lặp code, chúng ta có thể quản lý các AliasType một cách tập trung.
// Ví dụ như sau
// Not clean code
function greet(user: { name: string; age: number }) {
  return user;
}
function greetIsOld(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
// Clean code using AliasType
function greetAliasType(user: User) {
  return user;
}
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
