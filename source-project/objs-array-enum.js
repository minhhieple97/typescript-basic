"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'hiep',
    age: 30,
    hobbies: ['Sport'],
    role: Role.ADMIN
};
var favoriteActivities;
console.log(person.role);
favoriteActivities = ["Sports"];
console.log(person.name);
console.log(person);
