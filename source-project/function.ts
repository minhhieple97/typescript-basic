function add (n1:number,n2:number):number{
    return n1+n2;
}

function printResults(num:number):void{
    console.log('Result: ',+num);
}
function addAndHandlerd(n1:number,n2:number,cb:(num:number)=>void){
   const result = n1+n2;
   cb(result);
}
addAndHandlerd(10,20,(res)=>{
  console.log(res);
  return res; 
})
console.log(printResults(add(5,12)))















//Trên lý thuyết không thể trả về  undefined trong typescript thay vào đó nó xác định đó là hàm trả về kiểu void, nếu muốn khai báo một hàm trả về undefine bạn có thể dùng mẹo như bên dưới.