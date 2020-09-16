// Có 2 loại generic (generic type và generic function)
// Hiểu đơn giản generic giúp chúng ta cung cấp thêm thông tin cho các khai báo 
// So sánh giữ generic vs type
// generic type
const names: Array<string> = []
names[0].concat('')
const arr: (string)[] = ['', '232'];
arr[0].concat('dsf')

const promise: Promise<string> = new Promise((res: Function) => {
    setTimeout(() => {
        res('this is done')
    }, 2000);
})
promise.then(data => {
    data.concat()//Sử dụng generic Promise<string> ở bên trên giúp chúng ta có thể sử dụng hàm concat mà không bị warning
})

// generic function
function merge(objA: object, objB: object) {
    return Object.assign(objA, objB)
}
const mergeResult = merge({ name: 'abc' }, { age: 23 });
// console.log(mergeResult.age); báo lỗi do trình biên dịch không biết age có trong mergeresult

function mergeGeneric<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}
const mergeResultGeneric = mergeGeneric({ name: 'hioe' }, { age: 23 });
console.log(mergeResultGeneric.age)// Generic function là một hình thức giúp chúng ta cung cấp thêm thông tin cho trình biên dịch có thể xác định được kết quả đầu ra có những gì. 