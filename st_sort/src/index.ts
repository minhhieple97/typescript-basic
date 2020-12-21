import NumberCollection from "./NumberCollection";

class Sorter {
    constructor(public collection:number[]|string) {
        this.collection = collection
    }
    sort():void{
        const {length} = this.collection;
        if(typeof this.collection ==='string'){
          const convertToArray = this.collection.split('');
          const {length} = convertToArray
          for (let i = 0; i < length; i++) {
          for (let j = 0; j < length-i-1; j++) {
             if(convertToArray[j]<convertToArray[j+1]){
                  const leftHand = convertToArray[j];
                  convertToArray[j] = convertToArray[j+1];
                  convertToArray[j+1] = leftHand
             }
          }
        }
        this.collection = convertToArray.join();
        }
        if(Array.isArray(this.collection)){
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length-i-1; j++) {
                const arr = new NumberCollection(this.collection);
                arr.compare(j,j+1);
                arr.swap(j,j+1);
                }
              }
        }
        console.log(this.collection)
    }
}
const collection  = new Sorter([1,-1,4,0,6,4,3])
// const collection  = new Sorter('ABJCxyz')
collection.sort()