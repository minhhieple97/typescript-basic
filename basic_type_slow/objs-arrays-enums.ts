enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// enum Role {
//   ADMIN=1,
//   READ_ONLY=2,
//   AUTHOR=3,
// } ngoài kiểu khai báo enum như trên ra chúng ta có thể khai báo như thế này, gán giá trị cho mỗi giá trị trong enum
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //điều này nói rằng tôi muốn có chính xác 2 phần từ trong mảng (có ngoại lệ rằng dữ liệu có kiểu này sẽ không catch được khi chúng ta push) này với kiểu của giá trị trong mảng lần lượt nhưu trên , định danh này gọi là Tuple,
  roleEnum: Role; //điều này nói rằng roleEnum bắt buộc phải nhận một trong các giá trị trong Enum Role;
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["str"],
  role: [2, "autho"],
  roleEnum: Role.ADMIN,
};
console.log(person.name);
if (person.roleEnum === Role.ADMIN) {
  console.log("is author");
}
export {};
