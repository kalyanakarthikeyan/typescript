function addB(n1:number, n2:number, showResult: boolean, phrase: string){
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error('Incorrect input');[]
    }
    const result = n1+n2;
    if(showResult){
        console.log(phrase + result);
    }else{
        return n1+n2;
    }
    return n1+n2;
}

const number1=4;
const number2=2.5;
const printResultVar = true;
const resultPhrase = 'Result is: '

addB(number1, number2, printResultVar, resultPhrase);