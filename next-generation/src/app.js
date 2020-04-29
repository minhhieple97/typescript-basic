"use strict";
var userName = 'Max';
var age = 300;
var add = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
var printOutput = function (output) { return console.log(output); };
var button = document.querySelector('button');
button.addEventListener('click', printOutput);
console.log(add(5));
var addSpread = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    });
};
var addedNumbers = addSpread(5, 10, 2, 3.7);
