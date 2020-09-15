console.log("Time to get started...");
function add(n1: number, n2: number, showResult: boolean, resultPhase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(resultPhase + result);
  } else return n1 + n2;
}
let number1: number = 3;
let number2: number = 2.8;
const printResult = true;
const resultPhase = "Result is: ";
const result = add(number1, number2, printResult, resultPhase);
console.log(result);
export {};
