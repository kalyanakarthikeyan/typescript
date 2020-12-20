"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(n1) {
    console.log(n1);
}
function printAndUndefined(n1) {
    console.log(n1);
    return;
}
var combinable;
combinable = add;
console.log(combinable(10, 10));
function addAndHandle(n1, n2, cb) {
    cb(n1 + n2);
}
addAndHandle(10, 20, function (a) { return console.log(a); });
