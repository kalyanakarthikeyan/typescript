function add(n1: number, n2: number){
    return n1+n2;
}

function printResult(n1: number): void{
    console.log(n1)
}

function printAndUndefined(n1: number): undefined{
    console.log(n1);
    return
}

let combinable : (a: number, b: number) => number;
combinable = add
console.log(combinable(10,10));


function addAndHandle(n1: number, n2: number, cb:(num: number)=> void){
    cb(n1+n2);
}

addAndHandle(10,20, (a)=> console.log(a));