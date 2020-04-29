let userInput:unknown;
let userName:string;
userInput = 5;
userInput = 'Hiep';
if(typeof userInput === 'string'){
    userName = userInput;
}
function generateError(message:string,code:number):never{
    throw {message,code}
}//never tức là function không trả về cái gì cả.
// khác với void tức là bạn không muốn trả về thứ gì ngoại từ undefine
const result = generateError('An error occurred!',500);
console.log(result);