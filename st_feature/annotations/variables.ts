type _Number = number
let apples = 6 as _Number | string
const now: Date = new Date()

type _String = String[]
const arr: (string | number)[] = ['s', 5];
class Car { }
const car: Car = new Car()
type Point = {
    x: number,
    y: number
}
const point = {
    x: 10,
    y: 20
} as Point

type Add = (x: number, y: number) => number
const add = (cb: Add) => { return cb };
//   Type kiểu annotations vs Type kiểu inference


// * Các trường hợp sử dụng annotations

// 1) Hàm trả về giá trị kiểu 'any' type hay typescript không dự đoán được kiểu của giá trị trả về của hàm. 
const json = '{"x":10,"y":20}'
const coordinates: { x: number, y: number } = JSON.parse(json);
//Trong trường hợp này Typescript không dự đoán được kiểu của giá trị trả về bởi hàm JSON.parse nên theo mặc định coordinates sẽ là any 
console.log({ coordinates })

// 2) Khi chúng ta khai báo biến nhưng chưa gán giá trị cho nó.
const words = ["red", "blue", "orange"]
let res: string;
res = words.find((el: string) => el === 'red');


// 3) Biến có thể không suy luận được chính xác bởi Typescript
const numbers = [-10, -1, 12];
let flag: boolean | number = true;
numbers.forEach(el => {
    if (el > 0) flag = el
});
export { }

// Một số kiểu trả về đặc biệt của hàm
const logger = (message: string): void => {
    // khai báo hàm trả về kiểu void để ngăn chúng ta trả về bất kì giá trị nào trong hàm (có thể trả về null hoặc undefine)
    console.log(message)
}
const throwError = (message: string): never => {
    // khai báo hàm trả về kiểu never được hiểu rằng hàm sẽ không trả về bất kì một giá trị nào do nó bị throw Error
    throw new Error(message)
}

const logWeather = (forecase: { date: Date, weather: string }) => {

}

const logWeather_ = ({ date: Date, weather: string }) => {

}
logWeather_({ date: new Date(), weather: '' })