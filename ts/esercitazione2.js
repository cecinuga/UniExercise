function spitOut(a, p){
    a.map((e)=>{ if(p(e)!=undefined){console.log(e) }});
}
console.log(spitOut(["la","vispa","teresa","solea"],e=>e.indexOf("s")!=0))

let A = [
    [0,1,0], 
    [1,1,1],
    [0,1,0]
];
console.log(A)

function crocette(A, coo){
    if(A[coo[0],coo[1]]==1&&A[coo[0],coo[1]+1]==1&&A[coo[0],coo[1]-1]==1&&A[coo[0]+1,coo[1]]==1&&A[coo[0]-1,coo[1]]==1){return true;}
}

function crocette(A){
    let arr = [];
    for(let i=0; i<A.length; i++){
        for(let j=0;j<A.length; j++){
            if(crocetta(A, [i, j])){ arr.push([i,j]); }
        }
    }
    return arr;
}

Array.reverse2 = ()=>{
    let [h, ...r] = this;
    return h==undefined?[]:
    [...r.reverse2(),h];
}

function groupAnagrams(A){
    var r = {}, a=[];
    for (var s of A) {
        var k = s.split("").sort().join("");
        if(k in r) r[k].push(s);
        else r[k] = [s];
    }
    console.log(r);
    for ( var k in r ) a.push(r[k]);
    return a;
}
console.log(groupAnagrams(["scarabeo", "arabo","noob","arabesco","bono"]))
