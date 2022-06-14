function sommaCifre(v) {
    if (Math.floor(v / 10) == 0)
        return v;
    return v % 10 + sommaCifre(Math.floor(v / 10));
}
;
console.log(sommaCifre(5));
var CodaL = /** @class */ (function () {
    function CodaL() {
        this.dimensione = 0;
    }
    CodaL.prototype.costructor = function () {
        this.head = null;
        this.tail = null;
    };
    CodaL.prototype.enqueue = function (nuovoNodo) {
        if (this.head != null) {
            this.head.prev = nuovoNodo;
        }
        else {
            this.tail = nuovoNodo;
        }
        nuovoNodo.next = this.head;
        nuovoNodo.prev = null;
        this.head = nuovoNodo;
        this.dimensione++;
        return this.dimensione;
    };
    CodaL.prototype.dequeue = function () {
        if (this.tail == null) {
            return -1;
        }
        else {
            this.tail = this.tail.prev;
            if (this.tail != null)
                this.tail.next = null;
            this.dimensione--;
            return this.dimensione;
        }
    };
    CodaL.prototype.enqueueT = function (nuovoNodo) {
        if (this.tail == null) {
            this.head = nuovoNodo;
            this.tail = nuovoNodo;
        }
        else {
            this.tail.next = nuovoNodo;
            nuovoNodo.prev = this.tail;
            nuovoNodo.next = null;
            this.tail = nuovoNodo;
        }
        this.dimensione++;
        return this.dimensione;
    };
    CodaL.prototype.size = function () { return this.dimensione; };
    CodaL.prototype.print = function () {
        var temp = this.tail;
        var s = "";
        while (temp != null) {
            s = s + " " + temp.value;
            temp = temp.prev;
        }
        return s;
    };
    return CodaL;
}());
var q = new CodaL();
var n1 = { value: 5, next: null, prev: null };
var n2 = { value: 2, next: null, prev: null };
var n3 = { value: 4, next: null, prev: null };
var n4 = { value: 9, next: null, prev: null };
var n5 = { value: 8, next: null, prev: null };
q.enqueue(n1);
q.enqueue(n2);
q.enqueue(n3);
q.enqueue(n4);
q.enqueue(n5);
q.size();
console.log(q.print());
