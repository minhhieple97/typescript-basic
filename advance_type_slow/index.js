function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
// Khi bạn khai báo void có nghĩa bạn muốn nói rằng không muốn trả về bất cứ thứ gì trong hàm này (tất nhiên ngầm định hàm vẫn trả về undefined)
printResult(add(5, 12));
// Trường hợp chúng ta muốn định nghĩa một hàm trước khi khai báo nó
var combineValues;
combineValues = add;
