// // Có 2 loại generic (generic type và generic function)
// // Hiểu đơn giản generic giúp chúng ta cung cấp thêm thông tin cho các khai báo 
// // So sánh giữ generic vs type
// // generic type
// const names: Array<string> = []
// names[0].concat('')
// const arr: (string)[] = ['', '232'];
// arr[0].concat('dsf')

// const promise: Promise<string> = new Promise((res: Function) => {
//     setTimeout(() => {
//         res('this is done')
//     }, 2000);
// })
// promise.then(data => {
//     data.concat()//Sử dụng generic Promise<string> ở bên trên giúp chúng ta có thể sử dụng hàm concat mà không bị warning
// })

// // generic function
// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB)
// }
// const mergeResult = merge({ name: 'abc' }, { age: 23 });
// // console.log(mergeResult.age); báo lỗi do trình biên dịch không biết age có trong mergeresult

// function mergeGeneric<T, U>(objA: T, objB: U) {
//     return Object.assign(objA, objB)
// }
// const mergeResultGeneric = mergeGeneric({ name: 'hioe' }, { age: 23 });
// console.log(mergeResultGeneric.age)// Generic function là một hình thức giúp chúng ta cung cấp thêm thông tin cho trình biên dịch có thể xác định được kết quả đầu ra có những gì. 

// // Trường hợp chúng ta muốn rằng buộc dữ liệu trong generic
// function mergeConstraints<T extends object, U extends number>(objA: T, objB: U) {//Trường hợp này chúng ta muốn rằng buộc generic T phải có kiểu object và U phải có kiểu number 
//     return Object.assign(objA, objB)
// }
// type Lengthy = {
//     length: number
// }
// // Hoàn toàn có thể thay bằng
// interface LengthInterface {
//     length: number
// }
// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//     let desText = 'Got no value';
//     if (element.length === 1) {
//         desText = 'Got 1 element.'
//     }
//     else if (element.length > 1) {
//         desText = 'Got ' + element.length + ' elements';
//     }
//     return [element, desText]
// }
// console.log(countAndDescribe('Hi there.'))


// // Khi chúng ta muốn truyền tham số mà một trong những tham số là key của tham số (object) còn lại 
// function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
//     return obj[key]
// }


// //  Generic class
// // Ý tưởng là đồng bộ hóa
// class DataStorage<T extends number | string | object>  {
//     private data: T[] = []
//     constructor(public text: T) {
//         this.text = text;
//     }
//     addItem(item: T) {
//         this.data.push(item)
//     }
//     removeItem(item: T) {
//         this.data.splice(this.data.indexOf(item), 1)
//     }
//     getItems() {
//         return [...this.data]
//     }
// }
// //  Chúng ta có thể đồng bộ dữ liệu đầu vào của các hàm trong class bằng generic_type t
// const textStorage = new DataStorage<string>('abc');//Đồng bộ dữ liệu đầu vào các hàm đều là string
// const numberStorage = new DataStorage<number | object
// >(100);//Đồng bộ dữ liệu đầu vào trong các hàm đều number

// // 
// interface CourseGoal {
//     title: string,
//     description: string,
//     completeUntil: Date
// }
// function createCourseGoal(input: string, description: string, completeUntil: Date): CourseGoal {
//     const courseGoal = {} as CourseGoal
//     courseGoal.title = input;
//     courseGoal.description = description;
//     courseGoal.completeUntil = completeUntil
//     return courseGoal
// }
// function createCourseGoalPartical<T extends CourseGoal>(input: T) {
//     return input
// }
// createCourseGoalPartical({ title: 'abc', description: 'asdfsd', completeUntil: new Date() }) 

class ArrayOfAnything<T>{
    constructor(public collection:T[]){

    }
    get(index:number):T{
        return this.collection[index]
    }
}
new ArrayOfAnything<string>(['a','b'])

function printStrings<T>(arr:T[]) {
    console.log(arr)
}
printStrings<number>([1,2,3,4])


class Car {
    print(){
        console.log('I am a car')
    }
}
class House {
    print(){
        console.log('I am a House')
    }
}
function printHouseOrCar<T extends House|Car>(arr:T[]):void{
    for (let i = 0; i < arr.length; i++) {
        arr[i].print()
    }
}
printHouseOrCar([new House()])