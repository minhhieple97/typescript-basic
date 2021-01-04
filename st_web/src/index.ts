import User from "./models/User";
const user = new User({ id: 1 });
user.on('change', () => {
    console.log('User was change', user)
});
user.set({ name: 'new name' })
user.fetch()