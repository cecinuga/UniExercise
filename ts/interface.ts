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
}

class Clock implements ClockInterface{
    currentTime: Date = new Date();
    constructor(h:number, m:number){}
}
let clock = new Clock(2, 4);
console.log(clock)