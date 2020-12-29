import User from "./models/User";

const user = new User({ name: "hiep", age: 12 });
user.set({ name: "Le Minh Hiep", id: '1' });
user.on('add', () => {
    console.log("User added")
})
user.trigger('add');
user.fetch();

console.log({ user });

user.save()