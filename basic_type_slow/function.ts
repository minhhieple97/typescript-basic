function add(n1: number, n2: number): number {
  return n1 + n2;
}
function printResult(num: number): void {
  console.log("Result: " + num);
}
// Khi bạn khai báo void có nghĩa bạn muốn nói rằng không muốn trả về bất cứ thứ gì trong hàm này (tất nhiên ngầm định hàm vẫn trả về undefined)
printResult(add(5, 12));
// Trường hợp chúng ta muốn định nghĩa một hàm trước khi khai báo nó
let combineValues: (a: number, b: number) => number;
combineValues = add;
function addHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
addHandle(10, 20, () => {
  return 3;
});
// Ngoại lệ với void , khi chúng ta chỉ định một hàm dạng callback trả về kiểu void thì nó sẽ có thể trả về bất kì kiểu dữ liệu nào.
export {};
