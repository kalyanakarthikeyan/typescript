"use strict";
function addB(n1, n2, showResult, phrase) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input');
        [];
    }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
    return n1 + n2;
}
var number1 = 4;
var number2 = 2.5;
var printResultVar = true;
var resultPhrase = 'Result is: ';
addB(number1, number2, printResultVar, resultPhrase);
