 type combinable = number | string;
 type conversionType = 'as-number'|'as-text';
 
 function combine(input1: combinable, input2:combinable, resultConversion: conversionType){
     let result;
     if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
         result = +input1 + +input2;
     }else{
         result = input1.toString() + input2.toString();
     }
     return result;
 }

 const combinedAges = combine(30, 25, 'as-number');
 console.log(combinedAges);

 const combinedStringAges = combine('30', '25', 'as-number');
 console.log(combinedStringAges);

 const combinedNames = combine('max', 'power', 'as-text');
 console.log(combinedNames);

 type User = {name: string, age: number}

 function greet(user: User){
     console.log("welcome : "+user.name);
 }

 function isOlder(user: User, isOlder: number) {user.age>isOlder};
 