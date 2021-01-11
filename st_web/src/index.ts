// import Collection from './models/Collection';
// import User, { UserProps } from './models/User';
// const collection = User.buildUserCollection()
// collection.fetch()
// collection.on('change', () => {
//     console.log(collection.models)

import User from "./models/User";
import UserForm from "./views/UserForm";

// })
const userForm = new UserForm(
    document.getElementById('root')!,
    User.buildUser({ name: 'hiep', age: 24 })
);
userForm.render()