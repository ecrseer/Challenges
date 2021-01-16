let 
    valo: string[]=["1, 32, 4, 13, 2", "1, 2, 4, 64, 15, 64"],    
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
        
    
       if(indxNumero!=-1){
        let virg:number = 
         valo[1].indexOf(',',indxNumero);
        temos = temos +
            valo[1].slice(indxNumero,virg )+',';
        }

      //passa pra proxima ocorrencia de espaço e virgula
      finalValor=valo[0].indexOf(',',finalValor+1);
      iniciValor=valo[0].indexOf(' ',iniciValor+1);
         
    
}
temos =
    temos.slice(0,
        temos.lastIndexOf(',')
            )

console.log('temos: '+temos);