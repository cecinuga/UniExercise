f=(x=>x**2);

function derivate(f,x,epsilon=0.00001 ){
    return (f(x)-f(x-epsilon))/epsilon;
}

console.log(derivate(f,10))