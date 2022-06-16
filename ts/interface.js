var studente1 = { nome: 'Matteo', cognome: 'Marchetti', gender: 'maschio', matricola: 637452 };
console.log(studente1);
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    return Clock;
}());
var clock = new Clock(2, 4);
console.log(clock);
