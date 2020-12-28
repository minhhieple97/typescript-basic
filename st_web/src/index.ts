import User from "./models/User";

const user = new User({ name: "hiep", age: 12 });
console.log({ user });
user.set({ name: "Le Minh Hiep" });
