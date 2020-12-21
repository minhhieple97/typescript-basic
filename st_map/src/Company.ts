import fake  from "faker";

class Company {
    companyName:string;
    catchPharase:string;
    location:{
        lat:number;
        lng:number;
    }
    constructor() {
        this.companyName = fake.company.companyName();
        this.catchPharase = fake.company.catchPhrase();
        this.location = {
            lat:parseFloat(fake.address.latitude()),
            lng:parseFloat(fake.address.longitude())
        }
    }
}
export default Company