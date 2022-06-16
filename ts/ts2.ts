function testParam(a:number, b:number, c:number){
    console.log(arguments);
    return "Posso accedere tutto: "+a+" "+b+" "+c+" "+arguments[3];
}
console.log(testParam(1,2,3));

function sumN(a:number, b:number): number{
    return a+b;
}
function sumS (a: string, b: string): string {
    return a + b;
}
function sumG<C> (a:C):C{
    return a;
}
function identity<X>(arg: X):X{
    return arg;
}
/*
console.log(identity<number>(4));
console.log(identity<boolean>(true));
*/
class NodoABR<T>{
    value:T;
    left:NodoABR<T> | null;
    right:NodoABR<T> | null;
    constructor(v:T){
        this.value=v;
        this.left=null;
        this.right=null;
    } 
    print(): T{ 
        return this.value;
    }
}
class ABR<T>{
    root: NodoABR<T>;
    
    constructor(v: T){
        this.root = new NodoABR<T>(v);
    }
    search(v: T, x: NodoABR<T> | null): NodoABR<T>|null{
        if(x==null||x.value==v){
            return x;
        }
        if(x.value<v) return this.search(v, x.left);
        else return this.search(v, x.right);
    }
    searchMin(x: NodoABR<T> = this.root): NodoABR<T> {
        let temp = x;
        while(temp.left != null)
            temp = temp.left;
        return temp;
    }
    searchMax(x: NodoABR<T> = this.root): NodoABR<T>{
        let temp = x;
        while(temp.right!=null)
            temp = temp.right;
        return temp;
    }
    insert(z: NodoABR<T>):void{
        let y: NodoABR<T> | null = null;
        let x: NodoABR<T> | null = this.root;

        while(x!=null){ 
            y = x;
            if(z.value<x.value){
                x=x.left;
            } else { 
                x = x.right;
            }
        }
        if(y==null){ 
            this.root = z;
        }else { 
            if(z.value < y.value)
                y.left = z;
            else y.right = z;
        }
    }
    printOrd(x: NodoABR<T> | null): void{
        let temp = x;
        if(temp != null){
            this.printOrd(temp.left);
            console.log(temp.value);
            this.printOrd(temp.right);
        }
    }
}

var alb = new ABR<number>(5);
var z = new NodoABR(21);
alb.insert(z);
alb.insert(new NodoABR(42));
alb.insert(new NodoABR(24));
alb.insert(new NodoABR(-15));
alb.insert(new NodoABR(17));
console.log("Min: ", alb.searchMin());
console.log("Max: ", alb.searchMax());
alb.printOrd(alb.root);