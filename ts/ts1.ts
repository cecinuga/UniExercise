function sommaCifre(v:number):number{
    if(Math.floor(v/10)==0) return v;
    return v%10+sommaCifre(Math.floor(v/10));
};console.log(sommaCifre(5))

interface Nodo {
    value: number;
    next: Nodo | null;
    prev: Nodo | null;
}

class CodaL {
    head: Nodo | null;
    tail: Nodo | null;
    dimensione: number = 0;
    
    costructor(){
        this.head = null;
        this.tail = null;
    }
    enqueue(nuovoNodo: Nodo): number {
        if(this.head != null){
            this.head.prev = nuovoNodo;
         } else { this.tail = nuovoNodo; }
        nuovoNodo.next = this.head;
        nuovoNodo.prev = null;
        this.head = nuovoNodo;
        this.dimensione++;
        return this.dimensione;
    }
    dequeue(): number {
        if( this.tail == null ){ return -1; }
        else { 
            this.tail = this.tail.prev;
            if(this.tail !=null) this.tail.next = null;
            this.dimensione--;
            return this.dimensione;
        }
    }
    enqueueT(nuovoNodo: Nodo): number {
        if(this.tail == null){
            this.head = nuovoNodo;
            this.tail = nuovoNodo;
        } else { 
            this.tail.next = nuovoNodo;
            nuovoNodo.prev = this.tail;
            nuovoNodo.next = null;
            this.tail = nuovoNodo;
        }
        this.dimensione++;
        return this.dimensione;
    }
    size(): number { return this.dimensione; }
    print(): string { 
        let temp = this.tail;
        let s: string = "";
        while(temp!=null){
            s = s+" "+temp.value;
            temp = temp.prev;
        }
        return s;
    }
}

var q = new CodaL();
let n1: Nodo = {value:5, next:null, prev:null}
let n2: Nodo = {value:2, next:null, prev:null}
let n3: Nodo = {value:4, next:null, prev:null}
let n4: Nodo = {value:9, next:null, prev:null}
let n5: Nodo = {value:8, next:null, prev:null}

q.enqueue(n1);
q.enqueue(n2);
q.enqueue(n3);
q.enqueue(n4);
q.enqueue(n5);

q.size();
console.log(q.print());