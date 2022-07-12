function spitOut<T>(a:T[], p:(e:T)=>boolean):void{
    console.log(a.filter(p).join());
}
spitOut([12,7,14,0,561],e=>(e%3==0)) // → stampa 12, 0, 561

class Rational {
    num:number
    den:number
    constructor(n:number, d:number=1){
        this.num = n;
        this.den = d;
    }
}
type num = number | Rational;

class Complex {
    real:num
    imm:num
    constructor(real:num|Complex, imm:num=0){
        if(real instanceof Complex){
            this.real = real.real;
            this.imm = real.imm
        } else {
            this.real = real;
            this.imm = imm;
        }
    }
}