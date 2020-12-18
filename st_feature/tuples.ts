// const drink = {
//     color: 'brown',
//     carbonated: true,
//     sugar: 40
// };
enum Role {
    ADMIN,
    USER,
    MANAGER
}
console.log(Role.ADMIN)
type Drink = [string, boolean, number];// đây chính là kiểu Tuples
const pepsi: Drink = ['brown', true, 40];
export { };