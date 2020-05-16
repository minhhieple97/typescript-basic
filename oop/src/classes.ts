// //Interface hiểu đơn giản có chức năng mô tả cấu trúc của một object mà chúng ta có thể sử dụng nó để mô tả một vật thể sẽ trông như thế nào ?
// interface Person {
//   //đây là một ví dụ về interface
//   readonly name: string;
//   age: number;
//   greet(phrase: string): void;
// }
// let user1: Person; //dòng này có nghĩa khi chúng ta build user1 thì cần phải tuân thủ theo interface Person
// user1 = {
//   name: "hiep",
//   age: 42,
//   greet: () => {
//     console.log("Hello");
//   },
// };
// // user1.name = 'Le' không thể set tên do name ở interface đã bị set readonly tức là chỉ được set 1 lần
// //cần phân biệt interface và type
// // chúng ta có thể sử dụng type có chức năng tương tự bên trên như sau
// type Person_ = {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// };
// // Điều khác biệt lớn nhất có lẽ là Interface cho phép một class được phép implement và phải tuân thủ, interface giống như một hợp đồng, chú ý rằng một class có thể được implement từ nhiều Interface
// interface Test {
//   name: string;
//   greet: () => void;
// }
// class TestClass implements Test {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   greet() {
//     console.log("Hello world");
//   }
// }
// const testObject = new TestClass("haha"); //dòng này sẽ tương đương với const testObject:Test
// //Chúng ta không thể set public,private,protected cho properties hay method ở trong interface nhưng chúng ta có thể set readonly

//Implement multile interface
// C1
// interface Named {
//     readonly name:string
// }
// interface Greetable {
//     greet(phrase:string):void
// }
// class Person implements Greetable, Named {//Lúc này Person được implement từ nhiều interface nên nó phải triển khai tất cả các tài sản trên các interface mà nó implement
//     name:string;
//     age:number;
//     constructor(n:string){
//         this.name = n;
//         this.age = 20;
//     }
//     greet(){
//         console.log("Hello world")
//     }
// }
// C2
// interface Named {
//   readonly name: string;
// }
// interface Greetable extends Named {//Interface có thể được kế thừa từ 1 hoặc nhiều interface khác (khác với class khi chỉ được kế thừa từ duy nhất 1 class khác)
//     greet(phrase:string):void;
// }
// class Person implements Greetable {//KHi person được extends từ Greetable thì nó phải triển khai tất cả các tài sản ở interface nó implement và cả những tài sản ở các interface mà interface Greetable extends
//  name:string;
//  constructor(n:string){
//      this.name = n;
//  }
//  greet(){
//      console.log("Hello world")
//  }
// }


























// Chú ý với trường hợp đối với một hàm
// Vì một hàm cũng là một object trong JS nên có thể sử dụng Interface để thiết kế một hàm
// C1
// type AddFn = (a:number,b:number)=>number;//Chú ý rằng khai báo type và khai báo interface rất giống nhau về chức năng.
// let add:AddFn;
// add = (n1:number,n2:number)=>{
//     return n1+n2;
// }
// C2
// Sử dụng interface để thiết kế một hàm;
// interface AddFn {
//     (a:number,b:number):number
// }
// let add:AddFn;
// add = (n1:number,n2:number)=>{
//     return n1+n2;
// }

interface Named {
    readonly name?:string
}
class Person implements Named {
    name?:string;
    constructor(n?:string){
        if(n) this.name = n;
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}
const user = new Person('Max');