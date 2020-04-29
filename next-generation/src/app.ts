const userName = 'Max';
let age = 300;
const add=(a:number,b:number=1) => a +b;
const printOutput:(a:number|object) =>void = output => console.log(output);
const button = document.querySelector('button')!;
button.addEventListener('click',printOutput);
console.log(add(5));
const addSpread = (...numbers:number[])=>{//điều này nó rằng function nhận đối số đầu vào tùy ý miễn nó có giá trị kiểu number, giá trị đầu vào sẽ được cho vào mảng numbers.
   return numbers.reduce((curResult,curValue)=>{
     return curResult + curValue;
   });
};
const addedNumbers = addSpread(5,10,2,3.7);