function plotta(f, x1, x2, passo=0.1)   {
    for(i=x1; i<x2;i+=passo){
        punto(i, f(i));
    }
}
f=x=>10*Math.sin(x)
plotta(f, 0, 20);
console.log(sommaDestra(f, 0, 20, 5));