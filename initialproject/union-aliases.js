"use strict";
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 25, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '25', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('max', 'power', 'as-text');
console.log(combinedNames);
function greet(user) {
    console.log("welcome : " + user.name);
}
function isOlder(user, isOlder) { user.age > isOlder; }
;
