function sommaCifre(v:number){
    if(Math.floor(v/10)==0) return v;
    return v%10+sommaCifre(Math.floor(v/10));
}

console.log(sommaCifre(5))