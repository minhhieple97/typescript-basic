let userInput: unknown;
let userName: string;
userInput = 5;
userInput = "hiep";
// userName = userInput
// Trường hợp bên trên sẽ phát sinh lỗi
// Phải chạy như sau
if (typeof userInput === "string") {
  userName = userInput;
}
// Sự khác biệt giữa any vs unknow là nếu unknow sẽ chặt chẽ hơn, với unknow giá trị của biến có thể là bất kì giá trị nào nhưng trước khi gán giá trị của một biến nào đó = unknow thì bạn phải xác định rõ kiểu của biến unkonw đó.
export {};
