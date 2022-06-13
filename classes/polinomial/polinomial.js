class Polinomial{
    constructor(c){
      this.coef = c;
      this.trim();
      this.degree = this.coef.length-1;
    }
  
    trim(){
      if (this.coef.length>0){
        var i = this.coef.length-1;
        while(!this.coef[i])
          i--;
        this.coef.length = i+1;
      }
  
  
    }
  
  
  print(){
    console.poly(this.coef);
  }
  
  toString(){
    return poly(this.coef);
  }
  
  eval(x){
    let val = 0;
    for (let i = 0; i < this.coef.length; i++)
      val += this.coef[i]*(x**i);
    return val;
  }
  
  sum(p){
    let sCoef = [];
  
    for (var i=0; i<this.coef.length; i++){
      sCoef[i] = this.coef[i];
      if (p.coef[i])
        sCoef[i]+=p.coef[i];
    }
  
    for(;i<p.coef.length; i++)
      sCoef[i] = p.coef[i];
    
  
    return new Polinomial(sCoef);
  }
  
  multiply(p){
    let product = new Polinomial([]);
  
    for (let i = 0; i<p.coef.length; i++){
      let a = [];
      for (let j=0; j<i; j++)
        a.push(0);
      for (let j=0; j<this.coef.length; j++){
        a.push(this.coef[j]*p.coef[i])
      }
  
    product = product.sum(new Polinomial(a));
  
    }
    
    return product;
  
    }
  
    difference(p){
      return this.sum(p.multiply(new Polinomial([-1])));
    } 
  
    derivative(){
      if (this.coef.length>1){
        let c =[...this.coef];
        for (let i=0; i<c.length; i++)
          c[i]*=i;
        c.shift();
        return(new Polinomial(c));
      }
      
    }
}