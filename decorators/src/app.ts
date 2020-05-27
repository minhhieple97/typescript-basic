function Logger(logString:string) {//Decorator factory
    console.log('LOGGER FACTORY');
    return function (constructor: Function) {//decorator
        console.log(logString);
        console.log(constructor);
    }
}
function WithTemplate(template:string,hookId:string){//Decorator factory
    console.log('TEMPLATE FACTORY');
  return function(test:any){//decorator
      console.log("Rendering template");
      const hookEl = document.getElementById(hookId);
      const p = new test();
      if(hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = p.name;
      }
  }
}
@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>','app')
class Person {
    name = 'Max';
    constructor() {
        console.log('Creating person object...');
    }
}
// Decorator cua class se duoc thuc thi tu duoi len tren
const person = new Person();