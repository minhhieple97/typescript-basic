// Introduction generic type
const age: Array<string> = [];
const names = ['Max','Manel']
const promise:Promise<object> = new Promise((res)=>{
    setTimeout(() => {
      res({
        data:"done"
      })
    },2000);
});
//Nhìn chung generic giúp chúng ta cho typescript biết trong quá trình biên dịch xác định thứ gì sẽ được tạo ra ví dụ như sẽ tạo ra một mảng có kiểu string hoặc một object sẽ trả về cái gì ? ví dụ tạo ra một object Promise resolve trả về một object => từ đó sẽ có thể áp dụng các method phù hợp lên kết quả

function merge(objA:object,objB:object) {
  return Object.assign(objA,objB)
}
const mergedObj = merge({name:'Max'},{age:30}) as {name:string,age:number}
console.log(mergedObj.name)// nếu chúng ta muốn access name properti của merged thì typescript sẽ báo lỗi vì nó không thể kiểm soát bên trong mergedObj lúc này chúng ta phải khai báo vs typescript pattern của mergedObject.
console.log(merge({name:'Max'},{age:20}))

// Sử dụng generic 
function mergedGeneric<T,U>(objA:T,objB:U) {
  return Object.assign(objA,objB);
}
const mergedGenericObj = mergedGeneric({name:'Max'},{age:30});
const mergedGenericObj2 = mergedGeneric<{name:string,hobbies:string[]},{age:number}>({name:'Max',hobbies:[]},{age:20})//Bạn hoàn toàn có thể gọi lại hàm và định nghĩa lại tính chất của generic

//Làm việc với constrains 
function mergedConstraints<T extends object,U extends object> (objA:T,objB:U){//đối số truyền vào có thể là bất cứ giá trị nào nhưng phải là object, sử dụng từ khóa extends để tạo constraints
 return Object.assign(objA,objB)
};
const mergedObjConstraints = mergedConstraints({name:'Max'},{age:30})


function extractAndConvert<T extends object,U extends keyof T>(obj:T,key:U) {//chức năng keyOf khai báo cho typescrit rằng bạn sẽ lấy key là một trong số các key của obj 
  return `Value: ` + obj[key]
}
extractAndConvert({name:'hiep'},'name')

class DataStorage<T extends string | number | object > {//generic class
  private data: T[] =[];
  addItem(item:T){
    this.data.push(item)
  }
  removeItem(item:T){
    if(this.data.indexOf(item)) return 
    this.data.splice(this.data.indexOf(item),1)
  }
  getItems(){ 
    return [...this.data]
  }
}
// Sử dụng generic với class giúp chúng ta có khả năng kiểm soát kiểu dữ liệu đầu vào, linh hoạt bới vì có thể kết hợp nhiều kiểu dữ liệu .
const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
console.log(textStorage.getItems())
const numberStorate = new DataStorage<number>()
const objectStorage = new DataStorage<object>();
objectStorage.addItem({name:'Max'})
objectStorage.addItem({name:'Manu'})
objectStorage.removeItem({name:'Max'})
console.log(objectStorage.getItems())