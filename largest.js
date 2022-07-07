const largestnumber = (a,b,c) =>{
    if(a>b)

    { 
        if(a>c)
        return a;
      else
       return c;
    }
    else if(b>c)
      return b;    
    else
      return c;
}
console.log(`Largest of -4,5,9 : ${largestnumber(-4,5,9)}`);