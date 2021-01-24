function _whichTextoParaNumero(numero:string):number{
    switch(numero){
        case '1': return 1;
    }
}

function myAtoi(s: string): number {
    let i:number=0,
     nCompleto:number[]=[];
   while(s.substring(i,i+1)==' '){
        i++;
   }
   
     while(_whichTextoParaNumero(
         s.substring(i+1,i+2))!=10){
             nCompleto.push(
            _whichTextoParaNumero(
                s.substring(i+1,i+2)))
                i++;
         }
   return nCompleto.join('').
};

console.log(//4623
    myAtoi('')
             
);