function identity<T>(arg: T): T {
    return arg;
}
let myIdentity = identity;
let myIdentity2: <U>(ARG: U)=>U = identity;

interface GenericIdentifyFn{
    <T>(arg: T):T;
}

class GenericNumber<T>{
    zeroValue: T;
    add: (x:T, y:T) => T;
}