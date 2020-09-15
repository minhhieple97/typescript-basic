// interface Person {
//     name: string;
//     age: number;
//     greet(phrase: string): void
// }
// let user1: Person;
// user1 = {
//     name: 'hiep', age: 23, greet: function (pharse: string) {
//         console.log(pharse + '' + this.name)
//     }
// }
// user1.greet('Hi there , my name is ')

// So sánh interface vs type
// Về mặt chức năng type và interface không có gì khác biệt thâm chí type sẽ đa năng hơn, type cũng có khả năng mô tả một object, type còn có thể lưu trữ những thứ như union-type và tuple type
// Chúng ta nên sử dụng Interface khi cần mô tả một đối tượng, mục đích chuyên môn của nó là như vậy
// Ngoài ra interface còn có thể được implement bởi class, một class có khả năng implement từ một hoặc nhiều interface


interface Info {
    readonly id: string,//chỉ được set duy nhất một lần
    name: string,
    job?: string,//bạn sử dụng dấu ? trong trường hợp không muốn bắt buộc các class được implement từ Interfa
    gym?: (method: string) => void
}
interface Greetable extends Info {
    greet(phrase: string): void
}
class Person implements Greetable {// Do Person implement từ Greetable nên nó phải tuân thủ cấu trúc của interface này, có thể bổ sung các filed.
    public name: string
    public job?: string
    constructor(name: string, public id: string, job?: string) {
        this.name = name
        if (job) {
            this.job = job
        }
    }
    greet(phrase: string) {

    }

}
// So sánh một chút với abstract class thì khá giống interface nhưng cso điểm khác biệt đầu tiên đó là đối với abstract class thì mỗi class chỉ được phép extends từ duy nhất một abstract class mà thôi
// Đối với abstract class thì mỗi abstract method sẽ được ghi đè ở class extends từ abstract class, còn ở interface thì đơn giản class implement từ interface đó nó chỉ triển khai theo đúng khuôn mẫu.
const hiep = new Person('lehiep', '23');
// hiep.id = 45

// Sử dụng Interface để thay thế Type
type AddFnType = (n1: number, n2: number) => number;//dùng Type
let addFnType: AddFnType
addFnType = (n1: number, n2: number) => n1 + n2
interface AddFnInterface {//Dùng Interface
    (n1: number, b: number): number
}
let addFnInterface: AddFnInterface