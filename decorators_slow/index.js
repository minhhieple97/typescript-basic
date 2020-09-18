"use strict";
// function Logger(logString: string) {
//     return function (constructor: Function) {
//         console.log(logString);
//         console.log(constructor)
//     }
// }
// @Logger('LOGGING - PERSON')
// class Person {
//     // name: string = 'Max';
//     constructor(public name: string) {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//         console.log('Creating person object...')
//     }
// }
// const person = new Person();
// Có nhiều trường hợp mà ta cần phải thêm thông tin hoặc chỉnh sửa các thành phần của class, đặc biệt ở runtime trong trường hợp này ta cần sử dụng decorator, hiểu đơn giản decorator nhưng một hàm, hàm sẽ được áp dụng cho bất cứ thứ gì cần decorator
// Decorator không bao giờ đứng độc lập mà nó thường được khai báo với class, method, nó được viết dưới dạng @expression với expression sẽ trỏ tới một function ở thời điểm runtime, nhiệm vụ của nó là bổ sung hoặc thay đổi cho đối tượng cần decorate
//Trong javascript native khái niệm decorator đã từng xuất hiện dưới dạng functional composition
// function doBusinessJob<T>(arg: T) {
//     console.log('do my job with argument', arg);
// }
// function logDecorator(job: Function) {
//     return function <T>(val: T) {
//         console.log('start my job');
//         const result = job.apply(null, arguments);
//         return result;
//     }
// }
// const logWrapper = logDecorator(doBusinessJob);
// logWrapper(544)
// Trường hợp đơn giản nhất chúng ta muốn invoked hàm trước khi constructor function được define
// function LoggerSimple(constructor: Function) {
//     console.log('LoggerSimple is running...')
//     console.log({ constructor })
//     console.log('==========================')
// }
// // Trường hợp chúng ta muốn truyền tham số vào decorator
// function LoggerAnimal(logString: string) {
//     return function (constructor: Function) {// Hàm này chỉ chạy khi class được khởi tạo (trước khi constructor function được define KHÔNG PHẢI khi contructor function được invoked)
//         console.log('LoggerAnimal is running...')
//         console.log({ logString });
//         console.log({ constructor })
//     }
// }
// function WithTemplate<T extends string>(template: T, hookId: T) {
//     return function (constructor: any) {
//         console.log('Rendering template');
//         const animal = new constructor();
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//             hookEl.innerHTML = template
//             console.log("Logging aniaml in WithTemplate", animal)
//             hookEl.querySelector('h1')!.textContent = animal.name
//         }
//     }
// }
// @LoggerAnimal('LOGGIN - ANIMAL')
// @LoggerSimple
// @WithTemplate<string>('<h1>Hello world</h1>', 'app')
// Khi chúng ta áp dụng nhiều decorator cho một class thì thứ tự thi của nó sẽ ngược với cách bạn khai báo decorator
var Animal = /** @class */ (function () {
    function Animal(footCount) {
        this.footCount = footCount;
        this.name = 'Dgg';
        console.log('Construtor Animal is running..');
    }
    Animal.prototype.running = function () {
    };
    return Animal;
}());
// const dog = new Animal(20)
// console.log(dog)
// Hàm loggerAnimal này sẽ chạy khi class được khởi tạo chi tiết hơn thì trước khi bạn define constructor, không phải khi một instance được tạo ra.
// const dog = new Animal(5)
//  Ý tưởng cốt lõi đằng sau decorator chúng ta thêm một số logic, giống như khi chúng ta sử dụng thư viện, mỗi thư viện cung cấp một loại các hàm (decorator) khi chhúng ta cần sử dụng hàm nó chúng ta láy nó và define nó cùng với một class, class sẽ được bổ sung thêm các tính năng, những decorator sẽ có ảnh hưởng tới người dùng cuối
// ==
// Chúng ta có thể add decorator vào bên trong class như một thuộc tính, lúc này decorator sẽ nhận vào 2 tham số tham số đầu tiên là prototype của object (instance của Product)
function Log(target, propertyName) {
    console.log('First parameter decorator!', target);
    console.log('Second parameter decorator!', propertyName);
}
var Product = /** @class */ (function () {
    function Product(t, p) {
        this.title = t;
        this._price = p;
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error("In valid price");
            }
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getPriceWithTax = function (tax) {
        return this._price * (1 + tax);
    };
    Product.countProduct = 0;
    __decorate([
        Log
    ], Product.prototype, "title", void 0);
    return Product;
}());
