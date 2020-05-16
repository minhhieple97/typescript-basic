// Code goes here!
// Intersection Types
// Intersection type cho phép chúng ta kết hợp các loại.
// Intersection tư tưởng rất giống của Interface extends nhưng điểm khác biệt chính là Interface chỉ có thể extends một interface khác (object) những intersection có thể kết hợp nhiều loại bất kể object,string,boolean,number 
type Admin ={
  name:string;
  privileges:string[]
}
type Employess = {
    name:string;
    startDate:number;
}
type ElevatedEmployee = Admin & Employess;//ElevatedEmployee chính là IntersectionType kết hợp của Admin và Employees, chúng ta có thể sử dụng Interface tức là dùng Employess extends Admin
const el:ElevatedEmployee = {
    name:'Hiep',
    privileges:['create-server'],
    startDate:Date.now().valueOf()
}
// Chú ý phân biệt IntersectionType và UnionType 
type unionType = string | number;//Chấp nhận 1 trong 2 kiểu là string và number
type intersectionType = {name:string} & {qty:number};// giá trị của biến có kiểu này bắt buộc phải là một object có cả 2 tài sản là name và qty

interface Bird {
    type:'bird';
    flyingSpeed:number
}
interface Horse {
    type:'horse';
    runningSpeed:number;
}
type Animal = Bird | Horse;
function moveAnimal(animal:Animal){//DiscriminatedUnions , sử dụng pattern này giúp bạn có thể  sử dụng union type để kiểm tra thuộc tính một cách dễ dàng, mỗi interface cần có một properties là type
    let speed;
 switch (animal.type) {
     case 'bird':
     speed = animal.flyingSpeed;
     break;
     case 'horse' :
     speed = animal.runningSpeed;
   }
   console.log("Moving at speed: "+speed)
}

const userInputElement = document.getElementById('message-value') as HTMLInputElement;
userInputElement.value = 'OK nhe'




// function overload
// Sử dụng function overload giúp typescript handled trước được giá trị trả về của function là gì từ đó có những hành vi phù hợp với giá trị đó.
// function add(a:string,b:string): string;
// function add(a:number,b:number): number;
// function add(a:number,b:string): string;
// function add(n1:string|number,n2:string|number){
//     if(typeof n1 ==='string'||typeof n2==='string') return n1.toString()+n2.toString();
//     return n1+n2;
// }

const fetchedUserData = {
    id:'u1',
    name:'Max',
    job:{
        description:'My own company'
    }
}
console.log(fetchedUserData.job?.title);