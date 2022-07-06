function somma(a, b) {
    return a + b;
}
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log(greeter.greet());
var tupla = ['ciao', 5];
console.log(tupla);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {}));
var g = Color.Green;
var b = Color.Blue;
console.log(g);
console.log(Color[6]);
var label = { label: 'ciao' };
function printLabel(label) {
    return label.label;
}
console.log(printLabel(label));
