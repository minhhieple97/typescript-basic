import User from "./models/User";
const user = new User({ name: "hiep", age: 12, id: 1 });
user.on('click', () => { console.log('Clicked') });
user.events.trigger('click')
console.log(user.get('name'));