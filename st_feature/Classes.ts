// Classes hiểu đơn giản là một bản thiết kế để tạo nên đối tượng
class Vehicle {
    // private color: string
    constructor(public color: string) {
        this.color = color
    }
    drive(): void {
        console.log("chugga chugga");
    }
    honk(): void {
        console.log("beep")
    }
}
class Car extends Vehicle {// Nếu Car không define constructor thì khi khởi tạo instance của Car, typescript sẽ tự động gọi constructor của Vehicle
    constructor(public color: string) {
        super(color)
    }
}
new Car('sd').color
const vehicle = new Vehicle('s')