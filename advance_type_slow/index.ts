type Admin = {
    name: string,
    privileges: string[]
}
type Employee = {
    name: string;
    startDate: Date
}
type ElevatedEmployee = Admin & Employee
let user: ElevatedEmployee;
user = {
    name: 'hiep',
    privileges: [''],
    startDate: new Date()
}