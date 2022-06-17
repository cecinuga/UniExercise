interface Person{
    nome:string;
    cognome:string;
    gender:string;
}
interface Studente extends Person{
    matricola:number;
}
let studente1:Studente = { nome:'Matteo', cognome:'Marchetti',gender:'maschio',matricola:637452 };
console.log(studente1);

interface ClockInterface{
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface{
    currentTime: Date = new Date();
    constructor(h:number, m:number){}
    setTime(d: Date){
        this.currentTime = d;
    }
}
let clock = new Clock(2, 4);
console.log(clock)

interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}