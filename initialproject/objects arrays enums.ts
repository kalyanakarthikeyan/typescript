enum Role 
{
    ADMIN, READ_ONLY, AUTHOR
}

//const person :{
  //  name: string;
    //age: number;
    //hobbies: string[];
    //role: [number, string]
//}={


    const person = {
    name: 'kalyana karthikeyan',
    age: 29,
    hobbies: ['playing, cooking'],
    role: [2, 'author'],
    permission: Role.ADMIN
}


person.role.push('test') //TS cannot avoid this functionality

console.log(person.name);
for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}

if(person.permission === Role.ADMIN){
    console.log("is Admin")
}