class node{
    sx:node|undefined;
    label:number
    dx:node|undefined;
    constructor(sx:node|undefined, label:number, dx:node|undefined){
        this.sx = sx;
        this.label = label;
        this.dx = dx;
    }
}

const node1 = new node(undefined, 5, undefined);
const node2 = new node(node1, 4, undefined);
console.log(node1);
console.log(node2)

function max(T:node):number{
    let maxSx:number=-Infinity; 
    let maxDx:number=-Infinity;
    if(T.sx!=undefined) {
        maxSx = max(T.sx);
    }
    if(T.dx!=undefined) {
        maxDx = max(T.dx);
    }
    return Math.max(maxSx, maxDx, T.label);
}
console.log(max(node2))

function somma(T:node|undefined):number{
    return 0;
}