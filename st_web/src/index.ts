import User from "./models/User";
const user = new User({ id: 1, name: 'newer name', age: 21 });
// user.on('change', () => {
//     console.log('User was change', user)
// });
user.on('save', () => {
    console.log('User was save', user)
})
// user.save()