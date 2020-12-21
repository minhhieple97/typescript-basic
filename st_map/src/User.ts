import faker from 'faker'
import { Mappable } from './CustomMap';
class User implements Mappable {
    name: string;
    location: {
        lat: number,
        lng: number
    }
    color: string = 'red'

    constructor() {
    
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    contentMarker(): string {
        return `User Name: ${this.name}`
    }
}
export default User