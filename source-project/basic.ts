console.log("Your code goes here by hieple...");
const number1:number = 5;
const number2:number = 2.8;
const printResult = true;
function add(n1:number,n2:number,showResult:boolean) {
    if(showResult){
        console.log(n1+n2)
    }
    return n1+n2
};

const result = add(number1,number2,printResult);
console.log(result);