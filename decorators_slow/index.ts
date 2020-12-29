// const { performance } = require('perf_hooks');
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

//         console.log('Creating person object...')
//     }

// }
// const person = new Person();

// Có nhiều trường hợp mà ta cần phải thêm thông tin hoặc chỉnh sửa các thành phần của class, đặc biệt ở runtime thì có rất nhiều trường hợp ta cần sử dụng decorator, hiểu đơn giản decorator là một pattern trong lập trình mà bạn bọc một thứ gì đó để thay đổi hành vi của nó, decorator về cơ bản là một hàm, hàm sẽ decorate cho bất cứ thứ gì cần(class,function,method,properties) decorator
// Decorator không bao giờ đứng độc lập mà nó thường được khai báo với class, method, nó được viết dưới dạng @expression với expression sẽ trỏ tới một function ở thời điểm runtime, nhiệm vụ của nó là bổ sung hoặc thay đổi cho đối tượng cần decorate
// Decorator được excute khi class được define không phải khi chúng ta tạo instance của class đó
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
// class Animal {
//     public name: string = 'Dgg'
//     constructor(public footCount: number) {
//         console.log('Construtor Animal is running..')
//     }
//     running() {

//     }
// }
// const dog = new Animal(20)
// console.log(dog)
// Hàm loggerAnimal này sẽ chạy khi class được khởi tạo chi tiết hơn thì trước khi bạn define constructor, không phải khi một instance được tạo ra.
// const dog = new Animal(5)
//  Ý tưởng cốt lõi đằng sau decorator chúng ta thêm một số logic, giống như khi chúng ta sử dụng thư viện, mỗi thư viện cung cấp một loại các hàm (decorator) khi chúng ta cần sử dụng hàm nó chúng ta lấy nó và define nó cùng với một class, class sẽ được bổ sung thêm các tính năng, những decorator sẽ có ảnh hưởng tới người dùng cuối

// ==
// Chúng ta có thể add decorator vào bên trong class như một thuộc tính, lúc này decorator sẽ nhận vào 2 tham số tham số đầu tiên là prototype của object (instance của Product)
// function Log(target: any, propertyName: string | Symbol) {
//     console.log('First parameter decorator!', target)
//     console.log('Second parameter decorator!', propertyName)
// }
// class Product {
//     @Log
//     title: string;
//     private _price: number;
//     static countProduct: number = 0
//     constructor(t: string, p: number) {
//         this.title = t;
//         this._price = p;
//     }
//     set price(val: number) {
//         if (val > 0) {
//             this._price = val
//         }
//         else {
//             throw new Error("In valid price");

//         }
//     }
//     getPriceWithTax(tax: number) {
//         return this._price * (1 + tax)
//     }
// }

// function logCreate(val){
//     return function(constructor:Function){

//     }

// }
// @logCreate(123)
// class Aniaml {
//     constructor(public name:string,public weight:number) {
//         console.log("CREATE ANIMAL INSTANCE _")
//         this.name = name;
//         this.weight = weight
//     }
// }
// const dog = new Aniaml('Nick',45)

// function Logger(value) {
//     console.log('LOGGER RUNNING')
//     const hook = document.getElementById('app')!;
//     hook.innerHTML = '<h1>Le minh hiep</h1>'
//     return function (constructor: any) {
//         // console.log('LOGGING....')
//         console.log('CONSTRUCTOR LOGGER RUNNING')
//     }
// }
// function WithTemplate(template: string, hookId: string) {
//     console.log('WITH TEMPLATE RUNNING')
//     return function (constructor: Function) {
//         const hook = document.getElementById(hookId)!;
//         hook.innerHTML = template;
//         console.log('CONSTRUCTOR WITH TEMPLATE RUNNING')
//     }
// }

// @Logger('123')
// @WithTemplate('<h1>Le minh hiep</h1>', 'app')
// class Person {
//     constructor(public name: string, public age: number) {
//         this.name = name;
//         this.age = age;
//         console.log('CONSTRUCTOR PERSON RUNNING')
//     }
// }
// const hiep = new Person('hiep', 23)

// method decorator : có nhiệm vụ decorator cho một method trong class
// nó sẽ nhận vào 3 tham số lần lượt là class chứa meothod, tên của phương thức, một số thông tin về các đặc điểm của method như argument...

const myMethodDecorator = (target: Object, propertyKey: string, description: PropertyDescriptor) => {
    console.log({ target }, { propertyKey }, { description })
}
// properties decorator : khá giống với method decorator nhưng nó có nhiệm vụ decorator cho một thuộc tính, khác biệt duy nhất với method decorator là nó chỉ có 2 đối số
const myPropertiesDecorator = (target: Object, propertyKey: string) => {
    console.log({ target, propertyKey })
}
const measure = (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
) => {
    console.log("BEFORE LAUNCH RUNNING...")
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const finish = performance.now();
        console.log(`Execution time :${finish - start} milliseconds`);
        return result
    }
    return descriptor
}
const minimunFuel = (fuel: number) => (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log({ target, propertyKey, descriptor });
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        // if (this.fuel < fuel) {
        //     console.log("Not enough fuel!")
        // }
        // else {
        //     originalMethod.apply(this, args)
        // }
    }
}
// Decorator factory
// Chúng ta sử dụng Decorator fatory khi cần cấu hình decorator sẽ hoạt động khác nhau cho mỗi bối cảnh khác nhau .
const changeValueDecorator = (value) => (target: Object, propertyKey: string) => {
    // Object.defineProperty(target, propertyKey, propertyKey)
    console.log({ propertyKey })

}



class Rocket {
    fuel = 200
    @minimunFuel(100)
    launch() {
        console.log("Launching rocket in 3..2..1")
    }
}
const rocket = new Rocket();
// rocket.launch('', '')
console.log(rocket.fuel)
rocket.launch()
// Các use case sử dụng Decorators trong TypeScript
// export default {}