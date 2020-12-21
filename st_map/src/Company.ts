import faker from 'faker'
class Company {
    companyName: string;
    catchPharse: string;
    location: {
        lat: number,
        lng: number
    }
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPharse = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    contentMarker(): string {
        return `
        <div>
       <h1> Company Name ${this.companyName}</h1>
       <h3> Catchpharse:${this.catchPharse} </h3>
       </div>
        `
    }
}
export default Company