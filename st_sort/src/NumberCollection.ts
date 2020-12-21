class NumberCollection  {
  constructor(public arr:number[]){
    this.arr = arr
  }
  compare(x:number,y:number):void{
      if(this.arr[x]>this.arr[y]){
         this.swap(x,y)
      }
  }
  swap(i:number,j:number):void{
    const temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp
  }
}
export default NumberCollection