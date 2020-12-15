var apples = 6;
var now = new Date();
var arr = ['s', 5];
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
var point = {
    x: 10,
    y: 20
};
var add = function (cb) { return cb; };
//   Type kiểu annotations vs Type kiểu inference
// Các trường hợp sử dụng annotations
// 1) Hàm trả về giá trị kiểu 'any' type
var json = '{"x":10,"y":20}';
var coordinates = JSON.parse(json);
console.log({ coordinates: coordinates });
