class OperatorError extends Error{
    ;
}
function calc1(a){
    [op, ...x] = a;
    switch(op){
        case '+': return x.reduce((a,b)=>a+b,0);break;
        case '-': return x.reduce((a,b)=>a-b,0);break;
        case '/': return x.reduce((a,b)=>a/b,0);break;
        case '*': return x.reduce((a,b)=>a*b);
        default: throw new OperatorError('Operatore non valido...');
    }
}
function calcAll(expressions){ return expressions.map(calc1); }

let exps = [["+",5,3,2],["-",18,2,15],undefined];

try{
    let ris = calcAll(exps);
    console.log(ris);
    console.log('try');
} catch(e){
    console.log('aiuto!');
} finally {
    console.log('ciao');
}



class PersonVoid extends Error{ ; }
class Person {
    constructor(name){
        this.name = name;
    }
    saluto(){
        throw new PersonaVoid('Non implementato!');
    }
}
class Student extends Person {
    constructor(name, matricola){
        super(name);
        this.matricola = matricola;
        this.name = name+matricola;
    }
    saluto(){
        console.log(`Ciao ${this.name}.${this.matricola}`);
    }
}
class Impiegato extends Person {
    constructor(name, id){
        super(name);
        this.id = id;
    }
    saluto(){
        console.log(`Ciao ${this.name}.${this.id}`);
    }
}

let person = new Person('jack');
try{
    p.saluto();
} catch(e){
    ;
}

function calcT(a){ 
    let [op, ...x] = a;
    for(let i in x) if(x[i] instanceof Array) x.splice(i, 1, calcT(x[i]))
    switch(op){
        case '+':
            return x.reduce((a, b) => a + b);
            break;
        case '-':
            return x.reduce((a, b) => a - b);
            break;
        case '*':
            return x.reduce((a, b) => a * b);
            break;
        case '/':
            return x.reduce((a, b) => a / b);
            break;
    }
}
console.log(calcT(["+",4, ["*", 3, 2]]));