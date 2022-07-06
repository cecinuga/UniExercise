function somma(a:number, b:number):number {
    return a+b; 
}

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet(): string { 
        return 'Hello, '+this.greeting;
    }

}

let greeter: Greeter = new Greeter("world");
console.log(greeter.greet())

let tupla: [string, number] = ['ciao', 5];
console.log(tupla)

enum Color{
    Red,  
    Green=5, 
    Blue,
}
let g: Color = Color.Green
let b: Color = Color.Blue
console.log(g)
console.log(Color[6])

interface labeledValued{
    label:string;
}
let label:labeledValued = {label:'ciao'}
function printLabel(label: {label:string}):string{
    return label.label;
}
console.log(printLabel(label));