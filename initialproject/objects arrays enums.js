"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
//const person :{
//  name: string;
//age: number;
//hobbies: string[];
//role: [number, string]
//}={
var person = {
    name: 'kalyana karthikeyan',
    age: 29,
    hobbies: ['playing, cooking'],
    role: [2, 'author'],
    permission: Role.ADMIN
};
person.role.push('test'); //TS cannot avoid this functionality
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.permission === Role.ADMIN) {
    console.log("is Admin");
}
