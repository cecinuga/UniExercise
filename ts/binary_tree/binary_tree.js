var node = /** @class */ (function () {
    function node(sx, label, dx) {
        this.sx = sx;
        this.label = label;
        this.dx = dx;
    }
    return node;
}());
var node1 = new node(null, 5, null);
var node2 = new node(node1, 4, null);
function max(T) {
    var maxSx = 0;
    var maxDx = 0;
    if (T.sx != null) {
        maxSx = max(T.sx);
    }
    if (T.dx != null) {
        maxDx = max(T.dx);
    }
    return Math.max(maxSx, maxDx, T.label);
}
console.log(max(node2));

function somma(T){
    console.log('ciao')
    console.log(T.sx)
    //return somma(T.sx)+somma(T.dx)+T.label;
}
console.log(node2)
console.log(somma(node2))