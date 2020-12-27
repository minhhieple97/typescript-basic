var ArrayOfAnything = (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
new ArrayOfAnything(['a', 'b']);
function printStrings(arr) {
    console.log(arr);
}
printStrings([1, 2, 3, 4]);
var Car = (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log('I am a car');
    };
    return Car;
}());
var House = (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log('I am a House');
    };
    return House;
}());
function printHouseOrCar(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printHouseOrCar([new House()]);
