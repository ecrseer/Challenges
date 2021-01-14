let 
    valo: string[]=["1, 3, 4, 13, 32", "1, 2, 4, 13, 15, 32"],    
    finalValor:number,
    temos:string='';

    valo = valo.map(seq=>" "+seq+",");
    finalValor=valo[0].indexOf(',');
    
    
while(finalValor!=-1){           
    
    let
      varPrimeiroArr: string = valo[0]
        .slice(finalValor-2,finalValor+1),
        indxNumero: number = valo[1].indexOf(varPrimeiroArr);
        console.log('fval: '+finalValor);

       if(indxNumero!=-1){
        let virg:number = 
         valo[1].indexOf(',',indxNumero);
        temos = temos +
            valo[1].slice(indxNumero,virg )+',';
        }


      finalValor=valo[0].indexOf(',',finalValor+1);
      console.log('fina eh'+finalValor);     
    
}console.log('temos: '+temos);