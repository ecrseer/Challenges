let 
    valo: string[]=["1, 3, 4, 13, 32", "1, 2, 4, 13, 15, 32"],    
    finalValor:number,
    iniciValor:number=0,
    temos:string='';

    valo = valo.map(seq=>" "+seq+",");
    finalValor=valo[0].indexOf(',');
    
    
while(finalValor!=-1){           
    
    let
      varPrimeiroArr: string = valo[0]
        .slice(iniciValor+1,finalValor+1);//0,3

        
    let indxNumero: number 
        = valo[1].indexOf(varPrimeiroArr);
        console.log('prim: '+varPrimeiroArr);
        console.log('iniciValor: '+iniciValor);

       if(indxNumero!=-1){
        let virg:number = 
         valo[1].indexOf(',',indxNumero);
        temos = temos +
            valo[1].slice(indxNumero,virg )+',';
        }

      finalValor=valo[0].indexOf(',',finalValor+1);
      iniciValor=valo[0].indexOf(' ',iniciValor+1);
      console.log('fina eh'+finalValor);     
    
}console.log('temos: '+temos);