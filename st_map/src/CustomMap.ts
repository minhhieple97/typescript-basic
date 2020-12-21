import Company from "./Company"
import User from "./User"
type TypeObj = User | Company
type TypeObj_ = {
    location:{
        lat:number,
        lng:number
    }
}
interface TypeObj__ {
    location:{
        lat:number,
        lng:number
    }
}
class CustomMap {
   private googleMap:google.maps.Map
   private googleMarker:google.maps.Marker
    constructor(divId:string){
        this.googleMap = new google.maps.Map(document.getElementById(divId),{
            zoom:1,
            center:{
                lat:0,
                lng:0
            }
        })
        // this.googleMarker = new google.maps.Marker();
    }
    addUserMarket(user:User):void{
       new google.maps.Marker({
           map:this.googleMap,
           position:{
               lat:user.location.lat,
               lng:user.location.lng
           }
       })
    }
    addCompanyMarket(company:Company):void{

    }
    addObj(obj:TypeObj__):void{
   new google.maps.Marker({
       map:this.googleMap,
       position:{
           lat:obj.location.lng,
           lng:obj.location.lng
       }
   })
    }
}
export default CustomMap