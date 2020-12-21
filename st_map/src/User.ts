import faker from 'faker'
class User {
    name: string;
    location: {
        lat: number,
        lng: number
    }

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