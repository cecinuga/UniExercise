function plotta(f, x1, x2, passo=0.1)   {
    for(i=x1; i<x2;i+=passo){
        punto(i, f(i));
    }
}
f=x=>10*Math.sin(x)
plotta(f, 0, 20);
console.log(sommaDestra(f, 0, 20, 5));

function rettangolo(x1,x2,altezza){
    linea(x1,0,x2,0);
    linea(x1,altezza,x2,altezza);
    linea(x1,0,x1,altezza);
    linea(x2,0,x2,altezza);
}

function sommaSinistra(f,x1,x2,passo=0.001){
    let somma=0;
    for (let i=x1;i<x2;i+=passo){
        somma+=passo*f(i);
        rettangolo(i,i+passo,f(i));
    }
    return somma;
}

function sommaDestra(f,x1,x2,passo=0.001){
    let somma = 0;
    for (let i=x1;i<x2;i+=passo){
        somma+=passo*f(i+passo);
        rettangolo(i, i+passo,f(i+passo));
    }
    return somma;
}
function sommaMedia(f,x1,x2,passo=0.001){
    let somma=0;
    for(let i=x1; i<x2; i+=passo){
        somma+=passo*f(i+passo/2);
        rettangolo(i,mi+passo,f(i+passo/2));
    }
    return somma;
}