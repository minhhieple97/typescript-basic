type Combineble = number | string; //combine type
type ConversionDescriptor = 'as-number' | 'as-text' // union-alias
function combine(
    input1:Combineble,
    input2:Combineble,
    resultConversion: ConversionDescriptor
) {
    let result;
    if(typeof input1==="number"&&typeof input2==="number") result = input1 + input2;
    else result = input1.toString() + input2.toString()
    return result;
};
const combineAges = combine(30,26,'as-number');
console.log(combineAges);