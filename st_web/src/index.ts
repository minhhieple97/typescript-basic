import User from "./models/User";
const user = new User({ name: "hiep", age: 12, id: '1' });
user.set({ name: "Le Minh Hiep", id: '1' });
user.events.on('click', () => { console.log('Clicked') });
user.events.trigger('click')
// user.sync.fetch(user.data.id);
// console.log({ user });
// user.sync.save()
user.get("id")