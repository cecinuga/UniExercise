function testParam(a, b, c) {
    console.log(arguments);
    return "Posso accedere tutto: " + a + " " + b + " " + c + " " + arguments[3];
}
console.log(testParam(1, 2, 3));
function sumN(a, b) {
    return a + b;
}
function sumS(a, b) {
    return a + b;
}
function sumG(a) {
    return a;
}
function identity(arg) {
    return arg;
}
/*console.log(identity<number>(4));
console.log(identity<boolean>(true));
*/
var NodoABR = /** @class */ (function () {
    function NodoABR(v) {
        this.value = v;
        this.left = null;
        this.right = null;
    }
    NodoABR.prototype.print = function () {
        return this.value;
    };
    return NodoABR;
}());
var ABR = /** @class */ (function () {
    function ABR(v) {
        this.root = new NodoABR(v);
    }
    ABR.prototype.search = function (v, x) {
        if (x == null || x.value == v) {
            return x;
        }
        if (x.value < v)
            return this.search(v, x.left);
        else
            return this.search(v, x.right);
    };
    ABR.prototype.searchMin = function (x) {
        if (x === void 0) { x = this.root; }
        var temp = x;
        while (temp.left != null)
            temp = temp.left;
        return temp;
    };
    ABR.prototype.searchMax = function (x) {
        if (x === void 0) { x = this.root; }
        var temp = x;
        while (temp.right != null)
            temp = temp.right;
        return temp;
    };
    ABR.prototype.insert = function (z) {
        var y = null;
        var x = this.root;
        while (x != null) {
            y = x;
            if (z.value < x.value) {
                x = x.left;
            }
            else {
                x = x.right;
            }
        }
        if (y == null) {
            this.root = z;
        }
        else {
            if (z.value < y.value)
                y.left = z;
            else
                y.right = z;
        }
    };
    ABR.prototype.printOrd = function (x) {
        var temp = x;
        if (temp != null) {
            this.printOrd(temp.left);
            console.log(temp.value);
            this.printOrd(temp.right);
        }
    };
    return ABR;
}());
var alb = new ABR(5);
var z = new NodoABR(21);
alb.insert(z);
alb.insert(new NodoABR(42));
alb.insert(new NodoABR(24));
alb.insert(new NodoABR(-15));
alb.insert(new NodoABR(17));
console.log("Min: ", alb.searchMin());
console.log("Max: ", alb.searchMax());
alb.printOrd(alb.root);
